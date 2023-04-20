import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          MY MOVIES
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/about">
          MY PROFILE
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          GET QUOTE
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          LOGOUT
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
