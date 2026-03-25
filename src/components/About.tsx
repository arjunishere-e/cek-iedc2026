import React from "react";
import SampleImage from "../assets/cek.jpg"; // replace with your image

const About: React.FC = () => {
  return (
    <section
      id="about"
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
        width: "100%",
      }}
    >
      {/* Left side - Paragraph with glassmorphism */}
      <div className="about-text">
        <h2 className="about-heading">About Us</h2>
        <p className="about-desc">
          The Innovation and Entrepreneurship Development Cell (IEDC) at the
          College of Engineering Kallooppara (CEK) is a dynamic initiative aimed
          at fostering a culture of innovation and entrepreneurship among
          students. Established under the guidance of the Kerala Startup Mission
          (KSUM), the IEDC serves as a catalyst for transforming student ideas
          into viable startups.
          <br />
          <br />
          Situated in the serene hills of Pathanamthitta district, CEK provides
          an ideal environment for nurturing creativity and technical excellence.
          The IEDC offers mentorship, infrastructure, and access to cutting-edge
          technology, enabling students to experiment, innovate, and bring their
          entrepreneurial visions to life.
          <br />
          <br />
          Through various workshops, seminars, and incubation programs, the IEDC
          empowers students to develop solutions that address real-world
          challenges, thereby contributing to the socio-economic development of
          the region.
        </p>
      </div>

      {/* Right side - Image with glassmorphism frame */}
      <div className="about-img">
        <div className="about-img-wrapper">
          <img src={SampleImage} alt="About Us" className="about-photo" />
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .about-text {
          flex: 1;
          min-width: 300px;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        .about-heading {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Cinzel', serif;
          font-weight: 700;
          text-align: center;
          color: #E0E0E0;
        }

        .about-desc {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #f5f5f5;
          font-family: 'Poppins', sans-serif;
          text-align: justify;
          letter-spacing: 0.3px;
        }

        .about-img {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
        }

        .about-img-wrapper {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-radius: 16px;
          padding: 1rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          max-width: 550px;
          width: 100%;
        }

        .about-photo {
          width: 100%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
          display: block;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          #about {
            flex-direction: column;
            padding: 4rem 6%;
          }

          .about-text {
            padding: 1.5rem;
            text-align: center;
          }

          .about-heading {
            font-size: 2rem;
          }

          .about-desc {
            font-size: 0.95rem;
            text-align: left;
          }

          .about-img-wrapper {
            margin-top: 1.5rem;
            padding: 0.8rem;
          }
        }

        @media (max-width: 420px) {
          .about-heading {
            font-size: 1.6rem;
          }
          .about-desc {
            font-size: 0.9rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
