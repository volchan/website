import createDataContext from './createDataContext';

const tabReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'change_tab':
      return { ...state, activeTab: payload };

    default:
      return state;
  }
};

const changeTab = (dispatch) => (tab) => {
  dispatch({ type: 'change_tab', payload: tab });
};

export const { Context, Provider } = createDataContext(
  tabReducer,
  { changeTab },
  {
    activeTab: 'home',
    tabs: [
      {
        label: 'accueil',
        hashLink: 'home',
      },
      {
        label: 'à propos',
        hashLink: 'about',
      },
      {
        label: 'expérience',
        hashLink: 'experience',
      },
      {
        label: 'compétences',
        hashLink: 'skills',
      },
    ],
  },
);
