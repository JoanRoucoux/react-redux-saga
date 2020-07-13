import { act } from 'react-dom/test-utils';
import { expect } from 'chai';
import testHook from '../utils/TestHook';
import usePopin from './usePopin';

describe('usePopin', () => {
  let popin;
  beforeEach(() => {
    testHook(() => {
      popin = usePopin();
    });
  });

  it('should have correct functions', () => {
    expect(popin.togglePopin)
      .to.be.instanceOf(Function);
  });

  it('should update the value when togglePopin is called', () => {
    act(() => {
      popin.togglePopin();
    });
    expect(popin.isShowing)
      .to.equal(true);
  });
});
