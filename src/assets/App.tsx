import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DotGrid from "./components/DotGrid";
import About from "./components/About";
import Event from "./components/Event";
import Execome from "./components/Execome";
import Hexis from "./components/Hexis"; 
import Femina from "./components/Femina";
import Incepta from "./components/Incepta"; 
import Ai from "./components/Ai";
import Iot from "./components/Iot";
import Registration from "./components/Registration"; // ✅ added

import logo from "./assets/logo.png";

// HomePage component (your current main layout)
const HomePage: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const navLinks: string[] = ["Home", "About", "Events", "Execome"];

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setSidebarOpen(false); // close sidebar when clicked
  };

  return (
    <div style={{ width: "100%", position: "relative", overflowX: "hidden" }}>
      {/* DotGrid Background */}
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

      {/* Navbar (desktop) */}
      <nav
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => handleNavClick("Home")}
        >
          <img src={logo} alt="Logo" style={{ height: "100px", width: "auto" }} />
        </div>

        {/* Desktop Nav Links */}
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "2rem",
            margin: 0,
            padding: 0,
            alignItems: "center",
            height: "100%",
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderBottom:
                    active === item
                      ? "2px solid #5227FF"
                      : "2px solid transparent",
                  transition: "border-color 0.3s ease",
                  cursor: "pointer",
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="mobile-nav"
          style={{
            fontSize: "2rem",
            color: "#fff",
            cursor: "pointer",
            display: "none",
          }}
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: sidebarOpen ? 0 : "-250px",
          width: "250px",
          height: "100%",
          background: "rgba(20,20,20,0.95)",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          transition: "right 0.3s ease-in-out",
          zIndex: 100,
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setSidebarOpen(false)}
          style={{
            alignSelf: "flex-end",
            fontSize: "1.5rem",
            color: "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* Nav Links */}
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item);
            }}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: 500,
              padding: "0.5rem 0",
              borderBottom:
                active === item ? "2px solid #5227FF" : "2px solid transparent",
              transition: "border-color 0.3s ease",
              cursor: "pointer",
            }}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6rem 10%",
          minHeight: "100vh",
          backgroundColor: "transparent",
          color: "#fff",
          gap: "2rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flex: 1,
            gap: "1.5rem",
          }}
        >
          {/* Text Side */}
          <div className="hero-text">
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: "clamp(1.8rem, 6vw, 2.5rem)",
                lineHeight: 1.3,
                color: "#635BFF",
                letterSpacing: "0.05em",
                marginBottom: "0.4rem",
              }}
            >
              Innovation and <br />
              Entrepreneurship <br />
              Development Centre
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "#bbb",
                letterSpacing: "0.05em",
                margin: 0,
              }}
            >
              College of Engineering, Kallooppara
            </p>
          </div>

          {/* Logo Side */}
          <div className="hero-logo">
            <img
              src={logo}
              alt="Heading Logo"
              style={{
                height: "190px", // ✅ slightly bigger for visibility
                width: "auto",
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Events Section */}
      <Event />

      {/* Execome Section */}
      <Execome />

      {/* Responsive Styles */}
      <style>{`
@media (max-width: 768px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-nav {
    display: block !important;
  }
  #home {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    min-height: 100vh !important;
    padding: 0 1rem !important;
  }
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }
  .hero-text {
    text-align: center !important;
  }
  .hero-logo img {
    height: 150px !important; /* ✅ also bigger on mobile */
    width: auto;
  }
}
      `}</style>
    </div>
  );
};

// App wrapper with routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Event-specific photo pages */}
        <Route path="/events/hexis" element={<Hexis />} />
        <Route path="/events/femina" element={<Femina />} />
        <Route path="/events/incepta" element={<Incepta />} />
        <Route path="/events/ai" element={<Ai />} />
        <Route path="/events/iot" element={<Iot />} />

        {/* Registration page (event ended) */}
        <Route path="/registration" element={<Registration />} /> {/* ✅ added */}
      </Routes>
    </Router>
  );
};

export default App;
