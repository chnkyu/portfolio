import React, { useEffect } from 'react';
import './Skills.scss';

import SkillItem from './SkillItem';

import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

function Skills() {

  useEffect(()=>{
    
    const skillScrollTl = gsap.timeline();
    
        skillScrollTl.from(".skill01",{y:100, opacity:0})
        .from(".skill02",{y:100, opacity:0})
        .from(".skill03",{y:100, opacity:0})
        .from(".skill04",{y:100, opacity:0})
        .from(".skill05",{y:100, opacity:0})
        .from(".skill06",{y:100, opacity:0})
        .from(".skill07",{y:100, opacity:0})
        .from(".skill08",{y:100, opacity:0})

        ScrollTrigger.create({
            animation: skillScrollTl,
            trigger: "#Skills",
            start: "100 center", // "A B" (%, px 둘다 가능) A: trigger 시작점을 내려줌 B : 스크롤 시작점을 올려줌
            end:"center center", // "A B" (%, px 둘다 가능) A: trigger 끝점을 올려줌 B : 스크롤 시작점을 내려줌
            scrub: 1,
            markers:false,
        });
  })

  return (
    <section id="Skills" className="sections gradient-edge-top gradient-edge-bottom" style={{backgroundImage:'url(/portfolio/images/main_intro_bg.jpg)'}}>
        <div className='container'>
          <h2 className='section-title'>Skills
            <ul className='section-title-divider flex-align-center-between'>
              <li></li><li className='active'></li><li></li><li></li>
            </ul>
          </h2>
          <div className='skills-wrap'>
            <ul className='display-flex align-items-center'>
              <SkillItem className={"skill01"} icons={"html"} skillName={"html5"} progressColor={"#e14e1d"} percentage={"90%"}/>
              <SkillItem className={"skill02"} icons={"css"} skillName={"css3"} progressColor={"#0277bd"} percentage={"80%"}/>
              <SkillItem className={"skill03"} icons={"sass"} skillName={"sass"} progressColor={"#cd6799"} percentage={"60%"}/>
              <SkillItem className={"skill04"} icons={"javascript"} skillName={"javascript"} progressColor={"#f0db4f"} percentage={"60%"}/>
              <SkillItem className={"skill05"} icons={"jquery"} skillName={"jquery"} progressColor={"#ff3000"} percentage={"80%"}/>
              <SkillItem className={"skill06"} icons={"bootstrap"} skillName={"bootstrap"} progressColor={"#7738f7"} percentage={"60%"}/>
              <SkillItem className={"skill07"} icons={"ps"} skillName={"photoshop"} progressColor={"#32a8ff"} percentage={"60%"}/>
              <SkillItem className={"skill08"} icons={"ai"} skillName={"illustrator"} progressColor={"#ff9a00"} percentage={"60%"}/>
            </ul>
          </div>
        </div>
        <div className='gradient-bg gradient-dark-bg'></div>
    </section>
  );
}

export default Skills;
