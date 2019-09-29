import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPanel from '../components/RegisterPanel'
import LoginPanel from '../components/LoginPanel'
import Home from '../components/Home'
import Profile from '../components/profile'
import Product from '../components/user/master-components/product'

class Paths extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={RegisterPanel} />
                <Route exact path="/Register" component={RegisterPanel}  />
                <Route exact path="/Login" component={LoginPanel} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/product" component={Product} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        )   
    }
}
export default Paths