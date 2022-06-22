import {Orders} from "./Orders";

export class Dashboard {
    ordersFunctions = new Orders();

    getNode(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v)
            n.setAttributeNS(null, p.replace(/[A-Z]/g, function (m, p, o, s) {
                return "-" + m.toLowerCase();
            }), v[p]);
        return n
    }


    resetProgressBars() {
        let progressBars = document.querySelectorAll('[class*="-dashboard-progress-bar"]');
        progressBars.forEach((item) => {
            item.style.transition = "none"
            item.style.backgroundColor = "red";
            item.style.width = `${0}%`;
        })
    }

    setProgressBars() {
        let progressBars = document.querySelectorAll('[class*="-dashboard-progress-bar"]');
        let ratio = 0

        progressBars.forEach((item) => {
            if (item.className === "deadlines-dashboard-progress-bar") ratio = 20;
            if (item.className === "resources-dashboard-progress-bar") ratio = 85;
            if (item.className === "orders-dashboard-progress-bar") ratio = this.ordersFunctions.getFinishedOrdersRatio();
            item.style.transition = "width 0.5s ease-in-out"
            item.style.width = `${ratio == 0 ? 2 : ratio}%`;
            item.style.backgroundColor = ratio < 30 ? 'red' : "green";
        })
    }


}


