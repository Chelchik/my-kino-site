export function submitReducer(state=filmsInitialState, action) {
    if (action.type === "submit") {
        console.log(action.payload);
        return {...state, films: action.payload.results}
    }

    return state
}

export const filmsInitialState = {
    films: [

    ]
}

export function selectFilms(state) {
    return state.submit.films
}