import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import usePublic from "./../Hooks/usePublic";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = usePublic();
  // Create a user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login a User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google signin
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // logout
  const logoutUser = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Current User --->", currentUser);
        setUser(currentUser);
        if (currentUser) {
          const userInfo = { email: currentUser?.email };
          axiosPublic.post("/jwt", userInfo).then((res) => {
            if (res?.data?.token) {
              localStorage.setItem("access-token", res?.data?.token);
            } 
          });
        }
        setLoading(false);
      } else {
        setLoading(false);
        
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
    loading,
    logoutUser,
    updateUserProfile,
    googleSignIn,
    setLoading,
    setUser
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
