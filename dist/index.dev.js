"use strict";

var _dataIndex = require("./data-index.js");

// const fruits = [
//         { title: 'Bonis_3000_series_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_3012_3032_BD_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_3014_3010_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_3032_3027_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_3051_3064_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_3065_3066_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_3067_3068_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_A21_18_15_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_A21_A18_A16_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_B-27_B-32_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_BG-12_BG-14_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_BH-12_BD-32_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_BK-10_BK-12_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_BN-10_BC-14_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_BT-11_T-12_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_SL_64_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' },
//         { title: 'Bonis_SL_65_SB-66_Parts_List', gplhref: 'https://drive.google.com/file/d/1zQRolSN7CJ1A2V4P_SfHDVopjnlx3eQS/view?usp=sharing' },
//         { title: 'Bonis_T_57_Parts_List', gplhref: 'https://drive.google.com/file/d/1zLLS9xVhBqH0f7E-Lv9flPqp-dMnA8YC/view?usp=sharing' }
//     ]
var toHTML = function toHTML(fruit) {
  return "\n    <div class = \"content2-list-section-wrapper\">\n        <a href = \"".concat(fruit.gplhref, "\" target=\"_ blank\">\n            <div class = \"content2-list-section\">\n                <div class = \"list-block-text\" >\n                    <p class = \"content2-list-text\" >").concat(fruit.title, "<span>.pdf</span></p>\n                </div> \n                <div class = \"list-block-img\"> </div> \n            </div> \n        </a> \n    </div> ");
};

function render() {
  var html = _dataIndex.fruits.map(toHTML).join('');

  document.querySelector('#fruits').innerHTML = html;
}

render();