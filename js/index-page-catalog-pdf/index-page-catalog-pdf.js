///////////////////////////////

// const idchapter = '#chaptercatalog'  
// const idcatalog = '#catalogbrand'
const idcrumbs = '#crumbs';
    // const idchapter = '#chapter-list';
const idpartslist = '#list-positions';
const iddiscription = '#discription';

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

// //////////////////////////////////////////////////////////////////////

import { col5level3level4Data } from './../arrays-data/colALL-level3-level4-reformed-DATA.js';

let catalogsPDF = [];

function receivingDataByCol(colXlevelXlevelXdata) {
    for (let user of colXlevelXlevelXdata) {
        // Проверка, что параметры не равны null и сравнение
        if (paramA !== null && paramB !== null && paramC !== null && paramD !== null && paramE !== null && 
            String(user.a) === paramA && 
            String(user.b) === paramB && 
            String(user.c) === paramC && 
            String(user.d) === paramD)
        {
            catalogsPDF.push(user);
        }
    }
};
receivingDataByCol(col5level3level4Data );

// ////////////////////////////////////////////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=hooks&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-catalog-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs();

// //////////////////////////////////////////////////////////////////////

const toHTMLdiscription = fruitchapter =>
    `<div class="dsn">
        <h1 class="key-text-h1 title-shadow-one lng-lev-${fruitchapter.aimC}"></h1>
        <h2 class="key-text-h2 title-shadow-two"></h2>
        <p class="key-text-p1 text-line"></p>
        <p class="key-text-p2 text-line"></p>
    </div>`;
    // <p class="text-p1 title-shadow-one lng-lev-spare-parts"></p>
    // <p class="text-line lng-text-${fruitchapter.aimC}"></p>

function renderDiscription() {
    const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
    document.querySelector(iddiscription).innerHTML = htmlDiscription
};
renderDiscription();

// ///////////////////////////////////////////////////////////////////////

const toHTMLbasic = fruitbasic =>
    `<div class="content2-list-section-wrapper">
        <a href="${fruitbasic.brandhref}" title="${fruitbasic.f.slice(0, -4).split('_').join(' ')} Spare Parts And Accessories" target="_ blank">
            <div class="content2-list-section">
                <div class="list-block-text">
                    <p class="content2-list-text">${fruitbasic.f.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
                </div>
                <div class="list-block-img"></div>
            </div>
        </a>
    </div>`;

function renderbasic() {
    const htmlbasic = catalogsPDF.map(toHTMLbasic).join('')
    document.querySelector(idpartslist).innerHTML = htmlbasic
};
renderbasic();