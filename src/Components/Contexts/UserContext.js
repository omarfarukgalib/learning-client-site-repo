import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import {onAuthStateChanged,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword,getAuth} from 'firebase/auth'
import { useEffect } from 'react';
const auth = getAuth(app)
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
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
        const authInfo = {user,loading,createUser,logIn,logOut}
    return (
        
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;