import { Calculator } from "react-calculatxr";
import "react-calculatxr/dist/react-calculatxr.css";
import styles from '../styles/Cal.module.css'

const cal = () => {
    return (
      <div className={styles.cal}>
        <Calculator /> 
      </div> 
    )
}

export default cal
