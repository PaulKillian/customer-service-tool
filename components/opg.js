import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const OPG = () => {
   const cars = 'Bonneville(59-76)\n Cadillac(54-76)\n Catalina(59-76)\n Chevelle(64-77)\n Cutlass(61-77)\n El Camino(64-87)\n Grand Prix(62-77)\n GTO(64-73\n Lemans(61-73)\n Malibu(78-83)\n Monte Carlo(71-88)\n Riviera(63-76) \n Skylark(61-72)\n Tempest(61-71)'
   useEffect(() => {
    const opg = document.querySelector('opg')
      
    let ctx = gsap.context(() => {
    gsap.from(".opg", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, opg);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
    <div className={'opg'}>
       <h3>{cars}</h3>
    </div>
  )
}

export default OPG;
