import {Routes,Route} from 'react-router-dom';
import  './app.css';
import Home from './Containers/Home';
import About from './Containers/About';
import Portfolio from './Containers/Portfolio';
import Resume from './Containers/Resume';
import Skills from './Containers/Skills';
import Contact from './Containers/Contact';
import Navbar from './Components/Navbar/index';
function App() {
  return (
    <div >
    <Navbar></Navbar>
    
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/portfolio' element={<Portfolio/>}/>
      <Route  path='/resume' element={<Resume/>}/>
      <Route  path='/skills' element={<Skills/>}/>
      <Route  path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
