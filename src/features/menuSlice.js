export function menuReducer(state=menuShowInitialState,action) {
    if (action.type === "MENU_SHOW") {
        return { ...state, isShow: action.payload }
    }

    return state
}

export const menuShowInitialState = {
    isShow: false
}

export function selectMenuShow(state) {
    return state.menuShow.isShow
}