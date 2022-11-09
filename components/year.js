import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const RenderYear = (props) => {
    const [year40Element, setYear40Element] = useState(0)
    const years = [
        47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
        89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 00, 01, 02
      ];

    const yearComponent = () => {
        for(i = 0; i < years.length; i++) {
            if (i < 50) {
                setYearElement([47, 48, 49])
            }
        }
    }

    return (
        <div className={styles.yearWidth}>
            {/* <h1 id={'ul'}>{currentYear}</h1> */}
            <ul className={styles.flex}>
                {years.map((year) => (
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
