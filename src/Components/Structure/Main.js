import React, {Component} from 'react';
import { render } from '@testing-library/react';

export default class Main extends Component {
  
  constructor() {
    super()
    this.logoAry = ['DanHintzDesignLogo - D.svg', 'DanHintzDesignLogo - H.svg','DanHintzDesignLogo - Smile.svg', 'DanHintzDesignLogo - Wink.svg', 'DanHintzDesignLogo - Smile.svg']
  }

   display(img, step) {
    // render given portion of logo
    const image = document.createElement("img");
    image.src = img;
    image.width = "100%";
    image.className = "logoimg";
    image.id=`logoimg${step}`;
    const element = document.querySelector(".animation").appendChild(image);
    setTimeout(() => {this.animate(element, step)}, 800);
  };
  
  animate(el, step) {
    // animate to become small and set in place
    const completedAry = ['DanHintzDesignLogo - D.svg', 'DanHintzDesignLogo - DH.svg', 'DanHintzDesignLogo - DHSmile.svg', 'DanHintzDesignLogo - DHWink.svg', 'DanHintzDesignLogo - DHSmile.svg'];
    const animInt = setInterval(frame, 5);
    let size = 100;
    function frame() {
      if (size <= 20) {
        clearInterval(animInt);
        el.src = completedAry[step]
        el.className = "builtlogo";
        el.style.zIndex = toString(step);
        if (step > 0) {document.querySelector(`#logoimg${step-1}`).remove()  }
      } else {
        size -= 10;
        el.style.width = size + "%"
      };
    };
  };

  componentDidMount() {
    // this.logoAry.map((el, idx) => setTimeout(() => {this.display(el, idx)}, 500));
    let delay = 0
    for (let i = 0; i < this.logoAry.length; i++) {
      console.log(delay)
      setTimeout(() => {this.display(this.logoAry[i], i)}, delay);
      delay = delay + 500;      
    }
    // this.logoAry.map((el,idx) => animate(el, idx));
  }

  render() {
    return(
      <div className="Main">
        <div className="animationPane">
          <div className="animation">

          </div>
        </div>
      </div>
    )
  }
}
