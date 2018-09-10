import LoginContainer from '../Auth/containers/LoginContainer';
import Parking from './Parking';

export const routes = [
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
