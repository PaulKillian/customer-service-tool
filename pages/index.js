import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import 'animate.css';
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import { images } from '../components/images.js'
import { EditBlogForm } from '../components/editabelBock.js'
import { initializeApp } from "firebase/app";
import { colors } from '../components/pallette.js'
import { ButtonClear, ButtonHubspot, ButtonBodyType } from '../components/button.js'
import { gsap } from "gsap";
import BodyType from '../components/bodytype.js'

export default function Home() {
  const tArea = useRef(); // create a ref for the root level element (for scoping)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    gsap.from(".box", {
      opacity: 0, 
      y: 100, 
      duration: 1
    })}, tArea);
    return () => ctx.revert(); // cleanup
  }, []);
 
  const [currentYear, setCurrentYear] = useState('')
  const [currentModel, setCurrentModel] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [currentBody, setCurrentBody] = useState('')
  const [currentEngine, setCurrentEngine] = useState('')
  const [color, setColor] = useState(Math.floor(Math.random() * colors.length))
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
  
  const createPage = (page) => {
    
  }
  
  if(currentYear && currentModel) {
    return (
      <>
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
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
                    <p>{currentBody}</p>
                  </div>
                  <ButtonClear 
                    currentYear={currentYear}
                    setCurrentYear={setCurrentYear}
                    currentModel={currentModel}
                    setCurrentModel={setCurrentModel}
                  />
                </div>
               </div>
                <div className="col-sm">
                  <ButtonHubspot />
                  <ButtonBodyType/>
                </div>
          </div>
       </div>
     </main>
    </>
    )
  } if(currentYear) {
    return (
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
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
              <div className="col-sm">
               <ButtonHubspot />
               <ButtonBodyType />
             </div>
            </div>
          </div>
      </main> 
    )
  }
    else {
    return (
      <div className={styles.flex}>
        <div className={styles.main}>
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
        <div>
          <ButtonHubspot />
          <ButtonBodyType 
            page={page}
            setPage={setPage}
          />
          {page === 'body' && <BodyType />}
        </div>
      </div>
    )
  }
}
