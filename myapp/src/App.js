import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Mobiles} from "./Mobiles";
import {MobilesDetails} from "./MobilesDetails";
import {Home} from "./Home";
import {Navigation} from "./Navigation";

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
         
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mobiles" element={<Mobiles />} />
          <Route exact path='/mobiles/:id' element={<MobilesDetails />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
