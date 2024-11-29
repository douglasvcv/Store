import { useEffect, useState } from "react"


function Eletronicos(){
  const [products, setProducts] = useState([])
  useEffect(
    () =>{
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response)=>{response.json()})
        .then((data)=>setProducts(data))
        .catch((error)=>console.error(`Erro ao buscar dados ${error}`))
    }
  ,[])
  return(
    <div>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    <p>{product.title}</p>
                    <p>Preço: R${product.price}</p>
                    <img src={product.image} alt={product.title} width="80"/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Eletronicos