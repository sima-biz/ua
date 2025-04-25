"use strict";

//  START /////   переключение фоток  //////////////////////////////////////////////////////////////////
document.body.onclick = function (event) {
  event = event || window.event;

  if (event.target.classList.contains('goods-min')) {
    var allDivs = document.querySelectorAll('.picture-min div');

    for (var i = 0; i < allDivs.length; i++) {
      allDivs[i].classList.remove('active');
    }

    document.getElementById('goods-max').src = event.target.src;
    event.target.parentElement.classList.add('active');
  }
}; //  END /////   переключение фоток  //////////////////////////////////////////////////////////////////
// 
// 
// 


var idcrumbs = '#crumbs'; //////////////////////////////

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
  return "<ul class=\"crumbs-text\">\n            <li class=\"lev-".concat(fruitchapter.aimA, "\"><a class=\"lng-lev-").concat(fruitchapter.aimA, "\" href=\"index.html?a=").concat(fruitchapter.aimA, "\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimB, "\"><a class=\"lng-lev-").concat(fruitchapter.aimB, "\" href=\"#\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimC, "\"><a class=\"lng-lev-").concat(fruitchapter.aimC, "\" href=\"index-page-species-section.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=&e=&f=\"></a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimD, "\"><a class=\"lng-lev-").concat(fruitchapter.aimD, "\" href=\"index-page-category-product.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=").concat(fruitchapter.aimD, "&e=1&f=\">").concat(fruitchapter.aimD.split('-').join(' '), "</a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimE, "\"><a class=\"lng-lev-").concat(fruitchapter.aimE, "\" href=\"index-page-category-product.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=").concat(fruitchapter.aimD, "&e=").concat(fruitchapter.aimE, "&f=\">").concat(fruitchapter.aimE, "</a><i class=\"fas fa-angle-right\"></i></li>\n            <li class=\"lev-").concat(fruitchapter.aimF, "\"><a class=\"lng-lev-").concat(fruitchapter.aimF, "\" href=\"index-page-product-card.html?a=").concat(fruitchapter.aimA, "&b=").concat(fruitchapter.aimB, "&c=").concat(fruitchapter.aimC, "&d=").concat(fruitchapter.aimD, "&e=").concat(fruitchapter.aimE, "&f=").concat(fruitchapter.aimF, "\">").concat(fruitchapter.aimF, "</a></li>\n        </ul>");
};

function renderCrumbs() {
  var htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('');
  document.querySelector(idcrumbs).innerHTML = htmlcrumbs;
}

;
renderCrumbs(); //////////////////////////////////////////////
//  

setTimeout(fff, 10);

function fff() {
  var textOneArry = document.getElementsByClassName('purpose-text-d');
  var resTEXTone = textOneArry[0].innerText;
  console.log(resTEXTone);
  var textTwoArry = document.getElementsByClassName('purpose-text-f');
  var resTEXTtwo = textTwoArry[0].innerText;
  console.log(resTEXTtwo);
  var textThreeArry = document.getElementsByClassName('purpose-text-c');
  var resTEXTthree = textThreeArry[0].innerText;
  console.log(resTEXTthree);
  var resss = resTEXTthree + " " + resTEXTone + " " + resTEXTtwo;
  console.log(resss);
  var form = document.querySelector('.purpose-text-zero'); // form.textContent += resss

  form.textContent = resss;
}