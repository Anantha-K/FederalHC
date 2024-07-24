import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stars, SpotLight } from '@react-three/drei'
import { gsap } from 'gsap'

function VRHeadset() {
  const gltf = useGLTF('/Model.glb')
  const headsetRef = useRef()
  const { viewport } = useThree()

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline()
    
    tl.from(headsetRef.current.rotation, {
      duration: 2,
      y: Math.PI * 4,
      ease: "power3.out"
    })
    .from(headsetRef.current.position, {
      duration: 1.5,
      y: -20,
      ease: "bounce.out"
    }, "-=1.5")
    .from(headsetRef.current.scale, {
      duration: 1,
      x: 0.1,
      y: 0.1,
      z: 0.1,
      ease: "back.out(1.7)"
    }, "-=1")

    // Continuous floating animation
    gsap.to(headsetRef.current.position, {
      y: '+=0.5',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    gsap.to(headsetRef.current.rotation, {
      x: -y * 0.05,
      y: x * 0.05,
      duration: 0.5
    })
  })

  return (
    <primitive
      object={gltf.scene}
      ref={headsetRef}
      scale={[.5, .5, .5]}  // Increased scale to make it bigger
      position={[0, 0, 0]}
    />
  )
}

function AnimatedSpotlight() {
  const light = useRef()

  useEffect(() => {
    gsap.to(light.current.position, {
      x: 5,
      z: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    })
  }, [])

  return <SpotLight ref={light} position={[5, 7, 5]} angle={0.5} penumbra={1} intensity={2} distance={15} color="#0c8cbf" />
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>  // Adjusted camera position
      <color attach="background" args={['#e0e0e0']} />
      <ambientLight intensity={0.5} />
      <AnimatedSpotlight />
      <Suspense fallback={null}>
        <VRHeadset />
      </Suspense>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  )
}