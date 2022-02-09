import {BrowserRouter, Routes, Route} from "react-router-dom";

import Mobiles from './components/Mobiles';
import MobileDetails from './components/MobileDetails';
import Home from './components/Home';
import Navigation from './components/Navigation';



const App = () => (
  
    <BrowserRouter>

       <Navigation/>
         
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:id" element={<MobileDetails /> } />
        </Routes>
    </BrowserRouter>
    

);

export default App;

// const App = () => (
//   <Router>
//       <Layout>
//           <Switch>
//               <Route exact path='/' component={Home} ></Route>
//               <Route exact path='/blog' component={Blog} />
//               <Route exact path='/category/:id' component={Category} />
//               <Route exact path='/blog/:id' component={BlogDetail} />
//           </Switch>
//       </Layout>
//   </Router>
// );

// export default App;

