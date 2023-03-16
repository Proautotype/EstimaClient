import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        id: number,
        colors:{           
            text?: string;
            background?: string;
        }
    }
}