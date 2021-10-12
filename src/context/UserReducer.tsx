import { UserState } from "./UsersContext";

type UserAction =
    | { type: 'add', payload: UserState }
    | { type: 'changeStateUser', payload: UserState }
    | { type: 'delete', payload: UserState }
    | { type: 'update', payload: UserState }


export const UserReducer = (state: UserState[], action: UserAction): UserState[] => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'changeStateUser': {
            for (let i = 0; i <= state.length - 1; i++) {
                const user = state[i];
                if (user.id === action.payload.id) {
                    state.splice(i, 1, action.payload)
                }
            }
            return [...state]
        }
        case 'delete': {
            for (let i = 0; i <= state.length - 1; i++) {
                const user = state[i];
                if (user.id === action.payload.id) {
                    state.splice(i, 1)
                }
            }
            return [...state]
        }
        case 'update': {
            for (let i = 0; i <= state.length - 1; i++) {
                const user = state[i];
                if (user.id === action.payload.id) {
                    state.splice(i, 1, action.payload)
                }
            }
            return [...state]
        }

        default:
            return [...state];
    }
}