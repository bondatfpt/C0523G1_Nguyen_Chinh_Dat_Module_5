import BookList from "./components/BookList";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Update from "./components/Update";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalConFirm from "./components/ModalConFirm";


function App() {
  return (
    <div>
      <ModalConFirm/>
      <Routes>
        <Route path="/books" element={<BookList />}></Route>
        <Route path="/new" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
