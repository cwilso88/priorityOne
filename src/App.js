import './sass/main.scss'
import Topimg from '../src/components/Topimg'
import Header from './components/Header'
import EndUserSupport from './components/EndUserSupport'
import WhyGetHelp from './components/WhyGetHelp'

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <WhyGetHelp />
      <EndUserSupport />
    </div>
  );
}

export default App;
