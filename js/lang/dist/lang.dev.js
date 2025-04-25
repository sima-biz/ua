"use strict";

var _langDATA = require("./lang-DATA.js");

// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////
var elementLangEN = document.getElementById('lg-lgen');
elementLangEN.onclick = q;

function q() {
  var langRES = "en";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search === "?") {
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
var elementLangUA = document.getElementById('lg-lgua');
elementLangUA.onclick = qq;

function qq() {
  var langRES = "ua";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search === "?") {
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
var elementLangRU = document.getElementById('lg-lgru');
elementLangRU.onclick = qqq;

function qqq() {
  var langRES = "ru";

  if (document.location.search === "") {
    location.href = location.href + "?lang=" + langRES;
  }

  if (document.location.search === "?") {
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

; // ////// END //////////////////  Переключение языка на текущей странице  ///////////////////////////
// ///// START /////////////////////////////  переключение флагов по клику иконки ////////////////////////////////////

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

; // ////// END //////////////////////////// переключение флагов по клику иконки /////////////////////////////////////////
// ////// START //////////////// передача выбранного языка по ссылке на следующюю страницу //////////////////////

var lang = "";

if (document.location.search.includes("lang=ua")) {
  lang = "lang=ua";
}

;

if (document.location.search.includes("lang=ru")) {
  lang = "lang=ru";
}

;

if (document.location.search.includes("lang=en")) {
  lang = "lang=en";
}

;
var langRes = lang; //собираем все ссылки в массив

var links = document.getElementsByTagName("a"); //для каждой ссылки делаем

for (var i = 0; i < links.length; i++) {
  // если href="#"
  if (links[i].href.includes("#")) {
    // то отключаем сылку 
    links[i].href = "javascript:void(0)";
  } //если в ссылке есть 'index' и есть "?"


  if (links[i].href.includes("index") && links[i].href.includes("?")) {
    //дописываем в конец ссылки 
    links[i].href += "&" + langRes;
  } //если в ссылке есть 'index' и нет "?"


  if (links[i].href.includes("index") && !links[i].href.includes("?")) {
    //дописываем в конец ссылки 
    links[i].href += "?" + langRes;
  }
}

; // ///// END //////////////  передача выбранного языка по ссылке на следующюю страницу ///////////////////
// ///// START /////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком  ///////////////////////
// import { arryHEAD } from './lang-DATA.js';
// let levelURL = (new URL(document.location)).searchParams.get("level");
// let itemURL = (new URL(document.location)).searchParams.get("item");
// let brandURL = (new URL(document.location)).searchParams.get("brand");
// let pageURL = (new URL(document.location)).searchParams.get("page");
// let codeURL = (new URL(document.location)).searchParams.get("code");
// let langURL = (new URL(document.location)).searchParams.get("lang");
// let levelHEAD = "";
// let itemHEAD = "";
// let brandHEAD = "";
// let pageHEAD = "";
// let codeHEAD = "";
// let langHEAD = "";
// if (levelURL === null || levelURL === "") { levelHEAD = "" } else { levelHEAD = levelURL };
// if (itemURL === null || itemURL === "") { itemHEAD = "" } else { itemHEAD = "_" + itemURL };
// if (brandURL === null || brandURL === "") { brandHEAD = "" } else { brandHEAD = "_" + brandURL };
// if (pageURL === null || pageURL === "") { pageHEAD = "" } else { pageHEAD = "_" + pageURL };
// if (codeURL === null || codeURL === "") { codeHEAD = "" } else { codeHEAD = "_" + codeURL };
// if (langURL === null || langURL === "") { langHEAD = "" } else { langHEAD = "_" + langURL };
// let keyHEAD = levelHEAD + itemHEAD + brandHEAD + pageHEAD + codeHEAD + langHEAD;
// //////////////////////////////////////////////////////////////////////////////////////////////////
// let aimAurl = (new URL(document.location)).searchParams.get("a");
// let aimBurl = (new URL(document.location)).searchParams.get("b");
// let aimCurl = (new URL(document.location)).searchParams.get("c");
// let aimDurl = (new URL(document.location)).searchParams.get("d");
// let aimEurl = (new URL(document.location)).searchParams.get("e");
// let aimFurl = (new URL(document.location)).searchParams.get("f");
// let aimLANGurl = (new URL(document.location)).searchParams.get("lang");
// let aimAhead = "";
// let aimBhead = "";
// let aimChead = "";
// let aimDhead = "";
// let aimEhead = "";
// let aimFhead = "";
// let aimLANGhead = "";
// if (aimAurl === null || aimAurl === "") { aimAhead = "" } else { aimAhead = aimAurl };
// if (aimBurl === null || aimBurl === "") { aimBhead = "" } else { aimBhead = "_" + aimBurl };
// if (aimCurl === null || aimCurl === "") { aimChead = "" } else { aimChead = "_" + aimCurl };
// if (aimDurl === null || aimDurl === "") { aimDhead = "" } else { aimDhead = "_" + aimDurl };
// if (aimEurl === null || aimEurl === "") { aimEhead = "" } else { aimEhead = "_" + aimEurl };
// if (aimFurl === null || aimFurl === "") { aimFhead = "" } else { aimFhead = "_" + aimFurl };
// if (aimLANGurl === null || aimLANGurl === "") { aimLANGhead = "" } else { aimLANGhead = "_" + aimLANGurl };
// let keyHEAD = aimAhead + aimBhead + aimChead + aimDhead + aimEhead + aimFhead + aimLANGhead;
// let titleHEAD = "";
// let descriHEAD = "";
// let keyworHEAD = "";
// function getValue(array, search) {
//     var i = array.length;
//     while (i--) {
//         if (array[i].key === search) {
//             titleHEAD = array[i].title;
//             descriHEAD = array[i].descri;
//             keyworHEAD = array[i].keywor;
//             return
//         }
//     }
// };
// getValue(arryHEAD, keyHEAD);
// ///// END ////////////////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком //////////////////////////////////
// /////  START ////////////////////////////////////  ПРЕВОДЧИК  //////////////////////////////////////////////

// ОСТОРОЖНО ПОДБЕРАТЬ setTimeout ИНТЕРВАЛ  0> 10 <100
setTimeout(translatorWebsite, 10);

function translatorWebsite() {
  var _loop = function _loop(key) {
    var demoClasses = document.querySelectorAll('.lng-' + key); // console.log(demoClasses)

    demoClasses.forEach(function (element) {
      // element.textContent += langArr[key][langURL]
      element.textContent = _langDATA.langArr[key][new URL(document.location).searchParams.get("lang")];
    });
  };

  // for (let key in langArr) { document.querySelector('.lng-' + key).innerHTML = langArr[key][langURL] }
  for (var key in _langDATA.langArr) {
    _loop(key);
  }

  ;
} // /////  END  ////////////////////////////////////  ПРЕВОДЧИК  ///////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /// START //////// ПОДПИСЬ alt НА img РАЗДЕЛА helpful НА ВСЕХ СТРАНИЦАХ САЙТА ///////////////////////////


setTimeout(dynamicAlt, 120);

function dynamicAlt() {
  // Получаем текущий URL страницы
  var currentUrl = window.location.href; // Получаем все элементы, у которых id содержит подстроку 'dynamicImageAlt-'

  var elementsImageAlt = document.querySelectorAll('[id*="dynamicImageAlt-"]');
  var totalImageAlt = elementsImageAlt.length; // Получаем все элементы, у которых id содержит подстроку 'dynamicTextAlt-'

  var elementsTextAlt = document.querySelectorAll('[id*="dynamicTextAlt-"]');
  var totalTextAlt = elementsTextAlt.length; // Определяем максимальное количество ID на странице

  var maxNumberID = Math.max(totalImageAlt, totalTextAlt); // Получаем текущий lang (язык) со страницы

  var totalLangAlt = new URL(document.location).searchParams.get("lang");

  if (currentUrl.includes('helpful') || currentUrl.includes('index.html')) {
    console.log('URL сайта содержит подстроку "helpful" или "index.html"');
    var additionAltElement = "";

    if (totalLangAlt === "en") {
      additionAltElement = "mechanic help";
    }

    ;

    if (totalLangAlt === "ru") {
      additionAltElement = "помощь механика";
    }

    ;

    if (totalLangAlt === "ua") {
      additionAltElement = "допомога механіка";
    }

    ; // console.log(maxNumberID)

    for (var i = 1; i <= maxNumberID; i++) {
      var textAltElement = document.getElementById('dynamicTextAlt-' + i);
      var imageAltElement = document.getElementById('dynamicImageAlt-' + i);

      if (textAltElement && imageAltElement) {
        imageAltElement.alt = textAltElement.innerText.toLowerCase() + " " + additionAltElement; // console.log('фото ' + i + "  " + imageAltElement.alt );
      } else {
        console.log('ошибка с ID для фото ' + i);
      }
    }
  } else {
    console.log('URL сайта не содержит подстроку "helpful" или "index.".');
  }
}

; // /// END //////// ПОДПИСЬ alt НА img РАЗДЕЛА helpful НА ВСЕХ СТРАНИЦАХ САЙТА ///////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///// START /////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком  ///////////////////////

setTimeout(titleDescriKeywor, 130);

function titleDescriKeywor() {
  var titleHEAD = "";
  var descriHEAD = "";
  var keyworHEAD = "";
  var textH1Element = document.querySelector('.key-text-h1');
  var WT_H1page = "";

  if (textH1Element && textH1Element.innerText.trim() !== "") {
    console.log('Элемент с классом key-text-h1 существует и содержит текст');
    WT_H1page = textH1Element.innerText.toLowerCase();
  } else if (textH1Element && textH1Element.innerText.trim() === "") {
    console.log('Элемент с классом key-text-h1 существует, но не содержит текст');
    textH1Element.style.display = "none";
    WT_H1page = "";
  } else {
    console.log('Элемент с классом key-text-h1 не существует');
    WT_H1page = "";
  }

  ;
  var textH2Element = document.querySelector('.key-text-h2');
  var WT_H2page = "";

  if (textH2Element && textH2Element.innerText.trim() !== "") {
    console.log('Элемент с классом key-text-h2 существует и содержит текст');
    WT_H2page = textH2Element.innerText.toLowerCase();
  } else if (textH2Element && textH2Element.innerText.trim() === "") {
    console.log('Элемент с классом key-text-h2 существует, но не содержит текст, то присваеваем display = "none"');
    textH2Element.style.display = "none";
    WT_H2page = "";
  } else {
    console.log('Элемент с классом key-text-h2 не существует');
    WT_H2page = "";
  }

  ;
  var textP1Element = document.querySelector('.key-text-p1');
  var WT_P1page = "";

  if (textP1Element && textP1Element.innerText.trim() !== "") {
    console.log('Элемент с классом key-text-p1 существует и содержит текст');
    WT_P1page = textP1Element.innerText.toLowerCase();
  } else if (textP1Element && textP1Element.innerText.trim() === "") {
    console.log('Элемент с классом key-text-p1 существует, но не содержит текст');
    textP1Element.style.display = "none";
    WT_P1page = "";
  } else {
    console.log('Элемент с классом key-text-p1 не существует');
    WT_P1page = "";
  }

  ;
  var textP2Element = document.querySelector('.key-text-p2');
  var WT_P2page = "";

  if (textP2Element && textP2Element.innerText.trim() !== "") {
    console.log('Элемент с классом key-text-p2 существует и содержит текст');
    WT_P2page = textP2Element.innerText.toLowerCase();
  } else if (textP2Element && textP2Element.innerText.trim() === "") {
    console.log('Элемент с классом key-text-p2 существует, но не содержит текст');
    textP2Element.style.display = "none";
    WT_P2page = "";
  } else {
    console.log('Элемент с классом key-text-p2 не существует');
    WT_P2page = "";
  }

  ; // let paramE = (new URL(document.location)).searchParams.get("e");
  // let resParamE;
  // if (paramE === null || paramE === undefined || paramE === "") { resParamE = "" } else { resParamE = paramE };
  // resParamE = (paramE === null || paramE === undefined || paramE === "") ? "" : paramE;
  // let WT_ParamE = resParamE;

  var paramA = new URL(document.location).searchParams.get("a");
  var WT_A = paramA === null || paramA === undefined || paramA.trim() === "" ? "" : paramA;
  console.log("WT_A-----", WT_A);
  var paramB = new URL(document.location).searchParams.get("b");
  var WT_B = paramB === null || paramB === undefined || paramB.trim() === "" ? "" : paramB;
  console.log("WT_B-----", WT_B);
  var paramC = new URL(document.location).searchParams.get("c");
  var WT_C = paramC === null || paramC === undefined || paramC.trim() === "" ? "" : paramC;
  console.log("WT_C-----", WT_C);
  var paramD = new URL(document.location).searchParams.get("d");
  var WT_D = paramD === null || paramD === undefined || paramD.trim() === "" ? "" : paramD;
  console.log("WT_D-----", WT_D);
  var paramE = new URL(document.location).searchParams.get("e");
  var WT_E = paramE === null || paramE === undefined || paramE.trim() === "" ? "" : paramE;
  console.log("WT_E-----", WT_E);
  var paramF = new URL(document.location).searchParams.get("f");
  var WT_F = paramF === null || paramF === undefined || paramF.trim() === "" ? "" : paramF;
  console.log("WT_F-----", WT_F);
  var paramLANG = new URL(document.location).searchParams.get("lang");
  var WT_LANG = paramLANG === null || paramLANG === undefined || paramLANG.trim() === "" ? "" : paramLANG;
  console.log("WT_LANG-----", WT_LANG); // Получаем текущий URL страницы

  var currentUrl = window.location.href; // console.log(currentUrl)
  // if(currentUrl.includes('index.') || currentUrl.includes('127.0.0.1')) { 

  if (currentUrl.includes("index.") || WT_A === "home" && WT_B === "") {
    titleHEAD = WT_H1page + " " + _langDATA.WT_Repair[WT_LANG] + " " + _langDATA.WT_For[WT_LANG] + " " + _langDATA.WT_SewingMachines[WT_LANG] + " " + _langDATA.WT_IndustrialHousehold[WT_LANG];
    descriHEAD = WT_H1page + " " + _langDATA.WT_Repair[WT_LANG] + " " + _langDATA.WT_For[WT_LANG] + " " + _langDATA.WT_SewingMachines[WT_LANG] + " " + _langDATA.WT_IndustrialHousehold[WT_LANG] + " " + _langDATA.WT_Zaporozhye[WT_LANG] + " " + _langDATA.WT_Sima[WT_LANG];
  }

  ;

  if (currentUrl.includes("page-helpful-repair")) {
    titleHEAD = WT_H1page + " " + _langDATA.WT_MaintenancePrevention[WT_LANG] + " " + _langDATA.WT_Zaporozhye[WT_LANG];
    descriHEAD = WT_H1page + " " + _langDATA.WT_IndustrialHousehold[WT_LANG] + " " + _langDATA.WT_MaintenancePrevention[WT_LANG] + " " + _langDATA.WT_Zaporozhye[WT_LANG] + " " + _langDATA.WT_Sima[WT_LANG];
  }

  ;

  if (currentUrl.includes("page-helpful-article")) {
    titleHEAD = _langDATA.WT_SewingMachine[WT_LANG] + " " + WT_H1page + " " + _langDATA.WT_Consultation[WT_LANG] + " " + _langDATA.WT_MaintenancePrevention[WT_LANG] + " " + _langDATA.WT_Zaporozhye[WT_LANG];
    descriHEAD = _langDATA.WT_SewingMachine[WT_LANG] + " " + WT_H1page + " " + _langDATA.WT_Consultation[WT_LANG] + " " + _langDATA.WT_MaintenancePrevention[WT_LANG] + " " + _langDATA.WT_Repair[WT_LANG] + " " + _langDATA.WT_Zaporozhye[WT_LANG] + " " + _langDATA.WT_Sima[WT_LANG];
  }

  ;

  if (currentUrl.includes("page-catalog-pdf") && WT_B === "documentation" && WT_C === "catalogs-pdf" && WT_D === "" && WT_E === "") {
    titleHEAD = WT_H1page + " t";
    descriHEAD = WT_H1page + " d";
  }

  if (currentUrl.includes("page-species-section") && WT_B === "documentation" && WT_C === "parts-list-pdf" && WT_D === "" && WT_E === "") {
    titleHEAD = _langDATA.WT_SewingMachine[WT_LANG] + " " + WT_H1page;
    descriHEAD = _langDATA.WT_SewingMachine[WT_LANG] + " " + WT_H1page;
  }

  if (currentUrl.includes("page-parts-list-brand-pdf") && WT_B === "documentation" && WT_C === "parts-list-pdf" && WT_D !== "" && WT_E !== "") {
    titleHEAD = WT_H1page + " " + _langDATA.WT_Detailing[WT_LANG] + " " + _langDATA.WT_SewingMachines[WT_LANG] + " " + _langDATA.WT_Manual[WT_LANG] + " " + WT_H2page + " " + "№" + WT_E;
    descriHEAD = WT_H1page + " " + _langDATA.WT_Detailing[WT_LANG] + " " + _langDATA.WT_SewingMachines[WT_LANG] + " " + _langDATA.WT_Manual[WT_LANG] + " " + WT_H2page + " " + "№" + WT_E;
  } // Функция общая для всех делаем первую букву заглавной


  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ;
  titleHEAD = capitalizeFirstLetter(titleHEAD);
  descriHEAD = capitalizeFirstLetter(descriHEAD); // titleHEAD МАКСИМУМ не более 60 СИМВОЛОВ

  console.log("titleHEAD  ", titleHEAD, titleHEAD.length); // descriHEAD МАКСИМУМ 140 СИМВОЛОВ

  console.log("descriHEAD  ", descriHEAD, descriHEAD.length);
  console.log("keyworHEAD", keyworHEAD);
  var code = "<meta name=\"description\" content=\"".concat(descriHEAD, "\" />") + "<title>".concat(titleHEAD, "</title>") + "<meta name=\"keywords\" content=\"".concat(keyworHEAD, "\" />");
  var temp = document.createElement('div');
  temp.innerHTML = code;
  var head = document.head;

  while (temp.firstChild) {
    head.appendChild(temp.firstChild);
  }

  ;
}

; // ///// END ////////////////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком //////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////