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

const progressBar = document.getElementsByClassName('progress--bar')[0];
const progBarContainer = document.querySelector('.progress--container');

// This refers to the whole article section
const singlePost = document.getElementById('blogPst');

function articleProgressBar() {
  /*document.documentElement refers to the html file/window scope itself and scrolltop is the number of pixels that it is scrolled vertically...
  so this is the number of pixels the html window is scrolled vertically */
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

  // the height of the window content, including content not visible on the screen minus the window height - not including the scrollbar
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // var artheight = article.scrollHeight - article.clientHeight;
  var scrolled = (winScroll / singlePost.offsetTop) * 25;


  progressBar.style.width = scrolled + "%";
  console.log(singlePost.offsetTop - winScroll)
  // element.offsetTop — document.body.scrollTop

  

}


 function isItDone(){
  if (progressBar.style.width === 100) {
    progBarContainer.classList.add('item--hide');
  } else {
    progBarContainer.classList.remove('item--hide');
  }  
}


window.onscroll = function () {
  articleProgressBar();
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("lashTitle1").style.fontSize = "1.5rem";
    document.getElementById("lashTitle2").style.fontSize = "1.5rem";
    document.getElementById("lashTitle3").style.fontSize = "1.5rem";

  } else {

    document.getElementById("lashTitle1").style.fontSize = "2.5rem";
    document.getElementById("lashTitle2").style.fontSize = "2.5rem";
    document.getElementById("lashTitle3").style.fontSize = "2.5rem";
  }
}


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