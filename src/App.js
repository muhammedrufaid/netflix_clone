import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {Originals,Action,Comedy} from './Urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={Action} title='Action' isSmall/>
      <RowPost url={Comedy} title='Comedy' isSmall/> 
    </div>
  );
}

export default App;
