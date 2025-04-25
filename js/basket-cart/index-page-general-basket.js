
const idcrumbs = '#crumbs'
const idbasketallgoods = '#basketallgoods'

// import { CURRENCYnameUANorRUBorUSD } from "../arrays-data/colAll-level3-level4-reformed-DATA.js";
import { CURRENCYnameUANorRUBorUSD } from "../arrays-data/colALL-level3-level4-reformed-DATA.js";



// ////// START ///////////////////////////////// crumbs /////////////////////////////////////

let params = (new URL(document.location)).searchParams;

const paramsUrl = [{
    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];

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

// //// END //////////////////////////////// crumbs ////////////////////////////////////////

// //// START /////////////////////// ПОЛУЧЕНИЕ МАССИВА ДАННЫХ ИЗ localStorage //////////////////////////////////
// Создаём массив
let basketArrya;
// Событие DOMContentLoaded, которое происходит, когда весь HTML-код страницы загружен и преобразован в DOM-дерево браузером.
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ключи из Local Storage
    let keys = Object.keys(localStorage);
    // Создаем массив для хранения данных
    let allData = [];
    // Перебираем все ключи и получаем соответствующие данные
    
    keys.forEach(key => {
        let data = localStorage.getItem(key);
        // Проверяем, не является ли значение JSON строкой
        try {
            let parsedData = JSON.parse(data);
            allData.push(parsedData);
        } catch (error) {
            // Если не удалось распарсить как JSON, добавляем строковое значение
            console.log('Ошибка при парсинге JSON:', error);
        }
    });
    
    // Выводим все данные в виде JSON массива
    console.log(JSON.stringify(allData, null, 2));
    let resultArray = JSON.stringify(allData);
    // console.log(resultArray);
    basketArrya = JSON.parse(resultArray);

    console.log(basketArrya);
    // Вызываем функцию для вывода данных корзины товаров на странице
    renderBASKET(basketArrya)
    // Вызываем функцию для вывода данных общего колличества и общей суммы товара корзины
    basketLSQUANTITYandLSSUM(basketArrya);
});



const toHTMLbasket = item =>
`<section id="${item.lsid}" class="ipgb-basket">
    <div class="ipgb-one">
        <div class="ipgb-block-img">
            <img class="add-imgpfoto1-${item.lsid} ipgb-imgpfoto1" src="${item.lsimgpfoto1}" alt="${item.lsc} ${item.lsd} ${item.lsf}" data-imgpfoto1-${item.lsid}="${item.lsimgpfoto1}">
            <img class="ipgb-watermark" src="images/product-card/sima-tab-45kb.png">
            <img class="ipgb-paul" src="images/product-card/paul.png">
        </div>
        <div class="ipgb-block-text">
                <div class="ipgb-subblock-text">
                    <a class="ipgb-a" href="index-page-product-card.html?a=${item.lsa}&b=${item.lsb}&c=${item.lsc}&d=${item.lsd}&e=${item.lse}&f=${item.lsf}">
                        <p id="add-onlyc-${item.lsid}" class="lng-lev-${item.lsonlyc} ipgb-text" data-onlyc-${item.lsid}="${item.lsonlyc}">${item.lsonlyc}</p>
                    </a>
                </div>
                <div class="ipgb-subblock-text">
                    <a class="ipgb-a" href="index-page-product-card.html?a=${item.lsa}&b=${item.lsb}&c=${item.lsc}&d=${item.lsd}&e=${item.lse}&f=${item.lsf}">
                        <p id="add-d-${item.lsid}" class="lng-lev-${item.lsd} ipgb-text" data-d-${item.lsid}="${item.lsd}">${item.lsd.split('-').join(' ')}</p>
                    </a>
                </div>
                <div class="ipgb-subblock-text">
                    <a class="ipgb-a" href="index-page-product-card.html?a=${item.lsa}&b=${item.lsb}&c=${item.lsc}&d=${item.lsd}&e=${item.lse}&f=${item.lsf}">
                        <p id="add-f-${item.lsid}" class="lng-lev-${item.lsf} ipgb-text" data-f-${item.lsid}="${item.lsf}">${item.lsf}</p>
                    </a>
                </div>
                <div class="ipgb-subblock-text">
                    <a class="ipgb-a" href="index-page-product-card.html?a=${item.lsa}&b=${item.lsb}&c=${item.lsc}&d=${item.lsd}&e=${item.lse}&f=${item.lsf}">
                        <p class="ipgb-text">ID-${item.lsid}</p>
                    </a>
                </div>
        </div>
    </div>
    <div class="ipgb-two">
        <div class="ipgb-block-price">
            <div id="add-price-${item.lsid}" class="lng-lev-${item.lsstate} ipgb-price-product" data-state-${item.lsid}="${item.lsstate}">${(item.lsprice)}</div>
        </div>
        <div class="ipgb-block-amount counter-wrapper">
            <div id="choice-amount-minus-${item.lsid}" class="choice-amount ipgb-choice-amount-minus" data-action="minus">_</div>
            <div id="add-quantity-${item.lsid}" class="choice-amount ipgb-choice-amount" data-counter></div>
            <div id="choice-amount-plus-${item.lsid}" class="choice-amount ipgb-choice-amount-plus" data-action="plus">+</div>
        </div>
        <div class="ipgb-block-sum">
            <div class="ipgb-sum">${item.lssum}</div>
        </div>
        <div class="ipgb-block-botton">
            <botton id="botton-buy-${item.lsid}" class="lng-lev-buy add-botton-buy-cart-basket ipgb-add-botton-buy"></botton>
            <img class="img-ipgb-delet-basket" src="images/basket/trash-9-64.png">
            <botton id="botton-delet-${item.lsid}" class="remove-botton-delet-cart-basket ipgb-remove-botton-delet" title="delete"></botton>
        </div>
    </div>
</section>`;

// Функция для вывода данных корзины товаров на странице
function renderBASKET(basketArrya) {
    const htmlSpeciesSection = basketArrya.map(toHTMLbasket).join('')
    document.querySelector(idbasketallgoods).innerHTML = htmlSpeciesSection
};




// ///// START ////////////////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА И ОБЩАЯ СУММА ТОВАРА ///////////////////////////
function basketLSQUANTITYandLSSUM(basketArrya) {
    // Инициализируем переменную для суммирования количества всех выбранных товаров в цикле
    let amountTotalQuantity = 0;
    // Инициализируем переменную для суммирования общей суммы всех выбранных товаров в цикле
    let sumTotalAndQuantity = 0.00;
    
    // Перебираем каждый элемент массива basketArrya
    basketArrya.forEach(item => {
        // Преобразуем значение свойства lsquantity в число и суммируем общее колличество для корзины
        amountTotalQuantity += Number(item.lsquantity);
        // Проверяем является ли (Number(item.lsprice.replace(' грн.', ''))) числом или строкой и выполняем соответствующие действия ***********
        if (Number(item.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) {
            // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем и суммируем общую сумму для корзины
            sumTotalAndQuantity += ((Number(item.lsquantity)) * (Number(item.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))))
        } else {
            // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем и суммируем общую сумму для корзины
            sumTotalAndQuantity += ((Number(item.lsquantity)) * 0)   
        }
    });
    
    
    // Находим по id 'cartAmount' общее колличества товара в корзине в header
    let totalQuantityGoodsBasketForm = document.getElementById('totalquantitygoodsbasketform');
    // находим по id 'cartSumTotal' общая сумма товара в корзине header 
    let totalSumGoodsBasketForm = document.getElementById('totalsumgoodsbasketform');
    
    //Проверяем есть ли выбранный товар и его общая стоимость в корзине
    if ((amountTotalQuantity > 0) && (sumTotalAndQuantity >= 0)) {

        // Если есть выбранный товар то выводим его всё общее колличество в корзине
        totalQuantityGoodsBasketForm.value = amountTotalQuantity;
        // totalQuantityGoodsBasketForm.textContent = amountTotalQuantity;

        // Если есть выбранный товар то выводим его всю общую сумму +" грн." в корзине
        totalSumGoodsBasketForm.value = sumTotalAndQuantity.toFixed(2) + CURRENCYnameUANorRUBorUSD;
        // totalSumGoodsBasketForm.textContent = sumTotalAndQuantity.toFixed(2) + CURRENCYnameUANorRUBorUSD;

        // Если выбранный товар есть то backgroundColor красный для общего колличества и общей суммы
        // basketCartAmount.style.backgroundColor = 'rgb(207, 0, 0)';
        // basketCartSumTotal.style.backgroundColor = 'rgb(207, 0, 0)';
    } else {
        console.log('В КОРЗИНЕ НИЧЕГО НЕТ')
    }
}
// ///// END /////////////////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА И ОБЩАЯ СУММА ТОВАРА /////////////////////////////




// ///// START //////////////////////////// ФОРМИРУЕМ НОМЕР ЗАКАЗА ПО ДАТЕ И ВРЕМЕНИ В МИЛЛИСЕКУНДАХ ////////////////////////////
function generatingOrderNumberBasket() {
    // Создаем новый объект Date
    let datetimes = new Date();
    // Получаем время в миллисекундах с помощью метода getTime()
    let resOrderNumber = datetimes.getTime();
    
    // Находим по id 'ordernumberbasketform' номер заказа в форме заказа
    let orderNumberBasketForm = document.getElementById('ordernumberbasketform');
    if (orderNumberBasketForm && (localStorage.length > 0)) {
        // Если есть выбранный товар то выводим его всё общее колличество в форме
        orderNumberBasketForm.value = resOrderNumber;
        // orderNumberBasketForm.textContent = resOrderNumber;
    } else {
        // Если нет выбранного товара то выводим 0 в форме
        orderNumberBasketForm.value = "0"
        // orderNumberBasketForm.textContent = "0"
    }
}
generatingOrderNumberBasket()
// ///// END ///////////////////////////// ФОРМИРУЕМ НОМЕР ЗАКАЗА ПО ДАТЕ И ВРЕМЕНИ В МИЛЛИСЕКУНДАХ /////////////////////////////




// ///// START /////////////////////////// СКРЫВАЕМ БЛОКИ ПО ИХ ID ВЗАВИСИМОСТИ ОТ ТОВАРА В КОРЗИНЕ ////////////////////////////
function hideBlockGeneralBasket() {
    // получаем блоки по id
    let generalBasketEmpty =  document.getElementById('idgeneralbasketempty');
    let generalBasketWrapper =  document.getElementById('idgeneralbasketfull');
    // Есть ли какие-либо элементы в объекте localStorage
    if ((localStorage.length > 0)) {
        // Если есть выбранный товар то скрываем по id блок
        generalBasketEmpty.style.display = "none"
    } else {
        // Если нет выбранного товара то скрываем по id блок
        generalBasketWrapper.style.display = "none"
    }
}
hideBlockGeneralBasket();
// ///// END ///////////////////////////// СКРЫВАЕМ БЛОКИ ПО ИХ ID ВЗАВИСИМОСТИ ОТ ТОВАРА В КОРЗИНЕ /////////////////////////////



// ///// START ////////////////////////////////// точка при клике выбора синяя или зелёная ///////////////////////////////////////////////

// ////// waypaymentbasketform ///////
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все div с классом .waypayment
    let sourceDivs = document.querySelectorAll('.waypayment');

    // Добавляем слушатель события клика на каждый div
    sourceDivs.forEach(function(div) {
        div.addEventListener('click', function() {

            // Получаем все div с классом .way-point-basket
            let wayPointBaskets = document.querySelectorAll('.way-point-waypayment');
            // Применяем цвет фона ко всем найденным элементам для обнуления цвета на исходный при кликах 
            wayPointBaskets.forEach(function(basket) {
                basket.style.backgroundColor = "#45698b";
            });

            // Получаем текст из содержимого div по которому был клик
            let text = div.textContent.trim();
            // Получаем элемент input с id waypaymentbasketform
            let wayPaymentBasketForm = document.getElementById('waypaymentbasketform')
            // Вставляем текст в input
            wayPaymentBasketForm.value = text;
            // Добавляем атрибут в input
            wayPaymentBasketForm.setAttribute("is-valid", "1");
            // Добавляем стиль в input
            wayPaymentBasketForm.style.border = "1px solid #00cc00";

            // Применяем цвет фона при клике
            let wayPointBasket = div.querySelector('.way-point-waypayment');
            if (wayPointBasket) {
                wayPointBasket.style.backgroundColor = "#00cc00"; 
            }

        });
    });
});

// ////// deliveryservicebasketform ///////
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все div с классом .waypayment
    let sourceDivs = document.querySelectorAll('.deliveryservice');

    // Добавляем слушатель события клика на каждый div
    sourceDivs.forEach(function(div) {
        div.addEventListener('click', function() {

            // Получаем все div с классом .way-point-basket
            let wayPointBaskets = document.querySelectorAll('.way-point-deliveryservice');
            // Применяем цвет фона ко всем найденным элементам для обнуления цвета на исходный при кликах 
            wayPointBaskets.forEach(function(basket) {
                basket.style.backgroundColor = "#45698b";
            });

            // Получаем текст из содержимого div по которому был клик
            let text = div.textContent.trim();
            // Получаем элемент input с id waypaymentbasketform
            let wayPaymentBasketForm = document.getElementById('deliveryservicebasketform')
            // Вставляем текст в input
            wayPaymentBasketForm.value = text;
            // Добавляем атрибут в input
            wayPaymentBasketForm.setAttribute("is-valid", "1");
            // Добавляем стиль в input
            wayPaymentBasketForm.style.border = "1px solid #00cc00";

            // Применяем цвет фона при клике
            let wayPointBasket = div.querySelector('.way-point-deliveryservice');
            if (wayPointBasket) {
                wayPointBasket.style.backgroundColor = "#00cc00"; 
            }

        });
    });
});
// ///// END /////////////////////////////////// точка при клике выбора синяя или зелёная ////////////////////////////////////////////////