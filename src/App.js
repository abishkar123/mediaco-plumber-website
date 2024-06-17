
import './App.css';
import { Header } from './pages/Header/Header';
import {HeroPage} from './pages/HeroPage/HeroPage'
import { RequestForm } from './pages/RequestForm/RequestForm';
import { Test } from './pages/Test/Test';
import { Banner } from './pages/servicespage/Banner';
import { ServicePage } from './pages/servicespage/ServicePage';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
      <ServicePage/>
      {/* <Test/> */}
      {/* <Banner/> */}
    </div>
  );
}

export default App;
