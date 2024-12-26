import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/Navbar/CartWidget/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<h1>HOME</h1>}/>
          <Route path="cart" element={<ItemListContainer />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;