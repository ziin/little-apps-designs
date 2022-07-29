import styled from 'styled-components';

import UserActivityDashboard from '@components/UserActivityDashboard';
import { tabletAndUp } from '@styles/breakpoints';

export function App() {
  return (
    <Page>
      <UserActivityDashboard />
    </Page>
  );
}

export default App;

const Page = styled.div`
  padding: 24px;
  height: 100%;

  ${tabletAndUp} {
    padding: 30px;
    display: grid;
    place-items: center;
  }
`;
