// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////

var elementLangEN = document.getElementById('lg-lgen');
elementLangEN.onclick = q

function q() {
    let langRES = "en"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }
};

var elementLangUA = document.getElementById('lg-lgua');
elementLangUA.onclick = qq

function qq() {
    let langRES = "ua"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
};

var elementLangRU = document.getElementById('lg-lgru');
elementLangRU.onclick = qqq

function qqq() {
    let langRES = "ru"
    if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
    if (document.location.search === "?") { location.href = location.href + "&lang=" + langRES }
    if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
    if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
};

// ////// END //////////////////  Переключение языка на текущей странице  ///////////////////////////


// ///// START /////////////////////////////  переключение флагов по клику иконки ////////////////////////////////////

if (document.location.search.includes("lang=ru")) {
    var elementRU = document.getElementById("lg-lgru");
    elementRU.className += " flag-active";
};
if (document.location.search.includes("lang=ua")) {
    var elementUA = document.getElementById("lg-lgua");
    elementUA.className += " flag-active";
};
if (document.location.search.includes("lang=en")) {
    var elementEN = document.getElementById("lg-lgen");
    elementEN.className += " flag-active";
    // elementEN.classList.add(" flag-active");
};
// ////// END //////////////////////////// переключение флагов по клику иконки /////////////////////////////////////////


// ////// START //////////////// передача выбранного языка по ссылке на следующюю страницу //////////////////////
// DOMContentLoaded событие возникает, когда весь HTML документ загружен и разобран
document.addEventListener("DOMContentLoaded", function() {

    let lang = "";
    if (document.location.search.includes("lang=ua")) { lang = "lang=ua" };
    if (document.location.search.includes("lang=ru")) { lang = "lang=ru" };
    if (document.location.search.includes("lang=en")) { lang = "lang=en" };
    let langRes = lang;


    //собираем все ссылки в массив
    var links = document.getElementsByTagName("a");
    //для каждой ссылки делаем
    for (var i = 0; i < links.length; i++) {
        // если href="#"
        if (links[i].href.includes("#")) {
            // то отключаем сылку 
            links[i].href = "javascript:void(0)";
        }
        //если в ссылке есть 'index' и есть "?"
        if (links[i].href.includes("index") && links[i].href.includes("?")) {
            //дописываем в конец ссылки 
            links[i].href += "&" + langRes;
        }
        //если в ссылке есть 'index' и нет "?"
        if (links[i].href.includes("index") && !links[i].href.includes("?")) {
            //дописываем в конец ссылки 
            links[i].href += "?" + langRes;
        }
    };
});
// ///// END //////////////  передача выбранного языка по ссылке на следующюю страницу ///////////////////


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

import { langArr } from './lang-DATA.js';


setTimeout(translatorWebsite, 70);

// ОСТОРОЖНО ПОДБЕРАТЬ setTimeout ИНТЕРВАЛ
// связан с файлом index-page-product-card.js Timeout строго 70
function translatorWebsite() {
    // for (let key in langArr) { document.querySelector('.lng-' + key).innerHTML = langArr[key][langURL] }
    for (let key in langArr) {
        const demoClasses = document.querySelectorAll('.lng-' + key)
        // console.log(demoClasses)
        demoClasses.forEach(element => {
        // element.textContent += langArr[key][langURL]
        element.textContent = langArr[key][(new URL(document.location)).searchParams.get("lang")]
        });
    };
}



// /////  END  ////////////////////////////////////  ПРЕВОДЧИК  ///////////////////////////////////////////////


// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// /// START //////// ПОДПИСЬ alt НА img РАЗДЕЛА helpful НА ВСЕХ СТРАНИЦАХ САЙТА ///////////////////////////


setTimeout(dynamicAlt, 100);

function dynamicAlt() {
    // Получаем текущий URL страницы
    var currentUrl = window.location.href;
    // Получаем все элементы, у которых id содержит подстроку 'dynamicImageAlt-'
    let elementsImageAlt = document.querySelectorAll('[id*="dynamicImageAlt-"]');
    let totalImageAlt = elementsImageAlt.length;
    // Получаем все элементы, у которых id содержит подстроку 'dynamicTextAlt-'
    let elementsTextAlt = document.querySelectorAll('[id*="dynamicTextAlt-"]');
    let totalTextAlt = elementsTextAlt.length;
    // Определяем максимальное количество ID на странице
    let maxNumberID = Math.max(totalImageAlt, totalTextAlt);
    // Получаем текущий lang (язык) со страницы
    let totalLangAlt = (new URL(document.location)).searchParams.get("lang")

    if (currentUrl.includes('helpful') || currentUrl.includes('index.html')) {
        console.log('URL сайта содержит подстроку "helpful" или "index.html"');
        let additionAltElement = ""
        if(totalLangAlt === "en") { additionAltElement = "mechanic help" };
        if(totalLangAlt === "ru") { additionAltElement = "помощь механика" };
        if(totalLangAlt === "ua") { additionAltElement = "допомога механіка" };
        // console.log(maxNumberID)
    
        for (var i = 1; i <= maxNumberID; i++) {
            var textAltElement = document.getElementById('dynamicTextAlt-' + i);
            var imageAltElement = document.getElementById('dynamicImageAlt-' + i);
    
            if (textAltElement && imageAltElement) {
                imageAltElement.alt = textAltElement.innerText.toLowerCase() + " " + additionAltElement;
                // console.log('фото ' + i + "  " + imageAltElement.alt );
            } else {
                console.log('ошибка с ID для фото ' + i);
            }
        }
    } else {
        console.log('URL сайта не содержит подстроку "helpful" или "index.".');   
    }
};

// /// END //////// ПОДПИСЬ alt НА img РАЗДЕЛА helpful НА ВСЕХ СТРАНИЦАХ САЙТА ///////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// /// START ////// ФОРМИРУЕМ ТЕГ H1 на страницах index-page-product-card.js уже с переводом языка ///////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// Получаем текущий URL страницы
let currentUrlCard= window.location.href;
if (currentUrlCard.includes('index-page-product-card.html')) {

    setTimeout(fff, 130);

    function fff() {
        
        let textArryC = document.getElementsByClassName('purpose-text-c');
        console.log(textArryC)
        let resTextC = textArryC[0].innerText;
        console.log("resTextC--  ", resTextC);

        let textArryD = document.getElementsByClassName('purpose-text-d');
        let resTextD = textArryD[0].innerText;
        console.log("resTextD--  ", resTextD);

        let textArryF = document.getElementsByClassName('purpose-text-f');
        let resTextF = textArryF[0].innerText;
        console.log("resTextF--  ", resTextF);

        let resss = resTextC + " " + resTextF + " " + resTextD;
        console.log(resss);

        const form = document.querySelector('.purpose-text-zero');
        form.textContent = resss;   
    }
}

// /// END ////// ФОРМИРУЕМ ТЕГ H1 на страницах index-page-product-card.js уже с переводом языка ///////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///// START /////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком  ///////////////////////
setTimeout(titleDescriKeywor, 160);

import { WT_Sima } from './lang-DATA.js';
import { WT_Zaporozhye } from './lang-DATA.js';
import { WT_For } from './lang-DATA.js';
import { WT_SewingMachines } from './lang-DATA.js';
import { WT_IndustrialHousehold } from './lang-DATA.js';
import { WT_MaintenancePrevention } from './lang-DATA.js';
import { WT_Repair } from './lang-DATA.js';
import { WT_SewingMachine } from './lang-DATA.js';
import { WT_Consultation } from './lang-DATA.js';
import { WT_Detailing } from './lang-DATA.js';
import { WT_Manual } from './lang-DATA.js';
import { WT_Instructions } from './lang-DATA.js';
import { WT_SparePartsComponents } from './lang-DATA.js';
import { WT_MasterMechanic } from './lang-DATA.js';
import { WT_Buy } from './lang-DATA.js';
import { WT_Order } from './lang-DATA.js';



function titleDescriKeywor() {

    let titleHEAD = "";
    let descriHEAD = "";
    let keyworHEAD = "";

    let textH1Element = document.querySelector('.key-text-h1');
    let WT_H1page = ""; 
    if (textH1Element && textH1Element.innerText.trim() !== "") { 
        console.log('Элемент с классом key-text-h1 существует и содержит текст')
        WT_H1page = textH1Element.innerText.toLowerCase()
    } else if (textH1Element && textH1Element.innerText.trim() === "") { 
        console.log('Элемент с классом key-text-h1 существует, но не содержит текст')
        textH1Element.style.display = "none"
        WT_H1page = ""
    } else { 
        console.log('Элемент с классом key-text-h1 не существует')
        WT_H1page = "" 
    };

    let textH2Element = document.querySelector('.key-text-h2');
    let WT_H2page = ""; 
    if (textH2Element && textH2Element.innerText.trim() !== "") {
        console.log('Элемент с классом key-text-h2 существует и содержит текст')
        WT_H2page = textH2Element.innerText.toLowerCase()
    } else if (textH2Element && textH2Element.innerText.trim() === "") {
        console.log('Элемент с классом key-text-h2 существует, но не содержит текст, то присваеваем display = "none"')
        textH2Element.style.display = "none"
        WT_H2page = ""
    } else {
        console.log('Элемент с классом key-text-h2 не существует')
        WT_H2page = ""
    };

    let textP1Element = document.querySelector('.key-text-p1');
    let WT_P1page = ""; 
    if (textP1Element && textP1Element.innerText.trim() !== "") {
        console.log('Элемент с классом key-text-p1 существует и содержит текст')
        WT_P1page = textP1Element.innerText.toLowerCase()
    } else if (textP1Element && textP1Element.innerText.trim() === "") {
        console.log('Элемент с классом key-text-p1 существует, но не содержит текст')
        textP1Element.style.display = "none"
        WT_P1page = ""
    } else {
        console.log('Элемент с классом key-text-p1 не существует')
        WT_P1page = ""
    };

    let textP2Element = document.querySelector('.key-text-p2');
    let WT_P2page = "";
    if (textP2Element && textP2Element.innerText.trim() !== "") {
        console.log('Элемент с классом key-text-p2 существует и содержит текст')
        WT_P2page = textP2Element.innerText.toLowerCase()
    } else if (textP2Element && textP2Element.innerText.trim() === "") {
        console.log('Элемент с классом key-text-p2 существует, но не содержит текст')
        textP2Element.style.display = "none"
        WT_P2page = ""
    } else {
        console.log('Элемент с классом key-text-p2 не существует')
        WT_P2page = ""
    };

// let paramE = (new URL(document.location)).searchParams.get("e");
// let resParamE;
// if (paramE === null || paramE === undefined || paramE === "") { resParamE = "" } else { resParamE = paramE };
// resParamE = (paramE === null || paramE === undefined || paramE === "") ? "" : paramE;
// let WT_ParamE = resParamE;

    let paramA = (new URL(document.location)).searchParams.get("a");
    let WT_A = (paramA === null || paramA === undefined || paramA.trim() === "") ? "" : paramA;
    console.log("WT_A-----", WT_A)

    let paramB = (new URL(document.location)).searchParams.get("b");
    let WT_B = (paramB === null || paramB === undefined || paramB.trim() === "") ? "" : paramB;
    console.log("WT_B-----", WT_B)

    let paramC = (new URL(document.location)).searchParams.get("c");
    let WT_C = (paramC === null || paramC === undefined || paramC.trim() === "") ? "" : paramC;
    console.log("WT_C-----", WT_C)

    let paramD = (new URL(document.location)).searchParams.get("d");
    let WT_D = (paramD === null || paramD === undefined || paramD.trim() === "") ? "" : paramD;
    console.log("WT_D-----", WT_D)

    let paramE = (new URL(document.location)).searchParams.get("e");
    let WT_E = (paramE === null || paramE === undefined || paramE.trim() === "") ? "" : paramE;
    console.log("WT_E-----", WT_E)

    let paramF = (new URL(document.location)).searchParams.get("f");
    let WT_F = (paramF === null || paramF === undefined || paramF.trim() === "") ? "" : paramF;
    console.log("WT_F-----", WT_F)

    let paramLANG = (new URL(document.location)).searchParams.get("lang");
    let WT_LANG = (paramLANG === null || paramLANG === undefined || paramLANG.trim() === "") ? "" : paramLANG;
    console.log("WT_LANG-----", WT_LANG)



    // Получаем текущий URL страницы
    var currentUrl = window.location.href;
    // console.log(currentUrl)
    
    // if(currentUrl.includes('index.') || currentUrl.includes('127.0.0.1')) { 
    if(currentUrl.includes("index.") || (WT_A === "home" && WT_B === "")) { 
        titleHEAD = WT_H1page + " " + WT_Repair[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Sima[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_Repair[WT_LANG] + " " + WT_MaintenancePrevention[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG]
    };

    if(currentUrl.includes("page-general-basket") && WT_B === "basket") { 
        titleHEAD = WT_H1page + " " + WT_SparePartsComponents[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_SparePartsComponents[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG]
    }

    if(currentUrl.includes("page-helpful-repair")) { 
        titleHEAD = WT_H1page + " " + WT_MaintenancePrevention[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Sima[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_MaintenancePrevention[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG]
    };

    if(currentUrl.includes("page-helpful-article")) {
        titleHEAD = WT_SewingMachine[WT_LANG] + " " + WT_H1page + " " + WT_Consultation[WT_LANG] + " " + WT_Repair[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Sima[WT_LANG]
        descriHEAD = WT_SewingMachine[WT_LANG] + " " + WT_H1page + " " + WT_Consultation[WT_LANG] + " " + WT_MaintenancePrevention[WT_LANG] + " " + WT_Repair[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG]
    };

    // documentation
    if(currentUrl.includes("page-catalog-pdf") && WT_B === "documentation" && WT_C === "catalogs-pdf" && WT_D === "" && WT_E === "" && WT_F === "") { 
        titleHEAD = WT_H1page + " " + WT_SparePartsComponents[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_SparePartsComponents[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG]
    }

    if(currentUrl.includes("page-species-section") && WT_B === "documentation" && WT_C === "parts-list-pdf" && WT_D === "" && WT_E === "" && WT_F === "") { 
        titleHEAD = WT_H1page + " " + WT_Detailing[WT_LANG] + " " + WT_Manual[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_Detailing[WT_LANG] + " " + WT_Manual[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG] 
    }

    if(currentUrl.includes("page-parts-list-brand-pdf") && WT_B === "documentation" && WT_C === "parts-list-pdf" && WT_D !== "" && WT_E !== "" && WT_F === "") { 
        titleHEAD = WT_H1page + " " + WT_Detailing[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_H2page + " " + "№" + WT_E
        descriHEAD = WT_H1page + " " + WT_Detailing[WT_LANG] + " " + WT_Manual[WT_LANG] + " " + WT_Instructions[WT_LANG] + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_H2page + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_Sima[WT_LANG] + " " + "№" + WT_E
    }

    // spare-parts
    if(currentUrl.includes("page-species-section") && WT_B === "spare-parts" && WT_C !== "" && WT_D === "" && WT_E === "" && WT_F === "") { 
        titleHEAD = WT_H1page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Buy[WT_LANG] + " " + WT_Order[WT_LANG] + " " + WT_Repair[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_Buy[WT_LANG] + " " + WT_Order[WT_LANG] + " " + WT_Repair[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Sima[WT_LANG] 
    }

    if(currentUrl.includes("page-category-product") && WT_B === "spare-parts" && WT_C !== "" && WT_D !== "" && WT_E !== "" && WT_F === "") { 
        titleHEAD = WT_H1page + " " + WT_H2page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_Order[WT_LANG] + " " + WT_Buy[WT_LANG] + " " + "№" + WT_E
        descriHEAD = WT_H1page + " " + WT_H2page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_Order[WT_LANG] + " " + WT_Buy[WT_LANG] + " " + WT_Repair[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Sima[WT_LANG] + " " + "№" + WT_E
    }

    if(currentUrl.includes("page-product-card") && WT_B === "spare-parts" && WT_C !== "" && WT_D !== "" && WT_E === "" && WT_F !== "") { 
        titleHEAD = WT_H1page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_Buy[WT_LANG]
        descriHEAD = WT_H1page + " " + WT_For[WT_LANG] + " " + WT_SewingMachines[WT_LANG] + " " + WT_IndustrialHousehold[WT_LANG] + " " + WT_Consultation[WT_LANG] + " " + WT_Buy[WT_LANG] + " " + WT_Repair[WT_LANG] + " " + WT_Zaporozhye[WT_LANG] + " " + WT_MasterMechanic[WT_LANG] + " " + WT_Sima[WT_LANG]
    }


    // Функция общая для всех делаем первую букву заглавной
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    titleHEAD = capitalizeFirstLetter(titleHEAD)
    descriHEAD = capitalizeFirstLetter(descriHEAD)


    // Удаление старых мета-тегов и <title> если они есть
    const existingTitle = document.querySelector('title');
    if (existingTitle) existingTitle.remove();

    const existingMetaDescription = document.querySelector('meta[name="description"]');
    if (existingMetaDescription) existingMetaDescription.remove();

    const existingMetaKeywords = document.querySelector('meta[name="keywords"]');
    if (existingMetaKeywords) existingMetaKeywords.remove();
    
    

    // titleHEAD МАКСИМУМ не более 60 СИМВОЛОВ
    console.log("titleHEAD  ", titleHEAD, titleHEAD.length);
    // descriHEAD МАКСИМУМ 140 СИМВОЛОВ
    console.log("descriHEAD  ", descriHEAD, descriHEAD.length);
    console.log("keyworHEAD", keyworHEAD);

    var code = `<meta name="description" content="${descriHEAD}" />` + `<title>${titleHEAD}</title>` + `<meta name="keywords" content="${keyworHEAD}" />`;

    let temp = document.createElement('div');
    temp.innerHTML = code;
    let head = document.head;
    while (temp.firstChild) {
    head.appendChild(temp.firstChild);
    };
};


// ///// END ////////////////////////////   TITLE DISCRIPTION  KEYWOR со своим переводчиком //////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// START ///////// код , который динамически изменяет <link rel="canonical"> и <link rel="alternate"> в зависимости от текущего URL

document.addEventListener("DOMContentLoaded", () => {
    // Функция для получения текущего значения параметров URL
    const getURLParams = () => {
        // Создаём объект URLSearchParams для обработки строки параметров URL
        const urlParams = new URLSearchParams(window.location.search);
        const params = {}; // Инициализируем объект для хранения параметров
        // Перебираем все пары ключ-значение в параметрах URL
        for (const [key, value] of urlParams.entries()) {
            params[key] = value; // Записываем ключ и значение в объект params
        }
        return params; // Возвращаем объект с параметрами
    };

    // Функция для создания или обновления тега <link>
    const updateLinkTag = (rel, href, hreflang = null) => {
        // Ищем существующий тег <link> с указанным rel и hreflang (если есть)
        let linkTag = document.querySelector(`link[rel='${rel}']${hreflang ? `[hreflang='${hreflang}']` : ''}`);
        
        // Если тег <link> не найден, создаём новый
        if (!linkTag) {
            linkTag = document.createElement("link"); // Создаём элемент <link>
            linkTag.rel = rel; // Устанавливаем атрибут rel
            if (hreflang) linkTag.hreflang = hreflang; // Устанавливаем hreflang, если он указан
            document.head.appendChild(linkTag); // Добавляем тег <link> в <head>
        }

        // Обновляем или устанавливаем значение href
        linkTag.href = href;
    };

    // Получаем текущий полный URL страницы
    const currentUrl = window.location.href;

    // Получаем объект с текущими параметрами URL
    const params = getURLParams();

    // Формируем базовый путь страницы (домен + путь без параметров)
    const basePath = `${window.location.origin}${window.location.pathname}`;

    // Указываем список поддерживаемых языков
    const languages = ["ru", "en", "ua"]; // Здесь добавляем все языки, доступные для страницы

    // === УСТАНОВКА ТЕГА <link rel="canonical"> ===

    // Формируем канонический URL, добавляя параметры к базовому пути
    const canonicalUrl = `${basePath}?${new URLSearchParams(params).toString()}`;
    // Добавляем или обновляем тег <link rel="canonical">
    updateLinkTag("canonical", canonicalUrl);

    // === УСТАНОВКА ТЕГОВ <link rel="alternate"> ДЛЯ ЯЗЫКОВ ===

    // Проходим по каждому языку из списка languages
    languages.forEach((lang) => {
        // Копируем текущие параметры URL
        const alternateParams = { ...params, lang }; // Заменяем параметр lang на текущий язык
        // Формируем URL для текущего языка
        const alternateUrl = `${basePath}?${new URLSearchParams(alternateParams).toString()}`;
        // Добавляем или обновляем тег <link rel="alternate"> для текущего языка
        updateLinkTag("alternate", alternateUrl, lang);
    });
});

// END ///////// код , который динамически изменяет <link rel="canonical"> и <link rel="alternate"> в зависимости от текущего URL
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



