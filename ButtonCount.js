class ButtonCount extends HTMLElement{
    constructor(){
        super();
        this.countNum = 0;
        this.attachShadow({mode: 'open'});


        let buttonCount_Template = document.createElement('template');
        buttonCount_Template.innerHTML = `<button id="countBtn"></button>`;
        let tempBtn = buttonCount_Template.content.cloneNode(true);
        this.shadowRoot.appendChild(tempBtn);
        this.shadowRoot.getElementById('countBtn').innerText = "Time clicked: " + this.countNum;
    }
    connectedCallback(){
        this.shadowRoot.getElementById('countBtn').addEventListener('click', () =>{
            this.shadowRoot.getElementById('countBtn').innerText = "Time clicked: " + ++this.countNum;
        });
    }

}

customElements.define('button-count', ButtonCount);


