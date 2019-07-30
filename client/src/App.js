import React from "react";
import NavBar from "./NavBar";
import {Router} from "@reach/router";
import Gaschapchaplistings from "./Gaschapchaplistings";
import "./App.css";

// const parent= [
//   {
//     image_url:"https://whownskenya.com/wp-content/uploads/2019/04/pro1.jpg",
//   type_of_gas:"PRO-GAS",

//   },
//   {
//     gas_id:2,
//     weight: 6,
//     type_of_gas: "K-GAS",
//     price: 900,
//     image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6olz88LxP8HNU5AVDe-2EwixSHKmHnMe-Yjg74garwbex9r26"
//   },
//   {
//     gas_id: 3,
//     weight: 12,
//     type_of_gas: "HASHI",
//     price: 2100,
//     image_url:"//afrishop.biz/wp-content/uploads/2018/12/M01Wv_57-300x300.jpeg"
//   },
//   {
//     gas_id: 4,
//     weight: 6,
//     type_of_gas: "HASHI",
//     price: 900,
//     image_url:"//afrishop.biz/wp-content/uploads/2018/12/M01Wv_57-300x300.jpeg"
//   }

// ];

function App() {
  return (
    <div className="gcc-app">
      <header className="gcc-header">
        <Router>
<NavBar default />
        </Router>
        
        </header>
        <main className="gcc-main">
       <Router>
       <Gaschapchaplistings path="/" />
       </Router>
        </main>
      </div>
  );
}

export default App;