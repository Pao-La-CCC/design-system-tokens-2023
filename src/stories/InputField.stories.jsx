import React from 'react';

import { InputField as InputFieldComponent } from '../components/molecules/InputField/InputField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design System/Molecules/InputField',
  component: InputFieldComponent ,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  arg: {
    primary: true,
    label: 'Button',
    type: 'text',
    id: 'aze'
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <InputFieldComponent  {...args} />;

export const InputField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
//   type: 'text',
//   id: 'aze'
// };

