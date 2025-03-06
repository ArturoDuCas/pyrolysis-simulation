import { OrbitControls, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";

interface Props { }

const MachineModel: FC<Props> = ({ }) => {
  const pyrolyisisModel = useFBX('/machine/model.fbx');

  return (
    <Canvas frameloop="demand" camera={{ position: [400, 350, 6], fov: 90, near: 0.5, far: 1000 }}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <primitive
          object={pyrolyisisModel}
          scale={2.5}
          position={[-100, 0, -100]}
        />
      </Suspense>
      <OrbitControls
        autoRotate={true}
        enableZoom={true}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
        enablePan={false}
      />
    </Canvas>
  )

}

export default MachineModel;

