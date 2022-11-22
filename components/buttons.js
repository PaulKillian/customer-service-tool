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
    'delivery times',
//     'extensions',
    'return label',
    'parts pull',
    'tracer',
    'truck freight'
  ])
  

  const createPage = (clicked) => {
    props.setPage(clicked)
  }
  
  return (
    <>
      <div>
        {buttons.map((button, index) => (
          <button 
            className={index > 2 
              ? styles.button29 
              : styles.button31
            }
            role="button"
            key={index}
            onClick={() =>{createPage(button)}}>{button}
          </button>
        ))}
      </div>
    </>
  )
}

export const ButtonGetClearedData = (props) => {
  const getData = () => {
    props.setClearedData(sessionStorage.getItem('notes'))
  }
                         
  return (
    <button 
      className={styles.button28}
      onClick={getData}
    >get cleared data
    </button>
  )
}

export const ButtonScreenShot = (props) => {
  const screenShot = () => {
//     props.setScreenShot(true)
    if (window.dispatchEvent) {
      window.dispatchEvent(new KeyboardEvent('keydown', {
        "key": "s",
        "keyCode": 83,
        "which": 83,
        "code": "KeyS",
        "location": 0,
        "altKey": false,
        "ctrlKey": false,
        "metaKey": true,
        "shiftKey": true,
        "repeat": false
      }))
//       setScreenShot(false)
    }
  }

  return (
    <button 
      className={styles.screenShot}
      onClick={screenShot}
    >screenshot
    </button>
  )
}
