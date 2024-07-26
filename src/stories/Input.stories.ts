import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Nabis/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter text",
    isDisabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Enter text",
    isInvalid: true,
  },
};
