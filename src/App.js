import { Routes, Route , Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Error from './Error';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route path='*' element={<Error/>} />
        {/* <Navigate replace to="/"></Navigate>
        <Route path="/t" element={<Navigate replace to="/"/>} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
