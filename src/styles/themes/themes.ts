import { DefaultTheme } from "styled-components";
import COLORS from "../colors";

const darkTheme: DefaultTheme = {
    id: 0,
    colors: {
        text: COLORS.text,
        background: COLORS.dark,
        altBackground: COLORS.light
    }, breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    }
}

const lightTheme: DefaultTheme = {
    id: 1,
    colors: {
        text: COLORS.dark,
        background: COLORS.light,
        altBackground: COLORS.dark
    }, breakpoints: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    }
}

export { darkTheme, lightTheme }

/**
 * background: linear-gradient(to right, #ff8a00, #da1b60);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
*/