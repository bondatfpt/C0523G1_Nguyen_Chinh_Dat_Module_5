import MedicalDeclarationForm from "./components/MedicalDeclarationForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 


function App() {
  return (
    <div >
     <MedicalDeclarationForm/>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
