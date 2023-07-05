import { Link } from 'react-router-dom'
import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
        
            <li>
                <Link className={styles.menuLink} to="/">HOME</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/">SOBRE</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/">PORTIFOLIO</Link>
            </li>
            <li>
            <Link className={styles.menuLink} to="/">CONTATO</Link>
            </li>
        
    </nav>
  )
}

export default Menu
