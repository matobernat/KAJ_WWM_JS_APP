import {Login} from './modules/Login';
import {Orders} from './modules/Orders';
import {Users} from "./modules/Users";
import {Navigation} from "./modules/Navigation";
import {Dashboard} from "./modules/Dashboard";

const loginFunctions = new Login();
const usersFunctions = new Users();
const navigationFunctions = new Navigation();

window.onload = () => {
    window.location.hash = 'login';
    navigationFunctions.handleChanges();
    usersFunctions.init();
    loginFunctions.handleMenu();

};
