import { ADD_USER, DELETE_USER } from "../constants/constants";


export const UserMas = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return (
                [...state, UserObj({}, action)]
            )
            break;
        case DELETE_USER:
            return (
                state.filter((item) => {
                    if (item.email !== action.email) {
                        return item;
                    }
                })
            )
        default:
            return state;
    }
}

const UserObj = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return Object.assign({}, 
                {name: action.name},
                {username: action.username},
                {email: action.email}) 
            break;
        default:
            return state;
    }
}