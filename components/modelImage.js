import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const ModelImage = (props) => {
    const image = 
      <div className={styles.imgDim}>
        <Image 
          width={655}
          height={400}
          objectFit='cover'
          alt={'car'}
          src={'/Charger.png'}
        />
      </div>
    
    const renderImage = () => {
      switch(props.currentModel) {
        case 'Charger':
          return {image}
          break;
        }
    }
    
    return (
      <div>
        {renderImage()})
      </div>
  }
