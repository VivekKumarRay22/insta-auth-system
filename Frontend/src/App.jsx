import React from "react";
import AppRoutes from "./AppRoutes";
import { authProvider } from "./features/auth/auth.context";
import "./style.scss";

const App = () => {
  return (
    <authProvider>
      <AppRoutes />;
    </authProvider>
  );
};

export default App;
