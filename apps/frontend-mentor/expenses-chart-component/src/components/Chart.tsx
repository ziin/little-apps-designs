import styled from 'styled-components';

import { tabletAndUp } from '@styles/breakpoints';

type BarChartProps = {
  data: Array<{
    day: string;
    amount: number;
  }>;
};
const Chart = ({ data }: BarChartProps) => {
  /**
   * Used to calculate the height of the bar chart.
   */
  const biggestExpense = data.reduce((acc, curr) => {
    return acc.amount > curr.amount ? acc : curr;
  }, data[0]);

  /**
   * Used in the chart to determine the color of the bar.
   */
  const weekday = new Date()
    .toLocaleDateString('en-US', { weekday: 'short' })
    .toLowerCase();

  return (
    <Container>
      {data.map(({ day, amount }) => {
        const height = amount / biggestExpense.amount;
        const isToday = day === weekday;

        return (
          <BarContainer key={day}>
            <Tooltip>${amount}</Tooltip>
            <Bar percentage={height} secondary={isToday} />
            <Weekday>{day}</Weekday>
          </BarContainer>
        );
      })}
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  display: flex;
  align-items: end;
  gap: 12px;
  padding-top: 16px;

  ${tabletAndUp} {
    padding-top: 14px;
    gap: 18px;
  }
`;

const Bar = styled.div<{
  percentage: number;
  secondary?: boolean;
}>`
  --maxHeight: 150px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  max-height: var(--maxHeight);
  height: calc(var(--maxHeight) * ${({ percentage }) => percentage});
  border-radius: ${({ theme }) => theme.radii.sm};
`;

const Weekday = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.brownMedium};
  margin-top: 8px;

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Tooltip = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.brownDark};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  position: absolute;
  top: 0;
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 100%;
  transform: translateX(-50%);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s;

  ${tabletAndUp} {
    font-size: ${({ theme }) => theme.fontSizes.m};
    padding: 10px 8px;
  }
`;

const BarContainer = styled.div`
  flex: 1 1 100%;
  text-align: center;
  /* Tooltip space */
  padding-top: 32px;
  position: relative;

  ${tabletAndUp} {
    padding-top: 48px;
  }

  &:hover ${Bar} {
    opacity: 0.7;
  }

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.15s ease-in-out 0.1s;
  }
`;
