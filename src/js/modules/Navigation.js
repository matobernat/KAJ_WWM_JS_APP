import {Users} from './Users';
import {Login} from './Login';
import {Dashboard} from './Dashboard';
import {Orders} from './Orders';

export class Navigation {
    // users = new Users();
    login = new Login();
    dashboard = new Dashboard();
    orders = new Orders();

    handleChanges() {

        // whole link changes
        // window.addEventListener('locationchange', function () {
        //     console.log('location changed!');
        // });

        // hash changes
        window.addEventListener('hashchange', (e) => {

            console.log('hash changed!', e.oldURL, e.newURL, typeof (e.newURL));

            this.handleProgessBars(e.newURL)

            this.handleMenu(e.newURL);
            this.handleDashboard(e.newURL);
            this.handleOrders(e.newURL);

        });


    }

    handleMenu(url) {
        if (url.includes('login')) this.login.hideMenu();
        if (!url.includes('login')) this.login.showMenu();
    }

    handleDashboard(url) {
        if (url.includes('dashboard')) {
            this.dashboard.setProgressBars();
        } else if (url.includes('storage')) {
            this.dashboard.resetProgressBars();
        }
    }

    handleOrders(url) {
        if (url.includes('orders')) {
            this.orders.init();
        }
    }

    handleProgessBars(url) {
        this.dashboard.resetProgressBars();
        this.dashboard.setProgressBars();
    }


}
