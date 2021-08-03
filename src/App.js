import React,{useEffect} from 'react';
import Navbar from './component/Navbar';
import './main.scss';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './component/Footer';
import Blog from './pages/Blog';
import NotFound from './pages/404';

function App() {

  useEffect(() => {
    window.AOS.init({
      duration:1200
    });
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/blogs' component={Blog}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
