import styled from 'styled-components';

import { tabletAndUp } from '@styles/breakpoints';

import Icon from './Icon';

export function Card() {
  return (
    <Container>
      <Illustration />

      <Content>
        <Category>Perfume</Category>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </Description>
        <Prices>
          <Price>$149.99</Price>
          <LastPrice>$169.99</LastPrice>
        </Prices>
        <Button>
          <Icon id="cart" />
          Add to cart
        </Button>
      </Content>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  min-width: 280px;
  max-width: 600px;
  box-shadow: var(--shadow-elevation-low);

  ${tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Illustration = styled.div`
  height: 240px;
  background-image: url('../assets/imgs/image-product-mobile.jpg');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  ${tabletAndUp} {
    height: 100%;
    width: 100%;
    background-image: url('../assets/imgs/image-product-desktop.jpg');
  }
`;
const Content = styled.article`
  padding: 24px;

  ${tabletAndUp} {
    padding: 32px;
  }
`;
const Category = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  text-transform: uppercase;
  letter-spacing: 0.415em;
  color: ${({ theme }) => theme.colors.grayBlue};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 16px;

  ${tabletAndUp} {
    margin-bottom: 24px;
  }
`;
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: 16px;

  ${tabletAndUp} {
    margin-bottom: 24px;
  }
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayBlue};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.65;
  margin-bottom: 24px;

  ${tabletAndUp} {
    margin-bottom: 30px;
  }
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  ${tabletAndUp} {
    margin-bottom: 28px;
  }
`;
const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;
const LastPrice = styled.p`
  color: ${({ theme }) => theme.colors.grayBlue};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: line-through;
`;
const Button = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: background-color 0.2s ease-out;
  outline-offset: 4px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transition: background-color 0s ease-out;
  }
`;
