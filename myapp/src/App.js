import logo from './logo.svg';
import './App.css';

import {Mobiles} from "./Mobiles";
import {Navigation} from "./Navigation";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className='m-3 d-flex justify-content-center'>
            Saikat Trying
        </h3>

        <Navigation/>
        <Switch>
          <Route path="/" component={Mobiles} exact/>
          <Route path="/mobiles" component={Mobiles} exact/>
        </Switch>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
