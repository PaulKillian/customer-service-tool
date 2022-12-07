import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { RenderYear } from '../components/year.js'
import { RenderModel } from '../components/model.js'
import { ModelImage } from '../components/modelImage.js'
import { 
  ButtonClear, 
  Buttons,
  ButtonGetClearedData,
} from '../components/buttons.js'
import InfoRender from '../components/infoRender.js'
import Parts from '../components/parts.js'

export default function Home() {
  const [currentYear, setCurrentYear] = useState(null)
  const [currentModel, setCurrentModel] = useState(null)
  const [currentImage, setCurrentImage] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [page, setPage] = useState('')
  const [clearedData, setClearedData] = useState('')
  const [loaded, setLoaded] = useState(null)
  const [srcNoImage, setSrcNoImage] = useState(true);

  const tArea = useRef();

  useEffect(() => {
    if (currentText) {
      sessionStorage.setItem('notes', currentText);
    }
  }, [currentText]);
 
  const showYear = (year) => {
    setCurrentYear(year)
  }
  
  const showModel = (model) => {
    setCurrentModel(model)
  }
  
  const updateText = () => {
    const text = document.getElementById('text')
    setCurrentText(text.value)
  }
  
  const modelAndYear = () => {
    if (currentModel && currentYear) {
      return (
        <>
          <div className={styles.main2}>
            <div className={styles.pAnd}>
              <p>{currentYear}</p>
              <p>{currentModel}</p>
            </div>
          </div>
        </>
      )
    }
  }
  
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <div>
          <textarea 
            placeholder="notes..."
            id={'text'} 
            onChange={updateText} 
            rows="4" 
            cols="50">
          </textarea>
        </div>
        {
          currentYear 
          ? <RenderModel 
              showModel={showModel} 
              currentModel={currentModel}
              />
          : <div>
              <h2 className={styles.outline}>Click Year Of Vehicle</h2>
              <RenderYear showYear={showYear} />
            </div>
        }
        {modelAndYear()}
        <ButtonClear
          setCurrentYear={setCurrentYear}
          setCurrentModel={setCurrentModel}
          setLoaded={setLoaded}
          setSrcNoImage={setSrcNoImage}
        />
        <ModelImage 
          currentModel={currentModel}
          currentYear={currentYear}
          loaded={loaded}
          setLoaded={setLoaded}
          srcNoImage={srcNoImage}
          setSrcNoImage={setSrcNoImage}
        />
        {/* <ButtonGetClearedData 
          clearedData={clearedData}
          setClearedData={setClearedData}
        />
        <div className={styles.clearedData}>
          <p>{clearedData}</p>
        </div> */}
      </div>
      <div className={styles.gridItem}>
        <div className={styles.flexButtons}>
          <Buttons 
            page={page}
            setPage={setPage}
          />
        </div>
        <div className={styles.buttonBody}>
          <InfoRender 
            clickedButton={page}>
          </InfoRender>
        </div>  
      </div>
    </div>
  )
}
