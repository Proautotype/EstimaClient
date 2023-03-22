import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import AuthView from '../views/Auth/AuthView';
import Home from '../views/Home/Home';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<Outlet/> }>
       <Route path='/' element={<Home/>}/>   
       <Route path='auth' element={<AuthView/>}/>   
       <Route path='task' element={<Outlet/>}>
        <Route path='/task/dashboard' element={<Home/>}/> 
       </Route>
    </Route>
  )
);