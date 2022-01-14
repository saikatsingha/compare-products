import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './Layout';
import {Mobiles} from "./Mobiles";
import MobilesDetails from "./MobilesDetails";
import {Home} from "./Home";

const App = () => (
  <BrowserRouter>
      <Layout >
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/mobiles" element={<Mobiles />} />
            <Route exact path='/mobiles/:id' element={<MobilesDetails />} />
          </Routes>
      </Layout>
  </BrowserRouter>
);

export default App;
