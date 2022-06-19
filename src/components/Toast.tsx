import React, { FC } from "react";

import CloseIcon from "@icons/close.png";
import IToast from "types/IToast";
import selectCategoryStyle from "@helpers/selectCategoryStyle";
import {
  Wrapper,
  Icon,
  Text,
  ButtonWrapper,
  CloseButton,
  CloseImg,
  ToastContainer,
} from "./styled";

interface ToastProps {
  toastList: IToast[];
}

export const Toast: FC<ToastProps> = ({ toastList }) => {
  return (
    <Wrapper>
      {toastList.map((toast) => {
        const { logo, style } = selectCategoryStyle(toast.category);
        const { backgroundColor, font, textColor } = style;
        return (
          <ToastContainer color={backgroundColor} key={toast.id}>
            <Icon src={logo} />
            <Text color={textColor} font={font}>
              {toast.text}
            </Text>
            <ButtonWrapper>
              <CloseButton>
                <CloseImg src={CloseIcon} />
              </CloseButton>
            </ButtonWrapper>
          </ToastContainer>
        );
      })}
    </Wrapper>
  );
};
