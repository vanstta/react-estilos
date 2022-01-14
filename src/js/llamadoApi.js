

 const url= 'https://www.mockachino.com/b045b644-d886-4e/products/7d6f7710-95d0-4a27-ae6c-b02c6cb0348f'

 
export const obtenerProducto = async () => {
    try {
        
        const res = await fetch (url)
        const data = await res.json()
        console.log(data)
        
        return data


    } catch (error) {
        console.log(error)
    }
}

obtenerProducto()

