import React from 'react';
import { withReduxBoot } from './core';
import {
  ReducerRoot,
  SagaRoot,
} from './features/commons';
import { LayoutWrapper } from './features/commons/components';
import Routes from './Routes';

const App = () => (
  <LayoutWrapper>
    <Routes />
  </LayoutWrapper>
);

export default withReduxBoot(
  SagaRoot,
  ReducerRoot,
  App,
);
