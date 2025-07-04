import {LitElement, html,css} from "lit";

export class myLoginData extends LitElement {

    constructor(){
        super();   
        this.mayoriaDeEdad = 18,
        this.edadUsuario = 0
        this.nombreUsuario = "";
        this.imagen="";
        this.dataModal = [];    
    }

    static get properties(){
        return {
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

            .loggin {
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

            .box-loggin {
                display:flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 2rem;
                width:15rem;
                align-items: center;
                justify-content: center;
            }

            button{
                border: none;
                background-color: rgb(171, 213, 227);
                width: 15rem;
                height: 3rem;
                border-radius: 5rem;
            }

            input {
                padding: 0.1rem 0.3rem 0.1rem 0.5rem;
                height: 2rem;
                border:none;
                border-radius: 5rem;
            }
        `;
    }

    render(){
        return html`
            
            <article class="loggin" >

                <div class="box-loggin">

                <p>Ingresa tu nombre</p>
                <input type="text" id ="name" type="text"  @input = "${this.handleNameChange}">
                <p> Ingresa tu edad </p>
                <input type="text" id ="age" type="text"  @input = "${this.handleAgeChange}">
                <button @click = "${this.handleAge}"> Validar Edad </button>

                </div>


            </article>


        `;
    }

    handleAge(){
        this.ageValidation();
        this.dispatchEvent(new CustomEvent('ocultar-loggin', { detail:{ name:this.dataModal[0],edad:this.dataModal[1],resultado:this.dataModal[2],imagen:this.dataModal[3]} ,bubbles: true, composed: true}));
        this.edadUsuario = 0
        this.nombreUsuario = "";
        this.imagen="";
        this.dataModal = [];
        this.shadowRoot.getElementById("name").value="";
        this.shadowRoot.getElementById("age").value="";

    }

    ageValidation(){
        return this.edadUsuario >= this.mayoriaDeEdad ? this.dataModal= this.statusReturn("mayor") : this.dataModal=this.statusReturn("menor");
    }

    statusReturn(key){

        const modalData = {
            mayor:[this.nombreUsuario,this.edadUsuario,"Eres mayor de edad :)","./media/succes.png"],
            menor:[this.nombreUsuario,this.edadUsuario,"¡¡ERES MENOS DE EDAD!!","./media/denied.jpg"]

        }
        return modalData[key];
    }


    handleNameChange(e){
        const value = e.target.value;
        this.nombreUsuario = value;
    }

    handleAgeChange(e){
        const value = e.target.value;
        this.edadUsuario = value;
    }


}