import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import NavBar from '../NavBar/NavBar';
import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "../Contact/Contact";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import Resume from '../Resume/Resume';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <div className='app-cover'></div>
    </div>
  );
}

export default App;
