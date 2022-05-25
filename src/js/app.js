import { Login } from './modules/Login';

const loginFunctions = new Login();

window.onload = () => {
  window.location.hash = 'login';
  loginFunctions.handleMenu();
};
