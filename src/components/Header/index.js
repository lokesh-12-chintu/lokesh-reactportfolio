import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link className="heading" to="/">
      <h1>PORTFOLIO</h1>
    </Link>

    <div className="sub-header">
      <Link to="/" className="para">
        Home
      </Link>
      <Link to="/about" className="para">
        About
      </Link>
      <Link to="/skills" className="para">
        Skills
      </Link>
      <Link to="/projects" className="para">
        Projects
      </Link>
      <Link to="/profile" className="para">
        Profile
      </Link>
    </div>
  </div>
)

export default Header
