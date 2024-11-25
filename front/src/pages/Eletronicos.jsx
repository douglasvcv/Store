import { useEffect, useState } from "react"


function Eletronicos(){
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [erro, setErro] = useState(null)

   useEffect(()=> {
    const fetchData = async ()=>{
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/men's clothing`)
            if(!response.ok){
                setLoading(false)
                console.log("Erro na requisição")
                
            }
            const data = response.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setErro(error)
        }
    }

    fetchData()
   }, [])
   if(loading) return <p>Carregando...</p>
   if(erro) return <p>Erro: {erro}</p>
   return <>
    <div>
        <ul>
            {data.map(
                (item) => {
                    <li>Id:{item.id} </li>
                }
            )}
        </ul>
    </div>
    </>
}

export default Eletronicos