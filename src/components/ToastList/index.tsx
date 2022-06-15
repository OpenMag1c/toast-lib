import React, { FC } from "react";

import { Container } from "./styled";
import Toast from "@components/Toast";

const ToastList: FC = () => (
  <Container>
    hello!
    <Toast />
  </Container>
);

export default ToastList;
