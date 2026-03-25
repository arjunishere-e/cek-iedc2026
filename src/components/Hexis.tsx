import React, { useState, useEffect } from "react";
import DotGrid from "./DotGrid";

// Dynamically import all JPG images from assets/iot
const images = Object.values(
  import.meta.glob("../assets/iot/*.{jpg,jpeg,JPG,JPEG}", { eager: true })
).map((mod: any) => mod.default);

const Iot: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Hide sidebar if it exists
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) (sidebar as HTMLElement).style.display = "none";
    return () => {
      if (sidebar) (sidebar as HTMLElement).style.display = "";
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", color: "#fff" }}>
      {/* DotGrid background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          willChange: "transform",      // GPU acceleration
          transform: "translateZ(0)",   // isolate layer
          pointerEvents: "none",        // don’t block scroll
        }}
      >
        <DotGrid
          dotSize={5}
          gap={24}
          baseColor="#2a2a2a"
          activeColor="#5227FF"
          proximity={100}     // reduced for smoother perf
          shockRadius={180}   // lighter effect
          shockStrength={3}   // less heavy physics
          resistance={500}    // faster recovery
          returnDuration={1}
        />
      </div>

      <h1 style={{ textAlign: "center", padding: "2rem 0", color: "#fff",fontFamily: "'Cinzel', serif"}}>
        IoT Event Photos
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
              willChange: "transform",
            }}
            onClick={() => setSelectedImg(src)}
          >
            <img
              src={src}
              alt={`IoT ${i + 1}`}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s ease",
                willChange: "transform",
              }}
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
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              borderRadius: "10px",
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Iot;
