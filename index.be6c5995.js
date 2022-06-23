const e={admin:"admin",user:"user",none:"none"},s=[{login:"error",password:"error",permissions:e.none,logged:!1}],r=[{login:"manager",password:"haha",permissions:e.admin,logged:!1},{login:"worker",password:"haha",permissions:e.user,logged:!1}];class t{permissions=e;init(){localStorage.getItem("Users")||localStorage.setItem("Users",JSON.stringify(r))}getCurrentUser(){return this.getUsers().find((e=>e.logged))}getUsers(){return localStorage.getItem("Users")?JSON.parse(localStorage.getItem("Users")):(console.log("login ERROR"),s)}putUsers(e){return localStorage.setItem("Users",JSON.stringify(e)),e===this.getUsers()}authenticate(s,r){if(!localStorage.getItem("Users"))return console.log("login ERROR"),e.none;let t=JSON.parse(localStorage.getItem("Users")),a=t.filter((e=>e.login==s&&e.password==r&&(e.logged=!0,this.putUsers(t),!0)));return a.length>0?a[0].permissions:e.none}}class a{users=new t;handleMenu(){const e=document.querySelector("#login form");this.hideMenu(),e.addEventListener("submit",(e=>{let s=e.target[0].value,r=e.target[1].value,t=this.users.authenticate(s,r);t===this.users.permissions.none?window.alert("wrong password or login"):(console.log("LOGIN permissions: ",t),window.location.hash="#dashboard",this.showMenu())}))}hideMenu(){document.querySelector("aside").classList.add("hide")}showMenu(){document.querySelector("aside").classList.remove("hide")}}class n{ordersFunctions=new m;getNode(e,s){for(var r in e=document.createElementNS("http://www.w3.org/2000/svg",e),s)e.setAttributeNS(null,r.replace(/[A-Z]/g,(function(e,s,r,t){return"-"+e.toLowerCase()})),s[r]);return e}resetProgressBars(){document.querySelectorAll('[class*="-dashboard-progress-bar"]').forEach((e=>{e.style.transition="none",e.style.backgroundColor="red",e.style.width="0%"}))}setProgressBars(){let e=document.querySelectorAll('[class*="-dashboard-progress-bar"]'),s=0;e.forEach((e=>{"deadlines-dashboard-progress-bar"===e.className&&(s=20),"resources-dashboard-progress-bar"===e.className&&(s=85),"orders-dashboard-progress-bar"===e.className&&(s=this.ordersFunctions.getFinishedOrdersRatio()),e.style.transition="width 0.5s ease-in-out",e.style.width=`${0==s?2:s}%`,e.style.backgroundColor=s<30?"red":"green"}))}}const o="Oversized Black Shirt",i="Oversized White Shirt",d="XL",l="L",c="t-shirt",h="clothes-pants-sweat",g={name:o,size:d,daysLeft:10,checked:!1,icon:c,deleted:!1},u=[{id:"1",name:o,size:d,daysLeft:10,checked:!0,icon:c,deleted:!1},{id:"2",name:o,size:d,daysLeft:10,checked:!1,icon:c,deleted:!1},{id:"3",name:i,size:d,daysLeft:15,checked:!1,icon:h,deleted:!1},{id:"4",name:i,size:l,daysLeft:15,checked:!1,icon:c,deleted:!1},{id:"5",name:"White Pants",size:l,daysLeft:20,checked:!1,icon:h,deleted:!1}];class m{users=new t;init(){this.createList(this.setOrdersData())}setOrdersData(){let e=u;const s=JSON.parse(localStorage.getItem("Orders"));return s&&s.length?e=JSON.parse(localStorage.getItem("Orders")):localStorage.setItem("Orders",JSON.stringify(u)),e}getOrdersData(){return localStorage.getItem("Orders")?JSON.parse(localStorage.getItem("Orders")):(console.log("DATABASE ERROR key: ","Orders"),"404 ERROR Orders")}putOrder(e){let s=this.getOrdersData();return s.push(e),localStorage.setItem("Orders",JSON.stringify(s)),this.getOrdersData()}putOrders(e){return localStorage.setItem("Orders",JSON.stringify(e)),this.getOrdersData()}getFinishedOrdersRatio(){let e=this.getOrdersData(),s=0,r=0;return e.filter((e=>!e.deleted)).forEach((e=>{e.checked?s+=1:r+=1})),s/(s+r)*100}handleCheckBoxClick(e,s,r){e.classList.toggle("checked"),s.checked=!s.checked,this.createList(this.putOrders(r)),this.setProgressBars()}createList(e){const s=document.querySelector("#orders-list");s.innerHTML="";const r=this.users.getCurrentUser();if(e.filter((e=>!e.deleted)).map(((t,a)=>{const n=document.createElement("div");n.classList.add("checkbox"),n.classList.toggle("checked",t.checked),n.innerHTML='<span class="iconify" data-icon="ant-design:check-circle-twotone"></span>',n.addEventListener("click",(()=>{this.handleCheckBoxClick(n,t,e)}));const o=`\n                    <div class="icon">\n                        <span class="iconify" \n                        data-icon="icon-park-solid:${t.icon}"></span>\n                    </div>\n                    <div class="name">${t.name}</div>\n                    <div class="size">${t.size}</div>\n                    <div class="daysLeft">${t.daysLeft} days left</div>\n                `,i=document.createElement("li");if(i.insertAdjacentHTML("beforeend",o),i.append(n),r.permissions===this.users.permissions.admin){const s=document.createElement("div");s.classList.add("delete"),s.innerHTML='<span class="iconify" data-icon="akar-icons:cross"></span>',s.addEventListener("click",(()=>{t.deleted=!0,this.createList(this.putOrders(e)),this.setProgressBars()})),i.append(s)}s.append(i)})),r.permissions===this.users.permissions.admin){const e=document.createElement("div");e.classList.add("add"),e.innerHTML='<span class="iconify" data-icon="carbon:add-filled"></span>',s.appendChild(e),e.addEventListener("click",(()=>{this.createList(this.putOrder(g)),this.setProgressBars()}))}}setProgressBars(){let e=document.querySelectorAll('[class*="orders-progress-bar"]'),s=this.getFinishedOrdersRatio();e.forEach((e=>{e.style.transition="width 0.5s ease-in-out",e.style.width=`${0==s?2:s}%`,e.style.backgroundColor=s<30?"red":"green"}))}resetProgressBars(){document.querySelectorAll('[class*="orders-progress-bar"]').forEach((e=>{e.style.transition="none",e.style.backgroundColor="red",e.style.width="0%"}))}}const p=new a,w=new t,O=new class{login=new a;dashboard=new n;orders=new m;handleChanges(){this.orders.setOrdersData(),window.addEventListener("hashchange",(e=>{this.handleMenu(e.newURL),this.handleDashboard(e.newURL),this.handleOrders(e.newURL)}))}handleMenu(e){e.includes("login")&&this.login.hideMenu(),e.includes("login")||this.login.showMenu()}handleDashboard(e){e.includes("dashboard")?(console.log("entering dashboard"),this.dashboard.setProgressBars()):(console.log("exiting dashboard"),this.dashboard.resetProgressBars())}handleOrders(e){e.includes("orders")?(this.orders.init(),this.orders.setProgressBars()):this.orders.resetProgressBars()}};window.onload=()=>{window.location.hash="login",w.init(),p.handleMenu(),O.handleChanges()};
//# sourceMappingURL=index.be6c5995.js.map
