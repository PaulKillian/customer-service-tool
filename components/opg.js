import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const BodyType = () => {
   useEffect(() => {
    const bodyDiv = document.querySelector('bodyFlex')
      
    let ctx = gsap.context(() => {
    gsap.from(".bodyFlex", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, bodyDiv);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
    <div className={'bodyFlex'}>
       <div>
         <div>
           <h4 className={styles.h4Design}>A</h4>
             <h3>Bonneville(59-76), Catalina(59-76), Chevelle(64-77), Cutlass(61-77), 
                Duster, Lancer, Scamp</h3>
         </div>
         <div>
           <h4 className={styles.h4Design}>B</h4>
           <h3>
             330 & 440,
             Belvedere,
             Charger,
             Coronet,
             Dart,
             Dayton,
             Fury,
             GTX,
             Polara,
             Road Runner,
             Savoy,
             Sport Fury,
             Super Bee,
             Super Bird,
           </h3>
         </div>
         <div>
           <h4 className={styles.h4Design}>E</h4>
            <h3>Challenger, Cuda</h3>
         </div>
      </div>
    </div>
  )
}

export default BodyType;
