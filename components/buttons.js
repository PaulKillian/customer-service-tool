import styles from '../styles/Home.module.css'
import { useState } from 'react'
import InfoRender from './infoRender.js'


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

export const Buttons = (props) => {
  const [buttons, setButtons] = useState([
    'body type', 
    'opg cars', 
    'delivery times',
    'return label'
  ])
  
  const [pageToRender, setPageToRender] = useState('')

  const createPage = (clicked) => {
    props.setPage(clicked)
    setPageToRender(clicked)
  }
  
  return (
    <>
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
      <InfoRender clickedButton={pageToRender}></InfoRender>
    </>
  )
}
