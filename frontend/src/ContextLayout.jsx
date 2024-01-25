import { createContext } from "react";
import { useState ,useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [user , setUser]  = useState(null);
    const [ready , setReady] = useState(false); 
    useEffect(()=>{
        if(!user){
            axios.get('/user/profile').then((data)=>{
                setUser(data);
                setReady(true);
            })
        }
        console.log(user);
    },[user,ready]);
    return(
        <UserContext.Provider value ={{user,setUser,ready,setReady}}>
            {children}
        </UserContext.Provider>
    )
}