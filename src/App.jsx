import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout'
import CartContainer from './components/Navbar/CartWidget/CartContainer'
import ProductListContainer from './components/ProductListContainer/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer'

import { CssBaseline } from '@mui/material';
import darkTheme from './themes/darkTheme';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
    </ThemeProvider>
  )
}

export default App;