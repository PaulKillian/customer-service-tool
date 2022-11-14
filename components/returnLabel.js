import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const ReturnLabel = () => {
   useEffect(() => {
    const returnDiv = document.querySelector('return')
      
    let ctx = gsap.context(() => {
    gsap.from(".bodyFlex", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, returnDiv);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
     <div className={'return'}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2IB5w3jt28UKSCdvMHe2PeZ-N-d9BkOCU5Qv_c5s6ynnjJA/viewform" 
          width="640" 
          height="700" 
          frameBorder="0" 
          webkitallowFullScreen="" 
          mozallowFullScreen="" 
          allowFullScreen="">
        </iframe>
     </div>
  )
}

export default ReturnLabel;

