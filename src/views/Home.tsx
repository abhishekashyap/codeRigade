import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #1f2937;
  will-change: transform;
  background-image: url('https://unsplash.com/photos/ZgZsKFnSbEA/download?force=true&w=1920');
`;

const LeftSectionSkewContainer = styled.section`
  position: absolute;
  width: 70%;
  height: 100%;
  left: -5%;
  background-color: #0e1226;
  transform: skewX(-8deg);
`;

const LeftSectionMainContainer = styled.section`
  transform: skewX(8deg);
  margin: 5rem;
  padding: 5rem;
  /* background-color: #95a5a6; */
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

const Input = styled.input`
  width: 100%;
  color: #1f2937;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  transition: 0.25s ease;
  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.9);
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 0.5rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: #f0f0f0;
  background-color: #fa3c75;
  outline: none;
  transition: 0.25s ease;
  &:hover {
    background-color: #fc5185;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.9);
  }
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
