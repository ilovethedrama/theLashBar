"use strict";window.onload=function(){var e,t=document.getElementsByClassName("footer__title");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?(e.style.maxHeight=null,e.style.padding=null):(e.style.maxHeight="300px",e.style.padding="20px")});window.onscroll=function(){var e,t;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,(t=document.getElementsByClassName("progress--bar")[0]).style.background=e<=5?"lightblue":e<=37.5?"yellow":e<=71.5?"maroon":"blanchedalmond",t.style.width=e+"%",console.log(e),document.body.scrollTop>30||document.documentElement.scrollTop>30?(document.getElementById("lashTitle1").style.fontSize="1.5rem",document.getElementById("lashTitle2").style.fontSize="1.5rem",document.getElementById("lashTitle3").style.fontSize="1.5rem"):(document.getElementById("lashTitle1").style.fontSize="2.5rem",document.getElementById("lashTitle2").style.fontSize="2.5rem",document.getElementById("lashTitle3").style.fontSize="2.5rem")};var n=document.getElementById("navi");n&&n.addEventListener("click",function(){console.log("open")});document.getElementById("priceSection");window.addEventListener("scroll",function(){this.scrollY>this.innerHeight/2.5?document.body.classList.add("contentContainer--pale"):document.body.classList.remove("contentContainer--pale")});const o=()=>{const e=(new Date).getHours();return console.log(e),e>6&&e<=11?"Good Morning!":e>=12&&e<19?"Good Afternoon":"Sup Night Owl?"};o();const l=document.getElementById("welcomeMsg");null!==l&&(l.innerText=o(),console.log(l.innerText));var c=0,i=document.getElementById("welcomeMsgDone"),s=document.getElementById("loaderContainer"),d=setInterval(function(){var e=document.getElementById("loaderCurrentNum");null!==e&&e.addEventListener("click",function(){console.log("fuk dude")}),c<100?(c++,e.innerText=c+"%",console.log(e.innerText),c>99&&(i.style.opacity=1,s.classList.add("item--pointer"),e.style.opacity=0,e.style.height=0,s.addEventListener("click",function(){s.className="item--hide",console.log("container click clacked yo")}))):clearInterval(d)},10);console.log("localStorage: ",localStorage)};