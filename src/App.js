import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './comps/Navbar';
import Home from './pages/Home';
import DetailCourse from './pages/DetailCourse';
import Footer from './comps/Footer';

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
         <Route path="/detailCourse/:id" element={<DetailCourse />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
