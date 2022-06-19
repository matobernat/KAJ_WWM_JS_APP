const ProductName = {
    OversizedBlackShirt: "Oversized Black Shirt",
    OversizedWhiteShirt: "Oversized White Shirt",
    BlackPants: "Black Pants",
    WhitePants: "White Pants",
}

const Size = {
    XL: "XL",
    L: "L",
    M: "M",
    S: "S"
}

const Icon = {
    TshirtBlack: 't-shirt',
    PantsWhite: 'clothes-pants-sweat'
}

const orders = [{
    name: ProductName.OversizedBlackShirt,
    size: Size.XL,
    daysLeft: 10,
    checked: true,
    icon: Icon.TshirtBlack
}, {
    name: ProductName.OversizedBlackShirt,
    size: Size.XL,
    daysLeft: 10,
    checked: false,
    icon: Icon.TshirtBlack
}, {
    name: ProductName.OversizedWhiteShirt,
    size: Size.XL,
    daysLeft: 15,
    checked: false,
    icon: Icon.PantsWhite
}, {
    name: ProductName.OversizedWhiteShirt,
    size: Size.L,
    daysLeft: 15,
    checked: false,
    icon: Icon.TshirtBlack
}, {
    name: ProductName.WhitePants,
    size: Size.L,
    daysLeft: 20,
    checked: false,
    icon: Icon.PantsWhite
}
]

const ordersKey = "Orders"

export class Orders {
    init() {
        let ordersToRender = orders;
        if (!localStorage.getItem(ordersKey)) {
            localStorage.setItem(ordersKey, JSON.stringify(orders))
        } else {
            ordersToRender = JSON.parse(localStorage.getItem(ordersKey))
        }

        this.createList(ordersToRender)
    }

    getOrdersData() {
        if (!localStorage.getItem(ordersKey)) {
            console.log("DATABASE ERROR key: ", ordersKey)
            return "404 ERROR " + ordersKey;
        } else {
            return JSON.parse(localStorage.getItem(ordersKey))
        }
    }

    putOrdersData() {
        let mockOrder = {
            name: ProductName.OversizedBlackShirt,
            size: Size.XL,
            daysLeft: 10,
            checked: true,
            icon: Icon.TshirtBlack
        }
        let data = this.getOrdersData()
        data.append(mockOrder)

        localStorage.setItem(ordersKey, JSON.stringify(orders))
        return this.getOrdersData()

    }

    getFinishedOrdersRatio() {
        let data = this.getOrdersData()
        let finished = 0
        let unfinished = 0
        data.forEach((item) => {
            item.checked ? finished += 1 : unfinished += 1
        })
        return finished / (finished + unfinished) * 100
    }

    // rendering function
    createList(ordersToRender) {
        const ordersList = document.querySelector("#orders-list")
        ordersList.innerHTML = '';

        ordersToRender.map((order, key) => {
                const checkbox = document.createElement("div");
                checkbox.classList.add('checkbox')
                checkbox.classList.toggle('checked', order.checked)
                checkbox.innerHTML = 'checkbox';
                checkbox.addEventListener("click", () => {
                    console.log("checkbox clicked", order)
                })
                const orderTemplate = `
                    <div class="icon">
                        <span class="iconify" 
                        data-icon="icon-park-solid:${order.icon}"></span>
                    </div>
                    <div class="name">${order.name}</div>
                    <div class="size">${order.size}</div>
                    <div class="daysLeft">${order.daysLeft} days left</div>
                `
                const orderElement = document.createElement('li');
                orderElement.insertAdjacentHTML('beforeend', orderTemplate);
                orderElement.append(checkbox)

                ordersList.append(orderElement)
            }
        )
    }
}


