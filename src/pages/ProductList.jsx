import { useState, useEffect } from "react";
import Product from "../components/Product";
import { Box, Grid2 } from "@mui/material";
import ProductService from "../services/ProductService";
import { transformProducts } from "../util/mainUtil";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        const transformedProducts = transformProducts(data.products);
        setProducts(transformedProducts);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "stretch" }}
      >
        {products.map((product) => (
          <Grid2 item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default ProductList;
