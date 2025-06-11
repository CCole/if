import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stats, useGLTF } from "@react-three/drei";
import NarokanModel from "../assets/models/Narokan.jsx";
import { Leva, useControls } from "leva";

export default function NarokanScene() {
  const hdrPath = "/hdrs/blaubeuren_night_4k.hdr";
  const { nodes, materials } = useGLTF("/models/Narokan_001.glb");
  const {
    greenIntensity,
    greenColor,
    redIntensity,
    redColor,
    yellowIntensity,
    yellowColor,
    blueIntensity,
    blueColor,
  } = useControls("Emissives", {
    greenIntensity: { value: 1, min: 0, max: 10 },
    greenColor: "#00ff00",
    redIntensity: { value: 1, min: 0, max: 10 },
    redColor: "#ff0000",
    yellowIntensity: { value: 1, min: 0, max: 10 },
    yellowColor: "#ffff00",
    blueIntensity: { value: 1, min: 0, max: 10 },
    blueColor: "#0000ff",
  });

  useEffect(() => {
    materials["Material.004"].emissive.set(greenColor);
    materials["Material.004"].emissiveIntensity = greenIntensity;

    materials["Material.003"].emissive.set(redColor);
    materials["Material.003"].emissiveIntensity = redIntensity;

    materials["Material.005"].emissive.set(yellowColor);
    materials["Material.005"].emissiveIntensity = yellowIntensity;

    materials["Material.006"].emissive.set(blueColor);
    materials["Material.006"].emissiveIntensity = blueIntensity;

    materials["Material.007"].emissive.set(blueColor);
    materials["Material.007"].emissiveIntensity = blueIntensity;

    materials["Material.008"].emissive.set(yellowColor);
    materials["Material.008"].emissiveIntensity = yellowIntensity;

    materials["Material.009"].emissive.set(greenColor);
    materials["Material.009"].emissiveIntensity = greenIntensity;

    materials["Material.010"].emissive.set(redColor);
    materials["Material.010"].emissiveIntensity = redIntensity;

    materials["Material.011"].emissive.set(redColor);
    materials["Material.011"].emissiveIntensity = redIntensity;

    materials["Material.012"].emissive.set(greenColor);
    materials["Material.012"].emissiveIntensity = greenIntensity;

    materials["Material.013"].emissive.set(yellowColor);
    materials["Material.013"].emissiveIntensity = yellowIntensity;

    materials["Material.014"].emissive.set(blueColor);
    materials["Material.014"].emissiveIntensity = blueIntensity;

    materials["Material.015"].emissive.set(blueColor);
    materials["Material.015"].emissiveIntensity = blueIntensity;

    materials["Material.016"].emissive.set(yellowColor);
    materials["Material.016"].emissiveIntensity = yellowIntensity;

    materials["Material.017"].emissive.set(greenColor);
    materials["Material.017"].emissiveIntensity = greenIntensity;

    materials["Material.018"].emissive.set(redColor);
    materials["Material.018"].emissiveIntensity = redIntensity;

    materials["Material.019"].emissive.set(redColor);
    materials["Material.019"].emissiveIntensity = redIntensity;

    materials["Material.020"].emissive.set(greenColor);
    materials["Material.020"].emissiveIntensity = greenIntensity;

    materials["Material.021"].emissive.set(yellowColor);
    materials["Material.021"].emissiveIntensity = yellowIntensity;

    materials["Material.022"].emissive.set(blueColor);
    materials["Material.022"].emissiveIntensity = blueIntensity;

    materials["Material.023"].emissive.set(blueColor);
    materials["Material.023"].emissiveIntensity = blueIntensity;

    materials["Material.024"].emissive.set(yellowColor);
    materials["Material.024"].emissiveIntensity = yellowIntensity;

    materials["Material.025"].emissive.set(greenColor);
    materials["Material.025"].emissiveIntensity = greenIntensity;

    materials["Material.026"].emissive.set(redColor);
    materials["Material.026"].emissiveIntensity = redIntensity;

    materials["Material.027"].emissive.set(redColor);
    materials["Material.027"].emissiveIntensity = redIntensity;

    materials["Material.028"].emissive.set(greenColor);
    materials["Material.028"].emissiveIntensity = greenIntensity;

    materials["Material.029"].emissive.set(yellowColor);
    materials["Material.029"].emissiveIntensity = yellowIntensity;

    materials["Material.030"].emissive.set(blueColor);
    materials["Material.030"].emissiveIntensity = blueIntensity;

    materials["Material.031"].emissive.set(blueColor);
    materials["Material.031"].emissiveIntensity = blueIntensity;

    materials["Material.032"].emissive.set(yellowColor);
    materials["Material.032"].emissiveIntensity = yellowIntensity;

    materials["Material.033"].emissive.set(greenColor);
    materials["Material.033"].emissiveIntensity = greenIntensity;

    materials["Material.034"].emissive.set(redColor);
    materials["Material.034"].emissiveIntensity = redIntensity;
  }, [
    greenColor,
    greenIntensity,
    redColor,
    redIntensity,
    yellowColor,
    yellowIntensity,
    blueColor,
    blueIntensity,
    materials,
  ]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Leva collapsed={false} />
      <Canvas
        style={{ background: "black" }}
        gl={{ alpha: false }}
        camera={{ position: [0, 1, 3], fov: 50 }}
      >
        <Stats showPanel={0} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

        <Environment files={hdrPath} background={false} />
        <Suspense fallback={null}>
          <NarokanModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
