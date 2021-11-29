import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  background: ${props => (props.disabled ? '#ccc' : '#6A80E4')};
  border-radius: 0.75rem;
  border: 0;
  color: #ffff;
  font-weight: 500;
  line-height: 1rem;
  padding: 0.75rem 1rem;
  font-size: 0.87rem;
  width: 100%;
  height: 56px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#6A80E4')};
    background: ${props => (props.disabled ? '#ccc' : shade(0.2, '#6A80E4'))};
    cursor: pointer;
  }
`
