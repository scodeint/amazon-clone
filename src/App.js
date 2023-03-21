import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./Checkout";
import './App.css';
import Header from './Header';
import Home from './Home';


function App() {
  return (
    //BEM
    <div className="App">
      
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
    </div>
  
  );
}

export default App;
