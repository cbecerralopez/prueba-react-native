import { UserState } from "../context/UsersContext"

export const useSearchFilter = (filter: string, params: string[], user: UserState[]): UserState[] => {
    if (filter != "" || params.length > 0) {
        let result = user.filter(user => user.nombre?.toLowerCase().includes(filter.toLowerCase()))
        if (params.includes("activo")) {
            return result.filter(result => result.estado === true)
        }
        if (params.includes("desactivado")) {
            return result.filter(result => result.estado === false)
        }
        return result
    }
    return user
}