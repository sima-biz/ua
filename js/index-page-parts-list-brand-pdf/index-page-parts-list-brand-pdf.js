///////////////////////////////
const idcrumbs = '#crumbs'
const iddiscription = '#discription'
const idpartslist = '#list-positions';

//////////////////////////////



let params = (new URL(document.location)).searchParams;
// const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];
// const paramsUrl = [{

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

//////////////////////////////

import { col5level3level4Data } from './../arrays-data/colALL-level3-level4-reformed-DATA.js';

let brandPDF = [];

function receivingDataByCol(colXlevelXlevelXdata) {
    for (let user of colXlevelXlevelXdata) {
        // Проверка, что параметры не равны null и сравнение
        if (paramA !== null && paramB !== null && paramC !== null && paramD !== null && paramE !== null && 
            String(user.a) === paramA && 
            String(user.b) === paramB && 
            String(user.c) === paramC && 
            String(user.d) === paramD)
        {
            brandPDF.push(user);
        }
    }
};
receivingDataByCol(col5level3level4Data)

// ////////////////////////////////////////////////////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=hooks&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-parts-list-brand-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=1&f=">${fruitchapter.aimD.split('-').join(' ')}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="index-page-parts-list-brand-pdf.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f="><div class="lng-lev-page divcrumbspage"></div>${fruitchapter.aimE}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

/////////////////////////////

// const toHTMLchapter = fruitchapter =>
//     `<div class="dsn">
//         <h1 class="text-h1 title-shadow-one lng-lev-${fruitchapter.aimC}" ></h1>
//         <p class="text-p1 title-shadow-two lng-lev-${fruitchapter.aimD}">${fruitchapter.aimD.split('-').join(' ')}</p>
//     </div>`;

// function renderchapter() {
//     const htmlchapter = paramsUrl.map(toHTMLchapter).join('')
//     document.querySelector(iddiscription).innerHTML = htmlchapter
// };
// renderchapter();

const toHTMLchapter = fruitchapter =>
    `<div class="dsn">
        <h1 class="key-text-h1 title-shadow-one lng-lev-${fruitchapter.aimC}" ></h1>
        <h2 class="key-text-h2 title-shadow-two lng-lev-${fruitchapter.aimD}">${fruitchapter.aimD.split('-').join(' ')}</h2>
        <p class="key-text-p1 text-line"></p>
        <p class="key-text-p2 text-line"></p>
    </div>`;

function renderchapter() {
    const htmlchapter = paramsUrl.map(toHTMLchapter).join('')
    document.querySelector(iddiscription).innerHTML = htmlchapter
};
renderchapter();

////////////////////////////



// START /////////// paginatin ////////////////////////////////////////////////////////////////////////


let currenPage = Number((new URL(document.location)).searchParams.get("e"));

let perPage = 30; /*колличество на странице */

let start = 0; /* нулевой элемент массива */
let end = perPage;

const page = document.querySelector(".page-num");
const nextMax = document.querySelector(".next-max");

const totalPages = Math.ceil(brandPDF.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

nextMax.innerHTML = totalPages;

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


renderBasic();

function renderBasic() {

    let toHTMLbasic = ''
    const htmlbasic = brandPDF.map((item, index) => {
        start = (currenPage - 1) * perPage;
        end = currenPage * perPage;
        if (index >= start && index < end) {

            toHTMLbasic =
                `<div class = "content2-list-section-wrapper">
                    <a href = "${item.brandhref}" title="${item.f.slice(0, -4).split('_').join(' ')}. The parts list for sewing machine manual format pdf">
                        <div class = "content2-list-section">
                            <div class = "list-block-text" >
                                <p class = "content2-list-text">${item.f.slice(0, -4).split('_').join(' ')} <span>pdf</span></p>
                            </div> 
                            <div class = "list-block-img"></div> 
                        </div> 
                    </a> 
                </div>`;
            return toHTMLbasic
        } else {
            return toHTMLbasic = ''
        };
    });

    document.querySelector(idpartslist).innerHTML = htmlbasic.join('');

    showItems();

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
        let searchPAPAMS = "?" + "a=" + (new URL(document.location)).searchParams.get("a") +
            "&" + "b=" + (new URL(document.location)).searchParams.get("b") +
            "&" + "c=" + (new URL(document.location)).searchParams.get("c") +
            "&" + "d=" + (new URL(document.location)).searchParams.get("d") +
            "&" + "e=" + currenPage +
            "&" + "f=" + (new URL(document.location)).searchParams.get("f") +
            "&" + "lang=" + (new URL(document.location)).searchParams.get("lang");

        var newUrl = baseUrl + searchPAPAMS;
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