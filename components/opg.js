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
        <h3><span className={styles.h4Design}>CAR</span><br/> 
            Bonneville(59-76)<br/> Cadillac(54-76)<br/>
            Catalina(59-76)<br/> Chevelle(64-77)<br/> 
            Cutlass(61-77)<br/> El Camino(64-87)<br/> 
            Grand Prix(62-77)<br/> GTO(64-73)<br/> 
            Lemans(61-73)<br/> Malibu(78-83)<br/> 
            Monte Carlo(71-88)<br/> Riviera(63-76) 
            <br/> Skylark(61-72)<br/> Tempest(61-71)
            <br/> Phone # 1‑800‑243‑8355
            
        </h3>
    </div>
  )
}

export default OPG;
