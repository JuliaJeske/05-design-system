import { Heading, HeadingProps } from '@ignite-ui/react'
import { Meta, StoryObj} from '@storybook/react'



export default {
  title: 'Typography/Heading',
  component: Heading,
   args: { 
    children: 'Example Heading'
   },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm','md','lg','2xl','4xl','4xl','6xl'],
      control: {
        type: 'inline-radio'
      }
    },
   },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`'
      }
    }
  }
}


