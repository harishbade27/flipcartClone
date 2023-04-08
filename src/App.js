
import Navbar from './Component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
