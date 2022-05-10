import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background-image: linear-gradient( to bottom, ${props => props.theme.colors.background1}, ${props => props.theme.colors.background3 } 85%,${props => props.theme.colors.background4} 92%, ${props => props.theme.colors.background5} 99.75%, black 99.75%);
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    width: 100%;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }


  li{
    list-style: none;
  }

  .rocketman{
    text-align: center;
    // background: linear-gradient(to bottom, ${props => props.theme.colors.background4} 30%, ${props => props.theme.colors.background5} 92%, #000 92%);
  }
  .stars {
    position: relative;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: white;
    position: fixed;
    animation-name: particleAnimation1;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  .stars::before{
    position: absolute;
    display: block;
    content: "";
    width: 100px;
    right: 1px;
    top: 250%;
    transform: rotateZ(-15deg);
    height: 5px;
    background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(255,255,255,0.4) 100%); 
  }
  
  .stars:nth-of-type(1) { 
    top: 25%; animation-duration: 5s;
    animation-name: particleAnimation1;

  }
  .stars:nth-of-type(2) { 
    top: 38%; animation-duration: 1s; 
    animation-name: particleAnimation2;

  }
  .stars:nth-of-type(3) { 
    top: 75%; animation-duration: 2s; 
    animation-name: particleAnimation3;

  }
  .stars:nth-of-type(4) { 
    top: 50%; animation-duration: 1s; 
    animation-name: particleAnimation4;

  }
  .stars:nth-of-type(5) { 
    top: 90%; animation-duration: 8s; 
    animation-name: particleAnimation5;

  }
  
  @keyframes particleAnimation1 {
    from {
      top: 25%;
      left: -100px;
    }
    to {
      top: 0;
      left: calc(100% + 100px);
    }
  }
  @keyframes particleAnimation2 {
    from {
      top: 38%;
      left: -100px;
    }
    to {
      top: 13%;
      left: calc(100% + 100px);
    }
  }
  @keyframes particleAnimation3 {
    from {
      top: 75%;
      left: -100px;
    }
    to {
      top: 50%;
      left: calc(100% + 100px);
    }
  }
  @keyframes particleAnimation4 {
    from {
      top: 50%;
      left: -100px;
    }
    to {
      top: 25%;
      left: calc(100% + 100px);
    }
  }
  @keyframes particleAnimation5 {
    from {
      top: 90%;
      left: -100px;
    }
    to {
      top: 65%;
      left: calc(100% + 100px);
    }
  }
  .btn-close{
    background: transparent url("https://img.icons8.com/fluency-systems-filled/48/ffffff/close-window.png")  center/2em auto no-repeat;
  }

`;

export default GlobalStyles;