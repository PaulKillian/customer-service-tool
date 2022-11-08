import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export const RenderModel = (props) => {
    const [b, setB] = useState({a: 'Barracuda', b: 'Bel Air'})
    const [c, setC] = useState({
            a: 'Camaro',
            b: 'Charger',
            c: 'Chall',
            d: 'Coronet',
            e: 'Cuda'
        })
    const [d, setD] = useState({a: 'Dart', b: 'Duster'})
    const [f, setF] = useState({a: 'Firebird'})
    const [g, setg] = useState({a: 'GTX'})
    const [i, setI] = useState({a: 'Impala'})
    const [m, setM] = useState({a: 'Mustang'})
    const [n, setn] = useState({a: 'Nova', b: 'Nomad'})
    const [r, setR] = useState({a: 'Regal', b: 'Road Runner'})
    const [s, setS] = useState({a: 'Satellite'})
    const [t, setT] = useState({a: 'Trans Am', b: 'Truck'})
    const [v, setV] = useState({a: 'Valiant'})
    const [num, setNum] = useState({a: '150', b: '210'})

    return (
        <div className={styles.flexModel}>
            <h4>B</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{b.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{b.b}</li>
            </ul>
            <h4>C</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{c.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{c.b}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{c.c}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{c.d}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{c.e}</li>
            </ul>
            <h4>D</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{d.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{d.b}</li>
            </ul>
            <h4>F</h4>
            <ul>      
                <li onClick={e => props.showModel(e.target.innerText)}>{f.a}</li>
                <ul>
                  <li onClick={e => props.showModel(e.target.innerText)}>{g.a}</li>  
                </ul>
            </ul>
            <h4>I</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{i.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{m.a}</li>
            </ul>
            <h4>N</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{n.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{n.b}</li>
            </ul>
            <h4>R</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{r.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{r.b}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{s.a}</li>
            </ul>
            <h4>T</h4>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{t.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{t.b}</li>
            </ul>
            <ul>
                <li onClick={e => props.showModel(e.target.innerText)}>{v.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{num.a}</li>
                <li onClick={e => props.showModel(e.target.innerText)}>{num.b}</li>
            </ul>
        </div>
    )
}
