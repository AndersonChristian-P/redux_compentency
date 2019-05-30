import React from 'react';
import { Provider } from "react-redux"
import store from "./redux/store"
import ProductListing from "./components/ProductListing"
import EditProd from "./components/EditProd"


function App() {
  return (
    <Provider store={store}>
      <ProductListing />
      <EditProd />
    </Provider>
  );
}

export default App;
