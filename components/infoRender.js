import styles from '../styles/BodyType.module.css'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { returnLabel, bodyType, opg, deliveryTimes } from './info.js'

const infoRender = (returnedInfo) => {
   useEffect(() => {
    const infoDiv = document.querySelector('info')
      
    let ctx = gsap.context(() => {
    gsap.from(".info", {
      opacity: 0, 
      x: 100, 
      duration: 1
    })}, infoDiv);
    return () => ctx.revert(); // cleanup
   }, []);
  
    return (
    <div className={'info'} >
      <div className={styles.bodyFlex}>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>A</span><br/> 
            Barracuda<br/> Dart<br/> Demon<br/> Duster<br/> Lancer<br/> Scamp
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
          <span className={styles.h4Design}>B</span><br/> 
            330 & 440<br/> 
            Belvedere<br/> 
            Charger<br/> 
            Coronet<br/> 
            Dayton<br/> 
            Fury<br/>
            GTX<br/> 
            Polara<br/> 
            Road Runner<br/> 
            Savoy<br/> 
            Sport Fury<br/> 
            Super Bee<br/> 
            Super Bird
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>E</span><br/> 
            Challenger<br/> Cuda
          </h3>
        </div>
      </div>
    </div>
  )
}

export default BodyType;
