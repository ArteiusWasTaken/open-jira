import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="1">
      <Typography variant="h1" color="primary">
        Bienvenida
      </Typography>
    </Layout>
  );
};

export default HomePage;
