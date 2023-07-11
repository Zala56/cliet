import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import logo from './logo.svg';

import './App.css';
import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";


function App() {

  
  return (
 
        <Router>
            <Routes>
            <Route exact  path= "/"  Component={Join}/>
            <Route path= "/chat" Component={Chat} />
            </Routes>
        </Router>
   
  );
}

export default App;
