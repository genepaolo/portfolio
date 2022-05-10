import React from 'react';
import { DiFirebase, DiReact, DiCssTricks, DiCode} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import {pl, fe, be, other} from "./techskills.js"

// import Aos from "aos";
// import "aos/dist/aos.css"
// import {useEffect} from "react";

const Technologies = (props) =>  {

  return(
  <Section dataaos={props.dataaos} id="tech">
    <SectionDivider divider colorAlt />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience from simple front-end projects to MERN stack applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            {
              pl.map((p, i) => {
                return (
                  <div key={i}>
                    {p}
                    <br/>
                  </div>
                )
              })
            }
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          {
              fe.map((p,i) => {
                return (
                  <div key={i}>
                    {p}
                    <br/>
                  </div>
                )
              })
            }
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          {
              be.map((p,i) => {
                return (
                  <div key={i}>
                    {p}
                    <br/>
                  </div>
                )
              })
            }
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCssTricks size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
          {
              other.map((p,i) => {
                return (
                  <div key={i}>
                    {p}
                    <br/>
                  </div>
                )
              })
            }
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
  </Section>
  )};

export default Technologies;
