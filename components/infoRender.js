import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ReturnLabel, BodyType, OPG, DeliveryTimes } from './info.js'

const infoRender = (props) => {
   useEffect(() => {
    const infoDiv = document.querySelector('info')
      
    let ctx = gsap.context(() => {
       gsap.from(".info", {
         opacity: 0, 
         x: 100, 
         duration: 1
       })}, infoDiv);
       return () => ctx.revert();
    }, []);
  
    return (
       {props.clickedButton === 'body type' &&
        <BodyType />}
       {props.clickedButton === 'return label' &&
        <ReturnLabel />}
       {props.clickedButton === 'opg' &&
        <OPG/>}
       {props.clickedButton === 'delivery times' &&
        <DeliveryTimes />} 
  )
}

export default BodyType;
