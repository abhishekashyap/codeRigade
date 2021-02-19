import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1f2937;
`;

const LeftSectionContainer = styled.section`
  width: 70%;
  background-color: #3498db;
  transform: skewX(-6deg);
`;

const RightSectionContainer = styled.section`
  width: 50%;
  background-color: #9b59b6;
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <LeftSectionContainer>Hello</LeftSectionContainer>
      <RightSectionContainer>bello</RightSectionContainer>
    </Container>
  );
}
