import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            paolo.gene@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/genepaolo">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gene-paolo-flores-5b3927151/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
