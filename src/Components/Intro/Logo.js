import React, {Component} from 'react';

export default class Logo extends Component {
  
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

  // function to create typing effect for Logo Words (need to configure)
  // typing_effect(words, colors) {

  //   var cursor = document.getElementById('cursor'); //cursor
  //   var text = document.getElementById('text') //text

  //   var blink = true;
  //   var wait = false;
  //   var letters_count = 1;
  //   var temp = 1;

  //   text.style.color = colors[0]
  //   window.setInterval(function () { //wait between words when it starts writting
  //     if (letters_count === 0 && wait === false) {
  //       wait = true;

  //       text.innerHTML = '' // leave a blank
  //       window.setTimeout(function () {
  //         var usedColor = colors.splice(0, 1)[0] //remove first element and get it as str
  //         colors.push(usedColor);
  //         var usedWord = words.splice(0, 1)[0]
  //         words.push(usedWord);
  //         temp = 1;
  //         text.style.color = colors[0]
  //         letters_count += temp;
  //         wait = false;
  //       }, 1000)
  //     } else if (letters_count === words[0].length + 1 && wait === false) {
  //       wait = true;
  //       window.setTimeout(function () { //wait a bit until words finished and start deleting
  //         temp = -1;
  //         letters_count += temp;
  //         wait = false;
  //       }, 1000)
  //     } else if (wait === false) { //write words                    
  //       text.innerHTML = words[0].substr(0, letters_count)
  //       letters_count += temp;
  //     }
  //   }, 120)
  //   window.setInterval(function () {
  //     if (blink) {
  //       cursor.style.opacity = "0";
  //       blink = false;
  //     } else {
  //       cursor.style.opacity = "1";
  //       blink = true;
  //     }
  //   }, 400)
  // }

  render() {
    return (
      <div className="Logo">
        <section className="logoAnimation">
          <div className="logo">
            <span className="typedLogo">
            </span>
          </div>
        </section>
      </div>
    )
  }
}