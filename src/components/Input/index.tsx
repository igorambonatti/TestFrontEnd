import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'

import { useField } from '@unform/core'

import { Content, Error, Container } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
  image?: string
  hasBorder?: boolean
  disabled?: boolean
}

const Input: React.FC<IInputProps> = ({
  name,
  icon: Icon,
  image,
  hasBorder = true,
  disabled = false,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <>
      <Container>
        {(isFocused || isFilled) && <span> {props?.placeholder}</span>}
        <Content
          isErrored={!!error}
          isFilled={isFilled}
          isFocused={isFocused}
          hasBorder={hasBorder}>
          {Icon && <Icon size={20} />}
          {image && <img src={image} height={24} />}
          <input
            disabled={disabled}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={defaultValue}
            ref={inputRef}
            {...props}
          />
          {error && (
            <Error title={error}>
              <FiAlertCircle color="#9D5EBD" size={20} />
            </Error>
          )}
        </Content>
      </Container>
    </>
  )
}

export default Input
