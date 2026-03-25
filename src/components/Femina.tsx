import React, { useState } from "react";
import DotGrid from "./DotGrid";

// Dynamically import all JPG images from assets/femina
const images = Object.values(
  import.meta.glob("../assets/femina/*.{jpg,jpeg,JPG,JPEG}", { eager: true })
).map((mod: any) => mod.default);

const Femina: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "#fff",fontFamily: "'Cinzel', serif" }}>
      {/* DotGrid background */}
      <DotGrid
        dotSize={6}
        gap={20}
        baseColor="#2a2a2a"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <h1 style={{ textAlign: "center", padding: "2rem 0", color: "#fff" }}>
        Femina Event Photos
      </h1>

      {/* Grid of photos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              cursor: "pointer",
              background: "#111",
            }}
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`Femina ${i + 1}`}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Popup modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImg}
            alt="Popup"
            style={{ maxHeight: "90%", maxWidth: "90%", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Femina;
