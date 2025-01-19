import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .skills-container,
  .certifications-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .box {
    ${({ theme }) => theme.mixins.boxShadow};
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 20px;
    min-width: 200px;
    text-align: center;
  }
`;

const Skills = () => {
  const revealSkills = useRef(null);
  const revealCertifications = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealSkills.current, srConfig());
    sr.reveal(revealCertifications.current, srConfig());
  }, []);

  return (
    <StyledSkillsSection id="skills" ref={revealSkills}>
      <h2 className="numbered-heading">Skills</h2>
      <div className="skills-container">
        <div className="box"> Python </div>
        <div className="box"> Java </div>
        <div className="box"> C++ </div>
        <div className="box"> GenAI/LLM's </div>
        <div className="box"> R </div>
        <div className="box"> MySQL </div>
        <div className="box"> Django </div>
        <div className="box"> HTML </div>
        <div className="box"> CSS </div>
        <div className="box"> Node.js </div>
        <div className="box"> React </div>
        <div className="box"> REST </div>
        <div className="box"> GitHub </div>
        <div className="box"> Autogens </div>
        <div className="box"> Agentic AI </div>
        <div className="box"> Machine Learning </div>
        <div className="box"> AWS </div>
        <div className="box"> GCP </div>
        <div className="box"> Linux/ bash scripting </div>
        <div className="box"> SAAS </div>
        {/* Add more skills boxes as needed */}
      </div>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2> </h2>
      <h2 ref={revealCertifications}>Courses & Certifications</h2>
      <div className="certifications-container">
        <div className="box"> Design and Analysis of Algorithms (CS535) </div>
        <div className="box"> Advanced Operating Systems (CS550) </div>
        <div className="box"> Cloud Computing (CS553) </div>
        <div className="box"> Advanced Database Organization (CS525) </div>
        <div className="box"> Machine Learning (CS584) </div>
        <div className="box"> Nautral Language Processing (CS585) </div>
        <div className="box"> Data Preparation and Analysis (CSP571) </div>
        <div className="box"> Big Data Technologies (CSP 574) </div>
        <div className="box"> 100 Days of Python Bootcamp </div>
        <div className="box"> Java Data Structures and Algorithms </div>
        <div className="box"> Google Cloud Architecture </div>
        <div className="box"> Python by university of michigan </div>
        {/* Add more certifications boxes as needed */}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
