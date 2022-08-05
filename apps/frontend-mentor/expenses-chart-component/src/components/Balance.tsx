import styled from 'styled-components';

import Chart from '@components/Chart';
import { tabletAndUp } from '@styles/breakpoints';

type BalanceProps = {
  data: Array<{
    day: string;
    amount: number;
  }>;
};

const Balance = ({ data }: BalanceProps) => (
  <Container>
    <Header>
      <BalanceTitle>My Balance</BalanceTitle>
      <BalanceValue>$921.48</BalanceValue>
    </Header>

    <Expenses>
      <ExpensesTitle>Spending - Last 7 days</ExpensesTitle>

      <Chart data={data} />

      <Divider />

      <Total>
        <CurrentMonth>
          <TotalDescription>Total this month</TotalDescription>
          <TotalValue>$478.33</TotalValue>
        </CurrentMonth>
        <LastMonth>
          <LastTotalPercentage>+2.4%</LastTotalPercentage>
          <LastTotalDescription>from last month</LastTotalDescription>
        </LastMonth>
      </Total>
    </Expenses>
  </Container>
);

export default Balance;

const Container = styled.div`
  --space: 16px;
  width: 100%;
  max-width: 540px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space);

  ${tabletAndUp} {
    --space: 24px;
  }
`;
const Header = styled.div`
  height: 96px;
  background-image: url('../assets/imgs/logo.svg');
  background-color: ${({ theme }) => theme.colors.primary};
  background-repeat: no-repeat;
  background-position: right center;
  background-origin: content-box;
  background-size: 60px 40px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 20px 24px 20px 20px;

  ${tabletAndUp} {
    height: 125px;
    padding: 28px 40px 28px 32px;
    border-radius: ${({ theme }) => theme.radii.lg};
    background-size: revert;
  }
`;
const BalanceTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
const BalanceValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
const Expenses = styled.div`
  padding: 24px 20px 28px 20px;
  background-color: ${({ theme }) => theme.colors.creamLight};
  border-radius: ${({ theme }) => theme.radii.md};
  min-width: max-content;

  ${tabletAndUp} {
    padding: 30px 40px 46px 40px;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;
const ExpensesTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;
const Divider = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.cream};
  width: 100%;
  margin: 24px 0;

  ${tabletAndUp} {
    margin: 28px 0;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-size: ${({ theme }) => theme.fontSizes.m};
  padding-top: 6px;
  line-height: 1;
`;
const CurrentMonth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const TotalDescription = styled.div`
  color: ${({ theme }) => theme.colors.brownMedium};
  font-size: ${({ theme }) => theme.fontSizes.s};

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
const TotalValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;
const LastMonth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 6px;
  padding-bottom: 4px;
`;
const LastTotalPercentage = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
const LastTotalDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.brownMedium};
  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
