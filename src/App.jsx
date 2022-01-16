import React from "react";
import ProductoDetalle from "./components/ProductoDetalle";
import {Provider} from 'react-redux'
import generateStore from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from "./components/Navbar";


function App() {

  const store = generateStore()
 
  return ( 
  <Provider store={store}>
    <Router>
      <Navbar/>
      <hr className="hr-nav" />
    <Switch>
     <ProductoDetalle/>
    </Switch>
    
    </Router>
    </Provider>
  );
}

export default App;
