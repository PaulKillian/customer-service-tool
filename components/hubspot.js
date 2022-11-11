import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const HubSpot = (props) => {
   useEffect(() => {
    const hub = document.querySelector('bodyFlex')
      
    let ctx = gsap.context(() => {
    gsap.from(".hub", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, hub);
    return () => ctx.revert();
   }, []);
  
    return (
    <div className={'hub'}>
<iframe src="https://www.hemmings.com" width={1000} height={500} sandbox='allow-scripts allow-modal' loading='eager'></iframe>
    </div>
  )
}

export default HubSpot;
