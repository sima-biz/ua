"use strict";

var _indexPageSpeciesSectionDATA = require("./index-page-species-section-DATA.js");

var idcrumbs = '#crumbs';
var idspecies = '#species';
var iddiscription = '#discription';
//////////////////////////////
var params = new URL(document.location).searchParams; // const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];

var paramsUrl = [{
  level: params.get("level"),
  item: params.get("item"),
  brand: params.get("brand"),
  page: params.get("page"),
  code: params.get("code"),
  lang: params.get("lang")
}];
var levelURL = params.get("level");
var itemURL = params.get("item");
var brandURL = params.get("brand");
var pageURL = params.get("page");
var codeURL = params.get("code");
var langURL = params.get("lang");

if (levelURL === null) {
  levelURL = "";
} else {
  levelURL = levelURL;
}

;

if (itemURL === null) {
  itemURL = "";
} else {
  itemURL = itemURL;
}

;

if (brandURL === null) {
  brandURL = "";
} else {
  brandURL = brandURL;
}

;

if (pageURL === null) {
  pageURL = "";
} else {
  pageURL = pageURL;
}

;

if (codeURL === null) {
  codeURL = "";
} else {
  codeURL = codeURL;
}

;

if (langURL === null) {
  langURL = "";
} else {
  langURL = langURL;
}

; //////////////////////////////////////////////

var speciesCategory = [];

switch (params.get("item")) {
  case 'parts-list':
    speciesCategory = _indexPageSpeciesSectionDATA.brandsPartsList;
    break;
}

; //////////////////////////////////////////////

var toHTMLcrumbs = function toHTMLcrumbs(fruitchapter) {
  return "<ul class=\"crumbs-text\">\n            <li><a class=\"lng-lev-menu\" href=\"index.html\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li><a class=\"lng-lev-".concat(fruitchapter.level, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li><a class=\"lng-lev-").concat(fruitchapter.item, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n        </ul>");
};

function renderCrumbs() {
  var htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('');
  document.querySelector(idcrumbs).innerHTML = htmlcrumbs;
}

;
renderCrumbs(); //////////////////////////////////////////////////

var toHTMLspeciesSection = function toHTMLspeciesSection(fruitbasic) {
  return "<a href=\"".concat(fruitbasic.href).concat(fruitbasic.bd).concat(fruitbasic.brand).concat(fruitbasic.im).concat(fruitbasic.item, "\">\n            <section class=\"species\">\n                <div class=\"block-fon\">\n                    <img class=\"img-fon\" src=\"").concat(fruitbasic.imgFon, "\" alt=\"\">\n                </div>\n                <div class=\"species-img\">\n                    <img src=\"").concat(fruitbasic.imgOne, "\" alt=\"\">\n                </div>\n                <div class=\"species-name\">\n                    \n                    <p class=\"lng-lev-").concat(itemURL, " species-text\"><br>").concat(fruitbasic.brand.split('-').join(' '), "</p>\n                </div>\n            </section>\n        </a>");
}; // <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
//             <p class="lng-lev-${itemURL} species-text"></p>


function renderSpeciesSection() {
  var htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('');
  document.querySelector(idspecies).innerHTML = htmlSpeciesSection;
}

;
renderSpeciesSection(); ///////////////////////////////////////////

var toHTMLdiscription = function toHTMLdiscription(fruitchapter) {
  return "<div class=\"dsn\">\n            <h1 class=\"title-line-one lng-lev-".concat(fruitchapter.item, "\"></h1>\n            <p class=\"text-line lng-text-").concat(fruitchapter.item, "-").concat(fruitchapter.brand, "\"></p>\n        </div>");
};

function renderDiscription() {
  var htmlDiscription = paramsUrl.map(toHTMLdiscription).join('');
  document.querySelector(iddiscription).innerHTML = htmlDiscription;
}

;
renderDiscription(); ////////////////////////////////////////////
// if (langURL === 'ua') {
//     const toHTMLspeciesSection = fruitbasic =>
//         `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
//             <section class="species">
//                 <div class="block-fon">
//                     <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
//                 </div>
//                 <div class="species-img">
//                     <img src="${fruitbasic.imgOne}" alt="">
//                 </div>
//                 <div class="species-name">
//                     <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
//                     <p class="species-text">${fruitbasic.uaItem.split('-').join(' ')}</p>
//                 </div>
//             </section>
//         </a>`;
//     function renderSpeciesSection() {
//         const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
//         document.querySelector(idspecies).innerHTML = htmlSpeciesSection
//     };
//     renderSpeciesSection()
// if (langURL === 'en') {
//     const toHTMLcrumbs = fruitchapter =>
//         `<ul class="crumbs-text">
//             <li><a class="btn-lev-menu" href="index.html">${fruitchapter.enLev}</a><i class="fas fa-angle-right"></i></li>
//             <li><a class="btn-${levelURL}" href="#">${fruitchapter.enLevE}</a><i class="fas fa-angle-right"></i></li>
//             <li><a class="btn-${itemURL}" href="#">${fruitchapter.enLevE2}</a><i class="fas fa-angle-right"></i></li>
//         </ul>`;
//     function renderCrumbs() {
//         const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
//         document.querySelector(idcrumbs).innerHTML = htmlcrumbs
//     };
//     renderCrumbs()
// };
// if (langURL === 'ua') {
//     const toHTMLcrumbs = fruitchapter =>
//         `<ul class="crumbs-text">
//             <li><a class="${tttt}" href="index.html">${fruitchapter.uaLev}</a><i class="fas fa-angle-right"></i></li>
//             <li><a href="#">${fruitchapter.uaLevE}</a><i class="fas fa-angle-right"></i></li>
//             <li><a href="#">${fruitchapter.uaLevE2}</a><i class="fas fa-angle-right"></i></li>
//         </ul>`;
//     function renderCrumbs() {
//         const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
//         document.querySelector(idcrumbs).innerHTML = htmlcrumbs
//     };
//     renderCrumbs()
// };
// if (langURL === 'ru') {
//     const toHTMLcrumbs = fruitchapter =>
//         `<ul class="crumbs-text">
//             <li><a class="${tttt}" href="index.html">${fruitchapter.ruLev}</a><i class="fas fa-angle-right"></i></li>
//             <li><a href="#">${fruitchapter.ruLevE}</a><i class="fas fa-angle-right"></i></li>
//             <li><a href="#">${fruitchapter.ruLevE2}</a><i class="fas fa-angle-right"></i></li>
//         </ul>`;
//     function renderCrumbs() {
//         const htmlcrumbs = speciesCrumbs.map(toHTMLcrumbs).join('')
//         document.querySelector(idcrumbs).innerHTML = htmlcrumbs
//     };
//     renderCrumbs()
// };
//////////////////////////////////////////////
// if (langURL === 'en') {
//     const toHTMLdiscription = fruitchapter =>
//         `<div class="dsn">
//             <h1 class="title-line-one">${fruitchapter.enTitleLine.split('-').join(' ')}</h1>
//             <p class="text-line">${fruitchapter.enTextLine}</p>
//         </div>`;
//     function renderDiscription() {
//         const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
//         document.querySelector(iddiscription).innerHTML = htmlDiscription
//     };
//     renderDiscription()
// };
// if (langURL === 'ua') {
//     const toHTMLdiscription = fruitchapter =>
//         `<div class="dsn">
//             <h1 class="title-line-one">${fruitchapter.uaTitleLine.split('-').join(' ')}</h1>
//             <p class="text-line">${fruitchapter.uaTextLine}</p>
//         </div>`;
//     function renderDiscription() {
//         const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
//         document.querySelector(iddiscription).innerHTML = htmlDiscription
//     };
//     renderDiscription()
// };
// if (langURL === 'ru') {
//     const toHTMLdiscription = fruitchapter =>
//         `<div class="dsn">
//             <h1 class="title-line-one">${fruitchapter.ruTitleLine.split('-').join(' ')}</h1>
//             <p class="text-line">${fruitchapter.ruTextLine}</p>
//         </div>`;
//     function renderDiscription() {
//         const htmlDiscription = speciesDiscription.map(toHTMLdiscription).join('')
//         document.querySelector(iddiscription).innerHTML = htmlDiscription
//     };
//     renderDiscription()
// };
//////////////////////////////////////////////
// if (langURL === 'en') {
//     const toHTMLspeciesSection = fruitbasic =>
//         `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
//             <section class="species">
//                 <div class="block-fon">
//                     <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
//                 </div>
//                 <div class="species-img">
//                     <img src="${fruitbasic.imgOne}" alt="">
//                 </div>
//                 <div class="species-name">
//                     <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
//                     <p class="species-text">${fruitbasic.enItem.split('-').join(' ')}</p>
//                 </div>
//             </section>
//         </a>`;
//     function renderSpeciesSection() {
//         const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
//         document.querySelector(idspecies).innerHTML = htmlSpeciesSection
//     };
//     renderSpeciesSection()
// }
// if (langURL === 'ua') {
//     const toHTMLspeciesSection = fruitbasic =>
//         `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
//             <section class="species">
//                 <div class="block-fon">
//                     <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
//                 </div>
//                 <div class="species-img">
//                     <img src="${fruitbasic.imgOne}" alt="">
//                 </div>
//                 <div class="species-name">
//                     <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
//                     <p class="species-text">${fruitbasic.uaItem.split('-').join(' ')}</p>
//                 </div>
//             </section>
//         </a>`;
//     function renderSpeciesSection() {
//         const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
//         document.querySelector(idspecies).innerHTML = htmlSpeciesSection
//     };
//     renderSpeciesSection()
// }
// if (langURL === 'ru') {
//     const toHTMLspeciesSection = fruitbasic =>
//         `<a href="${fruitbasic.href}${fruitbasic.bd}${fruitbasic.brand}${fruitbasic.im}${fruitbasic.item}">
//             <section class="species">
//                 <div class="block-fon">
//                     <img class="img-fon" src="${fruitbasic.imgFon}" alt="">
//                 </div>
//                 <div class="species-img">
//                     <img src="${fruitbasic.imgOne}" alt="">
//                 </div>
//                 <div class="species-name">
//                     <h2 class="species-text">${fruitbasic.brand.split('-').join(' ')}</h2>
//                     <p class="species-text">${fruitbasic.ruItem.split('-').join(' ')}</p>
//                 </div>
//             </section>
//         </a>`;
//     function renderSpeciesSection() {
//         const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
//         document.querySelector(idspecies).innerHTML = htmlSpeciesSection
//     };
//     renderSpeciesSection()
// }