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
    update: (user: UserState) => void
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
    const update = (userUpdate: UserState) => {

        let newUser: UserState = {}
        let result = usersState.filter(user => user.id === userUpdate.id)
        let { id,password, nombre, apellido, email,estado,userName,createBy,dateCreate } = result[0]

        nombre != userUpdate.nombre ? newUser.nombre != userUpdate.nombre : newUser.nombre != nombre
        password != userUpdate.password ? newUser.password != userUpdate.password : newUser.password != password
        email != userUpdate.email ? newUser.email != userUpdate.email : newUser.email != email
        apellido != userUpdate.apellido ? newUser.apellido != userUpdate.apellido : newUser.apellido != apellido
        newUser.id=id
        newUser.estado=estado
        newUser.userName=userName
        newUser.createBy=createBy
        newUser.dateCreate=dateCreate

        dispatch({ type: 'update', payload: newUser })
    }
    return (
        <UserContext.Provider value={{
            usersState,
            changeStateUser,
            deleted,
            add,
            update
        }}>{children}</UserContext.Provider>
    )
}