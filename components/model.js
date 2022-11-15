import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export const RenderModel = (props) => {
    const [b, setB] = useState({a: 'Barracuda', b: 'Bel Air', c: 'Blazer'})
    const [c, setC] = useState({
            a: 'Camaro',
            b: 'Caprice',
            c: 'Charger',
            d: 'Challenger',
            e: 'Coronet',
            f: 'Cuda'
        })
    const [d, setD] = useState({a: 'Dart', b: 'Duster'})
    const [f, setF] = useState({a: 'Firebird'})
    const [g, setg] = useState({a: 'GTX'})
    const [i, setI] = useState({a: 'Impala'})
    const [m, setM] = useState({a: 'Mustang'})
    const [n, setn] = useState({a: 'Nova', b: 'Nomad'})
    const [r, setR] = useState({a: 'Road Runner', b: 'Regal'})
    const [s, setS] = useState({a: 'Satellite'})
    const [t, setT] = useState({a: 'Trans Am', b: 'Truck'})
    const [v, setV] = useState({a: 'Valiant'})
    const [num, setNum] = useState({a: '150', b: '210'})

    return (
        props.currentModel ? null :
        <div className={styles.flexModel}>
            <div>
                <h4>B</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{b.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{b.b}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{b.c}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{num.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{num.b}</li>
                </ul>
            </div>
            <div>
                <h4>C</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.b}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.c}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.d}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.e}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{c.f}</li>
                </ul>
            </div>
                <div className={styles.flexModelChild}>
                    <div>
                      <h4 className={styles.h4Child}>D</h4>
                      <ul>
                        <li onClick={e => props.showModel(e.target.innerText)}>{d.a}</li>
                        <li onClick={e => props.showModel(e.target.innerText)}>{d.b}</li>
                      </ul>  
                    </div>
                    <div>
                        <h4 className={styles.h4Child2}>F</h4>
                        <ul>      
                            <li onClick={e => props.showModel(e.target.innerText)}>{f.a}</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.h4Child2}>G</h4>
                        <ul>
                        <li onClick={e => props.showModel(e.target.innerText)}>{g.a}</li>  
                        </ul>
                    </div>
                    <div>
                        <h4 className={styles.h4Child2}>I</h4>
                        <ul>
                            <li onClick={e => props.showModel(e.target.innerText)}>{i.a}</li>
                        </ul>
                    </div>
                </div>
            <div>
            <div    >
                <h4>M</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{m.a}</li>
                </ul>
            </div>
            <div>
                <h4 className={styles.h4Child2}>N</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{n.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{n.b}</li>
                </ul>
            </div>
            <div>
                <h4 className={styles.h4Child2}>R</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{r.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{r.b}</li>
                </ul>
            </div>
            </div>
            <div>
                <div className={styles.flexModelChild}>
                <h4>S</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{s.a}</li>
                </ul>
            </div>
            <div>
                <h4 className={styles.h4Child2}>T</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{t.a}</li>
                    <li onClick={e => props.showModel(e.target.innerText)}>{t.b}</li>
                </ul>
            </div>
             <div>
                <h4 className={styles.h4Child2}>V</h4>
                <ul>
                    <li onClick={e => props.showModel(e.target.innerText)}>{v.a}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
