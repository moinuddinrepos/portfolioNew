import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './pages/SignUp'
import Footer from './components/Footer';


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </div>
  
  );
}

export default App;
