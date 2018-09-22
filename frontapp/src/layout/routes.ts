import CarsListContainer from '../cars/containers/CarsListContainer';

interface IRoutes {
  path: string,
  component: any,
  exact?: boolean
}

export const routes:IRoutes[] = [
  {
    path: '/',
    component: CarsListContainer,
    exact: true
  },
  {
    path: '/cars',
    component: CarsListContainer,
    exact: true
  }
]
