import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const ProductsSection = () => {
  const [items, setItems] = useState([]);
  const getProducts = async () => {
    const url = await fetch("https://dummyjson.com/products");
    const data = await url.json();
    console.log(data.products);
    setItems(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid
      sx={{
        mt: 15,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <Card
          sx={{
            width: 300,
            height: 400,
            mb: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
          key={item.id}
        >
          <Grid>
            <Typography sx={{ fontWeight: 600, textAlign: "center", mb: 3 }}>
              {item.title}
            </Typography>
            <Grid
              item
              sx={{
                width: "100%",
                height: "70%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 3,
              }}
            >
              <img
                style={{
                  width: "60%",
                  height: "40%",
                  objectFit: "contain",
                }}
                src={item.images[0]}
              />
            </Grid>
            <Grid
              item
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Typography sx={{ fontWeight: 500, textAlign: "center", mb: 4 }}>
                {item.description}
              </Typography>
            </Grid>
            <Typography sx={{ textAlign: "center"}}>${item.price}</Typography>
            <Grid item sx={{ display: "flex", justifyContent: "center"}}>
                <Button variant="contained"> Add to cart </Button>
            </Grid>
            
          </Grid>
        </Card>
      ))}
    </Grid>
  );
};

export default ProductsSection;
