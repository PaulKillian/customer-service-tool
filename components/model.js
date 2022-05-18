import styles from '../styles/Home.module.css'

export const RenderModel = (props) => {
    const models = [
        'Barracuda', 'Bel Air', 'Camaro', 'Cuda', 'Challenger', 
        'Charger', 'Coronet', 'Dart', 'Duster', 'Firebird', 'GTX', 
        'Impala', 'Nova', 'Regal', 'Road Runner', 'Satellite', 
        'Trans Am', 'Valiant', '210', '150', 'Nomad', 'Truck'
      ]

    return (
        <div>
            {/* <h1 id={'ul'}>{currentYear}</h1> */}
            <ul className={styles.flex}>
                {models.map((model) => (
                <li 
                    key={model}
                    onClick={e => props.showModel(e.target.innerText)}
                    >{model}</li>
            ))}
            </ul>
        </div>
    )
}