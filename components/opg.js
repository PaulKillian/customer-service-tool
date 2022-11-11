import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const OPG = () => {
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
     <h4 className={styles.h4Design}>A</h4>
       <h3>
         Bonneville(59-76), Cadillac(54-76), Catalina(59-76), Chevelle(64-77), Cutlass(61-77), 
         El Camino(64-87), Grand Prix(62-77), GTO(64-73), Lemans(61-73), Malibu(78-83), 
         Monte Carlo(71-88), Riviera(63-76), Skylark(61-72), Tempest(61-71)
       </h3>
    </div>
  )
}

export default OPG;
