import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Facilities from './component/facilities/Facilities';
import BackRe from './component/back_re/BackRe';
import CreateRoom from './component/facilities/CreateRoom';
import UpdateVilla from './component/facilities/UpdateVilla';
import UpdateHouse from './component/facilities/UpdateHouse';
import UpdateRoom from './component/facilities/UpdateRoom';
import Contract from "./component/contract/Contract";

function App() {
  return (
    <div>
      <Header/>
      <BackRe/>
      <Facilities/>
      <Footer/>
      </div>
  );
}
export default App;
