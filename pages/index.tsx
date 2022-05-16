import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EnryList } from "../components/ui";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <EnryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <EnryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EnryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
