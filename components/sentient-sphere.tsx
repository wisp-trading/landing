"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber"
import { MathUtils, AdditiveBlending, Color } from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import type { Mesh, Points, Group } from "three"

function Particles({ count = 150 }) {
  const pointsRef = useRef<Points>(null)
  const { pointer } = useThree()
  
  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 2 + Math.random() * 1.5
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
      
      sizes[i] = Math.random() * 0.03 + 0.01
    }
    
    return [positions, sizes]
  }, [count])
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      pointsRef.current.rotation.y = time * 0.02
      pointsRef.current.rotation.x = MathUtils.lerp(
        pointsRef.current.rotation.x,
        pointer.y * 0.1,
        0.02
      )
    }
  })
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4da6ff"
        transparent
        opacity={0.6}
        blending={AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

function WispOrb() {
  const groupRef = useRef<Group>(null)
  const outerMeshRef = useRef<Mesh>(null)
  const coreMeshRef = useRef<Mesh>(null)
  const { pointer } = useThree()
  
  const targetRotation = useRef({ x: 0, z: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })
  
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime
    
    // Smooth mouse following
    targetRotation.current.x = pointer.y * 0.3
    targetRotation.current.z = pointer.x * 0.3
    targetPosition.current.x = pointer.x * 0.5
    targetPosition.current.y = pointer.y * 0.3
    
    if (groupRef.current) {
      // Fluid dreamy movement interpolation
      groupRef.current.rotation.x = MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.02
      )
      groupRef.current.rotation.z = MathUtils.lerp(
        groupRef.current.rotation.z,
        targetRotation.current.z,
        0.02
      )
      groupRef.current.position.x = MathUtils.lerp(
        groupRef.current.position.x,
        targetPosition.current.x,
        0.02
      )
      groupRef.current.position.y = MathUtils.lerp(
        groupRef.current.position.y,
        targetPosition.current.y,
        0.02
      )
    }
    
    if (outerMeshRef.current) {
      // Slow Y rotation
      outerMeshRef.current.rotation.y += delta * 0.1
      // Gentle float/bob motion
      outerMeshRef.current.position.y = Math.sin(time * 0.8) * 0.3
    }
    
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y -= delta * 0.15
      coreMeshRef.current.position.y = Math.sin(time * 0.8) * 0.3
    }
  })
  
  return (
    <group ref={groupRef}>
      {/* Outer glow orb */}
      <mesh ref={outerMeshRef}>
        <icosahedronGeometry args={[1.8, 4]} />
        <meshStandardMaterial
          color="#003366"
          emissive="#0066FF"
          emissiveIntensity={1.5}
          transparent
          opacity={0.4}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      
      {/* Middle layer */}
      <mesh>
        <icosahedronGeometry args={[1.4, 4]} />
        <meshStandardMaterial
          color="#0066FF"
          emissive="#0088FF"
          emissiveIntensity={2}
          transparent
          opacity={0.5}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      
      {/* Inner bright core */}
      <mesh ref={coreMeshRef}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial
          color="#88ccff"
          emissive="#aaddff"
          emissiveIntensity={3}
          transparent
          opacity={0.9}
          roughness={0}
          metalness={0.3}
        />
      </mesh>
      
      {/* Core center glow */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={4}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Particle system */}
      <Particles count={180} />
    </group>
  )
}

export function SentientSphere() {
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
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="w-full my-0 h-full py-0"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#0066FF" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      
      <WispOrb />
      
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          mipmapBlur
          radius={0.4}
        />
      </EffectComposer>
    </Canvas>
  )
}
