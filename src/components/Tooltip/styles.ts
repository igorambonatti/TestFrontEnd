import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    background: #161b2e;
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.87rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 0.75rem);
    width: 160px;
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #161b2e transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
