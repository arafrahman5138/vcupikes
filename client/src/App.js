import './App.css';
import RushForm from './pages/RushForm/RushForm'
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RushEvents from './pages/RushEvents/RushEvents';
import Home from './pages/HomePage/Home';
import Recruitment from './pages/Recruitment/Recruitment';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/rushevents' element={<RushEvents/>} />
        <Route path='/rushform' element={<RushForm/>} />
        <Route path='/recruitment' element={<Recruitment/>} />
    </Routes>
    </div>
    </>
  );
}

export default App;
