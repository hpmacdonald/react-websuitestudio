import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Index from './pages/Index';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/index' exact component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
