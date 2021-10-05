import { createContext, useContext, useReducer } from "react";

const userContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // const userChoice = getStorage("choice");
      return {
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        // theme: userChoice?.theme ? userChoice.theme : "light",
      };

    case "LOGOUT":
      return {
        name: "",
        email: "",
        token: "",
      };

    default:
      return;
  }
};

const initalState = { name: "", email: "", token: "" };

export const UserProvider = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("hint"));

  if (token) {
    initalState.token = token.token;
    initalState.name = token?.name;
    initalState.email = token?.email;
  }

  const [userState, userDispatch] = useReducer(userReducer, initalState);

  return (
    <userContext.Provider value={{ userState, userDispatch }}>
      {children}
    </userContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(userContext);
};
