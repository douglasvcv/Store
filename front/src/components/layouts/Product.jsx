import { useEffect, useState } from "react"

function Product() {

    const [id, setId] = useState("")
    const [product, setProduct] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function searchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!response) {
                    console.log("Erro na requisição")
                }
                const data = await response.json()
                setProduct(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        searchProduct()
    }, [])
    if (loading) {
        <p>Carregando...</p>
    }
    return (
        <>
    
        </>
    )
}

export default Product