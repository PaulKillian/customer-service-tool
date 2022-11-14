import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { InfoRender } from './info.js


export const ButtonClear = () => {
  const clear = () => {
    props.setCurrentModel('')
    props.setCurrentYear('')
    const text = document.getElementById('text')
    text.value = ''
  }

  return (
    <button 
      className={styles.button30} 
      role="button"
      onClick={clear}>clear
    </button>
  )
}

export const Buttons = () => {
  const [buttons, setButtons] = useState([
    'body type', 
    'opg cars', 
    'delivery times',
    'return label'
  ])

  const createPage = (clicked) => {
    props.setPage(clicked)
  }
  
  return (
    <div>
      {buttons.map((button, index) => (
        <button 
          className={styles.button31}
          role="button"
          key={index}
          onClick={() =>{createPage(button)}}>{button}
        </button>
      ))}
    </div>
    <InfoRender clickedButton={props.page}>/InforRender>
  )
}
