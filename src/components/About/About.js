import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle, SectionSmallTitle } from '../../styles/GlobalComponents';

import Aos from "aos";
import "aos/dist/aos.css"
import {useEffect} from "react";



const About = (props) => {
  
  useEffect(()=>{
    
  }, []);

  return (
    <Section dataaos={props.dataaos} id="about">
      <SectionDivider divider />
      <SectionTitle>About</SectionTitle>
      <br/>
      <SectionSmallTitle>me</SectionSmallTitle>
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
