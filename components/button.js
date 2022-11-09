import styles from '../styles/Home.module.css'

export const Button = (props) => {
  return (
    <button onClick=(props.clear) className={styles.button30}>clear</button>
  )
}
