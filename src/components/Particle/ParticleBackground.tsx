import React, {useCallback, useMemo} from 'react';
import Particles from 'react-tsparticles';
import type {Container, Engine} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // await console.log(container);
    }, []);

    const options = useMemo(() => {
        return {
            fps_limit: 60,
                interactivity: {
                detect_on: 'canvas',
                    events: {
                    onclick: {enable: true, mode: 'repulse'},
                    onhover: {
                        enable: true,
                            mode: 'bubble',
                            parallax: {enable: false, force: 2, smooth: 10}
                    },
                    resize: true
                },
                modes: {
                    bubble: {distance: 250, duration: 2, opacity: 0, size: 0, speed: 3},
                    grab: {distance: 400, line_linked: {opacity: 1}},
                    push: {particles_nb: 4},
                    remove: {particles_nb: 2},
                    repulse: {distance: 400, duration: 0.4}
                }
            },
            particles: {
                color: {value: '#ffffff'},
                line_linked: {
                    color: '#ffffff',
                        distance: 150,
                        enable: false,
                        opacity: 0.4,
                        width: 1
                },
                move: {
                    size: true,
                        attract: {enable: false, rotateX: 600, rotateY: 600},
                    bounce: false,
                        direction: 'none',
                        enable: true,
                        out_mode: 'out',
                        random: true,
                        speed: 0.3,
                        straight: false
                },
                number: {density: {enable: true, value_area: 800}, value: 160},
                opacity: {
                    anim: {enable: true, opacity_min: 0, speed: 1, sync: false},
                    random: true,
                        value: 1
                },
                shape: {
                    character: {
                        fill: false,
                            font: 'Verdana',
                            style: '',
                            value: '*',
                            weight: '400'
                    },
                    image: {
                        height: 100,
                            replace_color: true,
                            src: 'images/github.svg',
                            width: 100
                    },
                    polygon: {nb_sides: 5},
                    stroke: {color: '#000000', width: 0},
                    type: 'circle'
                },
                size: {
                    anim: {enable: false, size_min: 0.3, speed: 4, sync: false},
                    random: true,
                        value: 1
                }
            },
            polygon: {
                draw: {enable: false, lineColor: '#ffffff', lineWidth: 0.5},
                move: {radius: 10},
                scale: 1,
                    type: 'none',
                    url: ''
            },
            retina_detect: true
        }
    }, [])

    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fps_limit: 60,
                background:{
                    color:'#000',
                },
                fullScreen:{
                    enable:true,
                    zIndex: -1
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onclick: {enable: true, mode: 'repulse'},
                        onhover: {
                            enable: true,
                            mode: 'bubble',
                            parallax: {enable: false, force: 2, smooth: 10}
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {distance: 250, duration: 2, opacity: 0, size: 0, speed: 3},
                        grab: {distance: 400, line_linked: {opacity: 1}},
                        push: {particles_nb: 4},
                        remove: {particles_nb: 2},
                        repulse: {distance: 400, duration: 0.4}
                    }
                },
                particles: {
                    color: {value: '#ffffff'},
                    line_linked: {
                        color: '#ffffff',
                        distance: 150,
                        enable: false,
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        size: true,
                        attract: {enable: false, rotateX: 600, rotateY: 600},
                        bounce: false,
                        direction: 'none',
                        enable: true,
                        out_mode: 'out',
                        random: true,
                        speed: 0.3,
                        straight: false
                    },
                    number: {density: {enable: true, value_area: 800}, value: 160},
                    opacity: {
                        anim: {enable: true, opacity_min: 0, speed: 1, sync: false},
                        random: true,
                        value: 1
                    },
                    shape: {
                        character: {
                            fill: false,
                            font: 'Verdana',
                            style: '',
                            value: '*',
                            weight: '400'
                        },
                        image: {
                            height: 100,
                            replace_color: true,
                            src: 'images/github.svg',
                            width: 100
                        },
                        polygon: {nb_sides: 5},
                        stroke: {color: '#000000', width: 0},
                        type: 'circle'
                    },
                    size: {
                        anim: {enable: false, size_min: 0.3, speed: 4, sync: false},
                        random: true,
                        value: 1
                    }
                },
                polygon: {
                    draw: {enable: false, lineColor: '#ffffff', lineWidth: 0.5},
                    move: {radius: 10},
                    scale: 1,
                    type: 'none',
                    url: ''
                },
                retina_detect: true
            }}
        />
    )
};

export default ParticleBackground;


