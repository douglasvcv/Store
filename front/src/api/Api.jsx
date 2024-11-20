async function Api({category}){
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        if(!response.ok){
            throw new error("Erro na requisição. Verifique os dados")

        }
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

export default Api