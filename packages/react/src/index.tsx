import { styled } from './styles';

import { ComponentProps } from 'react';

export type ButtonProps = ComponentProps< typeof Button>

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  
  border: 0,
  fontWeight: 'bold',
  color:'$white',

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: 14,
      },
      big: {
        padding: '$3 $6',
        fontSize: 16,
      }
    }
  },
  defaultVariants: {
    size:'small',
  }
})

