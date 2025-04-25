import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const dummyProducts = [
  {
    id: 1,
    name: "Hydrating Serum",
    description: "Perfect for dry skin, enriched with hyaluronic acid.",
    modelUrl: "/models/serum.glb",
  },
  {
    id: 2,
    name: "Oil Control Face Wash",
    description: "Specially formulated for oily skin to keep pores clean.",
    modelUrl: "/models/facewash.glb",
  },
  {
    id: 3,
    name: "Glow Boost Moisturizer",
    description: "For radiant skin with vitamin C & E infusion.",
    modelUrl: "/models/moisturizer.glb",
  },
];

function ModelViewer({ modelUrl }) {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, modelUrl);
    return <primitive object={gltf.scene} scale={1.5} />;
  };

  return (
    <Canvas className="w-full h-64">
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      {/* <Suspense fallback={null}> */}
        <Model />
      {/* </Suspense> */}
      <OrbitControls />
    </Canvas>
  );
}

export default function ProductList() {
  const [products] = useState(dummyProducts);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-xl shadow-lg p-4 bg-white space-y-3"
        >
          <div className="h-64 bg-gray-100 rounded overflow-hidden">
            <ModelViewer modelUrl={product.modelUrl} />
          </div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
