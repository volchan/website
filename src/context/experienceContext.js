import createDataContext from './createDataContext';

const expReducer = () => {};

export const { Context, Provider } = createDataContext(expReducer, {}, [
  {
    employer: 'Bärchen',
    job: 'Développeur Web',
    start: 'déc 2017',
    end: "aujourd'hui",
    desc: {
      list: false,
      content:
        "Développement d'applications internes pour l'inscription de participants sur différentes plateformes de formation et pour la compilation de reportings quotidiens d'apprentissage",
    },
    stack: 'Ruby / Ruby on Rails / Javascript / HTML / CSS / Vue / PostgresQL / GraphQL',
  },
  {
    employer: 'Freelance',
    job: 'Développeur Web',
    start: 'juin 2017',
    end: "aujourd'hui",
    desc: {
      list: true,
      content: [
        "Développement d'applications notamment une app pour la gestion des patients d'un EHPAD",
        'Professeur assistant au Wagon Bordeaux - Assistance aux élèves lors des journées de formation',
      ],
    },
    stack:
      'Ruby / Ruby on Rails / Elixir / Javascript / HTML / CSS / Vue / React / React Native / PostgresQL / GraphQL',
  },
]);
