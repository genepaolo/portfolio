import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { MiddleSection } from './HeroStyles';
function Hero(){
  
  function handleClick(){
    window.location = "/#about";
  }

  return(
  <>
    <Section row nopadding fullheight>
      <MiddleSection>
        <SectionTitle main center>
          I'm Gene Flores, <br />
          web developer.
        </SectionTitle>
        <Button onClick={handleClick}>Learn More</Button>
      </MiddleSection>
      
    </Section>
  </>)
};


export default Hero;