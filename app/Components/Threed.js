import React, { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

function VRHeadset({ mousePosition }) {
  const groupRef = useRef()
  const modelRef = useRef()
  const gltf = useLoader(GLTFLoader, '/Model.glb')
  const [floatY, setFloatY] = useState(0)

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = -Math.PI / 2; 
    }
  }, [])

  useFrame(({ clock }) => {
    const newFloatY = Math.sin(clock.getElapsedTime()) * 0.1
    setFloatY(newFloatY)
    if (groupRef.current && modelRef.current) {
      groupRef.current.position.y = newFloatY
      modelRef.current.rotation.y = -Math.PI / 2 + mousePosition.x * 0.5
      modelRef.current.rotation.x = -mousePosition.y * 0.5
    }
  })

  return (
    <group ref={groupRef}>
    <group ref={modelRef}>
      <primitive
        object={gltf.scene}
        scale={[6, 6, 6]}
        position={[0, 0, 0]}
      />
    </group>
    <FloatingText floatY={floatY} />
  </group>
     
  )
}

function FloatingText({ floatY }) {
  const textRef = useRef()
  const letters = "FISAT HORIZON CLUB"

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin((clock.getElapsedTime() * 1000 + index * 100) / 500) * 0.05 + floatY * 0.5
      })
    }
  })

  return (
    <group ref={textRef} position={[0, -2, 0]}>
      {letters.split('').map((letter, index) => (
        <Text
          key={index}
          color="black"
          fontSize={0.5}
          position={[(index - letters.length / 2) * 0.3, 0, 0]}
          anchorX="center"
          anchorY="middle"
        >
          {letter}
        </Text>
      ))}
    </group>
  )
}

function Scene({ mousePosition }) {
  return (
    <>
      <color attach="background" args={['#e0e0e0']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <VRHeadset mousePosition={mousePosition} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </>
  )
}

export default function HeroScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    })
  }

  return (
    <div onMouseMove={handleMouseMove} style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </div>
  )
}