import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterPanel from '../components/RegisterPanel'
import LoginPanel from '../components/LoginPanel'

class Paths extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={RegisterPanel} />
                <Route exact path="/Register" component={RegisterPanel} />
                <Route exact path="/Login" component={LoginPanel} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        )
    }
}
export default Paths