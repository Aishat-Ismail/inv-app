import { RouterProvider } from "react-router-dom"
import Router from "./Router"
import Login from "./authentication/login/Login"
import Create from "./authentication/create/CreateAccount"
import AddSuppliers from "./pages/suppliers/AddSuppliers"
import AddOrders from "./pages/orders/AddOrders"
import AddStore from "./pages/manage/AddStore"
import Landing from "./components/landing/Landing"
// import Landing from "./components/land/Landing"

function App() {

  return (
    <>
    

     
      <RouterProvider router={Router} />
    </>
  )
}

export default App
