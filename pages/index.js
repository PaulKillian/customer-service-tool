import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import 'animate.css';
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import { images } from '../components/images.js'
import { 
  ButtonClear, 
  Buttons
} from '../components/buttons.js'
import { gsap } from "gsap";
import InfoRender from '../component/infoRender.js'

export default function Home() {
  const tArea = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(".box", {
      opacity: 0, 
      y: 100, 
      duration: 1
    })}, tArea);
    return () => ctx.revert();
  }, []);
 
  const [currentYear, setCurrentYear] = useState('')
  const [currentModel, setCurrentModel] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [page, setPage] = useState('')
  
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
  
  if(currentYear && currentModel) {
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
          <div className={styles.main2}>
            <div className={styles.pAnd}>
              <p>{currentYear}</p>
              <p>{currentModel}</p>
            </div>
            <ButtonClear 
              currentYear={currentYear}
              setCurrentYear={setCurrentYear}
              currentModel={currentModel}
              setCurrentModel={setCurrentModel}
            />
          </div>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.flexButtons}>
            <Buttons
                page={page}
                setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
            <InforRender />
          </div>
        </div>
      </div>  
    )
  } if(currentYear) {
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
        <RenderModel 
          showModel={showModel} 
        />
        <ButtonClear
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        />
        </div>
        <div className={styles.gridItem}>
          <div className={styles.flexButtons}>
            <Buttons 
              page={page}
              setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
            <div className={styles.buttonBody}>
              <InforRender />
            </div>
          </div>  
        </div>
    )
  }
    else {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div ref={tArea}>
            <textarea 
              className={'box'}
              placeholder="notes..."
              id={'text'} 
              onChange={updateText} 
              rows="4" 
              cols="50">
            </textarea>
          </div>
          <h2 className={styles.outline}>Click Year Of Vehicle</h2>
          <RenderYear showYear={showYear} />
          <ButtonClear
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
            currentModel={currentModel}
            setCurrentModel={setCurrentModel}
          />
        </div>
        <div className={styles.gridItem}>
          <div className={styles.flexButtons}>
            <Buttons
              page={page}
              setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
             <div className={styles.buttonBody}>
              <InforRender />
            </div>
          </div>
        </div> 
    )
  }
}
