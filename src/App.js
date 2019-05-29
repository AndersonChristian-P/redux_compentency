import React from 'react';
import { Provider } from "react-redux"
import store from "./redux/store"
import ProductListing from "./components/ProductListing"
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductListing />
      </div>
    </Provider>
  );
}

export default App;
