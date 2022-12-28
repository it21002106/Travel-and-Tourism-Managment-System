import Header from "./Component/Header";
import Addcustomerinfo from "./Component/Addcustomerinfo"
import Allpayment from "./Component/Allpayment";
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Checkout from "./Component/Checkout";
import Cushome from "./Component/CHome/Cushome";
import AdminHome from "./Component/AdminHome";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";
import CusPackages from "./Component/CHome/CusPackages";
import EditPayment from "./Component/Edit";
import GenRepo from "./Component/GenExpensesRepo";





export default function  App() {
  return (
    <Router>  
         
      <Routes>
        <Route path = "/SupReport" element ={<GenRepo/>} />
        <Route path = "" element ={<Cushome/>} />
        <Route path = "/add/:pacname" element ={<Addcustomerinfo/>} />
        <Route path = "/all" element = {<Allpayment/>} />
        <Route path = "/check" element = {<Checkout/>} /> 
        <Route path = "/Update/:id" element = {<EditPayment/>} />
        <Route path = "/Home" element = {<AdminHome/>} />
        <Route path = "/Log" element = {<Login/>} />
        <Route path = "/Reg" element = {<Register/>} />
        <Route path = "/package" element = {<CusPackages/>} />
        </Routes>     
</Router>
  );
}
