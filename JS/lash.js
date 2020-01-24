'use strict'

window.onload = function () {





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
        panel.style.maxHeight = "300px";
        panel.style.padding = "20px";
      }
    });
  }

  // if (progressBar === null) {
  //   progressBar = document.getElementById('progress--bar');

  // }


  // console.log(progressBar);

  function articleProgressBar() {
    /*document.documentElement refers to the html file/window scope itself and scrolltop is the number of pixels that it is scrolled vertically...
  so this is the number of pixels the html window is scrolled vertically */
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // the height of the window content, including content not visible on the screen minus the window height - not including the scrollbar
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    //this is the height of the section containing all the blog content
    // var scrolled = (winScroll / singlePost.offsetTop) * 10;
    var progressBar = document.getElementsByClassName('progress--bar')[0];
    if (scrolled <= 5) {
      progressBar.style.background = 'lightblue';
    } else if (scrolled <= 37.5) {
      progressBar.style.background = 'yellow';
    } else if (scrolled <= 71.5) {
      progressBar.style.background = 'maroon';
    } else {
      progressBar.style.background = 'blanchedalmond';
    }

    progressBar.style.width = scrolled + "%";
    console.log(scrolled)



  }



  window.onscroll = function () {
    articleProgressBar();
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

  function open() {
    console.log('open');
  }

  function close() {
    console.log('boooosh');
    var form = document.getElementById('bookingForm');
    form.className = "item--hide";

  }



  var bookIt = document.getElementById('navi');
  if (bookIt) {
    bookIt.addEventListener('click', open);
  }


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
      return ("Mornin' early bird!");
    } else if (theHour >= 12 && theHour < 19) {
      return ('Good Afternoon');
    } else {
      return ('Sup Night Owl?');
    }
  }

  hiHello();

  const welcomeMsg = document.getElementById('welcomeMsg');



  if (welcomeMsg !== null) {
    welcomeMsg.innerText = hiHello();
    console.log(welcomeMsg.innerText);
  }

  var count = 0;

  var welcomeMsgDone = document.getElementById('welcomeMsgDone')
  var loaderContainer = document.getElementById('loaderContainer');

  var countDown = setInterval(function () {
    var loadNum = document.getElementById('loaderCurrentNum');
    if (loadNum !== null) {
      loadNum.addEventListener('click', function () {
        console.log('fuk dude')
      });

    }
    if (count < 100) {
      count++;
      loadNum.innerText = count + '%';
      console.log(loadNum.innerText);
      if (count > 99) {
        welcomeMsgDone.style.opacity = 1;
        loaderContainer.classList.add('item--pointer');
        loadNum.style.opacity = 0;
        loadNum.style.height = 0;
        loaderContainer.addEventListener('click', function () {
          loaderContainer.className = 'item--hide';
          console.log('container click clacked yo')
        })

      }
    } else {
      clearInterval(countDown)
    }
  }, 10);




  countDown;



  /*local storage name and reference, the name is local container and the
   second param points to the var loaderContainer*/
  console.log('localStorage: ', localStorage);

  // set loaderContainer within the localstorage
  // localStorage.setItem('loadscreen', loaderContainer)

  /*check to see if loaderContainer is not undefined, if so add the class of itemhide,
   otherwise if it is undefined, set it to the localstorage*/

  // if (localStorage.getItem('loadscreen') !== undefined) {
  //   loaderContainer.className = 'item--hide';
  //   console.log('yeah there');
  // } else {
  //   localStorage.setItem('loadscreen', loaderContainer)
  //   console.log('nah its not there but i\'m adding it now');
  // }




}