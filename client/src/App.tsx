import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage';
import { useQuery, gql } from '@apollo/client';

const AppContainer = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
    `};
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
