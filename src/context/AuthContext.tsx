
import React, { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";
import { data } from '../assets/data/data';

export interface AuthState {
    isLogin: boolean
    userName?: string
    password?: string
}
export const authInicialState: AuthState = {
    isLogin: false,
    userName: "",
    password: ""
}
export interface AuthStateProps {
    authState: AuthState
    signIn: (userName: string, password: string) => boolean
}
export const AuthContext = createContext({} as AuthStateProps);

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInicialState,)
    const signIn = (userName: string, password: string): boolean => {

        let result = data.filter((data) => data.userName?.includes(userName))
        if (result.length != 0) {
            if (result[0].userName === userName && result[0].password === password) {
                dispatch({ type: 'singIn', payload: { userName, password } })
                return true
            }
        }
        return false
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn
        }
        }>{children}</AuthContext.Provider>
    )
}