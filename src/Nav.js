import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import NavMenu from './NavMenu';
import Contact from './Contact';
import About from './About';


function Nav() {
    return (
        <div>  
            <NavMenu>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
            </NavMenu>  
        </div>
    )
}

export default Nav
