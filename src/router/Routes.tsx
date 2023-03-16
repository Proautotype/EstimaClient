import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../views/Home';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Home/>}
      loader={async ({ params }) => {
        console.log("loader")
        return "loader"
      }}
      action={async ({ request }) => {
        // return updateFakeTeam(await request.formData());
      }}
    // errorElement={<ErrorBoundary />}
    />
  )
);