

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import AppPro from './AppPro';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';




let arr=["one","two","three",3,5,7]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

 <BrowserRouter> 
 <Provider store={store}>
<AppPro/>
</Provider>
 </BrowserRouter> 
 

  </>

  );


