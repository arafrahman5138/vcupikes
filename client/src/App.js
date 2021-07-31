import './App.css';
import RushForm from './pages/RushForm/RushForm'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RushEvents from './pages/RushEvents/RushEvents';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path='/rushevents' component={RushEvents} />
        <Route exact path='/rushform' component={RushForm} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
