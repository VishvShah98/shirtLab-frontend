import React, { useRef } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame, useThree } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  const shirtRef = useRef();
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const { size } = useThree();
  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, snap.color, 0.25, delta)
  );

  const stateString = JSON.stringify(snap);

  const handleDownload = () => {
    const exporter = new GLTFExporter();
    exporter.parse(
      shirtRef.current,
      (gltf) => {
        const blob = new Blob([JSON.stringify(gltf)], {
          type: "application/octet-stream",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "shirt.gltf";
        link.click();
      },
      {}
    );
  };

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
        ref={shirtRef}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <Html position={[-0.1, -0.385, 0]}>
        <Button
          variant="contained"
          sx={{ backgroundColor: snap.color, color:'white' }}
          onClick={handleDownload}
        >
          Download <DownloadIcon />
        </Button>
      </Html>
    </group>
  );
};

export default Shirt;
