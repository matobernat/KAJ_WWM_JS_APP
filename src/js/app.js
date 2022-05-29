import {Login} from './modules/Login';
import {Orders} from './modules/Orders';

const loginFunctions = new Login();
const ordersFunctions = new Orders();

window.onload = () => {
    window.location.hash = 'login';
    loginFunctions.handleMenu();
    ordersFunctions.init()
};
