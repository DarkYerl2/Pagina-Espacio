import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'


function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <=960){
      setButton(false)
    }
    else {
      setButton(true)
    }
  }

   useEffect(() => {
     showButton()
   },[])
  window.addEventListener('resize', showButton);

    return (
        <>
          <nav className="navbar"> 
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
                Spaceter <i class="fas fa-meteor"></i>
              </Link> 
              <div className="menu-icon" onClick={handleClick}>
                <i className ={click ? "fas fa-times" : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Inicio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/planets' className='nav-links' onClick={closeMobileMenu}>
                    Planetas
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Registrate
                  </Link>
                </li>

                
              </ul>
              {button && <Link to='/sign-up'><Button buttonStyle='btn--outline'> Registrate </Button></Link>}
            </div>
          </nav>
        </>
    )
}

export default Navbar
