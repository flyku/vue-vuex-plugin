// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('@/assets/css/reset.css')
import '@/assets/css/base-pc.css'
import '@/assets/css/common.css'
import '@/assets/css/element.css'
import '@/assets/css/index.css'
// import echarts from 'echarts';


import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router';
import { BrowserRouter,HashRouter } from 'react-router-dom';//比前者多了BrowserRouter形式router
import Root from './router';

const dom = document.getElementById('app')

ReactDOM.render(
    <HashRouter>
        <Root />
    </HashRouter>,
    dom
);