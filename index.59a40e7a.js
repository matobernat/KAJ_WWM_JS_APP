// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5uAhr":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7fe96c059a40e7a";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lRBv":[function(require,module,exports) {
var _login = require("./modules/Login");
var _orders = require("./modules/Orders");
var _users = require("./modules/Users");
var _navigation = require("./modules/Navigation");
var _dashboard = require("./modules/Dashboard");
const loginFunctions = new (0, _login.Login)();
const usersFunctions = new (0, _users.Users)();
const navigationFunctions = new (0, _navigation.Navigation)();
window.onload = ()=>{
    window.location.hash = "login";
    navigationFunctions.handleChanges();
    usersFunctions.init();
    loginFunctions.handleMenu();
};

},{"./modules/Login":"eZHT5","./modules/Orders":"hakeO","./modules/Users":"2F8EQ","./modules/Navigation":"chRXV","./modules/Dashboard":"jPhRr"}],"eZHT5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>Login);
var _users = require("./Users");
class Login {
    users = new (0, _users.Users)();
    handleMenu() {
        const loginForm = document.querySelector("#login form");
        this.hideMenu();
        loginForm.addEventListener("submit", (e)=>{
            let login = e.target[0].value;
            let password = e.target[1].value;
            let permissions = this.users.authenticate(login, password);
            if (permissions === this.users.permissions.none) window.alert("wrong password or login");
            else {
                console.log("LOGIN permissions: ", permissions);
                window.location.hash = "#dashboard";
                this.showMenu();
            }
        });
    }
    hideMenu() {
        const menu = document.querySelector("aside");
        menu.classList.add("hide");
    }
    showMenu() {
        const menu = document.querySelector("aside");
        menu.classList.remove("hide");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Users":"2F8EQ"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2F8EQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Users", ()=>Users);
const Permissions = {
    admin: "admin",
    user: "user",
    none: "none"
};
const errorUser = [
    {
        login: "error",
        password: "error",
        permissions: Permissions.none,
        logged: false
    }
];
const users = [
    {
        login: "manager",
        password: "haha",
        permissions: Permissions.admin,
        logged: false
    },
    {
        login: "worker",
        password: "haha",
        permissions: Permissions.user,
        logged: false
    }
];
const usersKey = "Users";
class Users {
    permissions = Permissions;
    init() {
        if (!localStorage.getItem(usersKey)) localStorage.setItem(usersKey, JSON.stringify(users));
    }
    getCurrentUser() {
        const users1 = this.getUsers();
        return users1.find((user)=>user.logged);
    }
    getUsers() {
        if (!localStorage.getItem(usersKey)) {
            console.log("login ERROR");
            return errorUser;
        } else return JSON.parse(localStorage.getItem(usersKey));
    }
    putUsers(users2) {
        localStorage.setItem(usersKey, JSON.stringify(users2));
        if (users2 === this.getUsers()) return true;
        return false;
    }
    authenticate(login, password) {
        if (!localStorage.getItem(usersKey)) {
            console.log("login ERROR");
            return Permissions.none;
        }
        let storedUsers = JSON.parse(localStorage.getItem(usersKey));
        let logged = storedUsers.filter((user)=>{
            if (user.login == login && user.password == password) {
                user.logged = true;
                this.putUsers(storedUsers);
                return true;
            }
            return false;
        });
        if (logged.length > 0) return logged[0].permissions;
        return Permissions.none;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hakeO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Orders", ()=>Orders);
var _users = require("./Users");
const ProductName = {
    OversizedBlackShirt: "Oversized Black Shirt",
    OversizedWhiteShirt: "Oversized White Shirt",
    BlackPants: "Black Pants",
    WhitePants: "White Pants"
};
const Size = {
    XL: "XL",
    L: "L",
    M: "M",
    S: "S"
};
const Icon = {
    TshirtBlack: "t-shirt",
    PantsWhite: "clothes-pants-sweat"
};
const orders = [
    {
        id: "1",
        name: ProductName.OversizedBlackShirt,
        size: Size.XL,
        daysLeft: 10,
        checked: true,
        icon: Icon.TshirtBlack
    },
    {
        id: "2",
        name: ProductName.OversizedBlackShirt,
        size: Size.XL,
        daysLeft: 10,
        checked: false,
        icon: Icon.TshirtBlack
    },
    {
        id: "3",
        name: ProductName.OversizedWhiteShirt,
        size: Size.XL,
        daysLeft: 15,
        checked: false,
        icon: Icon.PantsWhite
    },
    {
        id: "4",
        name: ProductName.OversizedWhiteShirt,
        size: Size.L,
        daysLeft: 15,
        checked: false,
        icon: Icon.TshirtBlack
    },
    {
        id: "5",
        name: ProductName.WhitePants,
        size: Size.L,
        daysLeft: 20,
        checked: false,
        icon: Icon.PantsWhite
    }
];
const ordersKey = "Orders";
class Orders {
    users = new (0, _users.Users)();
    init() {
        let ordersToRender = orders;
        const savedOrders = JSON.parse(localStorage.getItem(ordersKey));
        if (!savedOrders || !savedOrders.length) localStorage.setItem(ordersKey, JSON.stringify(orders));
        else ordersToRender = JSON.parse(localStorage.getItem(ordersKey));
        this.createList(ordersToRender);
    }
    getOrdersData() {
        if (!localStorage.getItem(ordersKey)) {
            console.log("DATABASE ERROR key: ", ordersKey);
            return "404 ERROR " + ordersKey;
        } else return JSON.parse(localStorage.getItem(ordersKey));
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
    putOrders(orders1) {
        localStorage.setItem(ordersKey, JSON.stringify(orders1));
        if (orders1 === this.getOrdersData()) return true;
        return false;
    }
    getFinishedOrdersRatio() {
        let data = this.getOrdersData();
        let finished = 0;
        let unfinished = 0;
        data.forEach((item)=>{
            item.checked ? finished += 1 : unfinished += 1;
        });
        return finished / (finished + unfinished) * 100;
    }
    handleCheckBoxClick(checkbox, order) {
        checkbox.classList.toggle("checked");
    }
    // rendering function
    createList(ordersToRender) {
        const ordersList = document.querySelector("#orders-list");
        ordersList.innerHTML = "";
        const currentUser = this.users.getCurrentUser();
        console.log("user", currentUser);
        ordersToRender.map((order, key)=>{
            const checkbox = document.createElement("div");
            checkbox.classList.add("checkbox");
            checkbox.classList.toggle("checked", order.checked);
            checkbox.innerHTML = `<span class="iconify" data-icon="ant-design:check-circle-twotone"></span>`;
            checkbox.addEventListener("click", ()=>{
                console.log("checkbox clicked", order);
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
            const orderElement = document.createElement("li");
            orderElement.insertAdjacentHTML("beforeend", orderTemplate);
            orderElement.append(checkbox);
            if (currentUser.permissions === this.users.permissions.admin) {
                const deleteButton = document.createElement("div");
                deleteButton.classList.add("delete");
                deleteButton.innerHTML = `<span class="iconify" data-icon="akar-icons:cross"></span>`;
                deleteButton.addEventListener("click", ()=>{
                    const validOrders = ordersToRender.filter((o)=>o.id !== order.id);
                    this.putOrders(validOrders);
                    this.createList(validOrders);
                });
                orderElement.append(deleteButton);
            }
            ordersList.append(orderElement);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Users":"2F8EQ"}],"chRXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Navigation", ()=>Navigation);
var _users = require("./Users");
var _login = require("./Login");
var _dashboard = require("./Dashboard");
var _orders = require("./Orders");
class Navigation {
    // users = new Users();
    login = new (0, _login.Login)();
    dashboard = new (0, _dashboard.Dashboard)();
    orders = new (0, _orders.Orders)();
    handleChanges() {
        // whole link changes
        // window.addEventListener('locationchange', function () {
        //     console.log('location changed!');
        // });
        // hash changes
        window.addEventListener("hashchange", (e)=>{
            console.log("hash changed!", e.oldURL, e.newURL, typeof e.newURL);
            this.handleMenu(e.newURL);
            this.handleDashboard(e.newURL);
            if (e.newURL.includes("orders")) this.orders.init();
        });
    }
    handleMenu(url) {
        if (url.includes("login")) this.login.hideMenu();
        if (!url.includes("login")) this.login.showMenu();
    }
    handleDashboard(url) {
        if (url.includes("dashboard")) {
            console.log("entered DASHBOARD!");
            this.dashboard.setProgressBars();
        // this.dashboard.renderCharts();
        } else this.dashboard.resetProgressBars();
    }
}

},{"./Users":"2F8EQ","./Login":"eZHT5","./Dashboard":"jPhRr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./Orders":"hakeO"}],"jPhRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dashboard", ()=>Dashboard);
var _orders = require("./Orders");
class Dashboard {
    ordersFunctions = new (0, _orders.Orders)();
    renderCharts() {
        console.log("rendering charts");
        const container = document.querySelector("#svg-container-div");
        var svg = this.getNode("svg");
        container.appendChild(svg);
        // var r = this.getNode('rect', {x: 10, y: 10, width: 100, height: 20, fill: '#ff00ff'});
        // svg.appendChild(r);
        var r = this.getNode("rect", {
            x: 20,
            y: 40,
            width: 100,
            height: 40,
            rx: 8,
            ry: 8,
            fill: "pink",
            stroke: "purple",
            strokeWidth: 7
        });
        svg.appendChild(r);
    }
    getNode(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for(var p in v)n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) {
            return "-" + m.toLowerCase();
        }), v[p]);
        return n;
    }
    resetProgressBars() {
        let progressBars = document.querySelectorAll('[id*="progress-bar"]');
        progressBars.forEach((item)=>{
            console.log(item);
            item.style.backgroundColor = "red";
        });
    // progressBars.style.backgroundColor = "red"
    }
    setProgressBars() {
        let progressBars = document.querySelectorAll('[id*="progress-bar"]');
        let ratio = this.ordersFunctions.getFinishedOrdersRatio();
        progressBars.forEach((item)=>{
            console.log(item);
            item.style.width = `${ratio}%`;
            item.style.backgroundColor = ratio < 30 ? "red" : "green";
        });
    // progressBars.style.backgroundColor = "red"
    }
}

},{"./Orders":"hakeO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5uAhr","8lRBv"], "8lRBv", "parcelRequiree6ef")

//# sourceMappingURL=index.59a40e7a.js.map
