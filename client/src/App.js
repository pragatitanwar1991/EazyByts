import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Playlist from "./components/Playlist"
import Footer from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import ResumeNew from "./components/ResumeNew";
import Projects from "./components/Projects/Projects";
import background from "./img/backgroundimg.webp";
function App() {
  return (
   <>
   <div style={{ backgroundImage: "url(/backgoundimg.webp)" }}>
  

    <Header />
    <audio src="https://soundcloud.com/parth-mehta-793335998/aahatein-instrumental?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" autoplay></audio>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/playlist' element={<Playlist />} />
      <Route path="/resume" element={<ResumeNew />} />
      <Route path="/project" element={<Projects />} />
    </Routes>
    <Footer />
    </div>
   </>
  );
}

export default App;
