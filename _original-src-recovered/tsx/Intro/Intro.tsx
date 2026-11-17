
import React, { useRef, useEffect, useMemo, useState } from 'react';


import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import './Intro.scss';
import gsap from 'gsap';

import TextPlugin from 'gsap/TextPlugin';

function Intro() {
  const intro = useRef<HTMLDivElement>(null);
  const introText = useRef<any>([]);

  const [init, setInit] = useState(false);

  gsap.registerPlugin(TextPlugin);

  // this should be run only once per application lifetime
  useEffect(() => {
    
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    });

    const introTextTl = gsap.timeline();

    introTextTl.fromTo(introText.current[0], .5, {opacity:0, y:50}, {opacity:1, y:0})
    const result = "HyunKyu's Portfolio";
    introTextTl.fromTo(introText.current[1], .5, {opacity:0, y:50}, {opacity:1, y:0}).to(introText.current[1], {
      duration:2,
      text:result,
      yoyo:true,
      visibility:"visible"
    })
    introTextTl.fromTo(introText.current[2], .5, {opacity:0, y:50}, {opacity:1, y:0})
    introTextTl.fromTo(introText.current[3], .5, {opacity:0, y:50}, {opacity:1, y:0})
    introTextTl.fromTo(introText.current[4], .5, {opacity:0, y:50}, {opacity:1, y:0})
  }, []);



// Particles Animations
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen:false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.4,
          width: 1.6,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed:1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 75,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
    );

  return (
    <section id="Intro" className='sections flex-align-center wd-100 hght-100 gradient-edge-bottom' style={{backgroundImage:'url(/portfolio/images/main_intro_bg.jpg)'}} ref={intro}>
        <Particles
        id="Tsparticles"
        options={options}
      />
        <div className='container'>
            <h1 className='intro-text'>
                <p ref={el => introText.current[0] = el}>I'm Web Publisher</p>
                <b ref={el => introText.current[1] = el}></b>
                <p ref={el => introText.current[2] = el}>함께 일하고 싶은 동료, 8년차 웹퍼블리셔 최현규입니다.</p>
                <p ref={el => introText.current[3] = el}>초석을 잘 쌓아야 100년 갈 집을 지을 수 있다는 말처럼,<br />꾸준히 쌓은 탄탄한 기본기로 회사와 동료들에게 보탬이 되는 모습 보여드리겠습니다.</p>
                <p ref={el => introText.current[4] = el}>
                  <span className="mouse">
                    <span className="scroll"></span>
                    <span className="mouse-text">scroll</span>
                </span>
              </p>
            </h1>
        </div>
        <div className='gradient-bg gradient-dark-bg'></div>
    </section>
  );
}

export default Intro;
