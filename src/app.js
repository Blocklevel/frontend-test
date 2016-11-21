require('./../style/app.scss')
let navHome = document.getElementById('nav-Home');
let navAbout = document.getElementById('nav-About');
let navWork = document.getElementById('nav-Work');
let navContact = document.getElementById('nav-Contact');

let parallax = document.getElementById('parallax');
let anchorHome = document.getElementById('welcome').offsetTop;
let anchorAbout = document.getElementById('about').offsetTop;
let anchorWork = document.getElementById('work').offsetTop;
let anchorContact = document.getElementById('contact').offsetTop;
console.log(anchorHome + ", " + anchorAbout + ", " + anchorWork + ", " + anchorContact);

function scrollToAnchor(slidingElement, anchor, duration) {
    console.log("scrolling to " + anchor);
    if (duration <= 0) return;
    var difference = anchor - slidingElement.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        slidingElement.scrollTop = slidingElement.scrollTop + perTick;
        if (slidingElement.scrollTop === anchor) return;
        scrollToAnchor(slidingElement, anchor, duration - 10);
    }, 10);
}

function giveYPosition() {
    return document.getElementById('parallax').scrollTop;
}

function setActiveMenuItem() {
    let yPosition = giveYPosition();
    console.log(yPosition);
    // if
}

navHome.onclick= scrollToAnchor.bind(this, parallax, anchorHome, 750);
navAbout.onclick= scrollToAnchor.bind(this, parallax, anchorAbout, 750);
navWork.onclick= scrollToAnchor.bind(this, parallax, anchorWork, 750);
navContact.onclick= scrollToAnchor.bind(this, parallax, anchorContact, 750);
// document.getElementById('nav-Work').onclick=scrollToContent.bind(this, anchorWork);
// document.getElementById('nav-Contact').onclick=scrollToContent.bind(this, anchorContact);
//
// document.getElementById('parallax').onscroll = setActiveMenuItem;
