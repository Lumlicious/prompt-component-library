import type { Meta, StoryObj } from "@storybook/react";
import ActionCard from "../components/ActionCard/ActionCard";

const meta: Meta<typeof ActionCard> = {
  title: "Nabis/ActionCard",
  component: ActionCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ActionCard>;

export const Primary: Story = {
  args: {
    data: {
      number: 123456,
      companyName: "Spliff Decision",
    },
  },
};
