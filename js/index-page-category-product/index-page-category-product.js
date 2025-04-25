//  START /////   запрет на копирование со страницы  ////////////////

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

//  END /////   запрет на копирование со страницы  //////////////////


///////////////////////////////

const idcrumbs = '#crumbs'
const iddiscription = '#discription'
const idcategoryproduct = '#category-product'

//////////////////////////////

let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

let paramA = params.get("a");
let paramB = params.get("b");
let paramC = params.get("c");
let paramD = params.get("d");
let paramE = params.get("e");
let paramF = params.get("f");
let paramLANG = params.get("lang");

const paramsUrl = [{
    aimA: paramA,
    aimB: paramB,
    aimC: paramC,
    aimD: paramD,
    aimE: paramE,
    aimF: paramF,
    aimLang: paramLANG,
}];

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// import { categoryLOOPERS } from './index-page-category-product-DATA.js';
// let categoryPRODUCT = [];
// switch (params.get("c")) {
//     case 'loopers':
//         categoryPRODUCT = categoryLOOPERS.reverse();
//         break;
// }
// let dataRequestC = (new URL(document.location)).searchParams.get("c");
// let dataRequestD = (new URL(document.location)).searchParams.get("d")
// let categoryPRODUCTresult = categoryPRODUCT.filter(function(item, index, array) {
//     return item.c === dataRequestC && item.d === dataRequestD
// });
// categoryPRODUCTresult = categoryPRODUCTresult.reverse();
// console.log(categoryPRODUCTresult)

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// *************************************************
// *************************************************

// import { categotyProductData } from './index-page-category-product-DATA.js';
// let categoryPRODUCT = [];
// if (String(params.get("b")) === "spare-parts") {
//     categoryPRODUCT = categotyProductData.filter(user =>
//         String(user.b) === String(params.get("b")) &&
//         String(user.c) === String(params.get("c")) &&
//         String(user.d) === String(params.get("d"))
//     );
// }
// let categoryPRODUCTresult = [...categoryPRODUCT];

// *************************************************
// *************************************************

import { col1level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";
import { col2level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";
import { col3level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";

let categoryPRODUCT = [];
let categoryPRODUCTresult = [];

function receivingDataByCol(colXlevelXlevelXdata) {
    for (let user of colXlevelXlevelXdata) {
        // Проверка, что параметры не равны null и сравнение
        if (paramA !== null && paramB !== null && paramC !== null && paramD !== null && paramE !== null && 
            String(user.a) === paramA && 
            String(user.b) === paramB && 
            String(user.c) === paramC && 
            String(user.d) === paramD)
        {
            categoryPRODUCT.push(user);
        }
    }
};

switch (paramB) {
    case "spare-parts":
        receivingDataByCol(col1level3level4Data)
        categoryPRODUCTresult = categoryPRODUCT;
        break;
    case "mechanization":
        receivingDataByCol(col2level3level4Data)
        categoryPRODUCTresult = categoryPRODUCT;
        break;
    case "equipment":
        receivingDataByCol(col3level3level4Data)
        categoryPRODUCTresult = categoryPRODUCT;
        break;
    default:
        // Логика по умолчанию, если paramB не соответствует ни одному case
        console.log(`paramB не соответствует ожидаемым значениям: ${paramB}`);
        break;
};

// if (String(params.get("b")) === "spare-parts") {
//     for(const user of col1level3level4Data) {
//         if(String(user.b) === String(params.get("b")) && String(user.c) === String(params.get("c")) && String(user.d) === String(params.get("d"))) 
//         { categoryPRODUCT.push(user) };
//     };
//     categoryPRODUCTresult = categoryPRODUCT;
// };
// Проверка наличия параметра "b"

// if (paramB === "spare-parts") {
//     for (const user of col1level3level4Data) {
//         // Проверка, что параметры не равны null и сравнение
//         if (paramB !== null && paramC !== null && paramD !== null &&
//             String(user.b) === paramB &&
//             String(user.c) === paramC &&
//             String(user.d) === paramD) {
//             categoryPRODUCT.push(user);
//         }
//     }
//     categoryPRODUCTresult = categoryPRODUCT;
// }

// *************************************************
// *************************************************



const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=hooks&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=1&f=">${fruitchapter.aimD.split('-').join(' ')}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f="><div class="lng-lev-page divcrumbspage"></div>${fruitchapter.aimE}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

///////////////////////////////////////////////////////////////////////////////////////////////////////

const toHTMLdiscription = fruitchapter =>
    `<div class="dsn">
        <h1 class="key-text-h1 title-shadow-one lng-lev-${fruitchapter.aimC}"></h1>
        <h2 class="key-text-h2 title-shadow-two lng-lev-${fruitchapter.aimD}">${fruitchapter.aimD.split('-').join(' ')}</h2>
        <p class="key-text-p1 text-line"></p>
        <p class="key-text-p2 text-line"></p>
    </div>`;

function renderDiscription() {
    const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
    document.querySelector(iddiscription).innerHTML = htmlDiscription
};
renderDiscription()



// START /////////// paginatin ////////////////////////////////////////////////////////////////////////


let currenPage = Number((new URL(document.location)).searchParams.get("e"));

let perPage = 16; /*колличество на странице */

let start = 0; /* нулевой элемент массива */
let end = perPage;

const page = document.querySelector(".page-num");
const nextMax = document.querySelector(".next-max");

const totalPages = Math.ceil(categoryPRODUCTresult.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

nextMax.innerHTML = totalPages;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


renderBasic();

function renderBasic() {

    let toHTMLbasic = ''
    const htmlbasic = categoryPRODUCTresult.map((item, index) => {
        start = (currenPage - 1) * perPage;
        end = currenPage * perPage;
        if (index >= start && index < end) {

            // <div id="add-price-${fruitbasic.id}" class="lng-lev-${fruitbasic.state} ippc-sub-price" data-state="${fruitbasic.state}">${fruitbasic.price}</div>
            // <div id="add-price-${item.id}" class="ipcp-price-product">${(item.price*200).toFixed(2)}</div>

            // <a class="product-link-a" href="${item.hrefcategoryproduct}?a=${item.a}&b=${item.b}&c=${item.c}&d=${item.d}&e=${(new URL(document.location)).searchParams.get("e")}&f=${item.f}">
            toHTMLbasic =
                    `<section id="${item.id}" class="product product-${item.widthxheight}">
                        <a class="product-link-a" href="${item.hrefcategoryproduct}?a=${item.a}&b=${item.b}&c=${item.c}&d=${item.d}&e=&f=${item.f}">
                            <div class="product-link-block">
                                <div class="block-img block-img-${item.widthxheight}">
                                    <img class="add-imgpfoto1-${item.id} img" src="${item.imgpfoto1}" alt="${item.c} ${item.d} ${item.f}" data-imgpfoto1-${item.id}="${item.imgpfoto1}">
                                    <img class="watermark" src="images/product-card/sima-tab-45kb.png">
                                    <img class="paul" src="images/product-card/paul.png">
                                </div>
                                <div class="block-text">
                                    <p id="add-onlyc-${item.id}" class="lng-lev-${item.onlyc} text" data-onlyc-${item.id}="${item.onlyc}">${item.onlyc}</p>
                                    <p id="add-d-${item.id}" class="lng-lev-${item.d} text" data-d-${item.id}="${item.d}">${item.d.split('-').join(' ')}</p>
                                    <p id="add-f-${item.id}" class="lng-lev-${item.f} text" data-f-${item.id}="${item.f}">${item.f}</p>
                                    <!-- <p class="lng-lev-more-details text text-sp"></p> -->
                                </div>
                            </div>
                        </a>
                        <div class="ipcp-сontrol-block">
                            <div class="ipcp-block-price-amount">
                                <div class="ipcp-subblock-price">
                                    <div id="add-price-${item.id}" class="lng-lev-${item.state} ipcp-price-product" data-state-${item.id}="${item.state}">${(item.price)}</div>
                                    
                                </div>
                                <div class="ipcp-subblock-amount counter-wrapper">
                                    <div id="choice-amount-minus-${item.id}" class="choice-amount ipcp-choice-amount" data-action="minus">-</div>
                                    <div id="add-quantity-${item.id}" class="choice-amount ipcp-choice-amount" data-counter>1</div>
                                    <div id="choice-amount-plus-${item.id}" class="choice-amount ipcp-choice-amount" data-action="plus">+</div>
                                </div>
                            </div>
                            <div class="ipcp-block-botton">
                                <botton id="botton-buy-${item.id}" class="lng-lev-buy add-botton-buy-cart-basket ipcp-add-botton-buy"></botton>
                                <botton id="botton-delet-${item.id}" class="lng-lev-remove-from-basket remove-botton-delet-cart-basket ipcp-remove-botton-delet"></botton>
                            </div>
                        </div>
                    </section>`;
            // `<div class = "content2-list-section-wrapper">
            //     <a href = "${item.brandhref}" title="${item.brandname.slice(0, -4).split('_').join(' ')}. The parts list for sewing machine manual format pdf">
            //         <div class = "content2-list-section">
            //             <div class = "list-block-text" >
            //                 <p class = "content2-list-text">${item.brandname.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
            //             </div> 
            //             <div class = "list-block-img"> </div> 
            //         </div> 
            //     </a> 
            // </div>`;
            return toHTMLbasic
        } else {
            return toHTMLbasic = ''
        };
        
    });

    document.querySelector(idcategoryproduct).innerHTML = htmlbasic.join('');
    // ///////////////////////////////////
    showItems();
    // ///////////////////////////////////
    if (currenPage === totalPages) { next.classList.add("disable") } else { next.classList.remove("disable") };
    if (currenPage === 1) { prev.classList.add("disable") } else { prev.classList.remove("disable") };

};

// renderBasic();

btnNext.addEventListener('click', () => {
    if (currenPage < totalPages) {
        currenPage++;
        renderBasic();
        document.location.reload();
    };
});


btnPrev.addEventListener('click', () => {
    if (currenPage > 1) {
        currenPage--;
        renderBasic();
        document.location.reload();
    };
});



// START /// формируем  url с текущей страницей без перезагрузки

function showItems() {
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        let variableSearchPAPAMS = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "b=" + (new URL(document.location)).searchParams.get("b") +
            "&" + "c=" + (new URL(document.location)).searchParams.get("c") +
            "&" + "d=" + (new URL(document.location)).searchParams.get("d") +
            "&" + "e=" + currenPage +
            "&" + "f=" + (new URL(document.location)).searchParams.get("f") +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");

        var newUrl = baseUrl + variableSearchPAPAMS;
        history.pushState(null, null, newUrl);
    } else {
        console.warn('History API не поддерживается');
    };
    page.innerHTML = currenPage;
};

// END /// формируем  url с текущей страницей без перезагрузки




// START /// возращаемся по кнопке в браузоре назад со страницы

var baseUrlpopstate;
let searchPAPAMSpopstate;
let urlPapamsB = (new URL(document.location)).searchParams.get("b");

addEventListener("popstate", function(e) {
    if (urlPapamsB === "" || urlPapamsB === null || typeof urlPapamsB === "undefined") {
        baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index.html";
        searchPAPAMSpopstate = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");

    } else {
        baseUrlpopstate = window.location.protocol + "//" + window.location.host + "/index-page-species-section.html";
        searchPAPAMSpopstate = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "b=" + (new URL(document.location)).searchParams.get("b") +
            "&" + "c=" + (new URL(document.location)).searchParams.get("c") +
            "&" + "d=" +
            "&" + "e=" +
            "&" + "f=" +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");
    }
    var newUrlpopstate = baseUrlpopstate + searchPAPAMSpopstate;
    window.location.replace(newUrlpopstate);

}, false);

// END /// возращаемся по кнопке в браузоре назад со страницы




