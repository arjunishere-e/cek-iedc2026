import React, { useEffect, useRef, useState } from "react";

const IMAGE_VERSION = "20260301";

const execomMembers = [
  {
    id: 1,
    name: "YASEEM KHAN M",
    designation: "Nodal Officer 1",
    image: "/assets/execom/yaseem.jpeg",
  },
  {
    id: 2,
    name: "MS LEENA",
    designation: "Nodal Officer 2",
    image: "/assets/execom/leena.jpg",
  },
  {
    id: 3,
    name: "ABHIJITH R NAIR",
    designation: "Student Lead1",
    image: "/assets/execom/Abhijith.jpeg",
  },
  {
    id: 4,
    name: "ARSHA BABU",
    designation: "Student Lead2",
    image: "/assets/execom/Arshaa.jpeg",
  },
  {
    id: 5,
    name: "ARJUN R",
    designation: "Community Lead",
    image: "/assets/execom/Arjun.jpeg",
  },
  {
    id: 6,
    name: "AISWARYA P",
    designation: "Design Lead",
    image: "/assets/execom/Aiswarya.jpeg",
  },
  {
    id: 7,
    name: "AJMAL M S",
    designation: "Finance Lead",
    image: "/assets/execom/Ajmal.jpeg",
  },
  {
    id: 8,
    name: "YASHAS R NAIR",
    designation: "Technical Lead",
    image: "/assets/execom/Yashas.jpeg",
  },
  {
    id: 9,
    name: "NEERAJA ANIL",
    designation: "Creative Lead",
    image: "/assets/execom/Neeraja.jpeg",
  },
  {
    id: 10,
    name: "ANJU PRAKASH",
    designation: "Branding & Marketing Lead",
    image: "/assets/execom/Anju.jpeg",
  },
  {
    id: 11,
    name: "DIYA SUSAN JOHN",
    designation: "Women Innovation Lead",
    image: "/assets/execom/Diya%20.jpeg",
  },
  {
    id: 12,
    name: "JOHAN SHIBU JOHN",
    designation: "Quality & Operation Lead",
    image: "/assets/execom/Johan.jpeg",
  },
  {
    id: 13,
    name: "NOEL LIJU",
    designation: "Social Media",
    image: "/assets/execom/Noel.jpeg",
  },
  {
    id: 14,
    name: "ANOOP NARAYAN",
    designation: "IPR Lead",
    image: "/assets/execom/Anoop.jpeg",
  },
  {
    id: 15,
    name: "ABHINAND SANTHOSH",
    designation: "Program Manager",
    image: "/assets/execom/Abhinand.jpeg",
  },
];

const Execome: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const imageHeight = isMobile ? 130 : 200;

  const getInitials = (fullName: string) =>
    fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("");

  // Track screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll on desktop while keeping native scrollbar
  useEffect(() => {
    if (isMobile) return;

    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 0.5;
    const intervalId = window.setInterval(() => {
      const maxScrollLeft = Math.max(
        container.scrollWidth - container.clientWidth,
        0,
      );
      if (maxScrollLeft <= 0) return;

      const nextScrollLeft = container.scrollLeft + scrollStep;
      container.scrollLeft =
        nextScrollLeft >= maxScrollLeft ? 0 : nextScrollLeft;
    }, 16);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMobile]);

  return (
    <section
      id="execome"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "6rem 5%",
        minHeight: "100vh",
        backgroundColor: "transparent",
        color: "#fff",
        position: "relative",
        zIndex: 1,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          fontFamily: "'Cinzel', serif",
        }}
      >
        Meet Our Executive Committee
      </h2>

      {/* Container */}
      <div
        ref={scrollRef}
        style={{
          display: isMobile ? "grid" : "flex",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : undefined,
          gap: "1.2rem",
          overflowX: isMobile ? "visible" : "auto",
          padding: "1rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {execomMembers.map((member) => (
          <div
            key={member.id}
            style={{
              minWidth: isMobile ? "auto" : "200px",
              flexShrink: 0,
              background: "rgba(30,30,30,0.75)",
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {failedImages.has(member.id) ? (
              <div
                style={{
                  width: "100%",
                  height: `${imageHeight}px`,
                  borderRadius: "10px",
                  marginBottom: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  color: "#ddd",
                  fontSize: isMobile ? "1.1rem" : "1.4rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {getInitials(member.name)}
              </div>
            ) : (
              <img
                src={`${member.image}?v=${IMAGE_VERSION}`}
                alt={member.name}
                onError={() =>
                  setFailedImages((prev) => {
                    const next = new Set(prev);
                    next.add(member.id);
                    return next;
                  })
                }
                style={{
                  width: "100%",
                  height: `${imageHeight}px`,
                  borderRadius: "10px",
                  objectFit: "cover",
                  objectPosition: isMobile ? "center 20%" : "center 15%",
                  marginBottom: "0.8rem",
                }}
              />
            )}
            <h3
              style={{
                fontSize: isMobile ? "0.9rem" : "1.1rem",
                margin: "0.2rem 0",
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: isMobile ? "0.75rem" : "0.9rem",
                color: "#bbb",
              }}
            >
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Execome;
