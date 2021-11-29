import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button: React.FC<IButtonProps> = ({ children, isLoading, ...rest }) => (
  <Container {...rest}>{isLoading ? 'Loading...' : children}</Container>
)

export default Button
