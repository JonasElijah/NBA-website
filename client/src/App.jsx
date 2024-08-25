import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './routes/Home/home';
import About from './routes/About/about';
import Books from './routes/Books/books';
import Players from './routes/Players/players';
import Predictions from './routes/Predictions/predictions';
import BoxScores from './routes/BoxScores/boxscores';

function App() {
  return ( 
    <>
      <Router>
        <div className="grid-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/players" element={<Players />} />          
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/boxscores" element={<BoxScores />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
