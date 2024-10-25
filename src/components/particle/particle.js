import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import bgimage from "../../assets/explosion.png"; // Import the background image

const ParticlesComponent = ({ darkMode }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: ["#FFA500"], // Array of colors for a gradient effect
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2, // Increase speed for more dynamic motion
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // More varied opacity
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 }, // Increase size range
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `url(${bgimage}) no-repeat center center fixed`,
        backgroundSize: "cover",
        zIndex: -1, // Ensure particles are on top of the image
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          zIndex: 0, // Ensure overlay is above the background but below particles
        }}
      />
      <Particles id="tsparticles" init={init} options={options} />
    </div>
  );
};

export default ParticlesComponent;
  