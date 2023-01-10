import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Series from "./pages/Series";
import Movies from "./pages/Movies";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/series" element={ <Series />} />
          <Route path="/movies" element={ <Movies />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
