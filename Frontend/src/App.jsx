import React from "react";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./features/auth/Auth.context.jsx";
import "./style.scss";

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />;
    </AuthProvider>
  );
};

export default App;
