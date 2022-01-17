import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Mobiles from './Mobiles';
import MobilesDetails from './MobilesDetails';
import Home from './Home';

const routes = () => {
    return (
      <Layout >
        <Routes>
          <Route exact path='/' component={Home} ></Route>
          <Route exact path='/mobiles' component={Mobiles} ></Route>
          <Route exact path='/mobiles/:id' component={MobilesDetails} ></Route>
        </Routes>
      </Layout>
    );
}

export default routes;
