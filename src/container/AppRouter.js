import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Producto from '../components/Producto';

const AppRouter = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/" element={<Producto/>}/>
          </Routes>
      </BrowserRouter>
    );
};

export default AppRouter;