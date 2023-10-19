import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import "./App.css";
import Facilities from './component/facilities/Facilities';
import BackRe from './component/back_re/BackRe';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Customer from './component/customer/Customer';

function App() {
  return (
    <div>
      <Header/>
      <BackRe/>
      <Facilities/>
      <Customer/>
      <Footer/>
      </div>
  );
}
export default App;
