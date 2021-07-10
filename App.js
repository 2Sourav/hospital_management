
import './App.css';
import {Route,BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Check from './Check'

import Form from './Form';
import Randomotp from './Randomotp'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Navbar />
    
      <Home />
      </Route>

      <Route path="/check">
      <Navbar />
    
      <Check />
      </Route>

      <Route path="/form">
      <Navbar />
    
      <Form />
      </Route>

      <Route path="/randomotp">
      <Navbar />
    
      <Randomotp />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
