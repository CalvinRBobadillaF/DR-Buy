import { useContext } from "react"
import { NavLink } from "react-router-dom"
import Layout from "../../../Components/NavBar/Layout/Layout"
import OrderCard from "../../../Components/OrderCard/OrderCard"
import { WaggonContext } from "../../../Context/Context"
import { Link } from "react-router-dom"
function MyOrder() {
    let context = useContext(WaggonContext)
    
    const totalPrice = context.cartProducts.reduce((sum, product) => 
        sum + product.price * (product.quantity || 1), 0
      )

    if (context.order == 0) {
  return (
    <div className="flex items-center justify-center h-screen  ">
      <p className="text-center  text-lg  text-gray-700 ">
       You don't have a recent order, create a new one!
      </p>
    </div>
  );
}

    return(
       <Layout>
        <div className="flex justify-between m-3">
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            
            </svg>
            </Link>
            

            <h1>My order</h1>

            </div>
        <div className="flex flex-col ml-5">
            
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

                <p className="flex justify-center">Total amount: ${totalPrice.toFixed(2)}</p>
            </div>
<NavLink to='/payment'>
            <div>
                <button className="px-15 py-5 bg-blue-950 text-amber-50 absolute bottom-25 right-15 left-15 rounded-md">Pay now</button>

            </div>
            </NavLink>
       </Layout>
        
    )
}
       


export default MyOrder 