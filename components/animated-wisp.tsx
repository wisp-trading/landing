"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei"
import { MathUtils } from "three"
import type { Mesh, ShaderMaterial } from "three"

function Sphere() {
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<ShaderMaterial>(null)
  const coreRef = useRef<Mesh>(null)
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
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    void main() {
      // Energy intensity based on displacement
      float intensity = 0.3 + vDisplacement * 2.0;

      // Warcraft 3 wisp-inspired colors: deep blue → cyan → white
      vec3 deepBlue = vec3(0.2, 0.5, 0.95);    // Electric blue
      vec3 cyan = vec3(0.4, 0.75, 1.0);        // Bright cyan
      vec3 brightCyan = vec3(0.7, 0.9, 1.0);   // Near white cyan

      // Create gradient based on intensity
      vec3 color = mix(deepBlue, cyan, intensity);
      color = mix(color, brightCyan, intensity * intensity);

      // Wireframe grid lines - balanced quality/performance
      float line = smoothstep(0.0, 0.02, abs(fract(vUv.x * 10.0) - 0.5));
      line *= smoothstep(0.0, 0.02, abs(fract(vUv.y * 10.0) - 0.5));

      // Apply wireframe with enhanced glow on lines
      vec3 finalColor = color * (1.0 - line * 0.2);

      // Subtle breathing/pulsing effect
      float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
      finalColor *= pulse;

      // Slight opacity variation for ethereal feel
      float alpha = 0.65 + intensity * 0.15;

      gl_FragColor = vec4(finalColor, alpha);
    }
  `

  const coreFragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vDisplacement;
    varying vec3 vNormal;

    void main() {
      // Energy intensity based on displacement
      float intensity = 0.3 + vDisplacement * 2.0;

      // Subtle core colors - similar to outer but slightly brighter
      vec3 mediumBlue = vec3(0.3, 0.6, 0.95);   // Medium blue
      vec3 brightCyan = vec3(0.5, 0.8, 1.0);    // Bright cyan
      vec3 lightCyan = vec3(0.65, 0.85, 1.0);   // Light cyan

      // Create subtle gradient for core
      vec3 color = mix(mediumBlue, brightCyan, intensity);
      color = mix(color, lightCyan, intensity * 0.5);

      // Subtle breathing/pulsing effect
      float pulse = sin(uTime * 1.5) * 0.08 + 0.92;
      color *= pulse;

      // Subtle opacity - just a bit more visible than outer
      float alpha = 0.2 + intensity * 0.15;

      gl_FragColor = vec4(color, alpha);
    }
  `

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      materialRef.current.uniforms.uMouse.value = [pointer.x, pointer.y]
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
      meshRef.current.rotation.x = MathUtils.lerp(
        meshRef.current.rotation.x,
        pointer.y * 0.2,
        0.05
      )
      meshRef.current.rotation.z = MathUtils.lerp(
        meshRef.current.rotation.z,
        pointer.x * 0.2,
        0.05
      )
    }

    // Animate inner core with counter-rotation for visual depth
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.08
      coreRef.current.rotation.x += delta * 0.04
    }
  })

  return (
    <>
      {/* Main animated wireframe sphere - HIGH QUALITY */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 64]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          wireframe
        />
      </mesh>

      {/* Inner animated core - HIGH QUALITY */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.7, 32]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={coreFragmentShader}
          uniforms={uniforms}
          transparent
          wireframe={false}
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
