import React, {Component} from 'react';

export default class Main extends Component {
  
  constructor() {
    super()
    this.logoAry = ['DanHintzDesignLogo - D.svg', 'DanHintzDesignLogo - H.svg','DanHintzDesignLogo - Smile.svg', 'DanHintzDesignLogo - Wink.svg', 'DanHintzDesignLogo - Smile.svg'];
    this.completedAry = ['DanHintzDesignLogo - D.svg', 'DanHintzDesignLogo - DH.svg', 'DanHintzDesignLogo - DHSmile.svg', 'DanHintzDesignLogo - DHWink.svg', 'DanHintzDesignLogo - DHSmile.svg'];
  }

  display(img, step) {
    // render given portion of logo
    const image = document.createElement("img");
    image.src = img;
    image.width = "100%";
    image.className = "logoimg";
    image.id=`logoimg${step}`;
    // hide after H so that they don't show as separate image on page
    if (step > 1) {image.style.visibility="hidden"}
    const element = document.querySelector(".logo").appendChild(image);
    // replace with the combined logo pic to ensure correct spacing
    setTimeout(() => {
        element.src=this.completedAry[step];
        if (step > 0) {document.querySelector(`#logoimg${step-1}`).remove()};
        element.style.visibility="visible"
    }, 499);
  };

  componentDidMount() {
    // set deleayInt to 500 for D to start, then move along delay array for each subsequent element
    let delay = [1100, 1700, 2100, 2600];
    let delayInt = 500;
    for (let i = 0; i < this.logoAry.length; i++) {
      setTimeout(() => {this.display(this.logoAry[i], i)}, delayInt);
      delayInt = delay[i];
    }
    // final image(no text) will move to bottom left of screen and this makes it disappear
    setTimeout(() => {document.getElementById("logoimg4").remove()}, 5100)
  }

  render() {
    return (
      <div className="Main">
        <section className="logoAnimation">
          <div className="logo">

          </div>
        </section>
      </div>
    )
  }
}