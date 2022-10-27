import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import {GithubAuthProvider,signInWithPopup,GoogleAuthProvider, onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
import { useEffect } from 'react';
const auth = getAuth(app)

const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider()
export const authContext = createContext()
const UserContext = ({children}) => {
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleProvider = () =>{
        return signInWithPopup(auth,googleprovider)
    }
    const githubProvider = () =>{
        return signInWithPopup(auth,githubprovider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
        const authInfo = {user,loading,createUser,logIn,logOut,googleProvider,githubProvider}
    return (
        
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;