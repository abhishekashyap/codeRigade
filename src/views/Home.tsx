import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #1f2937;
  will-change: transform;
`;

const LeftSectionSkewContainer = styled.section`
  position: absolute;
  width: 70%;
  height: 100%;
  left: -5%;
  background-color: #3498db;
  transform: skewX(-8deg);
`;

const LeftSectionMainContainer = styled.section`
  transform: skewX(8deg);
  margin: 4rem;
  background-color: #95a5a6;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 0.75rem 1.25rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  color: #f0f0f0;
  background-color: #fc5185;
  outline: none;
  transition: 0.2s ease;
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <LeftSectionSkewContainer>
        <LeftSectionMainContainer>
          <Title>Realtime collaborative code editor</Title>
          <Input type="text" placeholder="John Doe" />
          <Button>Get started</Button>
        </LeftSectionMainContainer>
      </LeftSectionSkewContainer>
    </Container>
  );
}
