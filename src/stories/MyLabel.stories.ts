import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta:Meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio' }
    }

} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
        size: 'normal',
        color: 'primary'
    }
};

export const AllCaps: Story = {
    args: {
        label: 'AllCaps label',
        size: 'normal',
        allCaps: true,
    }
};


export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        size: 'h1',
        color: 'secondary'
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: 'CustomColor label',
        size: 'normal',
        fontColor: '#27d98e',
        backgroundColor: 'black'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'CustomColor label',
        size: 'normal',
        fontColor: '#27d98e'
    }
};