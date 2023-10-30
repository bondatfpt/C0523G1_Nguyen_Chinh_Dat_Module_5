import './App.css';
import List from './components/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes,Route } from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
    <div >
      <Routes>
     <Route path='/' element={<List></List>}></Route>
     {/* <Route path='/new' element={<Create></Create>}></Route> */}
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
