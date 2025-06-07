import "./App.css";
import "../bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import CustomerDashboard from "./pages/CustomerDashboard";
import OrderDetails from "./pages/OrderDetails";





function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister = {true} />}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/servicedetails/:id' element={<ServiceDetails/>}/>
        <Route path='/customer' element={<CustomerDashboard/>}/>
        <Route path='order_details/:id' element={<OrderDetails/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
