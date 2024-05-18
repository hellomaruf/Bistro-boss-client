import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    
  };
  const authInfo = {
    createUser, 
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
