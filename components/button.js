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
  return (
    <button 
      className={styles.button30} 
      role="button"
      >hubspot
    </button>
  )
}

export const ButtonBodyType = (props) => {
  const createPage = () => {
    setPage('body')
  }
  
  return (
    <button 
      className={styles.button30} 
      role="button"
      onClick={createPage}
      >body type
    </button>
  )
}
