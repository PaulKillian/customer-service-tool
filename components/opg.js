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
       <h3>Bonneville(59-76)<br/><br/> Cadillac(54-76)<br/><br/>Catalina(59-76)<br/><br/> Chevelle(64-77)<br/><br/> Cutlass(61-77)<br/><br/> El Camino(64-87)<br/><br/> Grand Prix(62-77)<br/><br/> GTO(64-73)<br/><br/> Lemans(61-73)<br/><br/> Malibu(78-83)<br/><br/> Monte Carlo(71-88)<br/><br/> Riviera(63-76) <br/><br/> Skylark(61-72)<br/><br/> Tempest(61-71)</h3>
    </div>
  )
}

export default OPG;
