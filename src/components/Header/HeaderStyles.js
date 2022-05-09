import { IoIosArrowDropdown} from 'react-icons/io';
import {IoCloudyNightOutline} from 'react-icons/io5';
import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background1};
  padding: 1rem;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: ${(props) => ( props.button ? 'none' : 'flex')};
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${(props) => ( props.button ? 'flex' : 'none')};
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;
export const Li = styled.div`
  line-height: 5rem;
  padding: 0 3rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: normal;
    padding: 2rem 0;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  padding: 0.5rem;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a.attrs(props => ({
  "target": "_blank"
}))`
transition: 0.3s ease;
color: white;
border-radius: 5rem;
padding: 1rem 1.5rem;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
export const Cloud = styled(IoCloudyNightOutline)`
  font-size: 7rem;
  padding: 0 0.5rem ;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 5rem;
    padding:;
  }
`;