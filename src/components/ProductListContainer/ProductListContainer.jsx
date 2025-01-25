import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import productsInfo from '../../../_mock/products'
import ProductCard from '../ProductCard/ProductCard'

import Box from '@mui/material/Box'


export default function Products() {
  const params = useParams()

  const [products, setProducts] = useState(null);

  useEffect(() => {
    let filteredProducts = [];

    if (params.categoryId) {
      filteredProducts = productsInfo.filter((product) => product.category == params.categoryId);

    } else if (params.categoryId == null) {
      setProducts(productsInfo);
    }

    if (filteredProducts.length > 0) setProducts(filteredProducts);

  }, [params])

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", width: "1460px", margin: "0 auto" }}>
          {
            products ? (
              products.map((product) => (
                <ProductCard key={product.pid} props={product} />
              ))
            ) : (
              <h1> Lo sentimos, no hay productos disponibles.</h1>
            )
          }
        </Box>
      </Box>
    </>
  )
}