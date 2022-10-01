import { ChoiceSVG } from "./ChoiceSVG";
import { Story } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "store/store";

export default {
  title: "ChoiceSVG",
  component: ChoiceSVG,
  argTypes: {
    svg: {
      type: "string",
      defaultValue: "TaskSVG",
      options: [
        "TaskSVG",
        "Random ThoughtSVG",
        "IdeaSVG",
        "QuoteSVG",
        "archiveSVG",
        "unArchiveSVG",
        "deleteSVG",
        "editSVG",
      ],
      control: { type: "radio" },
    },
  },
  decorators: [
    (ChoiceSVG: Story) => (
      <Provider store={store}>
        <div className="w-[40px] h-[40px]">
          <ChoiceSVG />
        </div>
      </Provider>
    ),
  ],
};

const Template: Story<typeof ChoiceSVG> = (args) => <ChoiceSVG {...args} />;

export const Default = Template.bind({});

Default.args = {};
