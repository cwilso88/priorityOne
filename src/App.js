import './sass/main.scss'
import Topimg from '../src/components/Topimg'
import Header from './components/Header'
import Servicesbar from './components/Servicesbar'
import EndUserSupport from './components/EndUserSupport'
import WhyGetHelp from './components/WhyGetHelp'

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <Servicesbar />
      <WhyGetHelp />
      <EndUserSupport />
    </div>
  );
}

export default App;
