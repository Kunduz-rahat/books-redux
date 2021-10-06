import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

const App = () => {
  return (
 <Router>
   <Layout>
     <Route exact path='/'><HomePage/></Route>
     <Route path='/cart'><Cart/></Route>
   </Layout>
 </Router>
  )
};

export default App;
