import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const RenderYear = (props) => {
    const [vehicleYears, setVehicleYears] = useState(0);

    const yearComponent = () => {
       const years = [];
       for(i = 0; i < 106; i++) {
           years.push(i)
       }
       setVehicleYears(years)
    };

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
