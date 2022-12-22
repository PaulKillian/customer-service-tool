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

const parts = (props) => {
   console.log(props.currentYear)
//   const yearAndModel = `${props.currentYear, props.currentModel}`
//   let partName = ''
//   let links = []
//   switch (yearAndModel) {
//     case '62 Impala':
//       partName = 'Drop Spindle'
//       links = [{
//           link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/bs7001.html",
//           link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/153638.html"
//         }]
//     break;
//     case '64 Impala': 
//       partName = 'SS Side Molding Set'
//       links = [{
//           link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/b9206.html"
//         }]
//     break;
//     default:
//       null
//   }

  return (
//     <div>
//       {links.map((link, index) => (
//         <a 
//           href={link} 
//           key={index}
//         >{partName}</a>
//       ))}
      <h1>hi</h1>
//     </div>
  )
};

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
       </div>
   )
}

export default InfoRender;
