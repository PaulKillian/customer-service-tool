import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { returnLabel, bodyType, opg, deliveryTimes } from './info.js'

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
       {props.clickedButton === 'body type' && bodyType()}
       {props.clickedButton === 'return label' && returnLabel()}
       {props.clickedButton === 'opg' && opg()}
       {props.clickedButton === 'delivery times' && deliveryTimes()}
  )
}

export default BodyType;
