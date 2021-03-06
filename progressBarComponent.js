const template = document.createElement('template');
template.innerHTML = `
<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 0.5rem;
        color: black;
        text-shadow: -0.5px 0 red, 0 0.5px red, 0.5px 0 red, 0 -0.5px red;
        z-index:3;

      }

    html,body {
        display: grid;
        height: 100%;
        text-align: center;
        place-items: center;
        background: #dde6f0;
        z-index:3;


    }

    .circular {
        height: 100px;
        width: 100px;
        position: relative;
        transform: scale(2);
        margin: 58px;
        margin-bottom: 120px;
        z-index:3;

    }

    .circular .inner {
        position: absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        height: 80px;
        width: 80px;
        margin:  -40px 0 0 -40px;
        background: #006280;
        border-radius: 100%;
        box-shadow: 0 1px 0 rgba(0,0,0,0.2);
    }

    .circular .bar {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #fff;
        -webkit-border-radius: 100%;
        clip: rect(0px, 100px,100px,50px);
    }

    .circular .numb{
        position: absolute;
        top:  50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 18px;
        font-weight: 500;
        color: wheat ;
        text-shadow: -1px 0 red, 0 1px red, 1px 0 red, 0 -1px red;

            }

    .circle .bar .progress {
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-border-radius: 100%;
        clip: rect(0px, 50px,100px,0px);
        background: #4158d0;

    }

    .circle .left .progress {
     z-index: 1;
     animation: left 4s linear both;
    }

    @keyframes left {
        100% {
            transform: rotate(180deg);
        }
      
    }    

    .circle .right  {
        z-index: 3;
       transform: rotate(180deg);
    }


    .circle .right .progress {
        animation: right 4s linear both;
        animation-delay: 4s;
    }
    .eventTitle {
      z-index:10;
      color:wheat;
      text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -3px black;
      font-size:0.49rem;

    }
    @keyframes right {
       
        100% {
            transform: rotate(180deg);
        }   
        
    }

</style>
<body>
<h3 class="eventTitle"> <h3>
   <div class="circular">
       <div class="inner">  </div>
       <div class="numb">100%</div>
       <div class="circle">
           <div class="bar left">
               <div class="progress"></div>
           </div>
           <div class="bar right">
            <div class="progress"></div>
        </div>
   </div>
   </div>
`;

class ProgressBar extends HTMLElement {
    constructor() {
        super();        
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        const titleEvent = this.shadowRoot.querySelector('.eventTitle');
        console.log(this.getAttribute('eventName'));
        titleEvent.textContent = this.getAttribute('eventName');
        const percentage = this.getAttribute('percentOfLoad');
        const progressLeft = this.shadowRoot.querySelector('.left .progress');
        const progressRight = this.shadowRoot.querySelector('.right .progress');
        this.progressBarAnimation(percentage,progressLeft,progressRight)
        
    }
    
    progressBarAnimation(percentage,progressLeft,progressRight) {
            const numb = this.shadowRoot.querySelector('.numb');
            let counter = 0;
            this.setInterval(() => {
                counter+=1;
                if (counter <= percentage) {                
                      numb.textContent = counter + "% Cheio";  
                                        
                   if (counter <=50) {
                          progressLeft.style.backgroundColor = "green";
                          progressRight.style.backgroundColor = "green";
                      } else if(counter > 50 && counter <= 70) {
                          progressLeft.style.backgroundColor = "yellow";
                          progressRight.style.backgroundColor = "yellow";
                      }
                      else if(counter > 70) {
                          progressLeft.style.backgroundColor = "red";
                          progressRight.style.backgroundColor = "red";
                      }  
                  }
                  else {
                      progressLeft.style.animationPlayState = "paused";
                      progressRight.style.animationPlayState = "paused";
                  }                        
                  
              },80);
        
            }
            
          ChangeProgressBarInformation(NewPercentage)  {
            const numb = this.shadowRoot.querySelector('.numb');
            const progressLeft = this.shadowRoot.querySelector('.left .progress');
            const progressRight = this.shadowRoot.querySelector('.right .progress');
          numb.textContent = NewPercentage + "% Cheio";
          this.progressBarAnimation(NewPercentage,progressLeft,progressRight, NewPercentage);
         }

         connectedCallback() {
            this.ChangeProgressBarInformation(30);
         }
        }
        

    window.customElements.define('progress-bar', ProgressBar);