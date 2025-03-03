import { FC } from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../pages/Landing";
import Layout from "../components/Layout";
import DetailsPage from "../pages/Details";
import SimulationPage from "../pages/Simulation";

interface Props { }

const AppRoutes: FC<Props> = ({ }) => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes;