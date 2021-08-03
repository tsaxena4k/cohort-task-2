import React from 'react';
import Navbar from './component/Navbar';
import './main.scss';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './component/Footer';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
