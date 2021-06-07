const template = document.createElement('template');
template.innerHTML = `
  <style>
  </style>
  <div>
  <p> Progress Bar</p>
  <div id="progress-bar">
   
  </div>
  </div>
`;

class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode({mode: true}))
    }

}
//Defining how the custom tag will be named 
window.customElements.define('progress-bar', ProgressBar);


