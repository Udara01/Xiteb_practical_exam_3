import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Importing components for routing
import Header from './components/Header';
import WelcomeSection from './components/Welcome';
import Home from './components/Home'; 
import ServicesSection from './components/Services';
import StatsSection from './components/Stats';
import TestimonialsSection from './components/Testimonials';
import Client from './components/Clients';
import NewsSection from './components/News';
import FooterSection from './components/Footer';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/header" element={<Header />} />
      <Route path="/welcome" element={<WelcomeSection />} />
      <Route path="/services" element={<ServicesSection />} />
      <Route path="/stats" element={<StatsSection />} />
      <Route path="/testimonials" element={<TestimonialsSection />} />
      <Route path="/clients" element={<Client />} />
      <Route path="/news" element={<NewsSection />} />
      <Route path="/footer" element={<FooterSection />} />
      </Routes>
      
    </div>
  );
}

export default App;
