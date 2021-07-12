import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router';
import Home from './Home'
import Contact from './Contact';
import Service from './Service';
import About from './About'
import Navbar from './Navbar';
import Footer from './Footer';
const App = () =>{
    return(
        <>
        <div className="page">
        <Navbar />
           <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
           </Switch>
        <Footer />
        </div>
        </>
    );
};
export default App;
