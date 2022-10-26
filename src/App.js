import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
