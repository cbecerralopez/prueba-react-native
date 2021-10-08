
import React, { createContext, useReducer } from "react"
import { authReducer} from "./AuthReducer";

export interface AuthState {
    isLogin: boolean
    userName?: string
}
export const authInicialState: AuthState = {
    isLogin: false,
    userName: "cbecerra"
}
export interface AuthStateProps {
    authState: AuthState
    signIn: () => void
}
export const AuthContext = createContext({} as AuthStateProps);

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInicialState,)
    const signIn = ()=>{
        dispatch({type:'singIn'})
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }
        }>{children}</AuthContext.Provider>
    )
}