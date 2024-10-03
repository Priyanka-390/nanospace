// import logo from "./logo.svg";
// import "./App.css";
// import Hero from "./components/Hero";
// import Explore from "./components/Explore";
// import PracticeGraph from "./components/PracticeGraph";
// import ChartPractice from "./components/ChartPractice";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Tabs from './Tabs'; // Import your Tabs component
// import Tabs from "./components/Tabs";

// function App() {
//   // return (
//   //   <div className="bg-light-black overflow-hidden">
//   //     {/* <Hero />
//   //     <Explore /> */}
//   //     {/* <PracticeGraph /> */}
//   //     {/* <ChartPractice/> */}
//   //     {/* <Tabs/> */}
//   //   </div>
//   // );
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Tabs />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Tabs from './components/Tabs'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tabs />} />
      </Routes>
    </Router>
  );
}

export default App;