import React from 'react';
import Typewriter from 'typewriter-effect';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { MiddleSection, PCenter } from './HeroStyles';
function Hero(){
  
  function handleClick(){
    window.location = "/#about";
  }

  return(
  <>
    <Section row nopadding fullheight>
      <MiddleSection>
        <SectionTitle main center>
          <PCenter>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I'm Gene Flores").start();
            }}
          />
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(3000).typeString("Welcome :)")
                .start();
            }}
          />
          </PCenter>
        </SectionTitle>
        <Button onClick={handleClick}>Learn More</Button>
      </MiddleSection>
      
    </Section>
  </>)
};


export default Hero;