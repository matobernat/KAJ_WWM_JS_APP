import {Users} from './Users';
import {Dashboard} from "./Dashboard";

const ProductName = {
    OversizedBlackShirt: 'Oversized Black Shirt',
    OversizedWhiteShirt: 'Oversized White Shirt',
    BlackPants: 'Black Pants',
    WhitePants: 'White Pants'
};

const Size = {
    XL: 'XL',
    L: 'L',
    M: 'M',
    S: 'S'
};

const Icon = {
    TshirtBlack: 't-shirt',
    PantsWhite: 'clothes-pants-sweat'
};

const mockOrder = {
    name: ProductName.OversizedBlackShirt,
    size: Size.XL,
    daysLeft: 10,
    checked: false,
    icon: Icon.TshirtBlack,
    deleted: false
};

const orders = [{
    id: '1',
    name: ProductName.OversizedBlackShirt,
    size: Size.XL,
    daysLeft: 10,
    checked: true,
    icon: Icon.TshirtBlack,
    deleted: false
}, {
    id: '2',
    name: ProductName.OversizedBlackShirt,
    size: Size.XL,
    daysLeft: 10,
    checked: false,
    icon: Icon.TshirtBlack,
    deleted: false
}, {
    id: '3',
    name: ProductName.OversizedWhiteShirt,
    size: Size.XL,
    daysLeft: 15,
    checked: false,
    icon: Icon.PantsWhite,
    deleted: false
}, {
    id: '4',
    name: ProductName.OversizedWhiteShirt,
    size: Size.L,
    daysLeft: 15,
    checked: false,
    icon: Icon.TshirtBlack,
    deleted: false
}, {
    id: '5',
    name: ProductName.WhitePants,
    size: Size.L,
    daysLeft: 20,
    checked: false,
    icon: Icon.PantsWhite,
    deleted: false
}
];

const ordersKey = 'Orders';

export class Orders {
    users = new Users();

    // dashboard = new Dashboard();

    init() {
        let ordersToRender = orders;
        const savedOrders = JSON.parse(localStorage.getItem(ordersKey));
        if (!savedOrders || !savedOrders.length) {
            localStorage.setItem(ordersKey, JSON.stringify(orders));
        } else {
            ordersToRender = JSON.parse(localStorage.getItem(ordersKey));
        }

        this.createList(ordersToRender);
    }

    getOrdersData() {
        if (!localStorage.getItem(ordersKey)) {
            console.log('DATABASE ERROR key: ', ordersKey);
            return '404 ERROR ' + ordersKey;
        } else {
            return JSON.parse(localStorage.getItem(ordersKey));
        }
    }

    // add new order in local storage
    putOrder(order) {
        let data = this.getOrdersData();
        data.push(order);
        localStorage.setItem(ordersKey, JSON.stringify(data));
        return this.getOrdersData();
    }

    // set new orders list in local storage
    putOrders(orders) {
        localStorage.setItem(ordersKey, JSON.stringify(orders));
        return this.getOrdersData();
    }

    getFinishedOrdersRatio() {
        let data = this.getOrdersData();
        let finished = 0;
        let unfinished = 0;
        data.filter(item => !item.deleted).forEach((item) => {
            item.checked ? finished += 1 : unfinished += 1;
        });
        return finished / (finished + unfinished) * 100;
    }

    handleCheckBoxClick(checkbox, order, ordersToRender) {

        checkbox.classList.toggle('checked');
        order.checked = !order.checked;
        this.createList(this.putOrders(ordersToRender));
        // this.dashboard.setProgressBars();
        this.setProgressBars()
    }

    // rendering function
    createList(ordersToRender) {
        const ordersList = document.querySelector('#orders-list');
        ordersList.innerHTML = '';


        const currentUser = this.users.getCurrentUser();

        // filter out orders with deleted flag
        ordersToRender.filter(order => !order.deleted).map((order, key) => {
                const checkbox = document.createElement('div');
                checkbox.classList.add('checkbox');
                checkbox.classList.toggle('checked', order.checked);
                checkbox.innerHTML = `<span class="iconify" data-icon="ant-design:check-circle-twotone"></span>`;

                // set order as finished
                checkbox.addEventListener('click', () => {
                    console.log('checkbox clicked', order);
                    this.handleCheckBoxClick(checkbox, order, ordersToRender);
                });

                const orderTemplate = `
                    <div class="icon">
                        <span class="iconify" 
                        data-icon="icon-park-solid:${order.icon}"></span>
                    </div>
                    <div class="name">${order.name}</div>
                    <div class="size">${order.size}</div>
                    <div class="daysLeft">${order.daysLeft} days left</div>
                `;
                const orderElement = document.createElement('li');
                orderElement.insertAdjacentHTML('beforeend', orderTemplate);
                orderElement.append(checkbox);

                if (currentUser.permissions === this.users.permissions.admin) {
                    const deleteButton = document.createElement('div');
                    deleteButton.classList.add('delete');
                    deleteButton.innerHTML = `<span class="iconify" data-icon="akar-icons:cross"></span>`;

                    // set order as deleted (only by admin)
                    deleteButton.addEventListener('click', () => {
                        // const validOrders = ordersToRender.filter(o => o.id !== order.id);
                        order.deleted = true
                        this.createList(this.putOrders(ordersToRender));
                        this.setProgressBars()
                    });
                    orderElement.append(deleteButton);
                }

                ordersList.append(orderElement);
            }
        );

        // render add button
        const addButton = document.createElement('div');
        addButton.classList.add('add');
        // addButton.innerHTML = `<span class="iconify" data-icon="akar-icons:cross"></span>`;
        addButton.innerHTML = `<span class="iconify" data-icon="carbon:add-filled"></span>`;
        ordersList.appendChild(addButton)
        addButton.addEventListener("click", () => {
            this.createList(this.putOrder(mockOrder))
            this.setProgressBars()

        })
    }

    setProgressBars() {
        console.log("ORDERS START")
        let progressBars = document.querySelectorAll('[class*="orders-progress-bar"]');
        let ratio = this.getFinishedOrdersRatio()

        progressBars.forEach((item) => {
            console.log("ITEEEEM", item)
            item.style.transition = "width 0.5s ease-in-out"
            item.style.width = `${ratio == 0 ? 2 : ratio}%`;
            item.style.backgroundColor = ratio < 30 ? 'red' : "green";
        })
    }

    resetProgressBars() {
        console.log("ORDERS RESET")
        let progressBars = document.querySelectorAll('[class*="orders-progress-bar"]');
        progressBars.forEach((item) => {
            item.style.transition = "none"
            item.style.backgroundColor = "red";
            item.style.width = `${0}%`;
        })
    }

}


