import {Users} from "./Users";

export class Login {
    users = new Users();

    handleMenu() {
        const loginForm = document.querySelector('#login form');

        this.hideMenu()


        loginForm.addEventListener('submit', (e) => {
            let login = e.target[0].value
            let password = e.target[1].value
            let permissions = this.users.authenticate(login, password)
            if (permissions == this.users.permissions.none) {
                window.alert("wrong password or login")
            } else {
                console.log("LOGIN permissions: ", permissions)
                window.location.hash = '#dashboard';
                this.showMenu()
            }
        });
    }

    hideMenu() {
        const menu = document.querySelector('aside');
        menu.classList.add('hide');
    }

    showMenu() {
        const menu = document.querySelector('aside');
        menu.classList.remove('hide');
    }

}
