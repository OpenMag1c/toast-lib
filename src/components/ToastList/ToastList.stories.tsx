import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ToastList from ".";

export default {
  title: "Components/ToastList",
  component: ToastList
} as Meta;

const Template: Story = (args) => <ToastList />;

export const Test1 = Template.bind({});

