import {Mobiles} from "./components/Mobiles";
import {MobileDetails} from "./components/MobileDetails";
import {Home} from "./components/Home";
import {Navigation} from "./components/Navigation";

import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

       <Navigation/>
         
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:id" element={<MobileDetails /> } />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
