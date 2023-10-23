import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Facilities from "./component/facilities/Facilities";
import Customer from "./component/customer/Customer";
import Contract from "./component/contract/Contract";
import CreateVilla from "./component/facilities/CreateVilla";
import CreateHouse from "./component/facilities/CreateHouse";
import CreateRoom from "./component/facilities/CreateRoom";
import UpdateVilla from "./component/facilities/UpdateVilla";
import UpdateHouse from "./component/facilities/UpdateHouse";
import UpdateRoom from "./component/facilities/UpdateRoom";
import CreateCustomer from "./component/customer/CreateCustomer"
import UpdateCustomer from "./component/customer/UpdateCustomer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Facilities />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/customers/new" element={<CreateCustomer/>} />
        <Route path="/customers/update/:id" element={<UpdateCustomer/>} />
        <Route path="/contracts" element={<Contract />} />
        <Route path="/villa/new" element={<CreateVilla />} />
        <Route path="/house/new" element={<CreateHouse />} />
        <Route path="/room/new" element={<CreateRoom />} />
        <Route path="/villa/update/:id" element={<UpdateVilla />} />
        <Route path="/house/update/:id" element={<UpdateHouse />} />
        <Route path="/room/update/:id" element={<UpdateRoom />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
