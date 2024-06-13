import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

// interface IParams {
//   coinId: string;
// }

interface ILocation {
  state: {
    name: string;
  };
}

export default function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as ILocation;
  console.log(state);

  return (
    <Container>
      <Header>
        <Title>
          {state.name}&{coinId}
        </Title>
      </Header>
    </Container>
  );
}
