
import { useState, useEffect } from "react"
import Layout from "../../../Components/NavBar/Layout/Layout"
import Card from "../../../Components/NavBar/Card/Card"
import ProductDetail from "../../../Components/Product Detail/PDetail"

function Electronics() {
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

    let electronics = items.filter(item => item.category.name === 'Electronics')

    
    return (
        <Layout>
            <div className=" grid md:grid-cols-4 gap-4 md:gap-10 w-full max-w-screen-lg sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 ">
            {
                electronics?.map((item => (<Card key={item.id} data={item}/>)
                
                ))
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Electronics