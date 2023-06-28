import React from "react";
import { Route, Routes  } from "react-router";
import { publicRoutes } from "../pages/Rotes";
import { SHOP_ROUTE } from "../utils/consts";

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>} exact />
      ))}
    </Routes>
  );
}

export default AppRouter;