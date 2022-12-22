import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const ButtonClear = (props) => {
  const clear = () => {
    props.setCurrentModel('');
    props.setCurrentYear('');
    props.setLoaded(null);
    props.setSrcNoImage(true);
    const text = document.getElementById('text');
    text.value = '';
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
    "catalog part#'s",
    'truck differences',
//     'extensions',
    'return label',
    'tracer',
    'truck freight',
//     'parts'
    
  ])
  

  const createPage = (clicked) => {
    props.setPage(clicked)
  }
  
  return (
    <>
      <div>
        {buttons.map((button, index) => (
          <button 
            className={index > 4 
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

// export const ButtonScreenShot = (props) => {
//   const screenShot = () => {
//     const screeShotButton = document.getElementById('s')
//     s.dispatchEvent(new KeyboardEvent('keydown', {
//        "key": "S",
//        "keyCode": 83,
//        "which": 83,
//        "code": "KeyS",
//        "location": 0,
//        "altKey": false,
//        "ctrlKey": false,
//        "metaKey": false,
//        "shiftKey": true,
//        "repeat": true
//       }))
//   }

//   return (
//     <button
//       id={'s'}
//       className={styles.screenShot}
//       onClick={screenShot}
//     >screenshot
//     </button>
//   )
// }
