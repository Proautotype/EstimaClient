import styled from 'styled-components';

interface GDivProps {
    aCertainTitle?: "Features" | "Abouts"
}

const StyledP = styled.p<GDivProps>`
    padding: 10px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    text-align: center;   
`

const StyleDesc = styled.div`
     padding: 10px;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    text-align: center;  
    height: 350px;
    max-height: 200px;
    /* border: 2px solid ${({ theme }) => theme.colors.text}; */
`

const GDivContainer = styled.div<GDivProps>`
    width: 95%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    background: none;
    border-top: 2px solid ${({ theme }) => theme.colors.text};
    margin-top: 25px;
    position: relative;
    display: flex;
    gap: 10px;
    padding-top: 50px;
    ${StyledP}{
        position: absolute;
        left: 38%;
        top: -4%;
        padding: 10px;
        border-left: 2px solid ${({ theme }) => theme.colors.text};
        border-right: 2px solid ${({ theme }) => theme.colors.text};
        text-transform: uppercase;
        background: ${({ theme }) => theme.colors.background};
    }   
`
export { StyledP , StyleDesc}
export default GDivContainer;