import './App.css';
import RushForm from './pages/RushForm/RushForm'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={RushForm} />
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
