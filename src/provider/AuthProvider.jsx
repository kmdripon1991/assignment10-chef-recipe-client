import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader,setLoader] = useState(true);



  const createUserSignIn = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (user, name, photo)=>{
     return updateProfile(user,{displayName:name, photoURL:photo})
  }

  const userLogin = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userSignOut = ()=>{
    return signOut(auth);
  }

  const googleSignIn = ()=>{
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  }

  const gitHubSignIn = () =>{
    setLoader(true)
    return signInWithPopup(auth, gitHubProvider);
  }

  useEffect(()=>{
    setLoader(true)
    const unSubscriber = onAuthStateChanged(auth, loggedUser=>{
      setUser(loggedUser)
      setLoader(false)
    })
    return ()=>{
      unSubscriber();
    }
  },[])


  const userInfo = {
    user,
    loader,
    createUserSignIn,
    updateUserProfile,
    userLogin,
    googleSignIn,
    gitHubSignIn,
    userSignOut,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
