"use strict";

var idcrumbs = '#crumbs';
var iddiscription = '#discription'; //////////////////////////////

var params = new URL(document.location).searchParams; // const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

var paramsUrl = [{
  aimA: params.get("a"),
  aimB: params.get("b"),
  aimC: params.get("c"),
  aimD: params.get("d"),
  aimE: params.get("e"),
  aimF: params.get("f"),
  aimLang: params.get("lang")
}]; //////////////////////////////

var toHTMLcrumbs = function toHTMLcrumbs(fruitchapter) {
  return "<ul class=\"crumbs-text\">\n            <li class=\"lev-".concat(fruitchapter.aimA, "\"><a class=\"lng-lev-").concat(fruitchapter.aimA, "\" href=\"index.html?a=").concat(fruitchapter.aimA, "\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimB, "\"><a class=\"lng-lev-").concat(fruitchapter.aimB, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimC, "\"><a class=\"lng-lev-").concat(fruitchapter.aimC, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimD, "\"><a class=\"lng-lev-").concat(fruitchapter.aimD, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimE, "\"><a class=\"lng-lev-").concat(fruitchapter.aimE, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimF, "\"><a class=\"lng-lev-").concat(fruitchapter.aimF, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n        </ul>");
};

function renderCrumbs() {
  var htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('');
  document.querySelector(idcrumbs).innerHTML = htmlcrumbs;
}

;
renderCrumbs(); //////////////////////////////////////////////
// //////////////////////////////////////////////

var toHTMLdiscription = function toHTMLdiscription(fruitchapter) {
  return "<div class=\"dsn\">\n            <h1 class=\"title-shadow-one lng-lev-".concat(fruitchapter.aimC, "\">\u0412\u044B\u0431\u043E\u0440 \u0448\u0432\u0435\u0439\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430</h1>\n            <p class=\"text-line lng-text-").concat(fruitchapter.aimC, "\">\u041A\u0430\u043A \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0448\u0432\u0435\u0439\u043D\u0443\u044E \u043C\u0430\u0448\u0438\u043D\u043A\u0443 \u0434\u043B\u044F \u0434\u043E\u043C\u0430? \u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0430\u0442\u0435\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0441 \u0441\u043E\u0432\u0435\u0442\u0430\u043C\u0438 \u043E \u0442\u043E\u043C, \u043A\u0430\u043A \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0448\u0432\u0435\u0439\u043D\u0443\u044E \u043C\u0430\u0448\u0438\u043D\u0443.\u041D\u043E \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0432 \u0438\u0445, \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E, \u0432\u043E\u043F\u0440\u043E\u0441: \xAB\u041A\u0430\u043A\u0430\u044F \u0436\u0435 \u0448\u0432\u0435\u0439\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u043B\u0443\u0447\u0448\u0435?\xBB \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C. \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0434\u0430\u0442\u044C\n            \u043E\u0434\u043D\u043E\u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u0441\u043E\u0432\u0435\u0442 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u041C\u0430\u0448\u0438\u043D\u043A\u0438 \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u0438\u0435 \u043F\u043E-\u0441\u0432\u043E\u0435\u043C\u0443. \u0418, \u043A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u043E\u0447\u0435\u043D\u044C \u0441\u043B\u043E\u0436\u043D\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0442\u044C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0448\u0432\u0435\u0439\u043D\u043E\u0439 \u043C\u0430\u0448\u0438\u043D\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0442\u0435\u0440\u043C\u0438\u043D\u044B \u0442\u0438\u043F\u0430 \u0434\u0438\u0444\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0430\u043B, \u0446\u0435\u043F\u043D\u043E\u0439 \u0441\u0442\u0435\u0436\u043E\u043A \u0438 \u0442.\u043F.</p>\n        </div>");
};

function renderDiscription() {
  var htmlDiscription = paramsUrl.map(toHTMLdiscription).join('');
  document.querySelector(iddiscription).innerHTML = htmlDiscription;
}

;
renderDiscription(); ////////////////////////////////////////////