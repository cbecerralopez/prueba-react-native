import { AuthState } from "./AuthContext"


type AuthAction = { type: 'singIn' }

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'singIn':
            return {
                ...state,
                isLogin: true
            }
        default:
            return state
    }
}