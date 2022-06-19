import React, { FC } from "react";

import theme from "@themes/theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "@components/ToastContainer";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
