// App.jsx
import { useRoutes, BrowserRouter } from "react-router-dom";
import { WaggonContext, WaggonProvider } from "../../../Context/Context";
import Home from "../home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import SignIn from "../SignIn/SignIn";
import NotFound from "../NotFound/NotFound";
import MyOrders from "../MyOrders/MyOrders";
import NavBar from "../../../Components/NavBar/NavBar";
import Layout from "../../../Components/NavBar/Layout/Layout";
import CheckoutSideMenu from "../../../Components/checkoutSideMenu/checkoutSM";
import "./App.css";
import ToggleTheme from "../../../Components/ToggleTheme";
import Electronics from "../Categories/Electronics";
import Clothes from "../Categories/Clothes";
import Furniture from "../Categories/furniture";
import { useContext } from "react";
import SignOn from "../SignOn/SignOn";
import PaymentComponent from "../../../Components/Payment/Payment";

/* AppRoutes: OK que lo declares fuera, pero recuerda que useRoutes()
   debe ejecutarse dentro de un Router — y lo estarás usando dentro de <BrowserRouter>. */
function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders/latest", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/electronics", element: <Electronics /> },
    { path: "/clothes", element: <Clothes /> },
    { path: "/furniture", element: <Furniture /> },
    { path: "*", element: <NotFound /> },
    { path: "/payment", element: <PaymentComponent/> }
  ]);

  return routes;
}

/* Componente que consume el contexto — debe ser hijo de WaggonProvider */
function AppContent() {
  const { theme } = useContext(WaggonContext);
  let context = useContext(WaggonContext)
  let logged = context.isLogged

  const storedUser = localStorage.getItem('userData')

  // Usa valores claros y legibles
  const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
  const color = theme === "dark" ? "#ffffff" : "#333333";


  if (logged == false && storedUser ) {
    return(
      <>
      <SignIn />
      </>
    )
  }

  if (logged == false) {
    return(
      <>
      <SignOn/>
      </>
    )
  }

  
  return (
    <div style={{ backgroundColor, color, minHeight: "100vh", overflowY: 'hidden' }}>
      <BrowserRouter>
      <NavBar />
        <ToggleTheme />
        

        <Layout>
          <AppRoutes />
        </Layout>

        <CheckoutSideMenu />
        
      </BrowserRouter>
      
    </div>
  );
}

/* App: proveedor envolviendo el contenido */
function App() {
  

  

  return (
    <WaggonProvider>
      <AppContent />
    </WaggonProvider>
  );
}

export default App;


