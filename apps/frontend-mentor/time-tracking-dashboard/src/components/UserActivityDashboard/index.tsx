import styled from 'styled-components';

import ActivityCard from '@components/UserActivityDashboard/ActivityCard';
import ReportInfo from '@components/UserActivityDashboard/ReportInfo';
import {
  desktopAndUp,
  tabletAndUp,
  tabletLargerAndUp,
} from '@styles/breakpoints';

export function UserActivityDashboard() {
  return (
    <Container>
      <RowSpan>
        <ReportInfo
          name="Jeremy Robson"
          avatarUrl={require('@assets/imgs/avatar.png')}
        />
      </RowSpan>
      <ActivityCard category="work" weekHours={32} lastWeekHours={36} />
      <ActivityCard category="play" weekHours={10} lastWeekHours={8} />
      <ActivityCard category="study" weekHours={4} lastWeekHours={7} />
      <ActivityCard category="exercise" weekHours={4} lastWeekHours={5} />
      <ActivityCard category="social" weekHours={5} lastWeekHours={10} />
      <ActivityCard category="self-care" weekHours={2} lastWeekHours={2} />
    </Container>
  );
}

export default UserActivityDashboard;

const RowSpan = styled.div`
  min-width: 255px;
  min-height: 200px;
  grid-row: 1 / -1;
`;
const Container = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 9px;

  ${tabletAndUp} {
    grid-template-columns: auto repeat(1, minmax(255px, 1fr));
    grid-template-rows: auto repeat(1, 1fr);
    grid-row-gap: 15px;
    grid-column-gap: 30px;
  }

  ${tabletLargerAndUp} {
    grid-template-columns: auto repeat(2, minmax(255px, 1fr));
    grid-template-rows: auto repeat(2, 1fr);
  }

  ${desktopAndUp} {
    grid-template-columns: auto repeat(3, minmax(255px, 1fr));
    grid-template-rows: auto repeat(1, 1fr);
  }
`;
