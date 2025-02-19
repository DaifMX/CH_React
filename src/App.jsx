import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout'
import CartContainer from './components/Navbar/CartWidget/CartContainer'
import ProductListContainer from './components/Product/ProductListContainer';
import ProductDetailContainer from './components/Product/ProductDetailContainer'

import { CssBaseline } from '@mui/material';
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from '@emotion/react';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<ProductListContainer />} />
              <Route path="product/:productId" element={<ProductDetailContainer />} />
              <Route path="category/:categoryId" element={<ProductListContainer />} />
              <Route path="cart" element={<CartContainer />} />
              <Route path="*" element={<h1>Error: 404</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App;