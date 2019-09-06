/*
   Test 主页
*/
import React, { Component } from 'react';
import { Route,Redirect, Link, NavLink } from 'react-router-dom';
import Test1 from '../components/test1';
import Test2 from '../components/test2';

class Test extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="test-container">
                <ul>
                    <li><NavLink activeClassName="tab1" to={`${this.props.match.path}/test1`}>路由11</NavLink></li>
                    <li><NavLink activeClassName="tab1" to={`${this.props.match.path}/test2`}>路由22</NavLink></li>
                </ul>
                <Route exact path="/test" render={()=><Redirect to="/test/test1" />} />
                <Route path="/test/test1" component={Test1} />
                <Route path="/test/test2" component={Test2} />
            </div>
        );
    }
}
export default Test;