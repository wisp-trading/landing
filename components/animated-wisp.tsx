"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei"
import { MathUtils } from "three"
import type { Mesh, ShaderMaterial } from "three"

function Sphere() {
  const outerRef = useRef<Mesh>(null)
  const meshRef = useRef<Mesh>(null)
  const coreRef = useRef<Mesh>(null)

  const materialRef = useRef<ShaderMaterial>(null)
  const { pointer } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: [0, 0] },
    }),
    []
  )

  const vertexShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);

      // Higher quality displacement for smooth organic motion
      float noise = snoise(position * 1.5 + uTime * 0.15);
      float displacement = noise * 0.15;
      vDisplacement = displacement;

      vec3 newPosition = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    void main() {
      // Fresnel for edge glow
      vec3 viewDirection = normalize(vec3(0.0, 0.0, 1.0) - vNormal);
      float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 2.2);

      // Slower, more subtle pulse
      float pulse = sin(uTime * 1.5) * 0.5 + 0.5;

      // Energy intensity - reduced
      float intensity = 0.35 + vDisplacement * 1.8 + pulse * 0.15;

      // Softer, more muted colors for landing page
      vec3 darkBlue = vec3(0.12, 0.3, 0.65);
      vec3 electricBlue = vec3(0.25, 0.55, 0.85);
      vec3 brightCyan = vec3(0.4, 0.7, 0.95);
      vec3 white = vec3(0.6, 0.75, 0.95);

      // Smoother color transitions
      vec3 color = mix(darkBlue, electricBlue, intensity);
      color = mix(color, brightCyan, intensity * intensity * 0.8);
      color = mix(color, white, fresnel * fresnel * 0.8);

      // Subtle energy flow - not harsh lattice lines
      float flow1 = sin(vUv.x * 15.0 + uTime * 2.0 + vUv.y * 3.0) * sin(vUv.y * 18.0 - uTime * 1.8);
      float flow2 = sin(vUv.x * 10.0 - uTime * 1.5 + vUv.y * 2.0) * sin(vUv.y * 12.0 + uTime * 1.2);
      float flowPattern = (flow1 + flow2) * 0.5;
      flowPattern = smoothstep(0.6, 0.85, flowPattern);

      // Gentle energy highlights - much more subtle
      color += vec3(0.3, 0.5, 0.7) * flowPattern * pulse * 0.3;

      // Soft displacement highlights
      float highlights = smoothstep(0.12, 0.16, vDisplacement);
      color += vec3(0.35, 0.5, 0.7) * highlights * 0.25;

      // Moderate transparency
      float alpha = 0.7 + fresnel * 0.15 + flowPattern * 0.08;

      gl_FragColor = vec4(color, alpha);
    }
  `

  const outerGlowShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    void main() {
      vec3 viewDirection = normalize(vec3(0.0, 0.0, 1.0) - vNormal);
      float fresnel = pow(1.0 - abs(dot(viewDirection, vNormal)), 4.5);

      float pulse = sin(uTime * 1.2) * 0.5 + 0.5;

      vec3 glowColor = vec3(0.25, 0.5, 0.8);

      float intensity = fresnel * 0.9 + vDisplacement * 0.6 + pulse * 0.1;

      // Even more subtle outer atmosphere
      float alpha = 0.15 + fresnel * 0.12 + pulse * 0.05;

      gl_FragColor = vec4(glowColor * intensity, alpha);
    }
  `

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      materialRef.current.uniforms.uMouse.value = [pointer.x, pointer.y]
    }

    if (meshRef.current) {
      // Gentle, calm rotation for landing page
      meshRef.current.rotation.y += delta * 0.08

      const time = state.clock.elapsedTime
      meshRef.current.rotation.x = MathUtils.lerp(
        meshRef.current.rotation.x,
        Math.sin(time * 0.4) * 0.12 + pointer.y * 0.15,
        0.05
      )
      meshRef.current.rotation.z = MathUtils.lerp(
        meshRef.current.rotation.z,
        Math.cos(time * 0.3) * 0.12 + pointer.x * 0.15,
        0.05
      )
    }

    if (outerRef.current) {
      const time = state.clock.elapsedTime
      outerRef.current.rotation.y += delta * 0.05
      outerRef.current.rotation.x = Math.sin(time * 0.3) * 0.08
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.06
      coreRef.current.rotation.x += delta * 0.03
    }
  })

  return (
    <>
      {/* Main organic energy sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* Outer subtle glow sphere - ethereal atmosphere */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.4, 32]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={outerGlowShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

export function WispOrb() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-white/10 animate-pulse" />
      </div>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="w-full my-0 h-full py-0"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      performance={{ min: 0.5 }}
    >
      {/* Adaptive performance: automatically reduces DPR when FPS drops */}
      <AdaptiveDpr pixelated />
      {/* Adaptive events: disables raycasting when performance is poor */}
      <AdaptiveEvents />

      <ambientLight intensity={0.3} />
      <pointLight
        position={[0, 0, 0]}
        intensity={0.6}
        color="#5599ff"
        distance={5}
      />
      <Sphere />
    </Canvas>
  )
}
