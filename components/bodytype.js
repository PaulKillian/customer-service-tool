import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";

const BodyType = () => {
   useEffect(() => {
    const bodyDiv = document.querySelector('bodyFlex')
      
    let ctx = gsap.context(() => {
    gsap.from(".bodyFlex", {
      opacity: 0, 
      y: 100, 
      duration: 1
    })}, bodyDiv);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
    <div className={'bodyFlex'}>
       <div className={style.bodyFlex}>
         <div>
           <div>A Body</div>
           <ul>
             <li>Barracuda</li>
             <li>Dart</li>
             <li>Demon</li>
             <li>Duster</li>
             <li>Lancer</li>
             <li>Scamp</li>
             <li>Valiant</li>
           </ul>
         </div>
         <div>
           <div>B Body</div>
           <ul>
             <li>330 & 440</li>
             <li>Belvedere</li>
             <li>Charger</li>
             <li>Coronet</li>
             <li>Dart</li>
             <li>Dayton</li>
             <li>Fury</li>
             <li>GTX</li>
             <li>Polara</li>
             <li>Road Runner</li>
             <li>Satellite</li>
             <li>Savoy</li>
             <li>Sport Fury</li>
             <li>Super Bee</li>
             <li>Super Bird</li>
           </ul>
         </div>
         <div>
           <div>E Body</div>
           <ul>
             <li>Challenger</li>
             <li>Cuda</li>
           </ul>
         </div>
      </div>
    </div>
  )
}

export default BodyType;
