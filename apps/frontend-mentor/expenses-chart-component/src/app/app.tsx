import styled from 'styled-components';

import Balance from '@components/Balance';

import data from '../data.json';

export function App() {
  return (
    <Container>
      <Balance data={data} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 0 16px;
  height: 100%;
`;
