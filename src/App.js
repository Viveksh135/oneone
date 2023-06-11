import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Headers from "./components/Headers";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/Headers.scss";
import "./styles/Home.scss";
import "./styles/Contact.scss";
import "./styles/footer.scss";
// import "./styles/Services.scss";
import "./styles/mediaquery.scss";
function App() {
  return (
    <Router>
      <Headers/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
