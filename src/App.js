import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
