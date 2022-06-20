import { Users } from './Users';

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

const orders = [{
  id: '1',
  name: ProductName.OversizedBlackShirt,
  size: Size.XL,
  daysLeft: 10,
  checked: true,
  icon: Icon.TshirtBlack
}, {
  id: '2',
  name: ProductName.OversizedBlackShirt,
  size: Size.XL,
  daysLeft: 10,
  checked: false,
  icon: Icon.TshirtBlack
}, {
  id: '3',
  name: ProductName.OversizedWhiteShirt,
  size: Size.XL,
  daysLeft: 15,
  checked: false,
  icon: Icon.PantsWhite
}, {
  id: '4',
  name: ProductName.OversizedWhiteShirt,
  size: Size.L,
  daysLeft: 15,
  checked: false,
  icon: Icon.TshirtBlack
}, {
  id: '5',
  name: ProductName.WhitePants,
  size: Size.L,
  daysLeft: 20,
  checked: false,
  icon: Icon.PantsWhite
}
];

const ordersKey = 'Orders';

export class Orders {
  users = new Users();

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

  putOrdersData() {
    let mockOrder = {
      name: ProductName.OversizedBlackShirt,
      size: Size.XL,
      daysLeft: 10,
      checked: true,
      icon: Icon.TshirtBlack
    };
    let data = this.getOrdersData();
    data.append(mockOrder);

    localStorage.setItem(ordersKey, JSON.stringify(orders));
    return this.getOrdersData();

  }

  putOrders(orders) {
    localStorage.setItem(ordersKey, JSON.stringify(orders));
    if (orders === this.getOrdersData()) {
      return true;
    }
    return false;
  }

  getFinishedOrdersRatio() {
    let data = this.getOrdersData();
    let finished = 0;
    let unfinished = 0;
    data.forEach((item) => {
      item.checked ? finished += 1 : unfinished += 1;
    });
    return finished / (finished + unfinished) * 100;
  }

  handleCheckBoxClick(checkbox, order) {
    checkbox.classList.toggle('checked');
  }

  // rendering function
  createList(ordersToRender) {
    const ordersList = document.querySelector('#orders-list');
    ordersList.innerHTML = '';

    const currentUser = this.users.getCurrentUser();
    console.log('user', currentUser);

    ordersToRender.map((order, key) => {
        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        checkbox.classList.toggle('checked', order.checked);
        checkbox.innerHTML = `<span class="iconify" data-icon="ant-design:check-circle-twotone"></span>`;
        checkbox.addEventListener('click', () => {
          console.log('checkbox clicked', order);
          this.handleCheckBoxClick(checkbox, order);
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
          deleteButton.addEventListener('click', () => {
            const validOrders = ordersToRender.filter(o => o.id !== order.id);
            this.putOrders(validOrders);
            this.createList(validOrders);
          });
          orderElement.append(deleteButton);
        }

        ordersList.append(orderElement);
      }
    );
  }
}


