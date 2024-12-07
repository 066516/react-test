import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/articles" element={<Articles />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
