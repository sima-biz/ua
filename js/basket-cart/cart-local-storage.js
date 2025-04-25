// импорт переменной название денежной единицы например ' грн.'
import { CURRENCYnameUANorRUBorUSD } from "../arrays-data/colALL-level3-level4-reformed-DATA.js";
// console.log(CURRENCYnameUANorRUBorUSD)


// /// START /////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА В КОРЗИНЕ //////////////////
function basketTOTAL () {
    let basketArrya;

    document.addEventListener('DOMContentLoaded', function() {
        // Получаем все ключи из Local Storage
        const keys = Object.keys(localStorage);
        // Создаем массив для хранения данных
        const allData = [];
        // Перебираем все ключи и получаем соответствующие данные
        keys.forEach(key => {
            const data = localStorage.getItem(key);
            // Проверяем, не является ли значение JSON строкой
            try {
                const parsedData = JSON.parse(data);
                allData.push(parsedData);
            } catch (error) {
                // Если не удалось распарсить как JSON, добавляем строковое значение
                console.log('Ошибка при парсинге JSON:', error);
            }
        });

        // Выводим все данные в виде JSON массива в удобном виде для просмотра в console.log()
        console.log(JSON.stringify(allData, null, 2));
        // Преобразуем массив allData в строку JSON
        let resultArray = JSON.stringify(allData);
        // Преобразуем строку resultArray в массив {[], [], [], ......} JavaScript, который можно использовать в коде 
        basketArrya = JSON.parse(resultArray);

        console.log(basketArrya);
        // Вызываем функцию для вывода данных
        basketLSQUANTITY(basketArrya);
    });



    // Функция для вывода данных общего колличества товара  корзины
    function basketLSQUANTITY(basketArrya) {
        // Получили массив (базу данных из local storage)
        console.log(basketArrya);

        let amountTotalQuantity = 0; // Инициализируем переменную для суммирования количества всех выбранных товаров в цикле
        let sumAndQuantity = 0.00; // Инициализируем переменную общей суммыот колличества по ID каждого отдельного товара в цикле 
        let sumTotalAndQuantity = 0.00; // Инициализируем переменную для суммирования общей суммы всех выбранных товаров в цикле
        
        // Перебираем каждый элемент массива
        basketArrya.forEach(item => {

            // ******************* подщитываем общее колличество товара из Local Storage *****************
            // *******************************************************************************************

            
            // Преобразуем значение свойства lsquantity в число и суммируем общее колличество для корзины
            amountTotalQuantity += Number(item.lsquantity);
            // Проверяем является ли (Number(item.lsprice.replace(' грн.', ''))) числом или строкой и выполняем соответствующие действия ***********
            if (Number(item.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) {
                // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем и суммируем общую сумму для корзины
                sumTotalAndQuantity += ((Number(item.lsquantity)) * (Number(item.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))))
                // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем получаем сумму каждого товара для Local Storage по key
                sumAndQuantity = ((Number(item.lsquantity)) * (Number(item.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))))
            } else {
                // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем и суммируем общую сумму для корзины
                sumTotalAndQuantity += ((Number(item.lsquantity)) * 0)
                // Преобразуем  lsquantity (колличество) в число и значение lsprice (цена за штуку) в число перемножаем получаем сумму каждого товара для Local Storage по key
                sumAndQuantity = ((Number(item.lsquantity)) * 0)
            }

            // ******* меняем цвет фона в карточке и колличество штук в карточке из Local Storage ********
            // *******************************************************************************************

            // Формируем ID
            let idQuantityCart = "add-quantity-" + item.lsid
            let idBottonBuyCart = "botton-buy-" + item.lsid
            // Получаем элемент "add-quantity-" по ID
            let elementQuantityInCart = document.getElementById(idQuantityCart);
            // Получаем элемент "botton-buy-" по ID
            let elementBottonBuyInCart = document.getElementById(idBottonBuyCart);

            // Проверяем, существует ли элемент
            if (elementQuantityInCart) {
                // Колличество штук в карточке на странице из Local Storage
                elementQuantityInCart.textContent = Number(item.lsquantity)
                // Добавляем класс к элементу
                // element.classList.add('choice-amount-basket');
                // Добавляем стили к элементу
                elementQuantityInCart.style.backgroundColor = 'rgb(207, 0, 0)';
                elementBottonBuyInCart.style.backgroundColor = 'rgb(207, 0, 0)';
                
                // Получаем ссылку на элемент по его id
                let button = document.getElementById(('botton-delet-' + item.lsid));
                // Проверяем, найден ли элемент
                if (button) {
                    // Добавляем стиль visibility: visible; кнопка 'Удалить из корзины'
                    button.style.visibility = 'visible';
                } else {
                    // Если элемент не найден, выводим сообщение об ошибке в консоль
                    console.error('Элемент с указанным id не найден.');
                }
                
                // Получаем ссылку на элемент по его id
                let buttonElement = document.getElementById(('botton-buy-' + item.lsid));
                // Проверяем, найден ли элемент
                if (buttonElement) {
                    buttonElement.classList.remove('lng-lev-buy');
                    buttonElement.classList.add('lng-lev-in-basket');
                }
            } else {
                console.log('Элемент с указанным ID не найден.');
            }

            // ///// START ///////// ОБЩАЯ СУММА $ ТОВАРА ПО ID ОТНОСИТЕЛЬНО ЕГО КОЛЛИЧЕСТВА записываем в цыкле в localStorage //////////
            // **************************************************************************************************************************

            // Перебираем в цикле и записуем  стоимость каждого товара в зависимости от его колличества в значение lssum два знака после запятой  +" грн." объекта цикла+
            // ***********************************************************************************************************************************//////////////////////////////////////////////////******************************** */
            // item.lssum = sumAndQuantity.toFixed(2) + CURRENCYnameUANorRUBorUSD;
            // ***********************************************************************************************************************************//////////////////////////////////////////////////******************************** */

            // Присваиваем переменной keyItemID значение =item.lsid в цикле ( получаем ID товара)
            let keyItemID = item.lsid
            // Преобразуем объект item в строку JSON
            let NewItemString = JSON.stringify(item);
            // **************************************************************************************************************************************************************
            // console.log(NewItemString)
            // *************************************************************************************************************************************************************
            // Проверяем в цикле, существует ли ключ  в Local Storage
            if (localStorage.getItem(keyItemID)) {
                // Если ключ существует, удаляем его
                localStorage.removeItem(keyItemID);
                // Записываем в local Storage браузеоа по ключу 'keyItemID' обновлённый NewItemString 
                localStorage.setItem(keyItemID, NewItemString);
            } else {
                console.log('ключ в Local Storage для записи lssum по конкретному ключу отсутствует');
                
            }

            // ****************************************************************************************************************************
            // ///// END /////////// ОБЩАЯ СУММА $ ТОВАРА ПО ID ОТНОСИТЕЛЬНО ЕГО КОЛЛИЧЕСТВА записываем в цыкле в localStorage ////////////
        });
        

        // ///// START /////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА ОБЩАЯ СУММА ТОВАРА И ЦВЕТ ЕГО ФОНА В КОРЗИНЕ в head /////////////////
        // **************************************************************************************************************************
        
        // Находим по id 'cartAmount' общее колличества товара в корзине в header
        let basketCartAmount = document.getElementById('cartAmount');
        // находим по id 'cartSumTotal' общая сумма товара в корзине header 
        let basketCartSumTotal = document.getElementById('cartSumTotal');
        
        //Проверяем есть ли выбранный товар и его общая стоимость в корзине
        if (basketCartAmount && (amountTotalQuantity > 0) && basketCartSumTotal) {
            // Если есть выбранный товар то выводим его всё общее колличество в корзине
            basketCartAmount.textContent = amountTotalQuantity;
            // Если есть выбранный товар то выводим его всю общую сумму +" грн." в корзине
            basketCartSumTotal.textContent = sumTotalAndQuantity.toFixed(2) + CURRENCYnameUANorRUBorUSD;
            // Если выбранный товар есть то backgroundColor красный для общего колличества и общей суммы
            basketCartAmount.style.backgroundColor = 'rgb(207, 0, 0)';
            basketCartSumTotal.style.backgroundColor = 'rgb(207, 0, 0)';
        } else {
            console.log('В КОРЗИНЕ НИЧЕГО НЕТ')
        }

        // **************************************************************************************************************************
        // ///// END ///////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА ОБЩАЯ СУММА ТОВАРА И ЦВЕТ ЕГО ФОНА В КОРЗИНЕ в head /////////////////
    }
}
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
basketTOTAL ()
// /// END /////////////// ОБЩЕЕ КОЛЛИЧЕСТВО ТОВАРА В КОРЗИНЕ //////////////////


window.addEventListener('click', function (event) {
    let counter;
    // Проверяем клик строго по кнопкам Плюс или Минус
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обвертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }
    
    
    // Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
    if(event.target.dataset.action === 'plus') {
        // Изменяем счетчик увеличивая его на 1
        counter.innerText = ++counter.innerText;

        // Берём ID кнопки  plus  и удаляем из строки 'choice-amount-plus-' получаем ID товара на котором был клик
        let choiceAmountPlus_ID = event.target.id.replace('choice-amount-plus-', '')
        console.log('IDmplus ', choiceAmountPlus_ID);

        // Получаем по ID элемен вывода выбранного количества товара в карточке
        // let elementQuantityForPlus = document.getElementById(('add-quantity-' + choiceAmountPlus_ID));


        // Получам колличество товара при нажатии кнопки minus
        let resQuantityPressingPlus = counter.innerText
        console.log('Колличество ', resQuantityPressingPlus);
        // Получаем id товара при нажатии кнопки minus
        let keyLocalStoragePlus = localStorage.getItem(choiceAmountPlus_ID);
        // Создаём объект для получения из Local Storage по ключу
        let obWWWplus = {}
        // Проверяем, есть ли данные по указанному ключу
        if (keyLocalStoragePlus) {
            try {
                // Получаем по ключу и преобразуем данные в объект
                obWWWplus = JSON.parse(keyLocalStoragePlus);
                console.log('Данные из Local Storage:', obWWWplus);
                // ***************************************************************
                // Перезаписываем колличество при нажатии кнопки minus
                obWWWplus.lsquantity = resQuantityPressingPlus
                // **************************************************************************///////////////////////////////////////////////////************** */
                if (Number(obWWWplus.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) {
                    obWWWplus.lssum = ((Number(obWWWplus.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) * (Number(obWWWplus.lsquantity))).toFixed(2) + CURRENCYnameUANorRUBorUSD;
                } else {
                    obWWWplus.lssum = (0 * (Number(obWWWplus.lsquantity))).toFixed(2) + CURRENCYnameUANorRUBorUSD;
                }
                

                let NOVELobWWWplus = obWWWplus
                console.log('NOVELobWWWplus ****** ', NOVELobWWWplus);


                // Преобразуем объект в строку JSON
                let NOVELobWWWplusString = JSON.stringify(NOVELobWWWplus);


                // Проверяем, существует ли ключ  в Local Storage
                if (localStorage.getItem(choiceAmountPlus_ID)) {
                    // Если ключ существует, удаляем его
                    localStorage.removeItem(choiceAmountPlus_ID);
                    // Записываем в local Storage браузеоа обновлённый
                    localStorage.setItem(choiceAmountPlus_ID, NOVELobWWWplusString);
                    
                } else {
                    console.log('ключ в Local Storage при нажатии кнопки минус отсутствует')
                    // Если ключ не существует, выполняем другое действие
                    // Записываем в local Storage браузеоа 
                    // localStorage.setItem(choiceAmountPlus_ID, NOVELobWWWplusString);
                    
                }
                // Перезагружаем страницу
                
                location.reload();

                
            } catch (error) {
                console.error('Ошибка при парсинге JSON:', error);
            }
        } else {
            console.log('Данные по указанному ключу не найдены в Local Storage');
        }
// ******************
        // Проверяем, существует ли элемент
        // if (elementQuantityForPlus) {
            // Добавляем стили к элементу
            // Меняем backgroundColor-color на 'rgb(104,143,180)' приклике на кнопку plus
            // elementQuantityForPlus.style.backgroundColor = 'rgb(104,143,180)';
        // } else {
        //     console.log('Элемент с указанным ID не найден.');
        // }
// **********************
        // let idBottonBuyCartForPlus =  document.getElementById(('botton-buy-' + choiceAmountPlus_ID));
        // if (idBottonBuyCartForPlus) {
        //     idBottonBuyCartForPlus.style.backgroundColor = 'rgb(104,143,180)';
        // } else {
        //     console.log('Элемент с указанным ID не найден.');
        // }
// ******************
    }
    




    // Проверяем является ли элемент по которому был совершен клик кнопкой Минус
    if(event.target.dataset.action === 'minus') {
        // Провереям чтобы счетчик был больше 1
        if(parseInt(counter.innerText) > 1) {
            // Изменяем счетчик уменьшая его на 1
            counter.innerText = --counter.innerText;

            // Берём ID кнопки  minus  и удаляем из строки 'choice-amount-minus-' получаем ID товара на котором был клик
            let choiceAmountMinus_ID = event.target.id.replace('choice-amount-minus-', '')
            console.log('IDminus ', choiceAmountMinus_ID);

            // Получаем по ID элемен вывода выбранного количества товара в карточке
            // let elementQuantityForMinus = document.getElementById(('add-quantity-' + choiceAmountMinus_ID));


            
            // Получам колличество товара при нажатии кнопки minus
            let resQuantityPressingMinus = counter.innerText
            console.log('Колличество ', resQuantityPressingMinus);
            // Получаем id товара при нажатии кнопки minus
            let keyLocalStorageMinus = localStorage.getItem(choiceAmountMinus_ID);
            // Создаём объект для получения из Local Storage по ключу
            let obWWWminus = {}
            // Проверяем, есть ли данные по указанному ключу
            if (keyLocalStorageMinus) {
                try {
                    // Получаем по ключу и преобразуем данные в объект
                    obWWWminus = JSON.parse(keyLocalStorageMinus);
                    console.log('Данные из Local Storage:', obWWWminus);
                    // ***************************************************************
                    // Перезаписываем колличество при нажатии кнопки minus
                    obWWWminus.lsquantity = resQuantityPressingMinus
                    // **************************************************************************///////////////////////////////////////////////////************** */
                    if (Number(obWWWminus.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) {
                        obWWWminus.lssum = ((Number(obWWWminus.lsprice.replace(CURRENCYnameUANorRUBorUSD, ''))) * (Number(obWWWminus.lsquantity))).toFixed(2) + CURRENCYnameUANorRUBorUSD;
                    } else {
                        obWWWminus.lssum = (0 * (Number(obWWWminus.lsquantity))).toFixed(2) + CURRENCYnameUANorRUBorUSD;
                    }
                    

                    let NOVELobWWWminus = obWWWminus
                    console.log('NOVELobWWWminus ****** ', NOVELobWWWminus);


                    // Преобразуем объект в строку JSON
                    let NOVELobWWWminusString = JSON.stringify(NOVELobWWWminus);


                    // Проверяем, существует ли ключ  в Local Storage+
                    if (localStorage.getItem(choiceAmountMinus_ID)) {
                        // Если ключ существует, удаляем его
                        localStorage.removeItem(choiceAmountMinus_ID);
                        // Записываем в local Storage браузеоа обновлённый
                        localStorage.setItem(choiceAmountMinus_ID, NOVELobWWWminusString);
                        
                    } else {
                        console.log('ключ в Local Storage при нажатии кнопки минус отсутствует')
                        // Если ключ не существует, выполняем другое действие
                        // Записываем в local Storage браузеоа 
                        // localStorage.setItem(choiceAmountMinus_ID, NOVELobWWWminusString);
                        
                    }
                    // Перезагружаем страницу
                    
                    location.reload();
                    
                } catch (error) {
                    console.error('Ошибка при парсинге JSON:', error);
                }
            } else {
                console.log('Данные по указанному ключу не найдены в Local Storage');
            }

// ******************
            // Проверяем, существует ли элемент
            // if (elementQuantityForMinus) {
                // Добавляем стили к элементу
                // Меняем backgroundColor-color на 'rgb(104,143,180)' приклике на кнопку minus 
                // elementQuantityForMinus.style.backgroundColor = 'rgb(104,143,180)';
            // } else {
            //     console.log('Элемент с указанным ID не найден.');
            // }
// ******************
            // let idBottonBuyCartForMinus =  document.getElementById(('botton-buy-' + choiceAmountMinus_ID));
            // if (idBottonBuyCartForMinus) {
            //     idBottonBuyCartForMinus.style.backgroundColor = 'rgb(104,143,180)';
            // } else {
            //     console.log('Элемент с указанным ID не найден.');
            // }
// ******************
        }
    }
});





// кнопка ПОЛОЖИТЬ В КОРЗИНУ
function handlePageLoadBottonBuy() {
    // Получаем все элементы с классом "add-botton-buy-cart-basket"
    const elementsBottonBuy = document.querySelectorAll('.add-botton-buy-cart-basket');
    // Для каждого элемента добавляем обработчик клика
    elementsBottonBuy.forEach(element => {
        element.addEventListener('click', function(event) {



            // *** START ************************** LS_id *****************************
            // Получаем id кнопки по которой был клик и верезаем из полученного id 'botton-buy-'получаем id самого товара по базе данных
            let clickedElementBuyId = event.target.id.replace('botton-buy-', '');
            let LS_id = clickedElementBuyId;
            // *** END *************************** LS_id ******************************



            // *** START ************** LS_a *** LS_b *** LS_c *** LS_e ***************
            // Получаем параметры из URL
            const urlParams = new URLSearchParams(window.location.search);
            // Получаем значения параметров 'a', 'b', 'c', 'd', 'e'
            let LS_a = urlParams.get('a');
            let LS_b = urlParams.get('b');
            let LS_c = urlParams.get('c');
            let LS_e = urlParams.get('e');
            // *** END *************** LS_a *** LS_b *** LS_c *** LS_e ****************



            // *** START ************************** LS_d ******************************
            let add_d_ID = "add-d-" + clickedElementBuyId;
            let data_d_ID = "data-d-" + clickedElementBuyId;
            let dataDvalue;
            let dataDvalueLang;
            
            let elementD = document.getElementById(add_d_ID);
            if (elementD) {
                dataDvalue = elementD.getAttribute(data_d_ID);
                dataDvalueLang = elementD.innerHTML
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_d = dataDvalue;
            let LS_d_lang = dataDvalueLang;
            // *** END *************************** LS_d *******************************



            // *** START ************************** LS_f ******************************
            let add_f_ID = "add-f-" + clickedElementBuyId;
            let data_f_ID = "data-f-" + clickedElementBuyId;
            let dataFvalue;
            let dataFvalueLang;
            
            let elementF = document.getElementById(add_f_ID);
            if (elementF) { 
                dataFvalue = elementF.getAttribute(data_f_ID);
                dataFvalueLang = elementF.innerHTML
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_f = dataFvalue;
            let LS_f_lang = dataFvalueLang;
            // *** END *************************** LS_f *******************************



            // *** START ******************* LS_price *** LS_state ********************
            let add_price_ID = "add-price-" + clickedElementBuyId;
            let dataPRICEvalue;
            let data_state_ID = "data-state-" + clickedElementBuyId;
            let dataSTATEvalue;
            
            let elementPRICE = document.getElementById(add_price_ID);
            if (elementPRICE) {
                // Получаем содержимое элемента 
                dataPRICEvalue = elementPRICE.innerHTML;
                // Получаем атрибут "data-state-" + clickedElementId
                dataSTATEvalue = elementPRICE.getAttribute(data_state_ID);
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_price = dataPRICEvalue;
            let LS_state = dataSTATEvalue;
            // *** END ********************* LS_price *** LS_state *********************



            // *** START *********************** LS_quantity ***************************
            let add_quantity_ID = "add-quantity-" + clickedElementBuyId;
            let dataQUANTITYvalue;
            
            let elementQUANTITY = document.getElementById(add_quantity_ID);
            if (elementQUANTITY) {
                // Получаем содержимое элемента 
                dataQUANTITYvalue = elementQUANTITY.innerHTML;
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_quantity = dataQUANTITYvalue;
            // *** END ************************ LS_quantity ****************************



            // *** START ************************** LS_onlyc ***************************
            let add_onlyc_ID = "add-onlyc-" + clickedElementBuyId;
            let data_onlyc_ID = "data-onlyc-" + clickedElementBuyId;
            let dataONLYCvalue;
            let dataONLYCvalueLang;
            
            let elementONLYC = document.getElementById(add_onlyc_ID);
            if (elementONLYC) {
                dataONLYCvalue = elementONLYC.getAttribute(data_onlyc_ID);
                dataONLYCvalueLang = elementONLYC.innerHTML
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_onlyc = dataONLYCvalue;
            let LS_onlyc_lang = dataONLYCvalueLang;
            // *** END ************************** LS_onlyc *****************************




            // *** START *********************** LS_imgpfoto1 ***************************
            let add_imgpfoto1_CLASS = "." + "add-imgpfoto1-" + clickedElementBuyId;
            let data_imgpfoto1_ID = "data-imgpfoto1-" + clickedElementBuyId;
            let dataIMGPFOTO1value;
            
            let elementIMGPFOTO1 = document.querySelector(add_imgpfoto1_CLASS);
            if (elementIMGPFOTO1) { 
                dataIMGPFOTO1value = elementIMGPFOTO1.getAttribute(data_imgpfoto1_ID); 
            } else { console.log('Элемент с указанным id не найден.'); }
            let LS_imgpfoto1 = dataIMGPFOTO1value;
            // *** END ************************* LS_imgpfoto1 ***************************




            // *** START ************************** LS_sum *****************************
            let LS_sum;
            if(Number(LS_price.replace(CURRENCYnameUANorRUBorUSD, ''))) {
                LS_sum = ((LS_price.replace(CURRENCYnameUANorRUBorUSD, '')) * LS_quantity).toFixed(2) + CURRENCYnameUANorRUBorUSD;
            } else {
                LS_sum = ( 0 * LS_quantity).toFixed(2) + CURRENCYnameUANorRUBorUSD;
            }
            // *** END *************************** LS_sum ******************************
            // let add_sum_ID = "add-sum-" + clickedElementBuyId;
            // let dataSUMvalue;
            
            // let elementSUM = document.getElementById(add_sum_ID);
            // if (elementSUM) {
                // Получаем содержимое элемента 
            //     dataSUMvalue = elementSUM.innerHTML;
            // } else { console.log('Элемент с указанным id не найден.'); }
            // let LS_sum = dataSUMvalue;



            // Проверяем существует ли ключ в localStorage
            if (localStorage.getItem(LS_id)) {
                console.log("Ключ LS_id существует при нажатии кнопки КУПИТЬ")
                // Если ключ существует, удаляем его
                localStorage.removeItem(LS_id);
            } else { 
                console.log("Ключ LS_id не существует при нажатии кнопки КУПИТЬ")
            }




            let productBasket = {
                lsid: LS_id,
                lsprice: LS_price,
                lsquantity: LS_quantity,
                lssum: LS_sum,
                lsa: LS_a,
                lsb: LS_b,
                lsc: LS_c,
                lsd: LS_d,
                lsdlang: LS_d_lang,
                lse: LS_e,
                lsf: LS_f,
                lsflang: LS_f_lang,
                lsonlyc: LS_onlyc,
                lsonlyclang: LS_onlyc_lang,
                lsstate: LS_state,
                lsimgpfoto1: LS_imgpfoto1
            };

            // Преобразуем объект в строку JSON
            let productBasketString = JSON.stringify(productBasket);
            // Проверяем, существует ли ключ  в Local Storage
            if (localStorage.getItem(clickedElementBuyId)) {
                // Если ключ существует, удаляем его
                localStorage.removeItem(clickedElementBuyId);
                // Записываем в local Storage браузеоа обновлённый
                localStorage.setItem(clickedElementBuyId, productBasketString);
                
            } else {
                // Если ключ не существует, выполняем другое действие
                // Записываем в local Storage браузеоа 
                localStorage.setItem(clickedElementBuyId, productBasketString);
                
            }
            // Перезагружаем страницу
            location.reload();
        });
    });
}

// Добавляем обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', handlePageLoadBottonBuy);




// кнопка УДАЛИТЬ ИЗ КОРЗИНЫ
// Получаем все элементы с классом "add-botton-buy-cart-basket"
// const elementsBottonDelet = document.querySelectorAll('.remove-botton-delet-cart-basket');
// Для каждого элемента добавляем обработчик клика
// elementsBottonDelet.forEach(element => {
//     element.addEventListener('click', function(event) {
        // Получаем id кнопки по которой был клик и верезаем из полученного id 'botton-delet-'получаем id самого товара по базе данных
        // let clickedElementId = event.target.id.replace('botton-delet-', '');
        // Удаляем тавар из корзины и из local Storage
        // localStorage.removeItem(clickedElementId );
        // Перезагружаем страницу
//         location.reload();
//     });
// });

// кнопка УДАЛИТЬ ИЗ КОРЗИНЫ
// Функция, которая будет выполнена после полной загрузки страницы
function handlePageLoadBottonDelet() {
    // Получаем все элементы с классом "add-botton-buy-cart-basket"
    const elementsBottonDelet = document.querySelectorAll('.remove-botton-delet-cart-basket');
    // console.log(elementsBottonDelet);
    // Для каждого элемента добавляем обработчик клика
    elementsBottonDelet.forEach(element => {
        element.addEventListener('click', function(event) {
            // Получаем id кнопки по которой был клик и верезаем из полученного id 'botton-delet-'получаем id самого товара по базе данных
            let clickedElementId = event.target.id.replace('botton-delet-', '');
            // Удаляем товар из корзины и из local Storage
            localStorage.removeItem(clickedElementId);
            // Перезагружаем страницу
            location.reload();
        });
    });
}

// Добавляем обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', handlePageLoadBottonDelet);














// let basketArryaSSS;

// async function delayedExecution() {
//     await new Promise(resolve => setTimeout(resolve, 1000)); // Задержка в миллисекундах
//     let keys = Object.keys(localStorage);
//     let allData = [];
//     keys.forEach(key => {
//         let data = localStorage.getItem(key);
//         try {
//             let parsedData = JSON.parse(data);
//             allData.push(parsedData);
//         } catch (error) {
//             console.log('Ошибка при парсинге JSON:', error);
//         }
//     });
//     let resultArray = JSON.stringify(allData);
//     basketArryaSSS = JSON.parse(resultArray);
// }

// delayedExecution().then(() => {
//     console.log(basketArryaSSS); // Результат доступен за пределами функции
// });
    




