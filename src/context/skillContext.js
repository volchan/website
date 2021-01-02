import createDataContext from './createDataContext';

const skillReducer = () => {};

export const { Context, Provider } = createDataContext(skillReducer, {}, [
  {
    name: 'Ruby',
    percentage: 90,
    color: '#aa3225',
  },
  {
    name: 'Ruby on rails',
    percentage: 90,
    color: '#aa3225',
  },
  {
    name: 'Elixir',
    percentage: 50,
    color: '#877392',
  },
  {
    name: 'Javascript',
    percentage: 80,
    color: '#EFD81D',
  },
  {
    name: 'HTML',
    percentage: 70,
    color: '#DC4A24',
  },
  {
    name: 'CSS',
    percentage: 70,
    color: '#254BDD',
  },
  {
    name: 'React',
    percentage: 60,
    color: '#5ED4F3',
  },
  {
    name: 'Vue',
    percentage: 60,
    color: '#3FB27F',
  },
  {
    name: 'PostgresQL',
    percentage: 80,
    color: '#31648C',
  },
  {
    name: 'GraphQL',
    percentage: 60,
    color: '#DE33A6',
  },
]);

