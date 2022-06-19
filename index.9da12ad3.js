const e={admin:"admin",user:"user",none:"none"},s=[{login:"error",password:"error",permissions:e.none,logged:!1}],r=[{login:"manager",password:"haha",permissions:e.admin,logged:!1},{login:"worker",password:"haha",permissions:e.user,logged:!1}];class t{permissions=e;init(){localStorage.getItem("Users")||localStorage.setItem("Users",JSON.stringify(r))}getUsers(){return localStorage.getItem("Users")?JSON.parse(localStorage.getItem("Users")):(console.log("login ERROR"),s)}putUsers(e){return localStorage.setItem(ordersKey,JSON.stringify(orders)),e==this.getUsers()}authenticate(s,r){if(!localStorage.getItem("Users"))return console.log("login ERROR"),e.none;let t=JSON.parse(localStorage.getItem("Users")).filter((e=>e.login==s&&e.password==r&&(e.logged=!0,!0)));return t.length>0?t[0].permissions:e.none}}class n{users=new t;handleMenu(){const e=document.querySelector("#login form");this.hideMenu(),e.addEventListener("submit",(e=>{let s=e.target[0].value,r=e.target[1].value,t=this.users.authenticate(s,r);t==this.users.permissions.none?window.alert("wrong password or login"):(console.log("LOGIN permissions: ",t),window.location.hash="#dashboard",this.showMenu())}))}hideMenu(){document.querySelector("aside").classList.add("hide")}showMenu(){document.querySelector("aside").classList.remove("hide")}}const o="Oversized Black Shirt",a="Oversized White Shirt",i="XL",d="L",l="t-shirt",c="clothes-pants-sweat",g=[{name:o,size:i,daysLeft:10,checked:!0,icon:l},{name:o,size:i,daysLeft:10,checked:!1,icon:l},{name:a,size:i,daysLeft:15,checked:!1,icon:c},{name:a,size:d,daysLeft:15,checked:!1,icon:l},{name:"White Pants",size:d,daysLeft:20,checked:!1,icon:c}];class h{init(){let e=g;localStorage.getItem("Orders")?e=JSON.parse(localStorage.getItem("Orders")):localStorage.setItem("Orders",JSON.stringify(g)),this.createList(e)}getOrdersData(){return localStorage.getItem("Orders")?JSON.parse(localStorage.getItem("Orders")):(console.log("DATABASE ERROR key: ","Orders"),"404 ERROR Orders")}putOrdersData(){let e={name:o,size:i,daysLeft:10,checked:!0,icon:l};return this.getOrdersData().append(e),localStorage.setItem("Orders",JSON.stringify(g)),this.getOrdersData()}getFinishedOrdersRatio(){let e=this.getOrdersData(),s=0,r=0;return e.forEach((e=>{e.checked?s+=1:r+=1})),s/(s+r)*100}createList(e){const s=document.querySelector("#orders-list");s.innerHTML="",e.map(((e,r)=>{const t=document.createElement("div");t.classList.add("checkbox"),t.classList.toggle("checked",e.checked),t.innerHTML="checkbox",t.addEventListener("click",(()=>{console.log("checkbox clicked",e)}));const n=`\n                    <div class="icon">\n                        <span class="iconify" \n                        data-icon="icon-park-solid:${e.icon}"></span>\n                    </div>\n                    <div class="name">${e.name}</div>\n                    <div class="size">${e.size}</div>\n                    <div class="daysLeft">${e.daysLeft} days left</div>\n                `,o=document.createElement("li");o.insertAdjacentHTML("beforeend",n),o.append(t),s.append(o)}))}}class u{ordersFunctions=new h;renderCharts(){console.log("rendering charts");const e=document.querySelector("#svg-container-div");var s=this.getNode("svg");e.appendChild(s);var r=this.getNode("rect",{x:20,y:40,width:100,height:40,rx:8,ry:8,fill:"pink",stroke:"purple",strokeWidth:7});s.appendChild(r)}getNode(e,s){for(var r in e=document.createElementNS("http://www.w3.org/2000/svg",e),s)e.setAttributeNS(null,r.replace(/[A-Z]/g,(function(e,s,r,t){return"-"+e.toLowerCase()})),s[r]);return e}resetProgressBars(){document.querySelectorAll('[id*="progress-bar"]').forEach((e=>{console.log(e),e.style.backgroundColor="red"}))}setProgressBars(){let e=document.querySelectorAll('[id*="progress-bar"]'),s=this.ordersFunctions.getFinishedOrdersRatio();e.forEach((e=>{console.log(e),e.style.width=`${s}%`,e.style.backgroundColor=s<30?"red":"green"}))}}const m=new n,p=new h,w=new t,S=new class{login=new n;dashboard=new u;handleChanges(){window.addEventListener("hashchange",(e=>{console.log("hash changed!",e.oldURL,e.newURL,typeof e.newURL),this.handleMenu(e.newURL),this.handleDashboard(e.newURL)}))}handleMenu(e){e.includes("login")&&this.login.hideMenu(),e.includes("login")||this.login.showMenu()}handleDashboard(e){e.includes("dashboard")?(console.log("entered DASHBOARD!"),this.dashboard.setProgressBars()):this.dashboard.resetProgressBars()}};new u;window.onload=()=>{window.location.hash="login",S.handleChanges(),w.init(),m.handleMenu(),p.init()};
//# sourceMappingURL=index.9da12ad3.js.map