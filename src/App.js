import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import StripeContainer from './api/stripeContainer';
import Routes from './config/Routes';
import Card from './components/card/card';
import FormCard from './components/formCard/formCard';

function App() {
    return (

      <BrowserRouter>
      
            <Route render={props => (
                <>
                    <Header />
                    <Routes/>
                    <Footer/>
                </>
            )}/>
        </BrowserRouter>
    );
}

export default App;
