import { ADD_USER, DELETE_USER } from "../constants/constants";

export const add_user = (input) => {
    return {
        type: ADD_USER,
        name: input.name,
        username: input.username,
        email: input.email
    }
}
export const delete_user = (input) => {
    return {
        type: DELETE_USER,
        email: input
    }
}