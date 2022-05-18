import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import 'animate.css';
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import Charger  from '../public/Charger.png'
import Camaro from '../public/Camaro.png'
import Nomad from '../public/Nomad.png'
import RoadRunner from '../public/RoadRunner.png'
import Nova from '../public/Nova.png'
import BelAir from '../public/BelAir.png'
import Barracuda from '../public/Barracuda.png'

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


  const images = [
    { model: 
      { 
        name: 'Charger', 
        modelImage: Charger, 
        body: 'B-Body'} 
      },
    { 
      model: 
      { 
        name: 'Camaro', 
        modelImage: Camaro, 
        body: 'B-Body' } 
      },
    { 
      model: 
      { 
        name: 'Barracuda', 
        modelImage: Barracuda, 
        body: 'B-Body' } 
      },
    { 
      model: 
      { 
        name: 'Nomad', 
        modelImage: Nomad, 
        body: 'B-Body' } 
      },
    { 
      model: 
      { 
        name: 'Road Runner', 
        modelImage: RoadRunner, 
        body: 'B-Body' } 
      },
    { 
      model: 
      { 
        name: 'Nova', 
        modelImage: Nova, 
        body: 'B-Body' } 
      }
  ]

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

  const clear = () => {
    setCurrentModel('')
    setCurrentYear('')
    setCurrentBody('')
    setCurrentEngine('')
  }

  // if(!currentYear) {
  //   return (
  //     <div className={styles.container}>
  //       <main className={styles.main}>
  //         <ul className={styles.flex}>
  //           {years.map((year) => (
  //             <li
  //               key={year} 
  //               onClick={showYear}>{year}
  //             </li>
  //         ))}
  //         </ul>
  //       </main>
  //     </div>
  //   )
  // } else if (currentYear && currentModel) {
    if(currentYear && currentModel) {
      return (
        <main className={styles.main}>
          <div className={styles.flex}>
            <h1>{currentYear}</h1>
            <h1>{currentModel}</h1>
            <Image 
              alt={currentImage}
              src={currentImage}
              height={100}
              width={150}
            />
          </div>
          <button onClick={clear}>Clear</button>
        </main> 
      )
    } if(currentYear) {
      return (
        <main className={styles.main}>
          <h1>{currentYear}</h1>
          <RenderModel showModel={showModel} />
          <button onClick={clear}>Clear</button>
        </main> 
      )
    }
      else {
      return (
        <main className={styles.main}>
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
