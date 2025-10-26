import { useContext } from "react"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrderCard from "../../../Components/OrderCard/OrderCard"
import { WaggonContext } from "../../../Context/Context"
import { Link } from "react-router-dom"
function MyOrder() {
    let context = useContext(WaggonContext)
    console.log(context.order?.slice(-1)[0].products.map)
    const currentPath = window.location.pathname
    return(
       <Layout>
        <div className="flex justify-between m-3">
            <Link to="/my-orders">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            
            </svg>
            </Link>
            

            <h1>My order</h1>

            </div>
        <div className="flex-1 px-4">
            
                {
                    context.order?.slice(-1)[0].products.map(product => (
                        <OrderCard 
                            key={product.id}  
                            id={product.id}
                            image={product.images} 
                            title={product.title} 
                            price={product.price}
                            quantity={product.quantity || 1}
                            
                        />
                    ))
                }
            </div>
       </Layout>
        
    )
       
}

export default MyOrder 