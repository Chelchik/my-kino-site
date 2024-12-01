export function formReducer(state=formTextInitialState, action) {
    if (action.type === "name") {
        return {...state, name: action.payload }

    } else if (action.type === "phone") {
        return {...state, phone: action.payload }

    } else if (action.type === "email") {
        return {...state, email: action.payload }

    }

    return state
}

export const formTextInitialState = {
    name: "",
    phone: "",
    email: ""
}

export function selectName(state) {
    return state.form.name;
}

export function selectPhone(state) {
    return state.form.phone;
}

export function selectEmail(state) {
    return state.form.email;
}
