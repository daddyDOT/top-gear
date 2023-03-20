import { Button } from "@mui/material"
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.root}>
        <div className="company"><h2>TopGear</h2></div>
        <div className={styles.options}>
            <a href='#section1'>Basic information</a>
            <a href='#section2'>More information</a>
            <a href='#section2'>Additional information</a>
        </div>
        <a href='#section2'><Button variant="contained">Go down</Button></a>
    </div>
  )
}

export default Header