import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

<<<<<<< HEAD
import Layout from './components/Layout';
import Mobiles from "./components/Mobiles";
import MobilesDetails from "./components/MobilesDetails";
import Home from "./components/Home";

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
=======
import {Mobiles} from "./Mobiles";
import {Home} from "./Home";
import {Navigation} from "./Navigation";

import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* <div className="container">
        <h3 className='m-3 d-flex justify-content-center'>
            Saikat Trying
        </h3> */}

        <Navigation/>
         
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/mobiles" element={<Mobiles />} />
        </Routes>
        {/* <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/mobiles' component={Mobile}/>
      </Switch> */}
     {/* </div> */}
    </BrowserRouter>
    
  );
}
>>>>>>> parent of 2579073 (Mobile details is fetching bu id)

export default App;
