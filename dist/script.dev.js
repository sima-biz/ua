"use strict";

// const inputLang = document.getElementById('lg-en');
// const langEn = inputLang.value;
// console.log(langEn)
// function qqqqq() {
//     const lang = document.querySelector('.lg-lg').value;
//     console.log(lang)
// }
// let resLANG = 'ru'
// let langRESen
// let langRESua
// let langRESru
// function startLANG() {
// }
// function updateURL() {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
//         var newUrl = baseUrl + '?lang=ru';
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     }
// }
// updateURL()
function aaa() {
  if (document.location.search === "") {
    location.href = location.href + "?lang=ru";
  } // if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
  // if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
  // if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }

}

aaa();
var ddd = document.location.search;
console.log(ddd, "до"); // //////////////////////////////////////////////////////////////////////////////////////////////////

var langRES;

function q() {
  // langRES = document.querySelector('.lg-lgen').value;
  langRES = "en";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search == "?") {
    location.href = location.href + "&lang=" + langRES;
  }

  if (document.location.search.includes("lang=ru")) {
    location.href = location.href.replace(/lang=ru/gi, 'lang=en');
  }

  if (document.location.search.includes("lang=ua")) {
    location.href = location.href.replace(/lang=ua/gi, 'lang=en');
  } else {
    return;
  }
}

var dd = document.location.search;
console.log(dd, "после"); // ///////////////////////////////////////////////////////////////////////

function qq() {
  // langRES = document.querySelector('.lg-lgua').value;
  langRES = "ua";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search == "?") {
    location.href = location.href + "&lang=" + langRES;
  }

  if (document.location.search.includes("lang=ru")) {
    location.href = location.href.replace(/lang=ru/gi, 'lang=ua');
  }

  if (document.location.search.includes("lang=en")) {
    location.href = location.href.replace(/lang=en/gi, 'lang=ua');
  } else {
    return;
  }
}

function qqq() {
  // langRES = document.querySelector('.lg-lgru').value;
  langRES = "ru";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search == "?") {
    location.href = location.href + "&lang=" + langRES;
  }

  if (document.location.search.includes("lang=ua")) {
    location.href = location.href.replace(/lang=ua/gi, 'lang=ru');
  }

  if (document.location.search.includes("lang=en")) {
    location.href = location.href.replace(/lang=en/gi, 'lang=ru');
  } else {
    return;
  }
}

if (document.location.search.includes("lang=en")) {
  var btnContainer = document.getElementById("myFLAG");
  var btns = btnContainer.getElementsByClassName("flag");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("flag-active");
      current[0].className = current[0].className.replace(" flag-active", "");
      this.className += " flag-active";
    });
  }

  ;
} // //////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(langRES)
// var paramsString = document.location.search
// console.log(paramsString)
// $(document).ready(function() {
//     $('.compose').click(function() {
//         $('.overlay').addClass('is-open');
//     })
//     $('.modal-close, .send').click(function() {
//         $('.overlay').removeClass('is-open');
//     })
// })
//////////////////////  функция смены языков и смены URL под каждый язык  ////////////start/////////////////////
// function qqqqq() {
//     var radios = document.getElementsByName("button");
//     console.log(radios)
//     var val = '';
//     var resLngEn = document.getElementsByClassName('lng-en');
//     var resLngUa = document.getElementsByClassName('lng-ua');
//     var resLngRu = document.getElementsByClassName('lng-ru');
//     console.log(resLngEn)
//     console.log(resLngUa)
//     console.log(resLngRu)
//     var radiosId = document.getElementsByName("pageIdLang");
//     console.log(radiosId)
//     var radiosHref = document.getElementsByName("pageHrefLang");
//     console.log(radiosHref)
//     /////////////////// переключение язык en span  по класу весь html  /////////////////////
//     if (radios[0].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "block";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "none";
//         }
//         val = radios[0].value;
//         console.log(val + ' флаг');
//         //////////  div id  смена URL en  //////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'en';
//         }
//         //////////  a href  смена URL en  //////////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'en';
//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }
//     /////////////////// переключение язык ua span  по класу весь html  /////////////////////
//     if (radios[1].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "block";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "none";
//         }
//         val = radios[1].value;
//         console.log(val + ' флаг');
//         /////////  div id  смена URL ua ////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'ua';
//         }
//         /////////  a href  смена URL ua ///////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'ua';
//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }
//     /////////////////// переключение язык ru span  по класу весь html  /////////////////////
//     if (radios[2].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "block";
//         }
//         val = radios[2].value;
//         console.log(val + ' флаг');
//         /////////  div id  смена URL ru ////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'ru';
//         }
//         /////////  a href  смена URL ru ///////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'ru';
//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }
// }
// qqqqq();
//////////////////////  функция смены языков и смены URL под каждый язык  ////////////end/////////////////////
//////////////////////// слайдер с перещетом  разрешения экрана /////////////start////////////
// const controls = document.querySelector(".controls");
// const container = document.querySelector(".thumbnail-container")
// const allBox = container.children;
// const containerWidth = container.offsetWidth;
// const margin = 30;
// var items = 0;
// var totalItems = 0;
// var jumpSlideWidth = 0;
// responsive = [
//     { breakPoint: { width: 0, item: 1 } },
//     { breakPoint: { width: 600, item: 2 } },
//     { breakPoint: { width: 900, item: 3 } },
//     { breakPoint: { width: 1200, item: 4 } },
//     { breakPoint: { width: 1500, item: 5 } },
//     { breakPoint: { width: 1800, item: 6 } },
//     { breakPoint: { width: 2100, item: 7 } }
// ]
// function load() {
//     for (let i = 0; i < responsive.length; i++) {
//         if (window.innerWidth > responsive[i].breakPoint.width) {
//             items = responsive[i].breakPoint.item
//         }
//     }
//     start();
// }
// function start() {
//     var totalItemsWidth = 0;
//     for (let i = 0; i < allBox.length; i++) {
//         allBox[i].style.width = (containerWidth / items) - margin + "px";
//         allBox[i].style.margin = (margin / 2) + "px";
//         totalItemsWidth += containerWidth / items;
//         totalItems++;
//     }
//     container.style.width = totalItemsWidth + "px";
//     const allSlides = Math.ceil(totalItems / items);
//     const ul = document.createElement("ul");
//     for (let i = 1; i <= allSlides; i++) {
//         const li = document.createElement("li");
//         li.id = i;
//         li.innerHTML = i;
//         li.setAttribute("onclick", "controlSlides(this)");
//         ul.appendChild(li);
//         if (i == 1) {
//             li.className = "active";
//         }
//     }
//     controls.appendChild(ul);
// }
// function controlSlides(ele) {
//     const ul = controls.children;
//     const li = ul[0].children;
//     var active;
//     for (let i = 0; i < li.length; i++) {
//         if (li[i].className == "active") {
//             active = i;
//             li[i].className = ""
//         }
//     }
//     ele.className = "active"
//     var numb = (ele.id - 1) - active;
//     jumpSlideWidth = jumpSlideWidth + (containerWidth * numb);
//     container.style.marginLeft = -jumpSlideWidth + "px"
// }
// window.onload = load();
//////////////////////// слайдер с перещетом  разрешения экрана /////////////end////////////
///////////////////////////скрываем блок при клике вне элемента с классом pop-up /////////start////////////
// const popup = document.querySelector('.pop-up');
// document.onclick = function(e){
//     if ( event.target.className != 'pop-up') {
//         popup.style.display = 'none';
//     };
// };
// document.onclick = function() {
//     document.getElementById('nav').style.display = 'none'
//   }
///////////////////////скрываем блок при клике вне элемента с классом pop-up /////////end////////////