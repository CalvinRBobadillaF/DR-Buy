
import { useState, useEffect } from "react"
import Layout from "../../../Components/NavBar/Layout/Layout"
import Card from "../../../Components/NavBar/Card/Card"
import ProductDetail from "../../../Components/Product Detail/PDetail"

function Clothes() {
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

    let clothes = items.filter(item => item.category.name === 'Clothes')

    
    return (
        <Layout>
            <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
            {
                clothes?.map((item => (<Card key={item.id} data={item}/>)
                
                ))
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Clothes