import { Story } from "@storybook/react";
import { RenderButton } from "./RenderButton";

export default {
  title: "RenderButton",
  component: RenderButton,
};

const Template: Story<typeof RenderButton> = (args) => (
  <RenderButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "Create Note",
};
