import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import { images } from '../components/images.js'
import { 
  ButtonClear, 
  Buttons,
  ButtonGetClearedData,
  ButtonScreenShot
} from '../components/buttons.js'
import { gsap } from "gsap";
import InfoRender from '../components/infoRender.js'

export default function Home() {
  const [currentYear, setCurrentYear] = useState(null)
  const [currentModel, setCurrentModel] = useState(null)
  const [currentImage, setCurrentImage] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [page, setPage] = useState('')
  const [clearedData, setClearedData] = useState('')

  const tArea = useRef();

  useEffect(() => {
     console.log(screenShot)
    if (currentText) {
      sessionStorage.setItem('notes', currentText);
    }

//     const infoDiv = document.querySelector('info') 
//     let ctx = gsap.context(() => {
//        gsap.from(".info", {
//          opacity: 0, 
//          x: 100, 
//          duration: 1
//        })}, infoDiv);
//        return () => ctx.revert();
  }, []);
 
 
  
  const showYear = (year) => {
    setCurrentYear(year)
  }
  
  const showModel = (model) => {
    setCurrentModel(model)
  }
  
  const updateText = () => {
    const text = document.getElementById('text')
    setCurrentText(text.value)
  }
  
  const modelAndYear = () => {
    if (currentModel && currentYear) {
      return (
        <div className={styles.main2}>
        <div className={styles.pAnd}>
          <p>{currentYear}</p>
          <p>{currentModel}</p>
        </div>
      </div>
      )
    }
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <div>
          <textarea 
            placeholder="notes..."
            id={'text'} 
            onChange={updateText} 
            rows="4" 
            cols="50">
          </textarea>
        </div>
        {
          currentYear 
          ? <RenderModel 
              showModel={showModel} 
              currentModel={currentModel}
              />
          : <div>
              <h2 className={styles.outline}>Click Year Of Vehicle</h2>
              <RenderYear showYear={showYear} />
            </div>
        }
        {modelAndYear()}
        <ButtonClear
          setCurrentYear={setCurrentYear}
          setCurrentModel={setCurrentModel}
        />
        {/* <ButtonGetClearedData 
          clearedData={clearedData}
          setClearedData={setClearedData}
        />
        <div className={styles.clearedData}>
          <p>{clearedData}</p>
        </div> */}
      </div>
      <div className={styles.gridItem}>
        <div className={styles.flexButtons}>
          <Buttons 
            page={page}
            setPage={setPage}
          />
        <ButtonScreenShot />
        </div>
        <div className={styles.buttonBody}>
          <InfoRender 
            clickedButton={page}>
          </InfoRender>
        </div>  
      </div>
    </div>
  )
}
