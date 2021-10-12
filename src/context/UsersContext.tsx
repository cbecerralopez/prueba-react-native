import React, { createContext, useReducer } from "react"
import { UserReducer } from "./UserReducer"
import { Usuario } from '../models/usuario';
import { data } from '../assets/data/data';
// como luce el context
export interface UserState {
    id?: number
    nombre?: string
    apellido?: string
    userName?: string
    email?: string
    password?: string
    estado?: boolean
    createBy?: string
    dateCreate?: string
}
// estado inicial
export const UserInitialState: UserState[] = data
// propiedades y funciones a  exportar
export interface UserStateProps {
    usersState: UserState[]
    add: (user: UserState) => void
    changeStateUser: (user: UserState) => void
    deleted: (user: UserState) => void
}

export const UserContext = createContext({} as UserStateProps)

export const UserProvider = ({ children }: any) => {

    const [usersState, dispatch] = useReducer(UserReducer, UserInitialState)

    const add = (user: UserState) => {
        user.id = usersState.length + 1
        dispatch({ type: 'add', payload: user })
    }
    const changeStateUser = (user: UserState) => {
        (user.estado) ? user.estado = false : user.estado = true
        dispatch({ type: 'changeStateUser', payload: user })
    }
    const deleted = (user: UserState) => {

        dispatch({ type: 'delete', payload: user })
    }
    return (
        <UserContext.Provider value={{
            usersState,
            changeStateUser,
            deleted,
            add,
        }}>{children}</UserContext.Provider>
    )
}