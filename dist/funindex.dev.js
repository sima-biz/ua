"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var toHTML = function toHTML(fruit) {
  return "\n    <div class = \"content2-list-section-wrapper\">\n        <a href = \"".concat(fruit.gplhref, "\" target=\"_ blank\">\n            <div class = \"content2-list-section\">\n                <div class = \"list-block-text\" >\n                    <p class = \"content2-list-text\" >").concat(fruit.title, "<span>.pdf</span></p>\n                </div> \n                <div class = \"list-block-img\"> </div> \n            </div> \n        </a> \n    </div> ");
};

function render() {
  var html = fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
}

render();
var _default = funz;
exports["default"] = _default;