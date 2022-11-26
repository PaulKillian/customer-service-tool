import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const ModelImage = (props) => {
    if (props.currentModel === 'Charger') {
      return (
        <div className={styles.imgDim}>
          <Image 
            width={655}
            height={400}
            objectFit='cover'
            alt={'car'}
            src={'/Charger.png'}
          />
        </div>
      )
    }
  }
