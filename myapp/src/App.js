import logo from './logo.svg';
import './App.css';

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

export default App;
