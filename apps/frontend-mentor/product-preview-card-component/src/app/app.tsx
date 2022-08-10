import styled from 'styled-components';

import Card from '@components/Card';

export function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  padding: 28px 16px;
`;
