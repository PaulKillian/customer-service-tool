import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import 'animate.css';
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import { images } from '../components/images.js'
import { EditBlogForm } from '../components/editabelBock.js'
import { initializeApp } from "firebase/app";
import { colors } from '../components/pallette.js'

export default function Home() {
  useEffect(() => {
    const engineUl = document.getElementById('engine')
    if(currentEngine) {
      engineUl.innerHTML = ''
    }
  })

  const [currentYear, setCurrentYear] = useState('')
  const [currentModel, setCurrentModel] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [currentBody, setCurrentBody] = useState('')
  const [currentEngine, setCurrentEngine] = useState('')
  const [color, setColor] = useState(Math.floor(Math.random() * colors.length))
  const [currentText, setCurrentText] = useState('')


  const engines = [272, 383, 400, 440]

  const showYear = (year) => {
    setCurrentYear(year)
  }

  const showModel = (model) => {
    setCurrentModel(model)
    images.map((image) => {
      if(image.model.name === model) {
        setCurrentImage(image.model.modelImage)
        setCurrentBody(image.model.body)
      }
    })
  }

  const showEngine = (event) => {
    setCurrentEngine(event.target.innerText)
  }

  const updateText = () => {
    const text = document.getElementById('text')
    setCurrentText(text.value)
  }

  const clear = () => {
    setCurrentModel('')
    setCurrentYear('')
    setCurrentBody('')
    setCurrentEngine('')
    const text = document.getElementById('text')
    text.value = ''
  }

  if(currentYear && currentModel) {
    return (
      <main className={styles.main}>
        <div className={styles.flex2}>
          <textarea 
            id={'text'} 
            rows="4" 
            cols="50">
          </textarea>
          <select>
            <option>Engine size</option>
            <option>285</option>
            <option>327</option>
            <option>350</option>
            <option>400</option>
            <option>440</option>
          </select>
          <select>
            <option>Type</option>
            <option>Convertible</option>
            <option>Coupe</option>
            <option>Fastback</option>
            <option>Hardtop</option>
            <option>Notchback</option>
            <option>Sedan</option>
            <option>Wagon</option>
          </select>
          <select>
            <option>Model</option>
            <option>SS</option>
            <option>Custom</option>
            <option>Caprice</option>
            <option>Hardtop</option>
            <option>Notchback</option>
            <option>Sedan</option>
            <option>Wagon</option>
          </select>
        </div>    
      </main> 
        <div className={styles.main2}>
          <div className={styles.pAnd}>
            <p>{currentYear}</p>
            <p>{currentModel}</p>
            <p>{currentBody}</p>
          </div>
         <button className={styles.heightButton} onClick={clear}>Clear</button>
       </div>
     </div>
    )
  } if(currentYear) {
    return (
      <main className={styles.main}>
        <textarea 
          id={'text'} 
          onChange={updateText} 
          rows="4" 
          cols="50">
        </textarea>
        <RenderModel 
          showModel={showModel} 
        />
        <button onClick={clear}>Clear</button>
      </main> 
    )
  }
    else {
    return (
      <main className={styles.main}> 
        <textarea 
          id={'text'} 
          onChange={updateText} 
          rows="4" 
          cols="50">
        </textarea>
        {/* <select>{'year'}</select> */}
        <RenderYear showYear={showYear} />
        <button onClick={clear}>Clear</button>
      </main>
    )
  }
} 

  // <ul id={'engine'} className={styles.flex}>
  //           {engines.map((engine) => (
  //             <li 
  //               key={engine} 
  //               onClick={showEngine}>{engine}
  //             </li>
  //           ))}
  //       </ul>

  //test
