
import { useState, useEffect } from "react"
import Layout from "../../../Components/NavBar/Layout/Layout"
import Card from "../../../Components/NavBar/Card/Card"
import ProductDetail from "../../../Components/Product Detail/PDetail"

function Furniture() {
    const [items, setItems] = useState([])
    const API = 'https://api.escuelajs.co/api/v1/products'
    useEffect(() => {
        fetch(API)
        .then(
            response => response.json()

        ).then(
            data => setItems(data)
        ).catch(
        error => alert(error)
            
        )
    }, [])

    console.log(items)

    let furniture = items.filter(item => item.category.name === 'Furniture')

    
    return (
        <Layout>
            <div className="grid gap-4 md:w-[90vw] sm:grid-cols-2 sm:w-[90vw] grid-cols-1 w-100 lg:grid-cols-4">
            {
                furniture?.map((item => (<Card key={item.id} data={item}/>)
                
                ))
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Furniture