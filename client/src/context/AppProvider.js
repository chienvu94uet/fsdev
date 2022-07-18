import { useReducer } from "react";
import AppContext from "./AppContext";
import {
  combineReducer,
  modalReducer,
  toastReducer,
  authReducer,
} from "./reducer";
import initialState from "./initialState";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducer({
      modal: modalReducer,
      toast: toastReducer,
      auth: authReducer,
    }),
    initialState
  );

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
