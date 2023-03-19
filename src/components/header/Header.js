import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const Header = () => {
  return (
    <div>
        <div className="company">TopGear</div>
        <div className="options">
            <Link to='/:'>Bla</Link>
            <Link to='/:'>Bla</Link>
            <Link to='/:'>Bla</Link>
        </div>
        <div className="button"><Button>a</Button></div>
    </div>
  )
}

export default Header