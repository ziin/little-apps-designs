import styled from 'styled-components';

import { Avatar } from '@components/Avatar';
import { Heading } from '@components/Heading';
import { Text } from '@components/Text';
import { tabletAndUp } from '@styles/breakpoints';

type ReportInfoProps = {
  name: string;
  avatarUrl: string;
};

const ReportInfo = ({ name, avatarUrl }: ReportInfoProps) => (
  <Container>
    <Header>
      <Avatar src={avatarUrl} />
      <Info>
        <Text size="s" color="paleBlue">
          Report for
        </Text>
        <Name size="ms" weight="light">
          {name}
        </Name>
      </Info>
    </Header>
    <Body>
      <Button>
        <Text>Daily</Text>
      </Button>
      <Button>
        <Text>Weekly</Text>
      </Button>
      <Button>
        <Text>Monthly</Text>
      </Button>
    </Body>
  </Container>
);

export default ReportInfo;

const Container = styled.div`
  --overlap: 15px;
  isolation: isolate;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 255px;
`;

const Header = styled.div`
  height: 132px;
  background-color: ${(p) => p.theme.colors.primary};
  border-radius: 14px;
  padding: 34px 30px;
  z-index: 1;
  display: flex;
  gap: 16px;
  align-items: center;

  ${Avatar} {
    width: 70px;
    height: 70px;
  }

  ${tabletAndUp} {
    min-height: 354px;
    flex-direction: column;
    align-items: revert;
    gap: 38px;

    ${Avatar} {
      width: 84px;
      height: 84px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled(Heading)`
  line-height: 117%;

  ${tabletAndUp} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

const Body = styled.div`
  --padding: 24px;
  height: calc(70px + var(--overlap));
  background-color: white;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${(p) => p.theme.colors.darkBlue};
  position: relative;
  top: calc(-1 * var(--overlap));
  padding-top: var(--overlap);
  z-index: -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: var(--padding);
  padding-right: var(--padding);

  ${tabletAndUp} {
    height: 100%;
    flex-direction: column;
    justify-content: revert;
    align-items: start;
    padding-top: calc(var(--padding) + var(--overlap) - 4px);
  }
`;

const Button = styled.button`
  margin: 0;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 6px;
  color: ${(p) => p.theme.colors.desaturatedBlue};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: ${(p) => p.theme.colors.white};
    transition: color 0s;
  }
`;
