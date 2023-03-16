import {  AvatarProps, Avatar } from '@ignite-ui/react'
import { Meta, StoryObj} from '@storybook/react'



export default {
  title: 'Data display/Avatar',
  component: Avatar,
   args: { 
     src: 'https://github.com/JuliaJeske.png',
     alt: 'Julia Jeske',
   },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}

