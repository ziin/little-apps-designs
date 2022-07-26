import styled, { css } from 'styled-components';

import Icon, { IconIds } from '@components/Icon';
import { Text } from '@components/Text';
import { tabletAndUp } from '@styles/breakpoints';
import theme from '@styles/theme';

type Categories =
  | 'play'
  | 'exercise'
  | 'self-care'
  | 'social'
  | 'study'
  | 'work';

type CategoriesProps = {
  [Property in Categories]: {
    name: string;
    color: keyof typeof theme.colors;
    icon: IconIds;
  };
};

const categories: CategoriesProps = {
  play: {
    name: 'Play',
    color: 'ocean',
    icon: 'play',
  },
  exercise: {
    name: 'Exercise',
    color: 'lime',
    icon: 'exercise',
  },
  'self-care': {
    name: 'Self Care',
    color: 'cream',
    icon: 'self-care',
  },
  social: {
    name: 'Social',
    color: 'purple',
    icon: 'social',
  },
  study: {
    name: 'Study',
    color: 'watermelon',
    icon: 'study',
  },
  work: {
    name: 'Work',
    color: 'salmon',
    icon: 'work',
  },
};

type ActivityCardProps = {
  category: Categories;
  weekHours: number;
  lastWeekHours: number;
};

const ActivityCard = ({
  category,
  weekHours,
  lastWeekHours,
}: ActivityCardProps) => {
  const { icon, name, color } = categories[category];
  const bgColor = theme.colors[color];

  return (
    <Container>
      <TopBorder bgColor={bgColor}>
        <Icon id={icon} />
      </TopBorder>
      <Content>
        <Header>
          <Category weight="medium">{name}</Category>
          <SettingsButton>
            <Icon id="ellipsis" />
          </SettingsButton>
        </Header>

        <Body>
          <WeekHours size="xl" weight="light">
            {formatHours(weekHours)}
          </WeekHours>
          <LastWeekHours size="s" color="paleBlue">
            Last Week - {formatHours(lastWeekHours)}
          </LastWeekHours>
        </Body>
      </Content>
    </Container>
  );
};

export default ActivityCard;

const Container = styled.div`
  width: 100%;
  min-width: 255px;
`;
const TopBorder = styled.div<{ bgColor: string }>`
  background-color: ${(p) => p.bgColor};
  height: 53px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  z-index: 1;
  position: relative;
  overflow: hidden;

  ${tabletAndUp} {
    height: 60px;
  }

  & > svg {
    position: absolute;
    right: 22px;
    top: -4px;
  }
`;
const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;

  ${tabletAndUp} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  z-index: 2;
  border-radius: 14px;
  position: relative;
  top: -15px;
  padding: 18px 24px 30px 24px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  ${tabletAndUp} {
    padding: 24px 30px 28px 30px;
  }

  &:hover {
    transition: background-color 0s ease;
    background-color: #34397b;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4px;
`;
const Category = styled(Text)``;
const WeekHours = styled(Text)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xm};
    ${tabletAndUp} {
      font-size: ${theme.fontSizes.xl};
      line-height: 1.6;
    }
  `}
`;
const LastWeekHours = styled(Text)``;

const SettingsButton = styled.button`
  appearance: none;
  border: none;
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.paleBlue};
  cursor: pointer;
`;

function formatHours(hours: number) {
  return hours > 1 ? `${hours}hrs` : `${hours}hr`;
}
