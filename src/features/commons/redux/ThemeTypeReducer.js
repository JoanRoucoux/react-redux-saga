import CommomActionTypes from './CommonActionTypes';

const {
  SET_LIGHT_THEME_TYPE,
  RESET_THEME_TYPE,
} = CommomActionTypes;

const LIGHT_THEME_TYPE = 'light';
const DARK_THEME_TYPE = 'dark';

// reducer initial state
const initialState = {
  themeType: DARK_THEME_TYPE,
};

const ThemeTypeReducer = (
  state = initialState,
  action,
) => {
  let newState = state;
  switch (action.type) {
    case SET_LIGHT_THEME_TYPE:
      newState = {
        ...state,
        themeType: LIGHT_THEME_TYPE,
      };
      break;
    case RESET_THEME_TYPE:
      newState = {
        ...state,
        themeType: initialState.themeType,
      };
      break;
    default:
      break;
  }
  return newState;
};

export default ThemeTypeReducer;
