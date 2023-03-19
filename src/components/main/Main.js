import { Button } from '@mui/material'
import React from 'react'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.container}>
        <div className={styles.description}>
            <h3>// CSS 2023</h3>
        <h1>
            We make searching for a vehicle easier for you!
        </h1>
        <h2>
            Our engine offers a simple and yet beautiful way to find out more about 100.000+ vehicle models all around the world.
        </h2>
        <a href='#section1'><Button variant="outlined">Search</Button></a>
        </div>

        <div className={styles.image}><img src='https://uploads-ssl.webflow.com/62aa6a4065a03f9b7300ff81/62aa7359ac82d5f266269712_Header%20Image.png'></img></div>
    </div>
  )
}

export default Main