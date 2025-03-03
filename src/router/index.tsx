import { FC } from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../pages/Landing";
import Layout from "../components/Layout";

interface Props { }

const AppRoutes: FC<Props> = ({ }) => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes;