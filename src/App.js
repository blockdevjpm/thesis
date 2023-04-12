import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Services, Learn, About, Contact, Login, Rw, Rfq, Layout } from "./pages";

const App = () => {

  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='services' element={<Services />} />
                <Route path='learn' element={<Learn />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='login' element={<Login />} />
                <Route path='rw' element={<Rw />} />
                <Route path='rfq' element={<Rfq />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App