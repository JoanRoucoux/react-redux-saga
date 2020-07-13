import React from 'react';
import { mount } from 'enzyme';

// Because hooks cannot be called from anywhere,
// we need to create a component from which we call out hooks.
// Callback is used to pass result in the outside scope where we want to test it
const TestHook = ({ callback }) => {
  callback();
  return null;
};

const testHook = (callback) => {
  mount(
    <TestHook callback={callback} />,
  );
};

export default testHook;
