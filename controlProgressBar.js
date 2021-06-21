

class ControlProgressBar extends HTMLElement {    
    constructor() {
    super();
        this.attachShadow({ mode: 'open'})
        const inputPercentage = document.createElement('input')
        inputPercentage.setAttribute('class','inputPercentage');
        inputPercentage.setAttribute('type','number');
        const buttonConfirm = document.createElement('button');
        buttonConfirm.innerText = this.getAttribute('buttonName')
        this.shadowRoot.appendChild(inputPercentage);
        this.shadowRoot.appendChild(buttonConfirm);
    }
    connectedCallback() {
        const buttonConfirm = this.shadowRoot.querySelector('button');
        const inputPercentage = this.shadowRoot.querySelector('.inputPercentage');
         console.log(buttonConfirm); 
        buttonConfirm.addEventListener('click', () => {
          console.log(inputPercentage.value);
        })

    }
}

window.customElements.define('control-progress', ControlProgressBar);