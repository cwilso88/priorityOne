import './sass/main.scss'
import Topimg from '../src/components/Topimg'
import Header from './components/Header'
import EndUserSupport from './components/EndUserSupport'
import WhyGetHelp from './components/WhyGetHelp'
import WhyPriorityOne from './components/WhyPriorityOne'
import Services from '../src/components/Services'

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <WhyGetHelp />
      <WhyPriorityOne />
      <Services />
      <EndUserSupport />
    </div>
  );
}

export default App;
