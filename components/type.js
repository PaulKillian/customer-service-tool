import styles from '../styles/Home.module.css'
import { useState } from 'react'

export const type = () => {
    const [typeCar, setTypeCar] = useSate([
        {
            1: ''
        }
    ])
    return (
        <select>

        </select>
    )
}