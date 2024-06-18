
import './App.css';
import { Deliver } from './pages/Deliver/Deliver';
import Question from './pages/FAQ/Question';
import { QuestionBanner } from './pages/FAQ/QuestionBanner';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import {HeroPage} from './pages/HeroPage/HeroPage'
import { RequestForm } from './pages/RequestForm/RequestForm';
import { PaymentPage } from './pages/paymet/PaymentPage';
import { BookForm } from './pages/review-form/BookForm';
import { Review } from './pages/review-form/Review';
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
      <Question/>
      <QuestionBanner/>
      <Review/>
      <BookForm/>
      <Footer/>
    </div>
  );
}

export default App;
