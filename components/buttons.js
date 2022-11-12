import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const ButtonClear = (props) => {
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

export const Buttons = (props) => {
  const [buttons, setButtons] = useState([
    'body type', 
    'opg cars', 
    'delivery times'
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
  )
}
