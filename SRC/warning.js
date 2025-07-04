import {LitElement, html,css} from "lit";

export class myWarning extends LitElement {

    constructor(){
        super();
        this.edadUsuario = 0;
        this.nombreUsuario = "";
        this.resultado = "";
        this.icono = "";
        
    }

    static get properties(){
        return {
            edadUsuario:{
                type:Number
            },
            hidden: {
                type:Boolean
            },
            nombreUsuario: {
                type:String
            },
            data: {
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

            img {

                width:20rem;
                height:17rem;
            }

            .modal{
                display:flex;
                flex-direction: column;
                flex-wrap: wrap;
                width:33%;
                gap: 2rem;
                align-items: center;
                justify-content: center;
                height:580px;
                background-color: rgb(28, 115, 196);
            }

            button{
                border: none;
                background-color: rgb(171, 213, 227);
                width: 15rem;
                height: 3rem;
                border-radius: 5rem;
            }

 
        `;
    }


    render(){
        
        return html`
            
            <article class="modal">

                <p>${this.nombreUsuario}</p>
                <p>${this.edadUsuario}</p>
                <p>${this.resultado}</p>
                <img src="${this.icono}">
                <button @click = "${this.returnValidation}">Volver a la validación</button>

            </article>

            
        `;
    }

    returnValidation(){
        this.dispatchEvent(new CustomEvent('return-validation', {bubbles: true, composed: true}));
    }

}