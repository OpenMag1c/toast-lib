import React, { FC } from "react";

import { closeIcon } from "@assets/icons";
import { IToast } from "types/IToast";
import { selectCategoryStyle } from "@helpers/selectCategoryStyle";
import { IToastConfig } from "types/IToastConfig";
import {
  Wrapper,
  Icon,
  Text,
  ButtonWrapper,
  CloseButton,
  CloseImg,
  ToastContainer,
} from "./styled";

export interface ToastProps {
  toastList: IToast[];
  config: IToastConfig;
  deleteToast: (id: string) => () => void;
}

export const Toast: FC<ToastProps> = ({ toastList, config, deleteToast }) => {
  const { position, margin, animation } = config;

  return (
    <Wrapper position={position}>
      {toastList.map((toast) => {
        const { logo, style } = selectCategoryStyle(toast.category, config);
        const { backgroundColor, font, textColor } = style;
        return (
          <ToastContainer
            color={backgroundColor}
            key={toast.id}
            margin={margin}
            position={position}
            isDelete={toast.isDelete}
            animation={animation}
          >
            <Icon src={logo} />
            <Text color={textColor} font={font}>
              {toast.text}
            </Text>
            <ButtonWrapper>
              <CloseButton onClick={deleteToast(toast.id)}>
                <CloseImg src={closeIcon} />
              </CloseButton>
            </ButtonWrapper>
          </ToastContainer>
        );
      })}
    </Wrapper>
  );
};
