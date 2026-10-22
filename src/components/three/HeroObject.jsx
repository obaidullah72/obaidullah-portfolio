import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

const BLUE = '#3b82f6'
const BRIGHT = '#60a5fa'
const CYAN = '#22d3ee'

// Orbits suggest data moving between services around a central system.
const ORBITS = [
  { radius: 2.05, tilt: [Math.PI / 2.3, 0, 0.2], speed: 0.5, start: 0.4, color: BRIGHT },
  { radius: 2.45, tilt: [Math.PI / 1.7, 0.5, -0.4], speed: -0.35, start: 2.6, color: BLUE },
  { radius: 2.85, tilt: [Math.PI / 2.1, -0.7, 0.9], speed: 0.25, start: 4.4, color: CYAN },
]

// Points in a spherical shell around the object, generated once per page load.
const PARTICLE_POSITIONS = (() => {
  const count = 320
  const array = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 3.2 + Math.random() * 3
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    array[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    array[i * 3 + 2] = r * Math.cos(phi)
  }
  return array
})()

function Orbit({ radius, tilt, speed, start, color, animate }) {
  const node = useRef(null)
  const angle = useRef(start)

  useFrame((_, delta) => {
    if (!animate || !node.current) return
    angle.current += delta * speed
    node.current.position.set(Math.cos(angle.current) * radius, Math.sin(angle.current) * radius, 0)
  })

  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 8, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <mesh ref={node} position={[Math.cos(start) * radius, Math.sin(start) * radius, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Particles() {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[PARTICLE_POSITIONS, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#93c5fd" size={0.025} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
    </points>
  )
}

export default function HeroObject({ animate = true, trackPointer = false }) {
  const group = useRef(null)
  const core = useRef(null)
  const shell = useRef(null)
  const pointer = useRef(new THREE.Vector2())

  useEffect(() => {
    if (!trackPointer) return
    const onMove = (event) => {
      pointer.current.set((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [trackPointer])

  useFrame((_, delta) => {
    if (!animate) return
    if (core.current) {
      core.current.rotation.y += delta * 0.18
      core.current.rotation.x += delta * 0.05
    }
    if (shell.current) shell.current.rotation.y -= delta * 0.08
    if (group.current && trackPointer) {
      // Ease toward the pointer for a gentle parallax tilt
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.current.x * 0.35, 0.05)
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.current.y * 0.2, 0.05)
    }
  })

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={40} color={BLUE} />
      <pointLight position={[3, -3, -2]} intensity={25} color={CYAN} />

      <group ref={group}>
        <Float enabled={animate} speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
          <mesh ref={core}>
            <icosahedronGeometry args={[1.1, 1]} />
            <meshStandardMaterial color="#1e3a8a" metalness={0.65} roughness={0.22} emissive="#0b1d4a" flatShading />
          </mesh>
          <mesh ref={shell} scale={1.5}>
            <icosahedronGeometry args={[1.1, 1]} />
            <meshBasicMaterial color={BRIGHT} wireframe transparent opacity={0.18} />
          </mesh>
          {ORBITS.map((orbit) => (
            <Orbit key={orbit.radius} {...orbit} animate={animate} />
          ))}
        </Float>
        <Particles />
      </group>
    </>
  )
}
