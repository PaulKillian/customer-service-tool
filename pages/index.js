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
    setCurrentText('')
  }

  if(currentYear && currentModel) {
    return (
      <main className={styles.main}>
        <h2>{currentText}</h2>
        <textarea rows="4" cols="50"></textarea>
        <div className={styles.flex}>
          <h1>{currentYear}</h1>
          <h1>{currentModel}</h1>
          <h1>{currentBody}</h1>
          {/* <Image 
            alt={currentImage}
            src={currentImage}
            height={100}
            width={150}
          /> */}
        </div>
        <button onClick={clear}>Clear</button>
      </main> 
    )
  } if(currentYear) {
    return (
      <main >
        <RenderModel 
          showModel={showModel} 
          currentText={currentText}
        />
        <h1>{currentYear}</h1>
        <button onClick={clear}>Clear</button>
      </main> 
    )
  }
    else {
    return (
      <main className={styles.main}>
        <h2>{currentText}</h2> 
        <textarea 
          id={'text'} 
          onChange={updateText} 
          rows="4" 
          cols="50">
        </textarea>
        <select>{'year'}</select>
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
