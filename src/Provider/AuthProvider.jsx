import { createContext } from "react";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const name = "maruf";
  const authInfo = {
    name,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
