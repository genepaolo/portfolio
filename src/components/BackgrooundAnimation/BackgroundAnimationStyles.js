import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;