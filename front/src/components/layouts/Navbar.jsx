import {Link} from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar(){


    return (
        <div className={styles.navbar_container}>
        <div className="top_Nav">

            <a href="#" target="blank">Bem-vindo, faça seu login ou cadastre-se</a>
            <input type="text" name="item" id="item" placeholder="O que procura?"/>
            <a href="#">Meu carrinho</a>
        </div>
        <div className={styles.navbar_option}>
        
            <li><Link to="/">
                Home</Link></li>
            <li><Link to="/celular">
                Para o celular</Link></li>
            <li><Link to="/acessorios">
                Acessórios</Link></li>
            <li><Link to="/fones">
                Fones</Link></li>
            <li><Link to="/carregadores">
                Carregadores</Link></li>
        </div>
        
        </div>
    )
}

export default Navbar