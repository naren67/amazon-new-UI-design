import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/checkout'>
                 <Header/>
                <p>checkout</p>
          </Route>
        <Route path='/login'>
                <p>login</p>
          </Route>
          <Route path='/'>
                <Header/>
                <Home/>
                <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
