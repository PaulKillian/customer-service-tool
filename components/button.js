import styles from '../styles/Home.module.css'

export const Button = (props) => {
  console.log(props)
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
      onClick={clear} >clear
    </button>
  )
}
