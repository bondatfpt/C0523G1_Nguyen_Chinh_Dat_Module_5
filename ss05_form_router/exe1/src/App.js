import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ContactForm />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
