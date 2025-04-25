"use strict";

// var code = '<title>oooooo</title>' +
//     '<meta name="description" content="tttttttt" />' +
//     '<meta name="keywords" content="dddddddddd" />';
// var temp = document.createElement('div');
// temp.innerHTML = code;
// var head = document.head;
// while (temp.firstChild) {
//     head.appendChild(temp.firstChild);
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
// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////
var langRES;

function q() {
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

;

function qq() {
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

;

function qqq() {
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

; // END Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////
// START переключение флагов по клику ///////////////////////////////////////////////////////

if (document.location.search.includes("lang=ru")) {
  var elementRU = document.getElementById("lg-lgru");
  elementRU.className += " flag-active";
}

;

if (document.location.search.includes("lang=ua")) {
  var elementUA = document.getElementById("lg-lgua");
  elementUA.className += " flag-active";
}

;

if (document.location.search.includes("lang=en")) {
  var elementEN = document.getElementById("lg-lgen");
  elementEN.className += " flag-active"; // elementEN.classList.add(" flag-active");
}

; // END переключение флагов по клику ///////////////////////////////////////////////////////
// START передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////

var langRESU = "";

if (document.location.search.includes("lang=ua")) {
  langRESU = "lang=ua";
}

;

if (document.location.search.includes("lang=ru")) {
  langRESU = "lang=ru";
}

;

if (document.location.search.includes("lang=en")) {
  langRESU = "lang=en";
}

;
var langRESULT = langRESU; //собираем все ссылки в массив

var links = document.getElementsByTagName("a"); //для каждой ссылки делаем

for (var i = 0; i < links.length; i++) {
  //если в ссылке есть 'index'
  if (links[i].href.includes("index") && links[i].href.includes("?")) {
    //дописываем в конец ссылки  
    links[i].href += "&" + langRESULT;
  }

  if (links[i].href.includes("index") && !links[i].href.includes("?")) {
    //дописываем в конец ссылки 
    links[i].href += "?" + langRESULT;
  }
}

; // END передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////

var arr = [{
  key: 'слово1',
  value: 'значение1',
  text: 'описание1',
  title: 'заголовок1'
}, {
  key: 'слово2',
  value: 'значение2',
  text: 'описание2',
  title: 'заголовок2'
}, {
  key: 'слово3',
  value: 'значение3',
  text: 'описание3',
  title: 'заголовок3'
}]; // import { arr } from './index-page-DATA.js';
// function getValue(array, value) {
//     var obj = array.filter(function(arr, i) {
//         return arr.key === value ? arr.value : '';
//     });
//     return obj;
// }

var ee;
var rr;
var yy;

function getValue(array, search) {
  var i = array.length;

  while (i--) {
    if (array[i].key === search) {
      ee = array[i].value;
      rr = array[i].text;
      yy = array[i].title;
      return;
    }
  }
}

var jjj = "слово2";
getValue(arr, jjj);
console.log(ee);
console.log(rr);
console.log(yy);
var code = "<title>".concat(ee, "</title>") + "<meta name=\"description\" content=\"".concat(rr, "\" />") + "<meta name=\"keywords\" content=\"".concat(yy, "\" />");
var temp = document.createElement('div');
temp.innerHTML = code;
var head = document.head;

while (temp.firstChild) {
  head.appendChild(temp.firstChild);
}