import { useEffect, useState } from "react"

async function ApiCategory({category,Title}){
   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
    const fetchData = async () =>{

        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            if(!response.ok){
                throw new error("Erro na requisição. Verifique os dados")
                
            }
            const data = await response.json()
            console.log(data)
            setLoading(false)
            setData(data)
            return data
        } catch (error) {
            setLoading(false)
            setError(error)
            console.log(`Erro: ${error}`)
        }
    }
        fetchData()

    }, [])

    if(loading) return <p> Carregando...</p>
    if(error) return <p>Error: {error}</p>
    return <>
    <div>
        <h1>{Title}</h1>
        <ul>
            {data.map((item) => (
                <li key={item.id}>ID: {item.id}</li>
            ))}
        </ul>
    </div>
    </>
}

export default ApiCategory