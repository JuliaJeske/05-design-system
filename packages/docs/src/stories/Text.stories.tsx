import { Text, TextProps } from '@ignite-ui/react'
import { Meta, StoryObj} from '@storybook/react'



export default {
  title: 'Typography/Text',
  component: Text,
   args: { 
    children: 'Example text'
   },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}


