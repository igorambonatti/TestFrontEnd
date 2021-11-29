/* eslint-disable @typescript-eslint/indent */
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

import Tooltip from '../Tooltip'

interface IContentProps {
  isFocused: boolean
  isFilled: boolean
  hasBorder: boolean
  isErrored: boolean
}
export const Container = styled.div`
  width: 100%;
  position: relative;
  span {
    position: absolute;
    bottom: 58px;
    left: 0.75rem;
    color: var(--color-purple);
    font-size: 0.87rem;
  }
`

export const Content = styled.div<IContentProps>`
  background: #fff;
  border-radius: ${props => (props.hasBorder ? '0.625rem' : ' 0px')};
  padding: 1rem;
  width: 100%;
  color: var(--color-purple);
  display: flex;
  align-items: center;
  margin: 30px 0;
  border: 1px solid var(--color-purple);
  > img {
    margin-right: 20px;
  }
  & + div {
    margin-top: 40px;
  }
  ${(props: IContentProps): false | FlattenSimpleInterpolation =>
    props.isErrored &&
    css`
      border: 2px solid #9d5ebd;
    `}
  ${(props: IContentProps): false | FlattenSimpleInterpolation =>
    props.isFocused &&
    css`
      color: var(--color-purple);
      border-color: var(--color-purple);
    `}
  ${(props: IContentProps): false | FlattenSimpleInterpolation =>
    props.isFilled &&
    css`
      color: var(--color-purple);
    `}
  input {
    flex: 1;
    width: 100%;
    background: transparent;
    color: var(--color-purple);
    font-size: 1rem;
    &::placeholder {
      color: var(--color-purple);
      font-size: 0.87rem;
      ${(props: IContentProps): false | FlattenSimpleInterpolation =>
        props.isFocused &&
        css`
          color: transparent;
        `}
    }
  }
  svg {
    margin-right: 1rem;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 1rem;
  svg {
    margin: 0;
  }
  span {
    background: #9d5ebd;
    color: #fff;
    text-align: center;
    &::before {
      border-color: #9d5ebd transparent;
    }
  }
`
