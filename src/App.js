import './App.css';
import Navbar from "./components/navbar/Navbar"
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Discovery } from './pages/Discovery';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/discovery" element={<Discovery />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
