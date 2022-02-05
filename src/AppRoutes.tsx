import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SalonList from "./pages/salon-list/SalonList";
import SalonDetails from "./pages/salon-details/SalonDetails";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ApplicationRoutes.SalonList} element={<SalonList />} />
        <Route
          path={`${ApplicationRoutes.SalonDetails}/:id`}
          element={<SalonDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

export enum ApplicationRoutes {
  SalonList = "/",
  SalonDetails = "/salon-details",
}
