let idheader = '#header';


// //////////////////////////////////////////////////

import { arryHEADER } from './header-DATA.js';

import { row1level1initalDATA } from "./../arrays-data/row1-level1-inital-DATA.js";
import { row0level0initalDATA } from "./../arrays-data/row0-level0-inital-DATA.js";
// const row0level0initalDATA = [];

// function initalRowZeroLevelZeroFunction() {
//     // Цикл для перебора каждого элемента массива
//     for (let i = 0; i < row1level1initalDATA.length; i++) {
//         const itemrow1level1inital = row1level1initalDATA[i];
//         // Условие для проверки значений route и level
//         if (itemrow1level1inital.route === "row0" && itemrow1level1inital.level === "level0") {
//             // Если условие выполняется, добавляем элемент в новый массив
//             row0level0initalDATA.push(itemrow1level1inital);
//         }
//     }
// };
// initalRowZeroLevelZeroFunction();


// //////////////////////////////////////////////////

let params = (new URL(document.location)).searchParams;
// const paramsUrl = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' '), lang: params.get("lang") }];
const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];


// //////////////////////////////////////////////////////////////////////////////////////
const toHTMLheader = fruitchapter =>
    `<div class="block-header-summit-level">
    <div class="language">
        <div class="language-wrapper">
            <div id="lg-lgen" class="flagen flag-en flag"></div>
            <div id="lg-lgua" class="flagua flag-ua flag"></div>
            <div id="lg-lgru" class="flagru flag-ru flag"></div>
        </div>
    </div>
    
    <div class="contact-menu">

        <a id="defaultOpen" href="index-page-general-basket.html?a=home&b=basket&c=&d=&e=&f=">
            <div class="basket">
                <div class="wrapper-basket">
                    <div class="cart-basket">
                        <div id="cartAmount" class="cartAmout">0</div>
                        <div class="cart-block-basket">
                            <img class="cart-img-basket" src="images/basket/cart-38-128-white.png" alt="">
                        </div>
                        <div id="cartSumTotal" class="cartSumTotal">0.00</div>
                    </div>
                </div>
            </div>
        </a>

        <div class="menu">
            <div class="wrapper">
                <input type="checkbox" id="check-menu">
                <label for="check-menu">
                    <p class="lng-lev-menu"></p>
                    <div class="burger-line first"></div>
                    <div class="burger-line second"></div>
                    <div class="burger-line third"></div>
                    <div class="burger-line fourth"></div>
                    </label>
                <nav class="main-menu">
                    <a href="#" class="lng-link-title-${fruitchapter.mainMenuAboutUs} modal__btn _modal-open" data-modal-open="modal-${fruitchapter.mainMenuAboutUs}"></a>
                    <a href="#" class="lng-link-title-${fruitchapter.mainMenuPayment} modal__btn _modal-open" data-modal-open="modal-${fruitchapter.mainMenuPayment}"></a>
                    <a href="#" class="lng-link-title-${fruitchapter.mainMenuDelivery} modal__btn _modal-open" data-modal-open="modal-${fruitchapter.mainMenuDelivery}"></a>
                    <a href="#" class="lng-link-title-${fruitchapter.mainMenuContacts} modal__btn _modal-open" data-modal-open="modal-${fruitchapter.mainMenuContacts}"></a>
                    <a href="#" class="lng-link-title-${fruitchapter.mainMenuMessage} modal__btn _modal-open" data-modal-open="modal-${fruitchapter.mainMenuMessage}"></a>
                    
                </nav>
            </div>
            
        </div>
    </div>

    
</div>



<div class="block-header-slider-level">
    <div class="container-slider">
        <img class="photo-slider" src="images/slider/header-slider-1.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-2.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-3.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-4.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-5.png" alt="">
        <img class="photo-slider" src="images/slider/header-slider-6.png" alt="">   
    </div>
    <div id="logo">
        <a class="a-logo" id="defaultOpen" href="index.html?a=home&b=&c=&d=&e=&f=">
            <div class="block-logo">
                <div class="block-logo-img">
                    <img src="images/11-aaa-waaa.png" alt="">
                </div>
                <div class="block-logo-text">
                    <p class="logo-text">Sewing Industrial Machines Accessories</p>
                </div>
            </div>
        </a>
    </div>
</div>

<div class="block-header-menu-level">
    <div class="menu-section">
        <nav class="dws-menu">
            <input type="checkbox" name="toggle" id="menu" class="toggleMenu">

            <label for="menu" class="toggleMenu">
                <div class="burger-line first"></div>
                <div class="burger-line second"></div>
                <div class="burger-line third"></div>
                <div class="burger-line fourth"></div>
                <p class="lng-lev-men"></p>
            </label>

            <ul class="level-ul" id="dwsMenuUl">
                <li class="level-li-one level-li">
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m1">
                    <a id="dwsMenuA1" class="lng-lev-${fruitchapter.bdwsMenuFORul1} level-a" href="#"></a>
                    <label for="submit-m1" class="toggleSubmenu"></label>
                    <ul class="sublevel-ul-one sublevel-ul" id="dwsMenuUl1">
                        
                    </ul>
                </li>

                <li class="level-li-two level-li">
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m2">
                    <a id="dwsMenuA2" class="lng-lev-${fruitchapter.bdwsMenuFORul2} level-a" href="#"></a>
                    <label for="submit-m2" class="toggleSubmenu"></label>
                    <ul class="sublevel-ul-two sublevel-ul" id="dwsMenuUl2">
                    
                    </ul>
                </li>

                <li class="level-li-three level-li">
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m3">
                    <a id="dwsMenuA3" class="lng-lev-${fruitchapter.bdwsMenuFORul3} level-a" href="#"></a>
                    <label for="submit-m3" class="toggleSubmenu"></label>
                    <ul class="sublevel-ul-three sublevel-ul" id="dwsMenuUl3">
                        <li class="sublevel-li"><a class="sublevel-a" href="#">Прямострочные машины</a></li>
                        
                    </ul>
                </li>

                <li class="level-li-four level-li">
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m4">
                    <a id="dwsMenuA4" class="lng-lev-${fruitchapter.bdwsMenuFORul4} level-a" href="#"></a>
                    <label for="submit-m4" class="toggleSubmenu"></label>
                    <ul class="sublevel-ul-four sublevel-ul" id="dwsMenuUl4">
                        
                    </ul>
                </li>

                

                <li class="level-li-five level-li">
                    <input type="checkbox" name="toggle" class="toggleSubmenu" id="submit-m5">
                    <a id="dwsMenuA5" class="lng-lev-${fruitchapter.bdwsMenuFORul5} level-a" href="#"></a>
                    <label for="submit-m5" class="toggleSubmenu"></label>
                    <ul class="sublevel-ul-five sublevel-ul" id="dwsMenuUl5">
                        
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>`;

// 1
// <li class="sublevel-li"><a class="lng-lev-loopers sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=loopers&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-cutting-knives sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=cutting-knives&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-buttonhole-machine-knives sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=buttonhole-machine-knives&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-knives sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=knives&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-needle-plate sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=needle-plate&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-feed-dogs sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=feed-dogs&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-presser-feet sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=presser-feet&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-bobbins sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=bobbins&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-bobbin-cases sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=bobbin-cases&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-hooks sublevel-a" href="index-page-species-section.html?a=home&b=spare-parts&c=hooks&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="lng-lev-needle-clamp sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="lng-lev-gauge-set sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="lng-lev-bobbin-cases sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Нитенапровители</a></li>
// <li class="sublevel-li"><a class="lng-lev-machine-parts sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Запчасти ВТО</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Запчасти ножи</a></li>
// <li class="sublevel-li"><a class="lng-lev-belts sublevel-a" href="#"></a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Запчасти моторы</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Запчасти электрика</a></li>

// 2
// <li class="sublevel-li"><a class="sublevel-a" href="#">Окантователи</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Приспособления</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Ограничители линейки</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Приспособления разные</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Светильники</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Бобиностойки</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Ножницы</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Лазарные линейки</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Мел и маркеры</a></li>
// <li class="sublevel-li"><a class="sublevel-a" href="#">Иглы</a></li>



// 4
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair1-dsn-h1" href="index-page-helpful-repair-1.html?a=home&b=service-center&c=helpfulrepair1-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair2-dsn-h1" href="index-page-helpful-repair-2.html?a=home&b=service-center&c=helpfulrepair2-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair3-dsn-h1" href="index-page-helpful-repair-3.html?a=home&b=service-center&c=helpfulrepair3-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair4-dsn-h1" href="index-page-helpful-repair-4.html?a=home&b=service-center&c=helpfulrepair4-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair5-dsn-h1" href="index-page-helpful-repair-5.html?a=home&b=service-center&c=helpfulrepair5-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair6-dsn-h1" href="index-page-helpful-repair-6.html?a=home&b=service-center&c=helpfulrepair6-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair7-dsn-h1" href="index-page-helpful-repair-7.html?a=home&b=service-center&c=helpfulrepair7-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair8-dsn-h1" href="index-page-helpful-repair-8.html?a=home&b=service-center&c=helpfulrepair8-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair9-dsn-h1" href="index-page-helpful-repair-9.html?a=home&b=service-center&c=helpfulrepair9-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair10-dsn-h1" href="index-page-helpful-repair-10.html?a=home&b=service-center&c=helpfulrepair10-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair11-dsn-h1" href="index-page-helpful-repair-11.html?a=home&b=service-center&c=helpfulrepair11-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair12-dsn-h1" href="index-page-helpful-repair-12.html?a=home&b=service-center&c=helpfulrepair12-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair13-dsn-h1" href="index-page-helpful-repair-13.html?a=home&b=service-center&c=helpfulrepair13-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair14-dsn-h1" href="index-page-helpful-repair-14.html?a=home&b=service-center&c=helpfulrepair14-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfulrepair15-dsn-h1" href="index-page-helpful-repair-15.html?a=home&b=service-center&c=helpfulrepair15-dsn-h1&d=&e=&f=""></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle1-dsn-h1" href="index-page-helpful-article-1.html?a=home&b=service-center&c=helpfularticle1-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle2-dsn-h1" href="index-page-helpful-article-2.html?a=home&b=service-center&c=helpfularticle2-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle3-dsn-h1" href="index-page-helpful-article-3.html?a=home&b=service-center&c=helpfularticle3-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle4-dsn-h1" href="index-page-helpful-article-4.html?a=home&b=service-center&c=helpfularticle4-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle5-dsn-h1" href="index-page-helpful-article-5.html?a=home&b=service-center&c=helpfularticle5-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle6-dsn-h1" href="index-page-helpful-article-6.html?a=home&b=service-center&c=helpfularticle6-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle7-dsn-h1" href="index-page-helpful-article-7.html?a=home&b=service-center&c=helpfularticle7-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle8-dsn-h1" href="index-page-helpful-article-8.html?a=home&b=service-center&c=helpfularticle8-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle9-dsn-h1" href="index-page-helpful-article-9.html?a=home&b=service-center&c=helpfularticle9-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle10-dsn-h1" href="index-page-helpful-article-10.html?a=home&b=service-center&c=helpfularticle10-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle11-dsn-h1" href="index-page-helpful-article-11.html?a=home&b=service-center&c=helpfularticle11-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle12-dsn-h1" href="index-page-helpful-article-12.html?a=home&b=service-center&c=helpfularticle12-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle13-dsn-h1" href="index-page-helpful-article-13.html?a=home&b=service-center&c=helpfularticle13-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle14-dsn-h1" href="index-page-helpful-article-14.html?a=home&b=service-center&c=helpfularticle14-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle15-dsn-h1" href="index-page-helpful-article-15.html?a=home&b=service-center&c=helpfularticle15-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle16-dsn-h1" href="index-page-helpful-article-16.html?a=home&b=service-center&c=helpfularticle16-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle17-dsn-h1" href="index-page-helpful-article-17.html?a=home&b=service-center&c=helpfularticle17-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle18-dsn-h1" href="index-page-helpful-article-18.html?a=home&b=service-center&c=helpfularticle18-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle19-dsn-h1" href="index-page-helpful-article-19.html?a=home&b=service-center&c=helpfularticle19-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle20-dsn-h1" href="index-page-helpful-article-20.html?a=home&b=service-center&c=helpfularticle20-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle21-dsn-h1" href="index-page-helpful-article-21.html?a=home&b=service-center&c=helpfularticle21-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle22-dsn-h1" href="index-page-helpful-article-22.html?a=home&b=service-center&c=helpfularticle22-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle23-dsn-h1" href="index-page-helpful-article-23.html?a=home&b=service-center&c=helpfularticle23-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle24-dsn-h1" href="index-page-helpful-article-24.html?a=home&b=service-center&c=helpfularticle24-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle25-dsn-h1" href="index-page-helpful-article-25.html?a=home&b=service-center&c=helpfularticle25-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle26-dsn-h1" href="index-page-helpful-article-26.html?a=home&b=service-center&c=helpfularticle26-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle27-dsn-h1" href="index-page-helpful-article-27.html?a=home&b=service-center&c=helpfularticle27-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle28-dsn-h1" href="index-page-helpful-article-28.html?a=home&b=service-center&c=helpfularticle28-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle29-dsn-h1" href="index-page-helpful-article-29.html?a=home&b=service-center&c=helpfularticle29-dsn-h1&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="sublevel-a lng-lev-helpfularticle30-dsn-h1" href="index-page-helpful-article-30.html?a=home&b=service-center&c=helpfularticle30-dsn-h1&d=&e=&f="></a></li>

// 5
// <li class="sublevel-li"><a class="lng-lev-catalogs-pdf sublevel-a" href="index-page-catalog-pdf.html?a=home&b=documentation&c=catalogs-pdf&d=&e=&f="></a></li>
// <li class="sublevel-li"><a class="lng-lev-parts-list-pdf sublevel-a" href="index-page-species-section.html?a=home&b=documentation&c=parts-list-pdf&d=&e=&f="></a></li>

function renderHeader() {
    const htmlHeader = row0level0initalDATA.map(toHTMLheader).join('')
    document.querySelector(idheader).innerHTML = htmlHeader

    levelTwoDataUpload()
};
renderHeader()


// 

// /// START ///////////////////////////////  выгрузка данных уровень ROW1-LEVEL1 в выпадающее меню  //////////////////////////////////

// import { row1level1initalDATA } from "./../arrays-data/row1-level1-inital-DATA.js"

function levelTwoDataUpload() {
    let iddwsMenuUl1 = '#dwsMenuUl1';
    let iddwsMenuUl2 = '#dwsMenuUl2';
    let iddwsMenuUl3 = '#dwsMenuUl3';
    let iddwsMenuUl4 = '#dwsMenuUl4';
    let iddwsMenuUl5 = '#dwsMenuUl5';

    const arrayLevel1menuUl1 = [];
    const arrayLevel1menuUl2 = [];
    const arrayLevel1menuUl3 = [];
    const arrayLevel1menuUl4 = [];
    const arrayLevel1menuUl5 = [];


    for (const usermenuUl of row1level1initalDATA) {
        if (String(usermenuUl.menuiddwsMenuUl) === String(iddwsMenuUl1.slice(1))) arrayLevel1menuUl1.push(usermenuUl);
        if (String(usermenuUl.menuiddwsMenuUl) === String(iddwsMenuUl2.slice(1))) arrayLevel1menuUl2.push(usermenuUl);
        if (String(usermenuUl.menuiddwsMenuUl) === String(iddwsMenuUl3.slice(1))) arrayLevel1menuUl3.push(usermenuUl);
        if (String(usermenuUl.menuiddwsMenuUl) === String(iddwsMenuUl4.slice(1))) arrayLevel1menuUl4.push(usermenuUl);
        if (String(usermenuUl.menuiddwsMenuUl) === String(iddwsMenuUl5.slice(1))) arrayLevel1menuUl5.push(usermenuUl);
    }

    const toHTMLdwsMenuUl = stepleveltwo =>
        `<li class="sublevel-li"><a class="lng-lev-${stepleveltwo.c} sublevel-a" href="${stepleveltwo.hreflevel1abc}?a=${stepleveltwo.a}&b=${stepleveltwo.b}&c=${stepleveltwo.c}&d=&e=&f="></a></li>`;

    function renderMenu(iddwsMenuUl, arrayLevel1menuUl) {
        const htmlMenuUl = arrayLevel1menuUl.map(toHTMLdwsMenuUl).join('');
        document.querySelector(iddwsMenuUl).innerHTML = htmlMenuUl;
    }

    // renderMenu(iddwsMenuUl1, arrayLevel1menuUl1);
    // renderMenu(iddwsMenuUl2, arrayLevel1menuUl2);
    // renderMenu(iddwsMenuUl3, arrayLevel1menuUl3);
    // renderMenu(iddwsMenuUl4, arrayLevel1menuUl4);
    // renderMenu(iddwsMenuUl5, arrayLevel1menuUl5);

    // Это массив объектов, в каждом объекте хранится ID элемента и массив данных для этого элемента
    const menuData = [
        { id: '#dwsMenuUl1', data: arrayLevel1menuUl1 },
        { id: '#dwsMenuUl2', data: arrayLevel1menuUl2 },
        { id: '#dwsMenuUl3', data: arrayLevel1menuUl3 },
        { id: '#dwsMenuUl4', data: arrayLevel1menuUl4 },
        { id: '#dwsMenuUl5', data: arrayLevel1menuUl5 }
    ];

    // Для каждого объекта из массива вызываем функцию renderMenu. Передаем ID элемента и соответствующий массив данных
    menuData.forEach(function(menu) {
        renderMenu(menu.id, menu.data);  // Вызываем функцию renderMenu для каждого объекта
    });
}



// /// END ///////////////////////////////  выгрузка данных уровень ROW1-LEVEL1 в выпадающее меню  //////////////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///// START //////////////////////////////// центровка выподающего блока меню плюс стиль///////////////////////////////////////


// Массивы идентификаторов для элементов меню и ссылок
const menuIds = ["dwsMenuUl1", "dwsMenuUl2", "dwsMenuUl3", "dwsMenuUl4", "dwsMenuUl5"];
const anchorIds = ["dwsMenuA1", "dwsMenuA2", "dwsMenuA3", "dwsMenuA4", "dwsMenuA5"];


function centeringDropdownMenu(anchorIdsFUNCTION, menuIdsFUNCTION) {
    // //////Получаем текущую ширину области отображения документа
    let widthScreen = document.body.clientWidth;
    // //////Получаем координаты элемента с id "dwsMenuUl" относительно области просмотра
    let distanceDwsMenuUl = document.getElementById("dwsMenuUl").getBoundingClientRect();
    // //////Извлекаем левую координату элемента и округляем её до одного знака после запятой
    let resDistanceDwsMenuUl = distanceDwsMenuUl.left.toFixed(1);
    // //////Проверяем, что ширина экрана больше 768 пикселей
    if (widthScreen > 768) {

        // //////Цикл, который будет обрабатывать все элементы меню
        menuIdsFUNCTION.forEach(function(menuId, index) {
            // ///////Для каждого элемента меню находим соответствующую позицию центрирования
            const anchorIdA = anchorIdsFUNCTION[index];
            let distanceDwsMenuA = document.getElementById(anchorIdA).getBoundingClientRect();
            let biasDwsMenuUl = resDistanceDwsMenuUl - distanceDwsMenuA.left.toFixed(1) + "px";
            document.getElementById(menuId).style.left = biasDwsMenuUl;
        });


        // //////Получаем координаты элемента с id "dwsMenuA1" относительно области просмотра
        // let distanceDwsMenuA1 = document.getElementById("dwsMenuA1").getBoundingClientRect();
        // //////Рассчитываем смещение для подменю с id "dwsMenuUl1"
        // let biasDwsMenuUl1 = resDistanceDwsMenuUl - distanceDwsMenuA1.left.toFixed(1) + "px";
        // //////Устанавливаем рассчитанное смещение как значение свойства "left" для элемента "dwsMenuUl1"
        // document.getElementById('dwsMenuUl1').style.left = biasDwsMenuUl1;

        // //////Повторяем аналогичные действия для элемента с id "dwsMenuA2"
        // let distanceDwsMenuA2 = document.getElementById("dwsMenuA2").getBoundingClientRect();
        // let biasDwsMenuUl2 = resDistanceDwsMenuUl - distanceDwsMenuA2.left.toFixed(1) + "px";
        // document.getElementById('dwsMenuUl2').style.left = biasDwsMenuUl2;
        

        // //////Повторяем аналогичные действия для элемента с id "dwsMenuA3"
        // let distanceDwsMenuA3 = document.getElementById("dwsMenuA3").getBoundingClientRect();
        // let biasDwsMenuUl3 = resDistanceDwsMenuUl - distanceDwsMenuA3.left.toFixed(1) + "px";
        // document.getElementById('dwsMenuUl3').style.left = biasDwsMenuUl3;

        // //////Повторяем аналогичные действия для элемента с id "dwsMenuA4"
        // let distanceDwsMenuA4 = document.getElementById("dwsMenuA4").getBoundingClientRect();
        // let biasDwsMenuUl4 = resDistanceDwsMenuUl - distanceDwsMenuA4.left.toFixed(1) + "px";
        // document.getElementById('dwsMenuUl4').style.left = biasDwsMenuUl4;

        // //////Повторяем аналогичные действия для элемента с id "dwsMenuA5"
        // let distanceDwsMenuA5 = document.getElementById("dwsMenuA5").getBoundingClientRect();
        // let biasDwsMenuUl5 = resDistanceDwsMenuUl - distanceDwsMenuA5.left.toFixed(1) + "px";
        // document.getElementById('dwsMenuUl5').style.left = biasDwsMenuUl5;
    }   
}
centeringDropdownMenu(anchorIds, menuIds)

// Добавляем обработчик события отслеживание изменения размера окна.
window.addEventListener('resize', function() {
    centeringDropdownMenu(anchorIds, menuIds)
});



// Функция для изменения фона элемента при наведении курсора
// Эта функция будет вызываться при наведении курсора или уходе курсора с элемента
function handleMenuHover(elementId, action) {
    // Получаем ширину экрана
    let widthScreen = document.body.clientWidth;

    // Проверяем, если ширина экрана больше 768px (для мобильных устройств)
    if (widthScreen > 768) {
        // Определяем цвет фона в зависимости от действия
        // Если действие 'mouseover', то цвет фона будет #5b8ab6 (светлый синий)
        // Если действие 'mouseout', то цвет фона будет #45698b (темный синий)
        // const color = action === 'mouseover' ? "#5b8ab6" : "#45698b";

        // Определяем цвет фона в зависимости от действия
        let color; // Инициализируем переменную для цвета
        if (action === 'mouseover') {
            color = "#5b8ab6"; // Светлый синий для 'mouseover'
        } else if (action === 'mouseout') {
            color = "#45698b"; // Темный синий для 'mouseout'
        }
        
        // Меняем цвет фона для элемента с id, переданным в elementId
        document.getElementById(elementId).style.background = color;
    }
}

// Массивы идентификаторов для элементов меню и ссылок
// const menuIds = ["dwsMenuUl1", "dwsMenuUl2", "dwsMenuUl3", "dwsMenuUl4", "dwsMenuUl5"];
// const anchorIds = ["dwsMenuA1", "dwsMenuA2", "dwsMenuA3", "dwsMenuA4", "dwsMenuA5"];

// Цикл, который будет обрабатывать все элементы меню
menuIds.forEach(function(menuId, index) {
    // Для каждого элемента меню находим соответствующий элемент ссылки
    const anchorId = anchorIds[index];

    // Обработчик для события "mouseover" на элементе меню
    // Когда курсор наведён на элемент меню (например, на <ul>), будет вызываться эта функция
    document.getElementById(menuId).addEventListener("mouseover", function() {
        // Вызываем функцию handleMenuHover и передаем id элемента ссылки и действие "mouseover"
        handleMenuHover(anchorId, 'mouseover');
    });

    // Обработчик для события "mouseout" на элементе меню
    // Когда курсор покидает элемент меню (например, когда уходит с <ul>), будет вызываться эта функция
    document.getElementById(menuId).addEventListener("mouseout", function() {
        // Вызываем функцию handleMenuHover и передаем id элемента ссылки и действие "mouseout"
        handleMenuHover(anchorId, 'mouseout');
    });

    // Аналогичные обработчики для самой ссылки (например, для <a>)
    // Обработчик для события "mouseover" на ссылке
    document.getElementById(anchorId).addEventListener("mouseover", function() {
        // Вызываем функцию handleMenuHover и передаем id элемента ссылки и действие "mouseover"
        handleMenuHover(anchorId, 'mouseover');
    });

    // Обработчик для события "mouseout" на ссылке
    document.getElementById(anchorId).addEventListener("mouseout", function() {
        // Вызываем функцию handleMenuHover и передаем id элемента ссылки и действие "mouseout"
        handleMenuHover(anchorId, 'mouseout');
    });
});





// ///////////////////////////////////////////////////////////////////////
// /////////////////if (widthScreen > 768) {


// /////////////////Получаем точки
// let pointDwsMenuUl1 = document.getElementById("dwsMenuUl1");
// let pointDwsMenuA1 = document.getElementById("dwsMenuA1");
// ////////////////Вешаем обработчик
// ////////////////срабатывает при заходе курсора на элемент
// pointDwsMenuUl1.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA1').style.background = "#5b8ab6";
        // ////////////////////document.getElementById('dwsMenuA1').style.color = "#ffd000";
//     };
// });
// pointDwsMenuA1.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA1').style.background = "#5b8ab6";
        // ////////////////////document.getElementById('dwsMenuA1').style.color = "#ffd000";
//     };
// });
// ////////////////срабатывает при уходе курсора с элемента
// pointDwsMenuUl1.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA1').style.background = "#45698b";
        // /////////////////////document.getElementById('dwsMenuA1').style.color = "#f5f6fa";
//     };
// });
// pointDwsMenuA1.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA1').style.background = "#45698b";
        // ////////////////document.getElementById('dwsMenuA1').style.color = "#f5f6fa";
//     };
// });

// let pointDwsMenuUl2 = document.getElementById("dwsMenuUl2");
// let pointDwsMenuA2 = document.getElementById("dwsMenuA2");
// pointDwsMenuUl2.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA2').style.background = "#5b8ab6";
        // ///////////////////document.getElementById('dwsMenuA2').style.color = "#ffd000";
//     };
// });
// pointDwsMenuA2.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA2').style.background = "#5b8ab6";
        // ////////////////document.getElementById('dwsMenuA2').style.color = "#ffd000";
//     };
// });
// pointDwsMenuUl2.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA2').style.background = "#45698b";
        // //////////////////document.getElementById('dwsMenuA2').style.color = "#f5f6fa";
//     };
// });
// pointDwsMenuA2.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA2').style.background = "#45698b";
        // /////////////////document.getElementById('dwsMenuA2').style.color = "#f5f6fa";
//     };
// });

// let pointDwsMenuUl3 = document.getElementById("dwsMenuUl3");
// let pointDwsMenuA3 = document.getElementById("dwsMenuA3");
// pointDwsMenuUl3.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA3').style.background = "#5b8ab6";
        // //////////////////document.getElementById('dwsMenuA3').style.color = "#ffd000";
//     };
// });
// pointDwsMenuA3.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA3').style.background = "#5b8ab6";
        // ////////////////document.getElementById('dwsMenuA3').style.color = "#ffd000";
//     };
// });
// pointDwsMenuUl3.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA3').style.background = "#45698b";
        // //////////////////document.getElementById('dwsMenuA3').style.color = "#f5f6fa";
//     };
// });
// pointDwsMenuA3.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA3').style.background = "#45698b";
        // //////////////////document.getElementById('dwsMenuA3').style.color = "#f5f6fa";
//     };
// });

// let pointDwsMenuUl4 = document.getElementById("dwsMenuUl4");
// let pointDwsMenuA4 = document.getElementById("dwsMenuA4");
// pointDwsMenuUl4.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA4').style.background = "#5b8ab6";
        // ////////////////document.getElementById('dwsMenuA4').style.color = "#ffd000";
//     };
// });
// pointDwsMenuA4.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA4').style.background = "#5b8ab6";
        // ////////////////document.getElementById('dwsMenuA4').style.color = "#ffd000";
//     };
// });
// pointDwsMenuUl4.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA4').style.background = "#45698b";
        // ////////////////document.getElementById('dwsMenuA4').style.color = "#f5f6fa";
//     };
// });
// pointDwsMenuA4.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA4').style.background = "#45698b";
        // /////////////////document.getElementById('dwsMenuA4').style.color = "#f5f6fa";
//     };
// });

// let pointDwsMenuUl5 = document.getElementById("dwsMenuUl5");
// let pointDwsMenuA5 = document.getElementById("dwsMenuA5");
// pointDwsMenuUl5.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA5').style.background = "#5b8ab6";
        // ///////////////document.getElementById('dwsMenuA5').style.color = "#ffd000";
//     };
// });
// pointDwsMenuA5.addEventListener("mouseover", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA5').style.background = "#5b8ab6";
        // ///////////////document.getElementById('dwsMenuA5').style.color = "#ffd000";
//     };
// });
// pointDwsMenuUl5.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA5').style.background = "#45698b";
        // ////////////////document.getElementById('dwsMenuA5').style.color = "#f5f6fa";
//     };
// });
// pointDwsMenuA5.addEventListener("mouseout", function() {
//     let widthScreen = document.body.clientWidth;
//     if (widthScreen > 768) {
//         document.getElementById('dwsMenuA5').style.background = "#45698b";
//         ///////////////document.getElementById('dwsMenuA5').style.color = "#f5f6fa";
//     };
// });
// /////////////////};



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///// END /////////////////////////// центровка выподающего блока меню плюс стиль///////////////////////////////////////