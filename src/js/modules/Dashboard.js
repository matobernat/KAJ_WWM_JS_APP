import {Orders} from "./Orders";

export class Dashboard {
    ordersFunctions = new Orders();

    renderCharts() {
        console.log("rendering charts")
        const container = document.querySelector("#svg-container-div")
        var svg = this.getNode("svg");
        container.appendChild(svg);

        // var r = this.getNode('rect', {x: 10, y: 10, width: 100, height: 20, fill: '#ff00ff'});
        // svg.appendChild(r);

        var r = this.getNode('rect', {
            x: 20,
            y: 40,
            width: 100,
            height: 40,
            rx: 8,
            ry: 8,
            fill: 'pink',
            stroke: 'purple',
            strokeWidth: 7
        });
        svg.appendChild(r);

    }

    getNode(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v)
            n.setAttributeNS(null, p.replace(/[A-Z]/g, function (m, p, o, s) {
                return "-" + m.toLowerCase();
            }), v[p]);
        return n
    }


    resetProgressBars() {
        let progressBars = document.querySelectorAll('[id*="progress-bar"]');


        progressBars.forEach((item) => {
            console.log(item)
            item.style.backgroundColor = "red";
        })
        // progressBars.style.backgroundColor = "red"
    }

    setProgressBars() {
        let progressBars = document.querySelectorAll('[id*="progress-bar"]');
        let ratio = this.ordersFunctions.getFinishedOrdersRatio()

        progressBars.forEach((item) => {
            console.log(item)
            item.style.width = `${ratio}%`;
            item.style.backgroundColor = ratio < 30 ? 'red' : "green";
        })
        // progressBars.style.backgroundColor = "red"
    }


}


