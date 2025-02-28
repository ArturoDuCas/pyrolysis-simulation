import { FC } from "react";
import { Route, Routes } from "react-router";
import LandingPage from "../pages/Landing";

interface Props { }

const AppRoutes: FC<Props> = ({ }) => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default AppRoutes;