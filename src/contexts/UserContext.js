import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import app from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth =getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser]=useState({})
    const [loder,setLoder]=useState(true)
    const provider = new GoogleAuthProvider();
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
       return signOut(auth);
    }
    const googleSingin =()=>{
       return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
            const unsubcribe = onAuthStateChanged(auth,currentUser => {
                setUser(currentUser);
                setLoder(false)
            })
            return () =>{
                unsubcribe();
            }
    })
    const authInfo ={user,createUser,signInUser,logOut,googleSingin,loder}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;