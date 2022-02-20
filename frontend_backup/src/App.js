import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Mobiles} from "./components/Mobiles";
import {MobileDetail} from "./components/MobileDetail";
import Home from "./components/Home";
import Navigation from "./components/Navigation";



// function App() {
const App = () => {
  return (
    <BrowserRouter>

       <Navigation/>
         
        <Routes>
          <Route exact path='/' component={Home} ></Route>
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:id" element={<MobileDetail />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
