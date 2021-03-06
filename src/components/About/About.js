import React from 'react';

import { SectionJump,Section, SectionDivider, SectionText, SectionTitle, SectionSmallTitle } from '../../styles/GlobalComponents';
import {Img, ImgContainer} from "./AboutStyles";


import pp from "../../../public/images/profile.jpeg";


const About = (props) => {
  
  
  return (
    <div>
            <SectionJump id="about">&nbsp;</SectionJump>
            <Section dataaos={props.dataaos}>
      <SectionDivider divider />
      <SectionTitle>About</SectionTitle>
      <ImgContainer>
        <Img priority width="300px" height="300px" objectFit="cover" objectPosition="center" src={pp} />
      </ImgContainer>
      <br/>
      <SectionText>
        My name is Gene Paolo Oreta Flores. I am a recent graduate of USC Viterbi School of Engineering with a B.S. in Computer Science and I am currently a web developer for Weaverry. I love working with responsive designs from small business sites to rich interactive web applications!
      </SectionText>
      <SectionText>
          This is a simple one page React application with NextJS and Styled Components to showcase my portfolio.
      </SectionText>
    </Section>

    </div>
    
  );
};

export default About;
