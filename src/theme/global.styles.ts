import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --color-purple: #6560F8;
    --color-black: #323232;
    --color-red: #F56464;
    --main-txt-color: blue;
    --main-padding: 15px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
  }

  body, input, button {
    font-size: 16px;
    font-weight: 300;
  }

  h1, h2, h3, h4, strong {
    font-weight: 900;
  }

  button, input {
    border: none;
  }
`
