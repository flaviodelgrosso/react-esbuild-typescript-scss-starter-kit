import React from 'react';
import { Story } from '@storybook/react';
import { Button, IButtonProps } from '../components/button';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

