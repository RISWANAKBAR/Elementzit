import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import About from './Components/About';
import Events from './Components/Events';
import Webinar from './Components/Webinar';
import Success from './Components/Success';
import Contact from './Components/Contact';
import Faq from './Components/Faq';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousal/>
     <About/>
     <Events/>
     <Webinar/>
     <Success/>
     <Contact/>
     <Faq/>
     <Footer/>
    </div>
  );
}

export default App;
