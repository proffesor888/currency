import { ADD_USER } from "../constants/constants";

export const add_user = (input) => {
    return {
        type: ADD_USER,
        name: input.name,
        username: input.username,
        email: input.email
    }
}