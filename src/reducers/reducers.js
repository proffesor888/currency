import { ADD_USER } from "../constants/constants";


export const UserMas = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return (
                [...state, UserObj({}, action)]
            )
            break;
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