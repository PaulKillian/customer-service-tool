import styles from '../styles/BodyType.module.css'
import { 
    returnLabel, 
    bodyType, 
    opg, 
    deliveryTimes, 
    tracer, 
    truckFreight,
    extensions,
    catalogPartNumbers,
    truckDifferances
} from './info.js'
import cal from './calculator.js'

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
         {props.clickedButton === 'tracer' &&
           tracer()}
         {props.clickedButton === 'truck freight' &&
           truckFreight()}
         {props.clickedButton === "catalog part#'s" &&
           catalogPartNumbers()}
         {props.clickedButton === "parts" &&
           parts()}
         {props.clickedButton === "truck differences" &&
           truckDifferances()}
         {props.clickedButton === "calculator" &&
           cal()}
       </div>
   )
}

export default InfoRender;
