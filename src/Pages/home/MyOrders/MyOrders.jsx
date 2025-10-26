import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrdersCard from "../../../Components/OrdersCard/OrdersCard"
import { Link } from "react-router-dom"
function MyOrders(props) {
    const context = useContext(WaggonContext)
    console.log(context.order)
    return(
        
        <Layout>
            
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}> 
                <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
                </Link>
            ))}
            
        </Layout>
    )
}

export default MyOrders