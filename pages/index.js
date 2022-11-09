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
import { Button } from '../components/button.js'

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

  if(currentYear && currentModel) {
    return (
      <>
      <main className={styles.main}>
        <textarea 
          id={'text'} 
          onChange={updateText} 
          rows="4" 
          cols="50">
        </textarea>
        <div className={styles.main2}>
          <div className={styles.pAnd}>
            <p>{currentYear}</p>
            <p>{currentModel}</p>
            <p>{currentBody}</p>
          </div>
          <Button 
            currentYear={currentYear}
            setCurrentYear={setCurrentYear}
            currentModel={currentModel}
            setCurrentModel={setCurrentModel}
          />
       </div>
     </main>
    </>
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
        <Button 
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        />
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
        <Button 
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
        />
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
