import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ApsCalculator from './components/ApsCalculator';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Aps"> {/* Use Link to navigate to /Aps */}
          <button>Go to ApsCalculator</button>
        </Link>
        <Routes>
          <Route path="/Aps" element={<ApsCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;