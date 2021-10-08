import { UserState } from "./UsersContext";

type UserAction =
    | { type: 'add', payload: UserState }
    | { type: 'changeState', payload: UserState }
    | { type: 'delete', payload: UserState }


export const UserReducer = (state: UserState[], action: UserAction): UserState[] => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'changeState': {
            for (let i = 0; i <= state.length - 1; i++) {
                const user = state[i];
                if (user.id === action.payload.id) {
                    state.splice(i, 1,action.payload)
                }
            }
            return [...state]
        }
        case 'delete': {
            for (let i = 0; i <= state.length - 1; i++) {
                const user = state[i];
                if (user.id === action.payload.id) {
                    state.splice(i,1)
                }
            }
            return [...state]
        }

        default:
            return [...state];
    }
}