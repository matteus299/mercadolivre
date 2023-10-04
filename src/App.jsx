import React from 'react';
import Header from './componentes/Header/Header';
import Products from './componentes/Products/Products.jsx';
import Provider from './context/Provider';
import Cart from './componentes/Cart/Cart.jsx';

function App() {

  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
