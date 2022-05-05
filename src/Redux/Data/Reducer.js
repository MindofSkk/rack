import data from "../../Data/data.json"
import {
    DETAILS,
    SIGNIN_1,
    SIGN_OUT,
    LOG_IN,
    DESCRIPTION_DATA,
    SORTED_DATA,
    MAINSTATE_TRUE,
    MAINSTATE_FALSE,
    REMOVE_CART_ITEM,
} from "./ActionTypes"

const Data = data.data

const initState = {
    data: [...Data],
    signInData: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        signInState: false
    },
    descriptionData: {},
    sortedData: []

}


export const dataReducer = (state = initState, {
    type,
    payload
}) => {
    switch (type) {
        case SIGNIN_1: {
            state.signInData.email = payload.email
            return {
                ...state
            }
        }
        case DETAILS: {
            state.signInData.firstName = payload.firstName
            state.signInData.lastName = payload.lastName
            state.signInData.password = payload.password
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case SIGN_OUT: {

            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case LOG_IN: {

            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case DESCRIPTION_DATA: {
            return {
                ...state,
                descriptionData: payload
            }
        }
        case SORTED_DATA: {
            return {
                ...state,
                sortedData: [...payload]
            }
        }
        case MAINSTATE_TRUE: {
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case MAINSTATE_FALSE: {
            state.signInData.signInState = payload.state
            return {
                ...state,
            }
        }
        case REMOVE_CART_ITEM: {
            return {
                ...state,
                data: state.data.filter((item) => {
                    return item.title !== payload.title
                })
            }
        }

        default: {
            return state
        }
    }
}