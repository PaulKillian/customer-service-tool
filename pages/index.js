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
import { ButtonClear, ButtonHubspot, ButtonBodyType, ButtonShipping, ButtonOPG } from '../components/button.js'
import { gsap } from "gsap";
import BodyType from '../components/bodytype.js'
import HubSpot from '../components/hubspot.js'
import OPG  from '../components/opg.js'

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
  
  const createPage = (page) => {
    
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
          <div className={styles.flex}>
            {/* <ButtonHubspot 
            page={page}
            setPage={setPage}
            /> */}
            <ButtonBodyType 
              page={page}
              setPage={setPage}
            />
            {/* <ButtonShipping 
              page={page}
              setPage={setPage}
            /> */}
            <ButtonOPG 
             page={page}
              setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
           {page === 'body' && <BodyType />}
           {page === 'hubspot' && <HubSpot />}
           {page === 'opg' && <OPG />}
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
          <div className={styles.flex}>
            {/* <ButtonHubspot 
              page={page}
              setPage={setPage}
              /> */}
            <ButtonBodyType 
              page={page}
              setPage={setPage}
            />
            {/* <ButtonShipping 
              page={page}
              setPage={setPage}
            /> */}
            <ButtonOPG 
             page={page}
              setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
            {page === 'body' && <BodyType />}
            {page === 'hubspot' && <HubSpot />}
            {page === 'opg' && <OPG />}
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
          <div className={styles.flex}>
            {/* <ButtonHubspot 
              page={page}
              setPage={setPage}
            /> */}
            <ButtonBodyType 
             page={page}
              setPage={setPage}
            />
            {/* <ButtonShipping 
              page={page}
              setPage={setPage}
            /> */}
            <ButtonOPG 
             page={page}
              setPage={setPage}
            />
          </div>
          <div className={styles.buttonBody}>
           {page === 'body' && <BodyType />}
           {page === 'hubspot' && <HubSpot />}
           {page === 'opg' && <OPG />}
          </div>
        </div> 
      </div>
    )
  }
}
