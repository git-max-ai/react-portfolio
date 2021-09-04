import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      
      <Particles className="particles-canvas" params={{particles: {number: {value: 30, density: {enable: true, value_area: 900}}, shape: { type: "circle", stroke:{ width: 6, color: "#f9ab00"}}}}} />
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <Navbar />
          <Header />
          <About />
          
        </Route>
        <Route path="/about">         
          <About />
                 
        </Route>
        <Route path="/services">         
                <Services />
        </Route>
        <Route path="/portfolio">         
                <Portfolio />
        </Route>
        <Route path="/contact">         
                <Contact />
        </Route>


      </Switch>

      


      {/*<Navbar />
      <Header />
      <About />*/}
      
    </BrowserRouter>
    
    <Services />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;
