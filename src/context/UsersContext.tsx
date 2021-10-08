import React, { createContext, useReducer } from "react"
import { UserReducer } from "./UserReducer"
import { Usuario } from '../models/usuario';
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
}
// estado inicial
export const UserInitialState: UserState[] = [{
    id: 1,
    nombre: "claudio",
    apellido: "becerra",
    userName: "cbecerra",
    email: "cbecerra@kvalue.cl",
    password: "1234",
    estado: true,
    createBy: "cbecerra"
},
{
    id: 2,
    nombre: "michael",
    apellido: "fuentes",
    userName: "mfuentes",
    email: "mfuentes@kvalue.cl",
    password: "12345",
    estado: true,
    createBy: "mfuentes"
}
]
// propiedades y funciones a  exportar
export interface UserStateProps {
    usersState: UserState[]
    add: (user: UserState) => void
    changeState: (user: UserState) => void
    deleted: (user: UserState) => void
}

export const UserContext = createContext({} as UserStateProps)

export const UserProvider = ({ children }: any) => {

    const [usersState, dispatch] = useReducer(UserReducer, UserInitialState)

    const add = (user: UserState) => {
        user.id = usersState.length + 1
        dispatch({ type: 'add', payload: user })
    }
    const changeState = (user: UserState) => {
        (user.estado) ? user.estado = false : user.estado = true
        dispatch({ type: 'changeState', payload: user })
    }
    const deleted = (user: UserState) => {

        dispatch({ type: 'delete', payload: user })
    }
    return (
        <UserContext.Provider value={{
            usersState,
            changeState,
            deleted,
            add,
        }}>{children}</UserContext.Provider>
    )
}