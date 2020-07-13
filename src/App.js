import React from 'react';
import { withReduxBoot } from './core';
import {
  ReducerRoot,
  SagaRoot,
} from './features/commons';
import {
  LayoutWrapper,
  ThemeWrapper,
} from './features/commons/components';
import Routes from './Routes';

const App = () => (
  <ThemeWrapper>
    <LayoutWrapper>
      <Routes />
    </LayoutWrapper>
  </ThemeWrapper>
);

export default withReduxBoot(
  SagaRoot,
  ReducerRoot,
  App,
);
