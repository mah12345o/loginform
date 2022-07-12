import { BrowserRouter, Route ,Routes } from "react-router-dom";
import About from "./components/pages/About";

import Home from "./components/pages/Home";
 import Navbar from "./components/Navbar";
 

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes >
   <Route path="/" element={<Home/>} />
   
   <Route path="/About" element={<About/>} />
    </Routes>
    
    
    </BrowserRouter>
    </>
  );
}

