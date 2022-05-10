import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle, SectionSmallTitle } from '../../styles/GlobalComponents';
import {Img, ImgContainer} from "./AboutStyles";
// import Aos from "aos";
// import "aos/dist/aos.css"
// import {useEffect} from "react";


import pp from "../../../public/images/profile.jpeg";


const About = (props) => {
  
  
  return (
    <Section dataaos={props.dataaos} id="about">
      <SectionDivider divider />
      <SectionTitle>About</SectionTitle>
      <br/>
      <SectionSmallTitle>me</SectionSmallTitle>
      <ImgContainer>
        <Img width="300px" height="300px" objectFit="cover" objectPosition="center" src={pp} />
      </ImgContainer>
      <SectionText>
        My name is Gene Paolo Oreta Flores. I am a recent graduate of USC Viterbi School of Engineering with a B.S. in Computer Science. I am currently looking for a developer role to kickstart my career!
      </SectionText>
      <SectionSmallTitle>the website</SectionSmallTitle>
      <SectionText>
          This is a simple one page React application with NextJS and Styled Components to showcase my portfolio.
      </SectionText>
    </Section>
  );
};

export default About;
