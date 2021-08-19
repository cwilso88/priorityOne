import './sass/main.scss'
import Topimg from '../src/components/Topimg'
import Header from './components/Header'
import WhyGetHelp from './components/WhyGetHelp'
import WhyPriorityOne from './components/WhyPriorityOne'
import Services from '../src/components/Services'
import Features from '../src/components/Features'
import Benefits from '../src/components/Benefits'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <WhyGetHelp />
      <WhyPriorityOne />
      <Services />
      <Features />
      <Benefits />
      <Footer /> 
    </div>
  );
}

export default App;
