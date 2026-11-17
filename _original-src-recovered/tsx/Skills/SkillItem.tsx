import React from 'react';
import { useEffect } from 'react';
import './Skills.scss';

import { gsap, TimelineMax } from 'gsap';
import { CSSPlugin } from "gsap/CSSPlugin";


function SkillItem (props: any) {
    useEffect(()=>{
        
        gsap.registerPlugin(CSSPlugin);
    
        var slider = new TimelineMax();
        
        slider.to(`.${props.skillName}-pagination-indicator`, 0.5, {
          width:props.percentage
        })
    })

    
    return (
        <li className={props.className}>
            <ul>
                <li><img src={`https://skillicons.dev/icons?i=${props.icons}`} /></li>
                <li>
                    <h4>{props.skillName} - <span className="count-up">{props.percentage}</span></h4>
                    <span className='pagination-bar'><span className={`${props.skillName}-pagination-indicator pagination-indicator`} style={{backgroundColor:props.progressColor}}></span></span>
                </li>
            </ul>
        </li>
    );
}

export default SkillItem;