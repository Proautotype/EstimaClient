import { createSlice } from "@reduxjs/toolkit"
import { DefaultTheme } from "styled-components"
import { darkTheme, lightTheme } from "../../styles/themes/themes";

const initialState: DefaultTheme = darkTheme
const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers: {
        changeTheme(state) {
            if (state.id === 0) {
                state.id = lightTheme.id;
                state.colors = { ...lightTheme.colors };
            }
            else {
                state.id = darkTheme.id;
                state.colors = { ...darkTheme.colors };
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
