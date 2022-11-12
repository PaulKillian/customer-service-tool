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
    <div className={'bodyFlex'} >
      <div className={styles.bodyFlex}>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>A</span><br/> 
            Barracuda<br/><br/> Dart<br/><br/> Demon<br/><br/> Duster<br/><br/> Lancer<br/><br/> Scamp
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
          <span className={styles.h4Design}>B</span><br/> 
            330 & 440<br/><br/> 
            Belvedere<br/><br/> 
            Charger<br/><br/> 
            Coronet<br/><br/> 
            Dayton<br/><br/> 
            Fury<br/><br/> 
            GTX<br/><br/> 
            Polara<br/><br/> 
            Road Runner<br/><br/> 
            Savoy<br/><br/> 
            Sport Fury<br/><br/> 
            Super Bee<br/><br/> 
            Super Bird
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>E</span><br/> 
            Challenger<br/><br/> Cuda
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BodyType;
