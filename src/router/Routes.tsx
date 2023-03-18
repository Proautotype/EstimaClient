import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AuthView from '../views/Auth/AuthView';
import Home from '../views/Home/Home';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Home/>}>
       <Route path='auth' element={<AuthView/>}/>   
    </Route>
  )
);