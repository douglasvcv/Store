import { useEffect, useState } from "react"

function ApiCategory(props){
    const {category="", Title = "Produtos"} = props || {}
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
  
      async function getApi(){
        try {
          const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
          const data = await response.json()
          if(!data){
            console.log("Erro na requisisão")
          }
          setProducts(data)
          console.log(`Resposta dos dados: ${data}`)
        } catch (error) {
          throw new error(error)
        }finally{
            setLoading(false)
        }
      }
      getApi()
    }
    ,[category])

    if(loading) return <p>Carregando</p>    

    return(
      <div>
        <h1>{Title}</h1>
          <ul>
            {products.map((product)=>(
                  <li key={product.id}>
                      <p>{product.title}</p>
                      <p>Preço: R${product.price}</p>
                      <img src={product.image} alt={product.title} width="80"/>
                  </li>
              ))}
          </ul>
      </div>)
}

export default ApiCategory