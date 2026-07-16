import { useContext } from "react";

import { AuthContext } from "../Auth.context.jsx";
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
