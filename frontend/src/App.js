import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

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
          {/* </Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
