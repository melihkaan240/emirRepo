import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Discovery } from './pages/Discovery';
import { Stepone } from "./pages/Stepone";
import { Steptwo } from "./pages/Steptwo";
import { Stepthree } from './pages/Stepthree';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/stepone" element={<Stepone />} />
      <Route path="/steptwo" element={<Steptwo />} />
      <Route path="/stepthree" element={<Stepthree />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
