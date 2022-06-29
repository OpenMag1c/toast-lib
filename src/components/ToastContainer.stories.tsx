import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useToastService } from "@hooks/useToastService";
import { defaultToastConfig } from "@constants/defaultToastConfig";
import { IToastConfig } from "types/IToastConfig";
import { ToastDuration } from "types/enums/toastDuration";
import { ToastPosition } from "types/enums/toastPosition";
import {
  errorToastStyle,
  infoToastStyle,
  successToastStyle,
  warningToastStyle,
} from "@constants/toastStyles";
import { ToastAnimation } from "types/enums/toastAnimation";
import { ToastContainer } from "./ToastContainer";

export default {
  title: "Components/ToastList",
  component: ToastContainer,
  parameters: {
    config: defaultToastConfig,
  },
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = ({ ...args }) => {
  const { config } = args;
  const { info, warning, error, success } = useToastService(config);

  const warningClick = () => {
    warning("warning toast");
  };

  const infoClick = () => {
    info("info toast");
  };

  const errorClick = () => {
    error("error toast");
  };

  const successClick = () => {
    success("success toast");
  };

  return (
    <>
      <button type="button" onClick={infoClick}>
        Show info
      </button>
      <button type="button" onClick={warningClick}>
        Show warning
      </button>
      <button type="button" onClick={errorClick}>
        Show error
      </button>
      <button type="button" onClick={successClick}>
        Show success
      </button>
      <ToastContainer />
    </>
  );
};

export const Test1 = Template.bind({});
Test1.args = {
  config: {
    duration: ToastDuration.Quick,
    position: ToastPosition.BottomRight,
    animation: ToastAnimation.Movement,
    margin: 5,
  } as IToastConfig,
};
