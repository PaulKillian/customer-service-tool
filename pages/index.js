import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import 'animate.css';
import Charger  from '../public/Charger.png'
import Camaro from '../public/Camaro.png'
import Nomad from '../public/Nomad.png'
import RoadRunner from '../public/RoadRunner.png'
import Nova from '../public/Nova.png'
import BelAir from '../public/BelAir.png'
import Barracuda from '../public/Barracuda.png'

export default function Home() {

  useEffect(() => {
      const get = document.getElementById('ul')
      console.log(Camaro)
  })

  const [currentYear, setCurrentYear] = useState('')
  const [currentModel, setCurrentModel] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  
  const years = [
    47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99
  ];

  const models = [
    'Barracuda', 'Bel Air', 'Camaro', 'Cuda', 'Challenger', 
    'Charger', 'Coronet', 'Dart', 'Duster', 'Firebird', 'GTX', 
    'Impala', 'Nova', 'Regal', 'Road Runner', 'Satellite', 
    'Trans Am', 'Valiant', '210', '150', 'Nomad', 'Truck'
  ]

  const images = [
    { model: 
      { name: 'Charger', modelImage: Charger } 
    },
    { 
      model: 
      { name: 'Camaro', modelImage: Camaro } 
    },
    { 
      model: 
      { name: 'Barracuda', modelImage: Barracuda } 
    },
    { 
      model: 
      { name: 'Nomad', modelImage: Nomad } 
    },
    { 
      model: 
      { name: 'Road Runner', modelImage: RoadRunner } 
    },
    { 
      model: 
      { name: 'Nova', modelImage: Nova } 
    }
  ]

  console.log(images)

  const showYear = (event) => {
    setCurrentYear(event.target.innerText)
  }

  const showModel = (event) => {
    setCurrentModel(event.target.innerText)
    images.map((image) => {
      debugger
      if(image.model.name === event.target.innerText) {
        setCurrentImage(image.model.modelImage)
      }
    })
  }

  const clear = () => {
    setCurrentModel('')
    setCurrentYear('')
  }

  if(!currentYear) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <ul className={styles.flex}>
            {years.map((year) => (
              <li
                key={year} 
                onClick={showYear}>{year}
              </li>
          ))}
          </ul>
        </main>
      </div>
    )
  } else if (currentYear && currentModel) {
    return (
      <main className={styles.main}>
        <div className={styles.flex}>
          <h1>{currentYear}</h1>
          <h1>{currentModel}</h1>
            <Image 
              alt={currentModel}
              src={currentImage} 
              width={150} 
              height={100}>
            </Image>
        </div>
        <button onClick={clear}>Clear</button>
      </main>
      
    )
  } else if (currentYear) {
    return (
      <main className={styles.main}>
        <h1 id={'ul'}>{currentYear}</h1>
        <ul className={styles.flex}>
            {models.map((model) => (
              <li 
                key={model} 
                onClick={showModel}>{model}
              </li>
          ))}
        </ul>
        <button onClick={clear}>Clear</button>
      </main>
    )
  }
}
