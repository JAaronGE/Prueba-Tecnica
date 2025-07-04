import {myLogin} from "./login.js";
import {myWarning} from "./warning.js";
import {myLoginData} from "./data.js";

window.customElements.define("bbva-login",myLogin);
window.customElements.define("bbva-modal",myWarning);
window.customElements.define("bbva-login2",myLoginData);