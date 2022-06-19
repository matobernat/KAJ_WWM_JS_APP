import {Login} from './modules/Login';
import {Orders} from './modules/Orders';
import {Users} from "./modules/Users";
import {Navigation} from "./modules/Navigation";
import {Dashboard} from "./modules/Dashboard";

const loginFunctions = new Login();
const ordersFunctions = new Orders();
const usersFunctions = new Users();
const navigationFunctions = new Navigation();
const DashboardFunctions = new Dashboard();

window.onload = () => {
    window.location.hash = 'login';
    navigationFunctions.handleChanges();
    usersFunctions.init();
    loginFunctions.handleMenu();
    ordersFunctions.init();

};
