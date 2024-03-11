import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skiills/Skills';
import Project from './components/Projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scroll/ScrollUp';
import ReactGA from "react-ga";

const TrackingId = process.env.TRACKING_ID;

ReactGA.initialize(TrackingId);

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
