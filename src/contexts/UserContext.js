import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth"
import app from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth =getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser]=useState({displyName:"arjun"})
   
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
            const unsubcribe = onAuthStateChanged(auth,currentUser => {
                setUser(currentUser);
            })
            return () =>{
                unsubcribe();
            }
    })
    const authInfo ={user,createUser,signInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default UserContext;