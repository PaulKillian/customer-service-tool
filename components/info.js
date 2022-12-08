import styles from '../styles/BodyType.module.css'
import iframe from '../styles/Home.module.css'
import Image from 'next/image'

export const bodyType = () => {
  return (
    <div className={'info'} >
      <div className={styles.bodyFlex}>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>A</span><br/> 
            Barracuda<br/> Dart<br/> Demon<br/> Duster<br/> Lancer<br/> Scamp
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
          <span className={styles.h4Design}>B</span><br/> 
            330 & 440<br/> 
            Belvedere<br/> 
            Charger<br/> 
            Coronet<br/> 
            Dayton<br/> 
            Fury<br/>
            GTX<br/> 
            Polara<br/> 
            Road Runner<br/> 
            Savoy<br/> 
            Sport Fury<br/> 
            Super Bee<br/> 
            Super Bird
          </h3>
        </div>
        <div>
          <h3 className={styles.bodyMargin}>
            <span className={styles.h4Design}>E</span><br/> 
            Challenger<br/> Cuda
          </h3>
        </div>
      </div>
    </div>
  )
}

export const deliveryTimes = () => {
  return (
    <div className={'info'}>
       <h3>
        <span className={styles.h4Design}>Zone</span><br/>
        2 & 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2-3&nbsp;days<br/> 
        4 & 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3-5&nbsp;days<br/>
        6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5-7&nbsp;days<br/> 
        7 & 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7-10&nbsp;days
       </h3>
    </div>
  )
}

export const opg = () => {
   return (
    <div className={'info'}>
        <h3><span className={styles.h4Design}>CAR</span><br/> 
            Bonneville(59-76)<br/> Cadillac(54-76)<br/>
            Catalina(59-76)<br/> Chevelle(64-77)<br/> 
            Cutlass(61-77)<br/> El Camino(64-87)<br/> 
            Grand Prix(62-77)<br/> GTO(64-73)<br/> 
            Lemans(61-73)<br/> Malibu(78-83)<br/> 
            Monte Carlo(71-88)<br/> Riviera(63-76) 
            <br/> Skylark(61-72)<br/> Tempest(61-71)
            <br/><br/>Phone# 1‑800‑243‑8355
        </h3>
    </div>
  )
}

// export const extensions = () => {
//   return (
//      <div className={'info'}>
//       <div className={iframe.styleIframe}>
//         <Image src={extensionsJpg}
//           alt={'extensions'}
//           width="400" 
//           height="900" 
//         />
//       </div> 
//      </div>
//   )
// }

export const returnLabel = () => {
  return (
     <div className={'info'}>
      <div className={iframe.styleIframe}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc2IB5w3jt28UKSCdvMHe2PeZ-N-d9BkOCU5Qv_c5s6ynnjJA/viewform" 
          width="640" 
          height="700" 
          frameBorder="0" 
          webkitallowFullScreen="" 
          mozallowFullScreen="" 
          allowFullScreen="">
        </iframe>
      </div> 
     </div>
  )
}

export const partsPull = () => {
  return (
     <div className={'info'}>
      <div className={iframe.styleIframe}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIoERmkVQM1Z2chi7NObpTg2mr3qc-JBufYq7ZyIY1dm585w/viewform" 
          width="640" 
          height="700" 
          frameBorder="0" 
          webkitallowFullScreen="" 
          mozallowFullScreen="" 
          allowFullScreen="">
        </iframe>
      </div> 
     </div>
  )
}

export const tracer = () => {
  return (
     <div className={'info'}>
      <div className={iframe.styleIframe}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdwr9vxvsd3KIzVdp7C5uPtwXzRVl8CYoO5SdKFTR30Lzvlkg/viewform?gxids=7628" 
          width="640" 
          height="700" 
          frameBorder="0" 
          webkitallowFullScreen="" 
          mozallowFullScreen="" 
          allowFullScreen="">
        </iframe>
      </div> 
     </div>
  )
}

export const truckFreight = () => {
  return (
     <div className={'info'}>
      <div className={iframe.styleIframe}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSMXwKpDCXDwSFnJedIKdGgqlHDe3rpBJovE28XisCUoQgyA/viewform" 
          width="640" 
          height="700" 
          frameBorder="0" 
          webkitallowFullScreen="" 
          mozallowFullScreen="" 
          allowFullScreen="">
        </iframe>
      </div> 
     </div>
  )
}

export const catalogPartNumbers = () => {
  return (
    <div className={'info'}>
       <h3>
        <span className={styles.h4Design}>Part#&apos;s</span><br/>
        Camaro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ccatalog<br/> 
        Firebird&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fcatalog<br/>
        Nova&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ncatalog<br/> 
        Impala&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bcatalog<br/>
        Truck&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tcatalog<br/>
        Tri 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TFcatalog<br/>
        Regal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RGcatalog<br/>
        Mustang&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FMcatalog<br/> 
        Mopar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mcatalog<br/> 
       </h3>
    </div>
  )
}

export const Parts = (props) => {
  const yearAndModel = `${props.currentYear, props.currentModel}`
  let partName = ''
  let links = []
  switch (yearAndModel) {
    case '62 Impala':
      partName = 'Drop Spindle'
      links = [{
          link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/bs7001.html",
          link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/153638.html"
        }]
    break;
    case '64 Impala': 
      partName = 'SS Side Molding Set'
      links = [{
          link: "https://www.classicindustries.com/product/1964/chevrolet/impala/parts/b9206.html"
        }]
    break;
    default:
      null
  }

  return (
    <div>
      {links.map((link, index) => (
        <a 
          href={link} 
          key={index}
        >{partName}</a>
      ))}
    </div>
  )
};

export default Parts;
