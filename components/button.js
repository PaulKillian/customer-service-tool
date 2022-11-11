import styles from '../styles/Home.module.css'

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

export const ButtonHubspot = (props) => {
  const createPage = () => {
    props.setPage('hubspot')
  }

  return (
    <button 
      className={styles.button31} 
      role="button"
      onClick={createPage}
      >hubspot
    </button>
  )
}

export const ButtonBodyType = (props) => {
  const createPage = () => {
    props.setPage('body')
  }
  
  return (
    <button 
      className={styles.button31} 
      role="button"
      onClick={createPage}
      >body type
    </button>
  )
}

export const ButtonShipping = (props) => {
  const createPage = () => {
    props.setPage('shipping')
  }
  
  return (
    <button 
      className={styles.button31} 
      role="button"
      onClick={createPage}
      >shipping
    </button>
  )
}

export const buttonOPG = (props) => {
  const createPage = () => {
    props.setPage('opg')
  }
  
  return (
    <button 
      className={styles.button31} 
      role="button"
      onClick={createPage}
      >shipping
    </button>
  )
}
