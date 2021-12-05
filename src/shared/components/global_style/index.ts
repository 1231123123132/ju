import { createGlobalStyle } from "styled-components";
import { ITheme } from "../../theme";

export const GlobalStyle = createGlobalStyle`

  *{
  //
   font-family: Montserrat;
  //
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  }
  
  html {
    color: #545454;
    font-size: 16px; 
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  
  p {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }: { theme: ITheme }) => theme.palette.white};
  }
`;