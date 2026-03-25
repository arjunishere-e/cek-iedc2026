import React from "react";
import event1 from "../assets/hexis.jpg";
import event2 from "../assets/femina.jpg";
import event3 from "../assets/incepta.jpg";
import event4 from "../assets/iot.jpg";
import event5 from "../assets/ai.jpg";

import { Link, useNavigate } from "react-router-dom"; // ✅ added useNavigate

const eventsData = [
  {
    title: "Hexis",
    description:
      "Hexis provide a platform for skilled person to share their expertise and empower individuals to acquire new skills.",
    image: event1,
    link: "/events/hexis", // Hexis photos page
  },
  {
    title: "Femina",
    description:
      "A movement to celebrate and empower women’s leadership, FEMINA inspires innovation, breaks stereotypes, and amplifies the voices of trailblazing women shaping the future.",
    image: event2,
    link: "/events/femina", //  Femina photos page
  },
  {
    title: "Incepta",
    description:
      "A dynamic college event where ideas turn into action and conversations spark collaborations. Built for students who believe learning goes beyond classrooms, it offers workshops, talks, and campfire networking to inspire innovation, break routines, and create meaningful connections.",
    image: event3,
    link: "/events/incepta", //  Incepta photos page
  },

  {
    title: "Hands-on Raspberry Pi:Linux,Python & IoT",
    description:
      "A dynamic college event where ideas turn into action and conversations spark collaborations. Built for students who believe learning goes beyond classrooms, it offers workshops, talks, and campfire networking to inspire innovation, break routines, and create meaningful connections.",
    image: event4,
    link: "/events/iot", //  Iot photos page
  },

  {
    title: "Artificial Intelligence and Data Science",
    description:
      "A dynamic college event where ideas turn into action and conversations spark collaborations. Built for students who believe learning goes beyond classrooms, it offers workshops, talks, and campfire networking to inspire innovation, break routines, and create meaningful connections.",
    image: event5,
    link: "/events/ai", //  Ai photos page
  },
];

const Event: React.FC = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <section id="events" className="events-section">
      <h1 className="events-heading">EVENTS</h1>

      {eventsData.map((event, index) => (
        <article
          key={index}
          className={`events-card ${index % 2 !== 0 ? "events-card--reverse" : ""}`}
        >
          {/* Event Image */}
          <img src={event.image} alt={event.title} className="events-image" />

          {/* Event Content */}
          <div className="events-content">
            <h2 className="events-title">{event.title}</h2>
            <p className="events-desc">{event.description}</p>

            {/* Buttons */}
            <div className="events-buttons">
              <button className="events-btn events-btn--outline">View Brochure</button>
              <button
                className="events-btn events-btn--primary"
                onClick={() => navigate("/registration")} // ✅ redirect to registration
              >
                Register Now
              </button>
              <Link to={event.link}>
                <button className="events-btn events-btn--secondary">
                  View Photos
                </button>
              </Link>
            </div>
          </div>
        </article>
      ))}

      {/* Styles (same as your code) */}
      <style>{`
        .events-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6rem 5%;
          gap: 4rem;
          min-height: 100vh;
          background-color: transparent;
          color: #fff;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
        }

        .events-heading {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2rem;
          text-align: center;
          border-bottom: 3px solid #635BFF;
          padding-bottom: 0.5rem;
          width: fit-content;
        }

        .events-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          width: 100%;
          background: rgba(0,0,0,0.6);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          box-sizing: border-box;
        }

        .events-card--reverse {
          flex-direction: row-reverse;
        }

        .events-image {
          width: 320px;
          max-width: 35%;
          border-radius: 12px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .events-content {
          max-width: 600px;
          flex: 1 1 300px;
          text-align: left;
        }

        .events-title {
          font-family: 'Cinzel', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #635BFF;
          margin-bottom: 1rem;
        }

        .events-desc {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          color: #ddd;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .events-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .events-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .events-btn--outline {
          border: 2px solid #635BFF;
          background: transparent;
          color: #635BFF;
        }
        .events-btn--outline:hover,
        .events-btn--outline:focus {
          background: #635BFF;
          color: #fff;
        }

        .events-btn--primary {
          border: none;
          background: #635BFF;
          color: #fff;
        }
        .events-btn--primary:hover,
        .events-btn--primary:focus {
          background: #4e1eff;
        }

        .events-btn--secondary {
          border: 2px solid #bbb;
          background: transparent;
          color: #bbb;
        }
        .events-btn--secondary:hover,
        .events-btn--secondary:focus {
          background: #fcfafaff;
          color: #000;
        }

        /* Responsive rules */
        @media (max-width: 900px) {
          .events-heading {
            font-size: 2rem;
          }
          .events-card {
            padding: 1.25rem;
            gap: 1rem;
          }
          .events-card,
          .events-card--reverse {
            flex-direction: column;
            text-align: center;
          }
          .events-image {
            width: 100%;
            max-width: 100%;
            height: auto;
            margin: 0 auto 1rem auto;
          }
          .events-content {
            text-align: center;
            max-width: 100%;
          }
          .events-title {
            font-size: 1.4rem;
          }
          .events-desc {
            font-size: 0.95rem;
          }
          .events-buttons {
            justify-content: center;
          }
          .events-btn {
            flex: 1 1 calc(50% - 0.5rem);
            font-size: 0.95rem;
            padding: 0.55rem 1rem;
          }
        }

        /* Smaller phones */
        @media (max-width: 420px) {
          .events-heading { font-size: 1.6rem; }
          .events-title { font-size: 1.2rem; }
          .events-desc { font-size: 0.9rem; }
          .events-image { border-radius: 8px; }
          .events-btn {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Event;
