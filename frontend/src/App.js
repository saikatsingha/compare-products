import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Mobiles from "./components/Mobiles";
import MobileDetail from "./components/MobileDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobiles" element={<Mobiles />} />
          <Route path="/mobiles/:id" element={<MobileDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

// <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
