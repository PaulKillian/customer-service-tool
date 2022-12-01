import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";

export const ModelImage = (props) => {
  const [srcValid, setSrcValid] = useState(null);
  
  const loadImg = () => {
    const carImg = document.querySelector('.carImg')
    let ctx = gsap.context(() => {
      gsap.from(carImg, {
        opacity: 0, 
        duration: 1
      })}, carImg);

    props.setLoaded(true)
    
    return () => ctx.revert();
  }
  
  return (
      <div className='carImg'>
      {props.currentModel && props.currentYear
          ? <div 
            className={props.loaded
            ? styles.imgDim
            : null
          }>
            <Image
              id={'img'}
              width={655}
              height={400}
              objectFit='cover'
              alt={'car'}
              loading='eager'
              src={`/${props.currentYear} ${props.currentModel}.webp`}
              onLoad={loadImg}
              onError={setSrcValid(false)}
            />
          </div>
        : null
        }
      </div>
    )
  }
