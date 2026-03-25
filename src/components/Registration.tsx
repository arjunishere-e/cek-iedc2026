import React, { useEffect } from "react";
import DotGrid from "./DotGrid";

const Registration: React.FC = () => {
  // Hide sidebar if it exists
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) (sidebar as HTMLElement).style.display = "none";
    return () => {
      if (sidebar) (sidebar as HTMLElement).style.display = "";
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
        overflow: "hidden",
      }}
    >
      {/* DotGrid Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          willChange: "transform",
          transform: "translateZ(0)",
          pointerEvents: "none",
        }}
      >
        <DotGrid
          dotSize={6}
          gap={22}
          baseColor="#2a2a2a"
          activeColor="#FF3B3B" // 🔴 red accent for "ended"
          proximity={120}
          shockRadius={200}
          shockStrength={3}
          resistance={600}
          returnDuration={1.2}
        />
      </div>

      {/* Message Content */}
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          fontWeight: 700,
          fontFamily: "'Cinzel', serif",
        }}
      >
        Event Registration Closed
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#bbb",
          maxWidth: "600px",
          lineHeight: 1.6,
        }}
      >
        Thank you for your interest!   
        All registrations for this event have ended. Stay tuned for our upcoming events.
      </p>
    </div>
  );
};

export default Registration;
