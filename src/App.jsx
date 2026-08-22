import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Price from './Price';
import Product from './Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/product" element={<Product/>} />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;









// import React from 'react'
// import './App.css'
// import Start from './Start';
// import Home from './Home'
// import Show from './Show';
// import Cal from './Cal';
// import Box from './Box';
// import Block from './Block';
// import Power from './Power';
// import You from './You';
// import Last from './Last';
// import From from './From';

//   function App() {
//     return (
//       <div>
//         <Start/>
//         <Home/>  
//         <Show/> 
//         <Cal/>
//         <Box/>
//         <Block/>
//         <Power/>
//         <You/>
//         <Cal/>
//         <Last/>  
//         <From/>

//       </div>
//     )
//   }

// export default App;
