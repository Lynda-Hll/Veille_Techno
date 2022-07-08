
import { useReducer } from "react"
import "./styles.css"
import Lynda from "./Lynda" 
import Aceuil from "./Aceuil"
import Actions from "./Actions"
import Connaitre from "./Connaitre"
import Contact from "./Contact"
import Don from "./Don"



 import {  BrowserRouter as Router, Routes, Route, useRoutes,} from "react-router-dom";
 function App() {
    const Approot = () => {
     let routes = useRoutes([
     { path: '/', element: <Aceuil/>},
     { path: '/actions', element: <Actions />},
     { path: '/contact', element: <Contact />},
     { path: '/connaitre', element: <Connaitre />},
     { path: '/don', element: <Don />}
   

    ]);
    
    return routes;
  };
     return (
        <div className="app">
          <Router> 
           <Approot />
           </Router>
        </div>
            )}

            export default App




