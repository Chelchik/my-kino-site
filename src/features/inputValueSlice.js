export function inputValueReducer(state=textInitialState, action) {
    if (action.type === "INPUT_VALUE") {
        return {...state, text: action.payload}
    } else if (action.type === "CLEAR_INPUT") {
        return {...state, text: action.payload}
    }

    return state;
}

export const textInitialState = {
    text: ""
}

export function selectText(state) {
    return state.inputValue.text
}