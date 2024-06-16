
import './App.css';
import { Header } from './pages/Header/Header';
import {HeroPage} from './pages/HeroPage/HeroPage'
import { RequestForm } from './pages/RequestForm/RequestForm';

function App() {
  return (
    <div>
      <Header/>
      <HeroPage/>
      <RequestForm/>
    </div>
  );
}

export default App;
