import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";

export const ModelImage = (props) => {
  useEffect(() => {
    const carImg = document.querySelector('carImg') 
    let ctx = gsap.context(() => {
      gsap.from(".carImg", {
        opacity: 0, 
        duration: 1
      })}, carImg);
    return () => ctx.revert();
  })
  
  return (
      <div>
      {props.currentModel && props.currentYear
          ? <div className={styles.imgDim}>
              <Image 
                className='carImg'
                width={655}
                height={400}
                objectFit='cover'
                alt={'car'}
                loading='eager'
                src={`/${props.currentYear} ${props.currentModel}.webp`}
              />
            </div>
          : null
        }
      </div>
    )
  }
