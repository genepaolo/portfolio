import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { MiddleSection } from './HeroStyles';
import BackgroundAnimation from  '../BackgrooundAnimation/BackgroundAnimation';
const Hero = (props) => (
  <>
    <Section row nopadding fullheight>
      <MiddleSection>
        <SectionTitle main center>
          I'm Gene Flores, <br />
          web developer.
        </SectionTitle>
        <Button>Learn More</Button>
        <BackgroundAnimation />
      </MiddleSection>
      
    </Section>
  </>
);


export default Hero;