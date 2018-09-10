import LoginContainer from '../Auth/containers/LoginContainer';
import Parking from './Parking';

interface IRoutes {
  path: string,
  component: any,
  exact?: boolean
}

export const routes:IRoutes[] = [
  {
    path: '/login',
    component: LoginContainer,
    exact: true
  },
  {
    path: '/',
    component: Parking
  }
]
