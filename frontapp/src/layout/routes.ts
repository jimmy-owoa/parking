import CarsListContainer from '../cars/containers/CarsListContainer';

interface IRoutes {
  path: string,
  component: any,
  exact?: boolean
}

export const routes:IRoutes[] = [
  {
    path: '/cars',
    component: CarsListContainer,
  }
]
