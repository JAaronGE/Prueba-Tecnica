import {LitElement, html,css} from "lit";
import {myWarning} from "./warning.js";
import {myLoginData} from "./data.js";

export class myLogin extends LitElement {

    constructor(){
        super();
        this.hiddenModal = true; 
        this.hiddenLogin = false;  
        this.edadUsuario = 0
        this.nombreUsuario = "";
        this.dataModal = [];          
    }

    static get properties(){
        return {
            hiddenLogin: {
                type:Boolean
            },
            hiddenModal: {
                type:Boolean
            },
            edadUsuario:{
                type:Number
            },
            nombreUsuario: {
                type:String
            }
            ,
            dataModal: {
                type:Array
            }
        }

    }

    static get styles(){
        return css `

            *{
                margin:0px;
                padding:0px;
            }

        `;
    }

    render(){
        return html`
            

                <bbva-login2 @ocultar-loggin="${this.handleVision}" ?hidden = "${this.hiddenLogin}"></bbva-login2>            
                <bbva-modal @return-validation="${this.returnValidation}" ?hidden = "${this.hiddenModal}" .edadUsuario="${this.dataModal[1]}" .nombreUsuario="${this.dataModal[0]}"  .resultado="${this.dataModal[2]}" .icono="${this.dataModal[3]}"></bbva-modal>

        `;
    }

    handleVision(event){
        this.dataModal = [event.detail.name,event.detail.edad,event.detail.resultado,event.detail.imagen];
        this.hiddenLogin = true; 
        this.hiddenModal = false;
    }

    returnValidation(){
        this.hiddenLogin = false; 
        this.hiddenModal = true;
    }


}