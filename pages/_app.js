import GlobalStyles from "../styles/globalCss";
import { AppWrapper } from "context/state";
import { useState } from "react";
import { ToDoProvider } from "context/state";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

const name = styled.li``;

export { name };

const theme = {
  primaryColor: "#aa4055",
  secondaryColor: "#6d8b93",
  whiteHighlight: "#f4f7f5",
  successColor: "rgb(86, 164, 100)",
  dangerColor: "rgb(244, 67, 54)",
  grayColor: "#999999",
};

const HtmlWrapper = styled.html`
  background-color: ${(props) => props.theme.whiteHighlight};
  body {
    background-color: ${(props) => props.theme.whiteHighlight};
  }
`;

export default function App({ Component, pageProps }) {
  const [itemData, setItemData] = useState({});
  return (

      <ThemeProvider theme={theme}>
        <ToDoProvider>
          
          <>
            <GlobalStyles />
            <Component {...pageProps} />
          </>
        </ToDoProvider>
      </ThemeProvider>

  );
}
