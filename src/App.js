import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Slider from './Component/Slider/Slider';
import Product from './Component/Product/Product';
import AddCard from './Component/AddCard/AddCard';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Banner from './Component/Banner/Banner';
import Product_Slider from './Component/Product_Slider/Product_Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AddCard/>
      <About/>
      <Product_Slider/>
      <Banner/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
