import { createSlice } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components"
import { darkTheme, lightTheme } from "../../styles/themes/themes";

const initialState: DefaultTheme = darkTheme
const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeTheme(state) {
            if(state.id){
                state = {...state,...lightTheme}
            }else{
                state = {...state,...darkTheme}
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
