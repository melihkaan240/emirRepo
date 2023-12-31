import './App.css';
 import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import { Discovery } from './pages/Discovery';
import { Stepone } from "./pages/Stepone";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/discovery" element={<Discovery />} />
      <Route path="/stepone" element={<Stepone />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
