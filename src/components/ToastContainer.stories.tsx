import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useToastService } from "@hooks/useToastService";
import { ToastContainer } from "./ToastContainer";

export default {
  title: "Components/ToastList",
  component: ToastContainer,
} as ComponentMeta<typeof ToastContainer>;

const Template: ComponentStory<typeof ToastContainer> = () => {
  const { info, warning, error, success } = useToastService();

  const infoClick = () => {
    info("info toast");
  };

  const warningClick = () => {
    warning("warning toast");
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
