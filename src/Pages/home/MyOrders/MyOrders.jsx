import { useContext } from "react"
import { WaggonContext } from "../../../Context/Context"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrdersCard from "../../../Components/OrdersCard/OrdersCard"
import { Link } from "react-router-dom"
function MyOrders() {
    const context = useContext(WaggonContext)
    console.log(context.order)

    if (context.order == 0) {
        return(
            <div>No has tenido una orden reciente ahora mismo, crea una para verla.</div>
        )
    }
    
    return(
        
        <Layout>
            
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/`}> 
                <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>+
                </Link>
            ))}
            
        </Layout>
    )
}

export default MyOrders