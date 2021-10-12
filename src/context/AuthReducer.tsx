import { AuthState } from "./AuthContext"


type AuthAction = { type: 'singIn',payload:{userName:string,password:string} }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'singIn':
            return {
                isLogin: true,
                userName:action.payload.userName,
                password:action.payload.password,
            }
        default:
            return state
    }
}