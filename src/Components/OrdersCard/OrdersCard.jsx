import { dateTime } from "../../Utils/date";



function OrdersCard(props) {
    const { totalPrice, totalProducts } = props;
    
    return (
         <div className="flex justify-between items-center mb-3 border border-gray-300 rounded-lg p-4 shadow-md bg-white ">
             <p className="text-gray-500 text-sm">{dateTime()}</p>
             <div className="flex flex-col sm:grid-cols-2">
                 <span className="text-lg font-semibold text-gray-800">
                     {totalProducts} {totalProducts > 1 ? "items" : "item"}
                 </span>
                 <span className="text-green-600 font-bold text-xl">
                     ${totalPrice.toFixed(2)}
                 </span>
             </div>
         </div>
     );
 }
 
 export default OrdersCard;