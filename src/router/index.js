/*
   Root, Router 配置
*/
import React from 'react';
import { Link,Route, Switch, Redirect,NavLink } from 'react-router-dom';
 
import App from '../App';
import Test from '../components/test';
import Main from '../components/main';
import Message from '../components/message';
import Error from '../components/error';
 
const Root = () => (
   <div>
      <Switch>
         <Route
            path="/"
            render={props => (
               <App>
                  <ul className="ul1">
                      <li><NavLink activeClassName="tab" to='/index'>首页</NavLink></li>
                      <li><NavLink activeClassName="tab" to='/message'>主题列表</NavLink></li>
                      <li><NavLink activeClassName="tab" to='/test'>测试</NavLink></li>
                  </ul>
                  <Switch>
                    <Route exact path="/index" component={Main} />
                    <Route path="/index" component={Main} />
                    <Route path="/message" component={Message} />
                    <Route path="/test" component={Test} />
                    <Route exact path="*" render={()=><Redirect to={false?"/error":"/index"} />} />
                    <Route component={Error} />
                  </Switch>
               </App>
            )}
         />
      </Switch>
   </div>
);

export default Root;