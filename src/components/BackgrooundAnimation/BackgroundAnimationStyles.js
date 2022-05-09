import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;