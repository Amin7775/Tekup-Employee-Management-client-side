import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic()
  // create/register user using email and pw
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create / login using google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update user profile
  const updateUser = (displayname,imageUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: displayname,
      photoURL:imageUrl,
    });
  };

  // Logout
  const logOut = () => {
    return signOut(auth)
  };    

  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    
    if(currentUser){
      // get token and store it on client
      const userInfo = {email: currentUser.email}
      axiosPublic.post('/jwt', userInfo)
      .then(res=>{
        if(res.data.token){
          localStorage.setItem('access-token', res.data.token)
          setLoading(false); 
        }
      })
    }else{
      // remove token
      localStorage.removeItem('access-token')
      setLoading(false); 
    }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    googleLogin,
    logOut,
    loginUser,
    updateUser,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
