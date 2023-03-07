import { Grid } from "@mui/material";
import { Navbar } from "./components/Navbar";
import ProductsSection from "./components/ProductsSection";
import { Footer } from "./components/Footer";
import Promotions  from "./components/Promotions";
import Categories  from "./components/Categories";

export const HomePage = () => {
  return (
    <Grid container>
      <Grid item sx={{ width: "100vw" }}>
        <Navbar />
      </Grid>
      <Grid
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}>
        <Promotions/>
        <Categories/>
      </Grid>
      <Grid
        container
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <ProductsSection />
      </Grid>
      <Grid>
        <Footer/>
      </Grid>

    </Grid>
  );
};
