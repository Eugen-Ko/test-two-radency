import { RenderTableEl } from "./RenderTableEl";
import { Story } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "store/store";

export default {
  title: "RenderTableEl",
  component: RenderTableEl,
  argTypes: {
    header: {
      type: "boolean",
      description: "header or list element",
      defaultValue: false,
      options: [true, false],
      control: { type: "radio" },
    },
    typeTab: {
      type: "string",
      defaultValue: "todo",
      options: ["todo", "stat"],
      control: { type: "radio" },
    },
    data: {
      type: "string[][]",
      defaultValue: [
        "TaskSVG",
        "Shop",
        "Sep 23, 2022",
        "Task",
        "Content",
        "23/05/2022 ",
        "editSVG",
        "archiveSVG",
        "deleteSVG",
      ],
      // options: [
      //   [
      //     " ",
      //     "Name",
      //     "Created",
      //     "Category",
      //     "Content",
      //     "Dates",
      //     " ",
      //     "archiveSVG",
      //     "deleteSVG",
      //   ],
      //   [
      //     "TaskSVG",
      //     "Shop",
      //     "Sep 23, 2022",
      //     "Task",
      //     "Content",
      //     " ",
      //     "editSVG",
      //     "archiveSVG",
      //     "deleteSVG",
      //   ],
      //   [" ", "Note Category", " ", "Active", " ", "Archived", " ", " ", " "],
      //   ["QuoteSVG", "Quote", " ", "5", " ", "5", " ", " ", " "],
      // ],
      // control: { type: "radio" },
    },
  },
  decorators: [
    (RenderTableEl: Story) => (
      <Provider store={store}>
        <RenderTableEl />
      </Provider>
    ),
  ],
};

const Template: Story<typeof RenderTableEl> = (args) => (
  <RenderTableEl {...args} />
);

export const Header = Template.bind({});

Header.args = {
  header: true,
  typeTab: "todo",
  data: {
    data: [
      "",
      "Name",
      "Created",
      "Category",
      "Content",
      "Dates",
      "",
      "archiveSVG",
      "deleteSVG",
    ],
  },
};

export const ToDo = Template.bind({});

ToDo.args = {
  header: false,
  typeTab: "todo",
  data: {
    data: [
      "TaskSVG",
      "Shop",
      "Sep 23, 2022",
      "Task",
      "Content",
      "",
      "editSVG",
      "archiveSVG",
      "deleteSVG",
    ],
  },
};

export const Stat = Template.bind({});

Stat.args = {
  header: false,
  typeTab: "stat",
  data: {
    data: ["TaskSVG", "Task", "", "5", "", "5", "", "", ""],
    id: "1",
  },
};
