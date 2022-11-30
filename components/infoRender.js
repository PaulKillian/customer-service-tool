import styles from '../styles/BodyType.module.css'
import { 
    returnLabel, 
    bodyType, 
    opg, 
    deliveryTimes, 
    partsPull, 
    tracer, 
    truckFreight,
    extensions,
    catalogPartNumbers
} from './info.js'

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
         {props.clickedButton === 'parts pull' &&
           partsPull()}
         {props.clickedButton === 'tracer' &&
           tracer()}
         {props.clickedButton === 'truck freight' &&
           truckFreight()}
         {props.clickedButton === "catalog part#'s" &&
           catalogPartNumbers()}
       </div>
   )
}

export default InfoRender;
