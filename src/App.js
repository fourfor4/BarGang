import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './Layouts/Navbar';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import Feature from './Components/Feature';
import Viproom from './Components/Viproom';
import Roadmap from './Components/Roadmap';
import Team from './Components/Team';
import FuturePlan from './Components/FuturePlan';
import Breakdown from './Components/Breakdown';
import Faq from './Components/Faq';



function App() {
  return (
      <div className="body">
        <Navbar />
        <Dashboard />
        <About />
        <Feature />
        <Viproom />
        <Roadmap />
        <FuturePlan />
        <Breakdown />
        <Team />
        <Faq />
      </div>
  );
}

export default App;
