import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

let authState = window.localStorage.getItem("auth")
  ? JSON.parse(window.localStorage.getItem("auth"))
  : {};

let initialState = {
  isAuthenticated: authState?.token ? true : false,
  token: authState ? authState?.token : null,
  userType: authState ? authState?.userType : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("auth", JSON.stringify(action.payload));
      return {
        ...state,
        isAuthenticated: action?.payload?.email
          ? true
          : localStorage.getItem("auth")
          ? true
          : false,
        token: action.payload.token,
        userType: action.payload.userType,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
