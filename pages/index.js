import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
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
    'Regal', 'Road Runner', 'Satellite', 'Trans Am', 'Valiant',
    '210', '150', 'Nomad', 'Truck'
  ]

  //t

  const showYear = (event) => {
    setCurrentYear(event.target.innerText)
  }

  const showModel = (event) => {
    setCurrentModel(event.target.innerText)
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
              <li onClick={showYear}>{year}</li>
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
          <div className={styles.img} >
            <Image 
              src={`/../public/${currentModel}.jpeg`} 
              width={150} 
              height={100}>
            </Image>
          </div>
          
        </div>
        <button onClick={clear}>Clear</button>
      </main>
      
    )
  } else if (currentYear) {
    return (
      <main className={styles.main}>
        <h1>{currentYear}</h1>
        <ul className={styles.flex}>
            {models.map((model) => (
              <li onClick={showModel}>{model}</li>
          ))}
        </ul>
        <button onClick={clear}>Clear</button>
      </main>
    )
  }
}
