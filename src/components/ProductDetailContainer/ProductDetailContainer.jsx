import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router"

import { Stack, Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';

import { getProductById } from '../../utils/fetchProducts';

export default function ProductDetailContainer() {

  const params = useParams();
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)

  const [productQuantity, setProductQuantity] = useState(1)

  useEffect(() => {
    try {
      setProduct(getProductById(params.productId));
    } catch (error) {
      console.error(error);
    }

  }, [product]);

  const handleQuantity = (OPTION) => {
    if (OPTION == "ADD" && productQuantity < product.stock) {
      setProductQuantity(productQuantity + 1)
    } else if (OPTION == "SUBSTRACT" && productQuantity > 1) {
      setProductQuantity(productQuantity - 1)
    }
  }

  return (
    <>
      {
        product ? (
          <Box sx={{
            display: 'flex',
            width: "100%",
            minHeight: "800px",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px auto',
              width: "80%",
              borderRadius: 2,
            }}>
              <Typography variant="h4" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
                {product.name}
              </Typography>

              {/* Carta de Control de Producto */}
              <Card sx={{ width: 500, mb: 4 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={product.image}
                  title={product.name}
                />
                <CardContent sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  pb: 2
                }}>
                  <Button variant="contained"
                    sx={{
                      backgroundColor: '#cebd22',
                      height: 60,
                      minWidth: 60,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': { backgroundColor: '#e6d225' }
                    }}
                    onClick={() => handleQuantity("SUBSTRACT")}>
                    <Typography variant="h3">-</Typography>
                  </Button>
                  <Typography variant="h4">{productQuantity}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#cebd22',
                      height: 60,
                      minWidth: 60,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '&:hover': { backgroundColor: '#e6d225' }
                    }}
                    onClick={() => handleQuantity("ADD")}>
                    <Typography variant="h3">+</Typography>
                  </Button>
                  <Button variant="contained"
                    sx={{
                      backgroundColor: '#cebd22',
                      height: 60,
                      fontWeight: 700,
                      '&:hover': { backgroundColor: '#e6d225' }
                    }}>
                    Agregar
                  </Button>
                </CardContent>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center', py: 2 }}>
                  {product.price.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })} c/ pieza
                </Typography>
              </Card>

              {/* Carta de descripción del Producto */}
              <Card sx={{ width: 500 }}>
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#cebd22',
                        height: 60,
                        fontWeight: 700,
                        '&:hover': { backgroundColor: '#e6d225' }
                      }}
                      onClick={() => navigate('/')}>
                      Regresar
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

        ) : (
          <h1>Producto Inexistente</h1 >
        )
      }
    </>
  )
}