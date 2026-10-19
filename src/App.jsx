import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Product from "./Product";
import Home from "./Home";
import Boot from "./Boot";
import Cont from "./Cont";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/laptops" element={<Product />} />
        <Route path="/about" element={<Boot/>} />
        <Route path="/Contact" element={<Cont/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;





// import React from 'react'
// import Nav from './Nav';
// import Build from './Build';
// import Product from './Product';

// function App() {
//   return (
//     <div>
//       <Nav/>
//       <Build/>
//       <Product/>

//     </div>
//   )
// }

// export default App;
