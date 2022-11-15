import styles from '../styles/BodyType.module.css'
import { returnLabel, bodyType, opg, deliveryTimes } from './info.js'

const InfoRender = (props) => {
    return (
       <div>
         {props.clickedButton === 'body type' &&
           bodyType()}
         {props.clickedButton === 'return label' &&
           returnLabel()}
         {props.clickedButton === 'opg cars' &&
           opg()}
         {props.clickedButton === 'delivery times' &&
           deliveryTimes()}
       </div>
   )
}

export default InfoRender;
