var acc = document.getElementsByClassName("footer__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = null;
    } else {
      // panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.maxHeight = "300px";
      panel.style.padding = "20px";
    }
  });
}



window.onscroll = function () {

  scrollFunction()
};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     document.getElementById("lashTitle1").style.fontSize = "1rem";
//     // document.getElementById("lashTitle2").style.fontSize = "3.5rem";
//     document.getElementById("lashTitle3").style.fontSize = "1rem";
//     // document.getElementById("lashTitle2").style.height = "auto";

//   } else {

//     document.getElementById("lashTitle1").style.fontSize = "2rem";
//     // document.getElementById("lashTitle2").style.fontSize = "7rem";
//     document.getElementById("lashTitle3").style.fontSize = "2rem";
//     // document.getElementById("lashTitle2").style.height = "110px";
//   }
// }


function close() {
  console.log('boooosh');
  var form = document.getElementById('bookingForm');
  form.className = "item--hide";

}

// var formclose = document.getElementById('itemClose');
// formclose.addEventListener('click', close);


// function open() {
//   console.log('hsoooob');
//   var form = document.getElementById('bookingForm');
//   form.className = "bookingForm";
//   document.getElementById("lashTitle1").style.fontSize = "1rem";
//   document.getElementById("lashTitle2").style.fontSize = "3.5rem";
//   document.getElementById("lashTitle3").style.fontSize = "1rem";
//   document.getElementById("lashTitle2").style.height = "auto";
// }

var bookIt = document.getElementById('navi');
bookIt.addEventListener('click', open);


function backgroundSwitch() {
  if (this.scrollY > this.innerHeight / 2.5) {
    document.body.classList.add('contentContainer--pale');
  } else {
    document.body.classList.remove('contentContainer--pale');
  }
}


var priceSection = document.getElementById('priceSection');
window.addEventListener('scroll', backgroundSwitch);

const hiHello = () => {
  const theTime = new Date(),
    theHour = theTime.getHours();
  console.log(theHour);
  if (theHour > 6 && theHour <= 11) {
    return ('Good Morning!');
  } else if (theHour >= 12 && theHour < 19) {
    return ('Good Afternoon');
  } else {
    return ('Sup Night Owl?');
  }
}

hiHello();
const welcomeMsg = document.getElementById('welcomeMsg');

welcomeMsg.innerText = hiHello();
console.log(welcomeMsg.innerText);