import React from 'react';
import { Page } from './components/Page/Page'
import {Home } from './components/Home/Home'
import {Data} from './components/Data/Data'

import './App.css'


function App() {
  return (
    <div className="App">
      
     <Page></Page> 
      <Home></Home>
      {/* <Data></Data> */}
     
    </div>
  );
}

export default App;
