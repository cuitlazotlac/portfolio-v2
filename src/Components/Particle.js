import Particles from "react-particles-js";

import React from "react";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        // params={{
        //   particles: {
        //     number:{
        //       value:109,
        //       density:{
        //         enable: true,
        //         value_area: 1200
        //       }
        //     },
        //     color:{
        //       value: '#636e72'
        //     },
        //     shape:{
        //       type: 'circle',
        //       stroke: {
        //         width: 0
        //       },
        //       polygon:{
        //         nb_sides: 6
        //       }
        //     },
        //     line_linked: {
        //       enable: false,
        //       distance: 150,
        //       opacity: 0.9,
        //       width: 1,
        //       shadow: {
        //         enable: true,
        //         color: "#e74c3c",
        //         blur: 5
        //       }
        //     },
        //     move:{
        //       enable: true,
        //       random: true,
        //       speed: .6,
        //       attract:{
        //         rotateX: 600,
        //         rotateY: 1200
        //       }
        //     },
        //     size: {
        //       value: 4,
        //       random: true,
        //       anim:{
        //         speed: 40,
        //         size_min: 0.1
        //       }
        //     },
        //     opacity: {
        //       value: 0.8,
        //       anim: {
        //         speed: 1,
        //         opacity_min: 0.1
        //       }
        //     }
        //   }
        // }}
        params={{
          particles: {
            number: {
              value: 6,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#636e72",
            },
            shape: {
              type: "square",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 8,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 170,
              random: false,
              anim: {
                enable: true,
                speed: 104.7579603868735,
                size_min: 50,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#ffffff",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 8,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "remove",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
        }}
      />
    </>
  );
}

export default Particle;
