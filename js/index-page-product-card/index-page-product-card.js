//  START /////   запрет на копирование со страницы  ////////////////

// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

//  END /////   запрет на копирование со страницы  //////////////////





//////////////////////////////

const idcrumbs = '#crumbs'
const idproductcard = '#productcard'

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

// ************************************************************************************************
// ************************************************************************************************

import { col1level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";
import { col2level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";
import { col3level3level4Data } from "./../arrays-data/colALL-level3-level4-reformed-DATA.js";

// //////////////////////////////////////////////////////////////////////////////////////////////////
// //// START /////  Делаем выборку на страницу из общей базы ///////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////

let categoryPRODUCTcard = []; 
let categoryPRODUCTcardResult = [];

function receivingDataByCol(colXlevelXlevelXdata) {
    for (let user of colXlevelXlevelXdata) {

        if (paramA !== null && paramB !== null && paramC !== null && 
            paramD !== null && paramE !== null && paramF !== null && 
            String(user.a) === paramA && 
            String(user.b) === paramB && 
            String(user.c) === paramC && 
            String(user.d) === paramD && 
            String(user.f) === paramF) {
            if (!user.imgpfoto1) user.imgpfoto1 = "images/product-card/foto-no.png";
            if (!user.imgpfoto2) user.imgpfoto2 = "images/product-card/foto-no.png";
            if (!user.imgpfoto3) user.imgpfoto3 = "images/product-card/foto-no.png";

            if (!user.specification1) user.specification1 = "";
            if (!user.specification2) user.specification2 = "";
            if (!user.application1) user.application1 = "";
            if (!user.application2) user.application2 = "";

            categoryPRODUCTcard.push(user);
        }
    }
};

switch (paramB) {
    case "spare-parts":
        receivingDataByCol(col1level3level4Data)
        categoryPRODUCTcardResult = categoryPRODUCTcard;
        break;
    case "mechanization":
        receivingDataByCol(col2level3level4Data)
        categoryPRODUCTcardResult = categoryPRODUCTcard;
        break;
    case "equipment":
        receivingDataByCol(col3level3level4Data)
        categoryPRODUCTcardResult = categoryPRODUCTcard;
        break;
    default:
        // Логика по умолчанию, если paramB не соответствует ни одному case
        console.log(`paramB не соответствует ожидаемым значениям: ${paramB}`);
        break;
};

// //////////////////////////////////////////////////////////////////////////////////////////////////
// //// END ///////  Делаем выборку на страницу из общей базы ///////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////

const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=hooks&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=1&f=">${fruitchapter.aimD.split('-').join(' ')}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="index-page-category-product.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f=">${fruitchapter.aimE}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="index-page-product-card.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=${fruitchapter.aimD}&e=${fruitchapter.aimE}&f=${fruitchapter.aimF}">${fruitchapter.aimF}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()


// /////////////////////////////////////////////////////////////////////////////////////////////////

const toHTMLproductCard = fruitbasic =>
`<div class="goods-card-left">
    <div class="picture-card-max">
        <img class="img-card-max" src="${fruitbasic.imgpfoto1}" alt="${fruitbasic.c} ${fruitbasic.d} ${fruitbasic.f}" id="goods-max">
        <img class="watermark-card-max" src="images/product-card/sima-tab-45kb.png">
        <img class="paul-card-max" src="images/product-card/paul.png">
    </div>
    <div class="picture-card-min">
        <div class="block-card-min active">
            <img id="imgId-1-1" class="add-imgpfoto1-${fruitbasic.id} img-card-min goods-min" src="${fruitbasic.imgpfoto1}" alt="${fruitbasic.c} ${fruitbasic.d} ${fruitbasic.f}" data-imgpfoto1-${fruitbasic.id}="${fruitbasic.imgpfoto1}">
            <img id="imgId-1-2" class="watermark-card-min goods-min" src="images/product-card/sima-tab-45kb.png">
            <img id="imgId-1-3" class="paul-card-min goods-min" src="images/product-card/paul.png">
        </div>
        <div class="block-card-min">
            <img id="imgId-2-1" class="img-card-min goods-min" src="${fruitbasic.imgpfoto2}" alt="">
            <img id="imgId-2-2" class="watermark-card-min goods-min" src="images/product-card/sima-tab-45kb.png">
            <img id="imgId-2-3" class="paul-card-min goods-min" src="images/product-card/paul.png">
        </div>
        <div class="block-card-min">
            <img id="imgId-3-1" class="img-card-min goods-min" src="${fruitbasic.imgpfoto3}" alt="">
            <img id="imgId-3-2" class="watermark-card-min goods-min" src="images/product-card/sima-tab-45kb.png">
            <img id="imgId-3-3" class="paul-card-min goods-min" src="images/product-card/paul.png">
        </div>
    </div>
</div>

<div class="goods-card-right">


    <div class="ippc-purpose">
        <div class="ippc-сontrol">
            <div class="ippc-price-amount">
                <div class="ippc-price">
                    <div id="add-price-${fruitbasic.id}" class="lng-lev-${fruitbasic.state} ippc-sub-price" data-state-${fruitbasic.id}="${fruitbasic.state}">${fruitbasic.price}</div>
                </div>
                <div class="ippc-amount counter-wrapper">
                    <div id="choice-amount-minus-${fruitbasic.id}" class="choice-amount ippc-minus-amount" data-action="minus">-</div>
                    <div id="add-quantity-${fruitbasic.id}" class="choice-amount ippc-counter-amount" data-counter>1</div>
                    <div id="choice-amount-plus-${fruitbasic.id}" class="choice-amount ippc-plus-amount" data-action="plus">+</div>
                </div>
            </div>
            <div class="ippc-botton">
                <div class="ippc-add-botton">
                    <botton id="botton-buy-${fruitbasic.id}" class="lng-lev-buy add-botton-buy-cart-basket ippc-botton-buy"></botton>
                </div>
                <div class="ippc-remove-botton">
                    <botton id="botton-delet-${fruitbasic.id}" class="lng-lev-remove-from-basket remove-botton-delet-cart-basket ippc-botton-delet"></botton>
                </div>
            </div>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Артикул</р>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">id-${fruitbasic.id}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">name</p>
        </div>
        <div class="block-purpose-card-two">
            <p id="add-onlyc-${fruitbasic.id}" class="lng-lev-${fruitbasic.onlyc} text-card-two purpose-text-c" data-onlyc-${fruitbasic.id}="${fruitbasic.onlyc}">${fruitbasic.onlyc}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">use</p>
        </div>
        <div class="block-purpose-card-two">
            <p id="add-d-${fruitbasic.id}" class="lng-lev-${fruitbasic.d} text-card-two purpose-text-d" data-d-${fruitbasic.id}="${fruitbasic.d}">${fruitbasic.d}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">code</p>
        </div>
        <div class="block-purpose-card-two">
            <p id="add-f-${fruitbasic.id}" class="lng-lev-${fruitbasic.f} text-card-two purpose-text-f" data-f-${fruitbasic.id}="${fruitbasic.f}">${fruitbasic.f}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">OEN</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">${fruitbasic.onlyc} ${fruitbasic.d} ${fruitbasic.f}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Страна</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">Тайвань</p>
            <div class="purpose-card-two-img">
                <img class="purpose-img" src="images/country-flags/flag-tajvan.jpg" alt="">
            </div>
        </div>
        
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Страна</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">Китай</p>
            <div class="purpose-card-two-img">
                <img class="purpose-img" src="images/country-flags/flag-china.jpg" alt="">
            </div>
        </div>
        
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Спецификация</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">${fruitbasic.specification1}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">specification</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">${fruitbasic.specification2}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">применение</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">${fruitbasic.application1}</p>
        </div>
    </div>
    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">application</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">${fruitbasic.application2}</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Доставка</p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">Новая почта, Укр почта, на адрес покупателя или отделение службы доставки.</p>
        </div>
    </div>

    <div class="purpose-card-wrapper">
        <div class="block-purpose-card-one">
            <p class="text-card-one">Оплата </p>
        </div>
        <div class="block-purpose-card-two">
            <p class="text-card-two">наложенный платёж, на карту банка , частичная предоплата на карту.</p>
        </div>
    </div>


    <div class="request-card">
        <div class="request-card-wrapper">
            <div class="block-request-card">
                <button class="request-card-button modal__btn _modal-open" data-modal-open="modal-message">
                    <p class="p-request-card">Уточнить наличие</p>
                </button>
            </div>
        </div>
        <div class="request-card-wrapper">
            <div class="block-request-card">
                <button class="request-card-button modal__btn _modal-open" data-modal-open="modal-message">
                    <img class="img-request-card" src="images/message-request.png" alt="">
                    <p class="p-request-card">Сделать запрос</p>
                </button>
            </div>
        </div>
    </div>



    <div class="records-card">
        <a class="a-records-card" href="index-page-catalog-pdf.html?a=home&b=documentation&c=catalogs-pdf&d=&e=&f=" target="_blank">
            <div class="records-card-wrapper">
                <div class="records-card-block">
                    <img class="img-records-card" src="images/unnamed.png" alt="">
                </div>
                <div class="records-card-block">
                    <div class="text-card-block">
                        <p class="p-records-card">перейти в раздел</p>
                        <p class="p-records-card lng-lev-catalogs-pdf"></p>
                    </div>
                </div>
            </div>
        </a>
        <a class="a-records-card" href="index-page-species-section.html?a=home&b=documentation&c=parts-list-pdf&d=&e=&f=" target="_blank">
            <div class="records-card-wrapper">
                <div class="records-card-block">
                    <img class="img-records-card" src="images/unnamed.png" alt="">
                </div>
                <div class="records-card-block">
                    <div class="text-card-block">
                        <p class="p-records-card">перейти в раздел</p>
                        <p class="p-records-card lng-lev-parts-list-pdf"></p>
                    </div>
                </div>
            </div>
        </a>
    </div>

</div>`;



function renderProductCard() {
    const htmlProductCard = categoryPRODUCTcardResult.map(toHTMLproductCard).join('')
    document.querySelector(idproductcard).innerHTML = htmlProductCard
};
renderProductCard()

// /////////////////////////////////////////////////////////////////////////////////////////////


// //// START /////   переключение фоток  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////

document.body.onclick = function(event) {
    event = event || window.event;
    if (event.target.classList.contains('goods-min')) {
        let allDivs = document.querySelectorAll('.picture-card-min div');
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

        let imgId = event.target.id

        // Функция для получения src изображения по его id
        function getImageSrcById(imageId) {
            var imageElement = document.getElementById(imageId);
    
            if (imageElement) {
                var imageSrc = imageElement.src;
                // console.log("Image source:", imageSrc);
                return imageSrc;
            } else {
                // console.error("Image not found with ID:", imageId);
                return null;
            }
        }
        
        if(imgId === 'imgId-1-3') {
            // Пример использования функции
            var imageId = "imgId-1-1";  // Замените на id вашего изображения
            var imageSrc = getImageSrcById(imageId);
        }
        if(imgId === 'imgId-2-3') {
            // Пример использования функции
            var imageId = "imgId-2-1";  // Замените на id вашего изображения
            var imageSrc = getImageSrcById(imageId);
        }
        if(imgId === 'imgId-3-3') {
            // Пример использования функции
            var imageId = "imgId-3-1";  // Замените на id вашего изображения
            var imageSrc = getImageSrcById(imageId);
        }
        
        document.getElementById('goods-max').src = imageSrc;
        event.target.parentElement.classList.add('active');
    }
};

// //// END ///////   переключение фоток  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////// 

// setTimeout(fff, 130);

// function fff() {
    
//     let textArryC = document.getElementsByClassName('purpose-text-c');
//     console.log(textArryC)
//     let resTextC = textArryC[0].innerText;
//     console.log(textArryC[0].innerText)
//     console.log("resTextC--  ", resTextC);

//     let textArryD = document.getElementsByClassName('purpose-text-d');
//     let resTextD = textArryD[0].innerText;
//     console.log("resTextD--  ", resTextD);

//     let textArryF = document.getElementsByClassName('purpose-text-f');
//     let resTextF = textArryF[0].innerText;
//     console.log("resTextF--  ", resTextF);

//     let resss = resTextC + " " + resTextF + " " + resTextD;
//     console.log(resss);

//     const form = document.querySelector('.purpose-text-zero');
//     form.textContent = resss;   
// }




// /////////////////////////////////////////////////////////////////////////////

