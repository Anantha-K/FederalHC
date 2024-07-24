import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stars, SpotLight } from '@react-three/drei'

function VRHeadset() {
    const gltf = useGLTF('/Model.glb')
    const headsetRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    headsetRef.current.rotation.y = Math.sin(t / 2) / 4
    headsetRef.current.position.y = Math.sin(t / 1.5) / 2
  })

  return <primitive object={gltf.scene} ref={headsetRef} scale={[0.5, 0.5, 0.5]} />
}

function AnimatedSpotlight() {
  const light = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    light.current.position.x = Math.sin(t) * 3
    light.current.position.z = Math.cos(t) * 3
  })

  return <SpotLight ref={light} position={[3, 5, 3]} angle={0.3} penumbra={1} intensity={2} distance={10} color="#0c8cbf" />
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['#000']} />
      <ambientLight intensity={0.2} />
      <AnimatedSpotlight />
      <Suspense fallback={null}>
        <VRHeadset />
      </Suspense>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}