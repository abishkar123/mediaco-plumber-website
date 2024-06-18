
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import { Header } from './pages/Header/Header';
import {HeroPage} from './pages/HeroPage/HeroPage'
import { RequestForm } from './pages/RequestForm/RequestForm';
import { PaymentPage } from './pages/paymet/PaymentPage';
import { ServicePage } from './pages/servicespage/ServicePage';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
      <ServicePage/>
      <Deliver/>
      <PaymentPage/>
     
      
    </div>
  );
}

export default App;
