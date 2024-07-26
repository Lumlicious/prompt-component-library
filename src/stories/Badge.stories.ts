import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/Badge/Badge";

const meta: Meta<typeof Badge> = {
  title: "Nabis/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    color: "blue",
    children: "Badge",
  },
};
