function Navbar(){


    return (
        <>
        <div className="top_Nav">

            <a href="#" target="blank">Bem-vindo, faça seu login ou cadastre-se</a>
            <input type="text" name="item" id="item" placeholder="O que procura?"/>
            <a href="#">Meu carrinho</a>
        </div>
        <div className="itens">
        <ul>
            <li><a href="#">Para o celular</a></li>
            <li><a href="#">Capas</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="">Fones de ouvido</a></li>
            <li><a href="">Carregadores</a></li>
            <li><a href="">Cabos</a></li>
            <li><a href="">Acessórios</a></li>
            <li><a href="">Mochilas</a></li>
            <li><a href="">Gamer</a></li>
        </ul>
        </div>
        
        </>
    )
}

export default Navbar