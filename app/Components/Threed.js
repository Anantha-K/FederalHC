import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

function VRHeadset({ mousePosition }) {
  const groupRef = useRef()
  const gltf = useLoader(GLTFLoader, '/Model.glb')

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.PI 
    }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      // Add mouse movement to the rotation
      groupRef.current.rotation.y = Math.PI + mousePosition.x * 0.5
      groupRef.current.rotation.x = -mousePosition.y * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={[6, 6, 6]}
        position={[0, 0, 0]}
      />
    </group>
  )
}

export default function HeroScene() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1
    })
  }

  return (
    <div onMouseMove={handleMouseMove} style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#e0e0e0']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <VRHeadset mousePosition={mousePosition} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}