import { useContext } from "react";
import { AppContext } from "../context";

export const useAppContext = () => {
  const [state, dispatch] = useContext(AppContext);
  return [state, dispatch];
};
