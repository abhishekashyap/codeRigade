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
`;

const Title = styled.h1`
  font-size: 2.25rem;
  color: white;
`;

const FooterTitle = styled.h5`
  font-size: 1rem;
  letter-spacing: 0.15rem;
  color: white;
  text-transform: uppercase;
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
  flex-direction: column;
  margin-top: 2rem;
`;

const FooterContent = styled.a`
  display: flex;
  margin-top: 1.25rem;
  text-decoration: none;
`;

const Avatar = styled.img`
  height: 3rem;
  width: 3rem;
  overflow: hidden;
  border-radius: 999px;
  border: 2px solid white;
`;

const AvatarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-left: 0.75rem;
`;

const AvatarTitle = styled.p`
  font-weight: bolder;
  letter-spacing: 0.05rem;
`;

const AvatarSubtitle = styled.p`
  font-size: 0.5rem;
  letter-spacing: 0.05rem;
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
            <FooterTitle>Developed by</FooterTitle>
            <FooterContent
              href="https://github.com/abhishekashyap"
              target="_blank"
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/29458374?s=460&u=1ba41b270e9369be20bfa7424ad353ec7ca984bd&v=4"
                alt="Abhishek Kashyap"
              />
              <AvatarContent>
                <AvatarTitle>Abhishek Kashyap</AvatarTitle>
                <AvatarSubtitle>
                  Designer by the day, Coder by the night
                </AvatarSubtitle>
              </AvatarContent>
            </FooterContent>
          </FooterContainer>
        </LeftSectionMainContainer>
      </LeftSectionSkewContainer>
    </Container>
  );
}
