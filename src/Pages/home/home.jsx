
import { useState, useEffect, useContext } from "react"
import Layout from "../../Components/NavBar/Layout/Layout"
import Card from "../../Components/NavBar/Card/Card"
import ProductDetail from "../../Components/Product Detail/PDetail"
import { WaggonContext } from "../../Context/Context"

function Home() {
    
    const [items, setItems] = useState(null)
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
    return (
        <Layout>
            <div className="grid md:grid-cols-4 gap-4 grid-cols-1 w-100   lg:grid-cols-4 xl:grid-cols-5 " >
            {
                items?.map((item => (<Card key={item.id} data={item}/>)
                
                ))
            }
            </div>
            <ProductDetail/>
        </Layout>
    )
}

export default Home