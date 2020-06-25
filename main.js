$(document).ready(function() {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1200
        }
      },
      color: {
        value: "#7d7775"
      },
      shape: {
        type: "triangle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.4,
        random: false,
        anim: {
          enable: false,
          speed: 0.1,
          opacity_min: 0.01,
          sync: false
        }
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 10,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 250,
        color: "#ffffff",
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1000
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "grab"
        },
        resize: false
      },
      modes: {
        grab: {
          distance: 10,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 10,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 80,
          duration: 0.5
        },
        push: {
          particles_nb: 5
        },
        remove: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  });
});

