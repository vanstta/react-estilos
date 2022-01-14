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
import Carrito from "./components/Carrito";


function App() {

  const store = generateStore()
 
  return ( 
  <Provider store={store}>
    <Router>
      <div>
      <Navbar/>
     {
       
     }
      <hr />
      <Switch>
   
     <ProductoDetalle/>
   
    </Switch>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
