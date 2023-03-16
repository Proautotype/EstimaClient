import { DefaultTheme } from "styled-components";
import COLORS from "../colors";

const darkTheme: DefaultTheme = {
    id:0,
    colors: {
        text: COLORS.light,
        background: COLORS.dark
    }
}

const lightTheme: DefaultTheme = {
    id:1,
    colors: {
        text: COLORS.dark,
        background: COLORS.light
    }
}

export { darkTheme, lightTheme }