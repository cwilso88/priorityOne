import './sass/main.scss'
import Topimg from '../src/components/Topimg'
import Header from './components/Header'
import Servicesbar from './components/Servicesbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Topimg />
      <Servicesbar />
      <Footer />

    </div>
  );
}

export default App;
