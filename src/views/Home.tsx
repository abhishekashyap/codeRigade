import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

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
  width: 70%;
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
  display: flex;
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

const ActionContainer = styled.div`
  display: flex;
`;

const FooterContainer = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  border-radius: 999px;
  border: 2px solid white;
`;

export default function Home(): JSX.Element {
  return (
    <Container>
      <LeftSectionSkewContainer>
        <LeftSectionMainContainer>
          <Title>Realtime collaborative code editor</Title>
          <ActionContainer>
            <Input type="text" placeholder="John Doe" />
            <Button>
              Get started&nbsp;&nbsp;
              <FiArrowRight />
            </Button>
          </ActionContainer>
          <FooterContainer>
            <FooterContainer>
              <Avatar
                src="https://avatars.githubusercontent.com/u/29458374?s=460&u=1ba41b270e9369be20bfa7424ad353ec7ca984bd&v=4"
                alt="Abhishek Kashyap"
              />
            </FooterContainer>
          </FooterContainer>
        </LeftSectionMainContainer>
      </LeftSectionSkewContainer>
    </Container>
  );
}
