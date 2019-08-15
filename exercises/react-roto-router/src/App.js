import React from 'react';
import Navbar from './Navbar';

import Home from './Home';
import About from './About';
import ProductList from './ProductList';

import './App.css'

import {Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
                <h1>Howdy World</h1>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/products" component={ProductList} />
                Route path="/products/:_id" component={Product}/>
            </Switch>
        </div>
    );
};

export default App;