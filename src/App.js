import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ProjectInfo from './pages/ProjectInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/project/:id" element={<ProjectInfo></ProjectInfo>}/>
        <Route path="/experience" element={<Experience/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

