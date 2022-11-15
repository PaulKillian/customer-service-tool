import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const RenderYear = (props) => {
    const [vehicleYears, setVehicleYears] = useState([]);

    const yearComponent = () => {
       const years = [];
       for(let i = 0; i < 106; i++) {
           years.push(i)
       }
       setVehicleYears(years)
    };
    
    yearComponent()

    return (
        <div className={styles.yearWidth}>
          <ul className={styles.flex}>
            {vehicleYears.map((year) => (
              <li 
                key={year}
                onClick={e => props.showYear(e.target.innerText)}
                >{year}
              </li>
            ))}
          </ul>
        </div> 
    )
}
