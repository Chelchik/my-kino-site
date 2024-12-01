import { combineReducers, createStore } from "redux";
import { inputValueReducer } from "../features/inputValueSlice";
import { submitReducer } from "../features/sbumitSlice";
import { formReducer } from "../features/formSlice";
import { contactSubmitReducer } from "../features/contactSubmitSlice";
import { themeReducer } from "../features/themeSlice";
import { menuReducer } from "../features/menuSlice";

export const store = createStore(combineReducers({
    inputValue: inputValueReducer,
    submit: submitReducer,
    form: formReducer,
    contactSubmit: contactSubmitReducer,
    theme: themeReducer,
    menuShow: menuReducer
}));