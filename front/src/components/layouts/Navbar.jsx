import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {


    return (
        <div className={styles.navbar_container}>
            <div className={styles.top_Nav}>
                <a href="/">DevStore</a>
                <input type="text" name="item" id="item" placeholder="O que procura?" />
                <a href="#">Meu carrinho</a>
            </div>
            <div className={styles.navbar_option}>

                <li><Link to="/">
                    Home</Link></li>
                <li><Link to="/masculino">
                    Masculino</Link></li>
                <li><Link to="/feminino">
                    Feminino</Link></li>
                <li><Link to="/joias">
                    Joias</Link></li>
                <li><Link to="/eletronicos">
                    Eletrônicos</Link></li>
            </div>

        </div>
    )
}

export default Navbar