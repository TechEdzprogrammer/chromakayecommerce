import styles from '../stylesheets/Nav.module.css';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
   <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/"><img src="src\assets\ChromaKey.JPG" alt="Logo" width="100" height="50" className="d-inline-block align-text-top"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className={`navbar-nav ${styles.navName}`}>
                    <Link to="/"><div><h3><strong>Home</strong></h3></div></Link>
                    <Link to="/products-page"><div><h3><strong>Products</strong></h3></div></Link>
                  </div>
                </div>
            </div>
        </nav>
   </>
  )
}

export default NavBar;
