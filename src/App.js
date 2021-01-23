import './App.css';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Index from './pages/Index';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Hero from './components/Hero';

function App() {
  return (
    <div className="app-container">
      <Router>
     
        <ScrollToTop />
        <Switch>
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/' exact component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
