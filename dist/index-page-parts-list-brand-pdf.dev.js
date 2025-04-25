"use strict";

var _indexPagePartsListBrandPdfDATA = require("./index-page-parts-list-brand-pdf-DATA.js");

///////////////////////////////
var idchapter = '#chapterbrand';
var idpartslist = '#partslistbrand'; //////////////////////////////

var params = new URL(document.location).searchParams;
var paramsss = [{
  item: params.get("item").split('-').join(' '),
  brand: params.get("brand").split('-').join(' ')
}]; //////////////////////////////

var brandPDF = [];

switch (params.get("brand")) {
  case 'barudan':
    brandPDF = _indexPagePartsListBrandPdfDATA.barudanPDF;
    break;

  case 'bonis':
    brandPDF = _indexPagePartsListBrandPdfDATA.bonisPDF;
    break;

  case 'bernina-home':
    brandPDF = _indexPagePartsListBrandPdfDATA.berninaHomePDF;
    break;
} /////////////////////////////


var toHTMLchapter = function toHTMLchapter(fruitchapter) {
  return "<h1 class=\"content1-description-title\">".concat(fruitchapter.item, "</h1>\n    <h2 class=\"content2-list-title\">").concat(fruitchapter.brand, "</h2>");
};

function renderchapter() {
  var htmlchapter = paramsss.map(toHTMLchapter).join('');
  document.querySelector(idchapter).innerHTML = htmlchapter;
}

renderchapter(); ////////////////////////////

var toHTMLbasic = function toHTMLbasic(fruitbasic) {
  return "<div class = \"content2-list-section-wrapper\">\n        <a href = \"".concat(fruitbasic.brandhref, "\" target=\"_ blank\">\n            <div class = \"content2-list-section\">\n                <div class = \"list-block-text\" >\n                    <p class = \"content2-list-text\">").concat(fruitbasic.brandname.slice(0, -4).split('_').join(' '), "<span>.pdf</span></p>\n                </div> \n                <div class = \"list-block-img\"> </div> \n            </div> \n        </a> \n    </div>");
};

function renderbasic() {
  var htmlbasic = brandPDF.map(toHTMLbasic).join('');
  document.querySelector(idpartslist).innerHTML = htmlbasic;
}

renderbasic();