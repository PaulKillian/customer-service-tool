import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const DeliveryTimes = () => {   
   useEffect(() => {
    const deliveryTimes = document.querySelector('deliveryTimes')
      
    let ctx = gsap.context(() => {
    gsap.from(".deliveryTimes", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, deliveryTimes);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
    <div className={'deliveryTimes'}>
       <h3>
        <span className={styles.h4Design}>Zone</span><br/>
        2 & 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2-3days<br/> 
        4 & 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3-5days<br/>
        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5-7days<br/> 
        7 & 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7-10days
       </h3>
    </div>
  )
}

export default DeliveryTimes;