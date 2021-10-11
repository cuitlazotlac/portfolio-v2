import Particles from "react-particles-js";

import React from "react";

function HomeParticle() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ff0000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: false,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 3000,
                rotateY: 3000,
              },
            },
            array: [],
          },
        }}
      />
    </>
  );
}

export default HomeParticle;
