import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        id: number,
        colors: {
            text?: string;
            background?: string;
            altBackground?: string
        }, breakpoints?: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
    }
}