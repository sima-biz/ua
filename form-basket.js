const formBskt = document.forms["formbasket"];
const formArrBskt = Array.from(formBskt);
const validFormArrBskt = [];
const buttonBskt = formBskt.elements["buttonbasketform"];

formArrBskt.forEach((el) => {
    if (el.hasAttribute("data-reg")) {
        el.setAttribute("is-valid", "0");
        validFormArrBskt.push(el);
    }
});

formBskt.addEventListener("input", inputHandlerBskt);
formBskt.addEventListener("submit", formCheckBskt);

function inputHandlerBskt({ target }) {
    if (target.hasAttribute("data-reg")) {
        inputCheckBskt(target);
    }
}

function inputCheckBskt(el) {
    const inputValue = el.value;
    console.log(inputValue);
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    console.log(reg);
    if (reg.test(inputValue)) {
        console.log(reg.test(inputValue));
        el.setAttribute("is-valid", "1");
        el.style.border = "1px solid #00cc00";
    } else {
        console.log(reg.test(inputValue));
        el.setAttribute("is-valid", "0");
        el.style.border = "1px solid #d01013";
    }
}

// ////////////////////////////////////////////////////////////////

let orderNumberBasketForm = document.getElementById('ordernumberbasketform');
if (orderNumberBasketForm) {
    // let inputValueOrderNumber = orderNumberBasketForm.textContent.trim();
    let inputValueOrderNumber = orderNumberBasketForm.value.trim();
    // let regExpOrderNumber = /^(?:1000000000000000|\d{1,16})$/;
    // let regExpOrderNumber = /^(?:1000000000000000|\d{0,16}(?:\s+[a-zA-Zа-яА-ЯёЁ.,]+)?)$/;
    let regExpOrderNumber = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁЇїІіЄєҐґ]{0,22}(?:\s?[а-яА-ЯёЁa-zA-Z]{0,22})?(?:\.{0,1})?$/;
    if (regExpOrderNumber.test(inputValueOrderNumber)) {
        orderNumberBasketForm.setAttribute("is-valid", "1");
        orderNumberBasketForm.style.border = "1px solid #00cc00";
    } else {
        orderNumberBasketForm.setAttribute("is-valid", "0");
        orderNumberBasketForm.style.border = "1px solid #d01013";
    }
}

let totalQuantityGoodsBasketForm = document.getElementById('totalquantitygoodsbasketform');
if (totalQuantityGoodsBasketForm) {
    // let inputValueTotalQuantityGoods = totalQuantityGoodsBasketForm.textContent.trim();
    let inputValueTotalQuantityGoods = totalQuantityGoodsBasketForm.value.trim();
    // let regExpTotalQuantityGoods = /^(?:1000000000000000|\d{0,16})$/;
    // let regExpTotalQuantityGoods = /^(?:1000000000000000|\d{0,16}(?:\s+[a-zA-Zа-яА-ЯёЁ.,]+)?)$/;
    let regExpTotalQuantityGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁЇїІіЄєҐґ]{0,22}(?:\s?[а-яА-ЯёЁa-zA-Z]{0,22})?(?:\.{0,1})?$/;
    if (regExpTotalQuantityGoods.test(inputValueTotalQuantityGoods)) {
        totalQuantityGoodsBasketForm.setAttribute("is-valid", "1");
        totalQuantityGoodsBasketForm.style.border = "1px solid #00cc00";
    } else {
        totalQuantityGoodsBasketForm.setAttribute("is-valid", "0");
        totalQuantityGoodsBasketForm.style.border = "1px solid #d01013";
    }
}


let totalSumGoodsBasketForm = document.getElementById('totalsumgoodsbasketform');
if (totalSumGoodsBasketForm) {
    // let inputValueTotalSumGoods = totalSumGoodsBasketForm.textContent.trim();
    let inputValueTotalSumGoods = totalSumGoodsBasketForm.value.trim();
    // let regExpTotalSumGoods = /^(?:1000000000000000|\d{0,16})$/; 
    // let regExpTotalSumGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s[a-zA-ZА-ЯЁа-яёЁ]+\.?$/;
    // let regExpTotalSumGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁ]*\.?$/;
    // без украинского языка без пробела в словах  до 22 букв точка может быть может не быть в коце строки
    // let regExpTotalSumGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁ]{0,10}(?:\.{0,1})?$/;
    // без пробела в словах  до 22 букв точка может быть может не быть в коце строки 
    // let regExpTotalSumGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁЇїІіЄєҐґ]{0,22}(?:\.{0,1})?$/;
    // с пробелом в словах до 22 букв точка может быть может не быть в коце строки
    let regExpTotalSumGoods = /^(?:1000000000000000|\d{1,16}(?:\.\d{1,2})?)\s?[a-zA-ZА-ЯЁа-яёЁЇїІіЄєҐґ]{0,22}(?:\s?[а-яА-ЯёЁa-zA-Z]{0,22})?(?:\.{0,1})?$/;
    if (regExpTotalSumGoods.test(inputValueTotalSumGoods)) {
        totalSumGoodsBasketForm.setAttribute("is-valid", "1");
        totalSumGoodsBasketForm.style.border = "1px solid #00cc00";
    } else {
        totalSumGoodsBasketForm.setAttribute("is-valid", "0");
        totalSumGoodsBasketForm.style.border = "1px solid #d01013";
    }
}

// ////////////////////////////////////////////////////////////////

function formCheckBskt(e) {
    e.preventDefault();
    const allValid = [];
    validFormArrBskt.forEach((el) => {
        allValid.push(el.getAttribute("is-valid"));
    });
    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });
    if (!Boolean(Number(isAllValid))) {
        console.log(!Boolean(Number(isAllValid)));
        alert("Заполните поля правильно!");
        return;
    }
    formSubmitBskt();
}


// ////////////////////////////////////////////////////////////////////////////////////////////
async function formSubmitBskt() {
    // Объявление переменной для хранения данных корзины
    let basketArryaServer;
    // Получение всех ключей из локального хранилища
    let keys = Object.keys(localStorage);
    // Создание массива для хранения всех данных из локального хранилища
    let allData = [];
    // Итерация по каждому ключу из локального хранилища
    keys.forEach(key => {
        // Получение данных по текущему ключу
        let data = localStorage.getItem(key);
        // Попытка парсинга полученных данных в формат JSON
        try {
            // Парсинг данных и добавление их в массив
            let parsedData = JSON.parse(data);
            allData.push(parsedData);
        } catch (error) {
            // Обработка ошибок парсинга JSON
            console.log('Ошибка при парсинге JSON:', error);
        }
    });
    
    // Преобразование массива данных в строку JSON
    let resultArray = JSON.stringify(allData);
    // Преобразование строки JSON обратно в объект JavaScript
    basketArryaServer = JSON.parse(resultArray);
    // Преобразование объекта корзины в строку JSON
    let jsonData = JSON.stringify(basketArryaServer);
    
    // Создание объекта FormData для отправки данных на сервер
    const formData = new FormData();
    // Добавление строки JSON с данными корзины в объект FormData
    formData.append('datalocalstogare', jsonData);
    
    // Получение сериализованных данных формы
    const formSerializedData = serializeFormBskt(formBskt);
    // Итерация по парам ключ-значение сериализованных данных формы
    for (const [key, value] of formSerializedData.entries()) {
        // Добавление каждой пары ключ-значение в объект FormData
        formData.append(key, value);
    }
    
    // Отправка данных на сервер и ожидание ответа
    const response = await sendDataBskt(formData);
    // Проверка успешности ответа от сервера
    if (response.ok) {
        // Если ответ успешный, вывод сообщения об успешной отправке формы и сброс значений формы
        let result = await response.json();
        console.log(result);
        alert(result.text);
        // console.log(result.text);
        // alert("успешео отправленно***");
        formResetBskt();
    } else {
        // Если ответ не успешный, вывод кода ошибки
        alert("Код ошибки: " + response.status);
    }
}





// async function formSubmitBskt() {
//     let basketArryaServer;
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
//     basketArryaServer = JSON.parse(resultArray);
//     console.log(basketArryaServer);
//     let jsonData = JSON.stringify(basketArryaServer);
    
//     const formData = new FormData();
//     formData.append('datalocalstogare', jsonData);
    
//     const formSerializedData = serializeFormBskt(formBskt);
//     for (const [key, value] of formSerializedData.entries()) {
//         formData.append(key, value);
//     }
    
//     const response = await sendDataBskt(formData);
//     if (response.ok) {
//         let result = await response.json();
//         alert(result.message);
//         formResetBskt();
//     } else {
//         alert("Код ошибки: " + response.status);
//     }
// }



// async function formSubmitBskt() {
    // ********************************************* // коментарий
    // let basketArryaServer;
    // let keys = Object.keys(localStorage);
    // let allData = [];
    // keys.forEach(key => {
    //     let data = localStorage.getItem(key);
    //     try {
    //         let parsedData = JSON.parse(data);
    //         allData.push(parsedData);
    //     } catch (error) {
    //         console.log('Ошибка при парсинге JSON:', error);
    //     }
    // });
    
    // let resultArray = JSON.stringify(allData);
    // basketArryaServer = JSON.parse(resultArray);
    // console.log(basketArryaServer);
    // let jsonData = JSON.stringify(basketArryaServer);
    // let formData = new FormData();  // коментарий
    // const formData = new FormData();
    // formData.append('datalocalstogare', jsonData);
    // ********************************************* // коментарий
    // const data = serializeFormBskt(formBskt);
    // const response = await sendDataBskt(data); // коментарий
    // const response = await sendDataBskt(data, formData);
    // if (response.ok) {
    //     let result = await response.json();
    //     alert(result.message);
    //     formResetBskt();
        // Удаление всего содержимого из localStorage // коментарий
        // localStorage.clear(); // коментарий
//     } else {
//         alert("Код ошибки: " + response.status);
//     }
// }

function serializeFormBskt(formNode) {
    // return new FormData(formBskt);
    return new FormData(formNode);
}




async function sendDataBskt(formData) {
    return await fetch("send_mail_basket.php", {
        method: "POST",
        body: formData,
    });
}


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

function formResetBskt() {
    formBskt.reset();
    validFormArrBskt.forEach((el) => {
        el.setAttribute("is-valid", 0);
        el.style.border = "none";
    });
    // Удаление всего содержимого из localStorage
    // Получаем все ключи localStorage
    const keys = Object.keys(localStorage);
    // Удаляем каждый ключ из localStorage
    keys.forEach(key => {
        localStorage.removeItem(key);
    });
    // Перезагрузка страницы
    location.reload();
}



//  Запрет на ввод данных в поля input по id
// document.addEventListener('DOMContentLoaded', function() {
    // Находим элемент <input> по его id
    // const inputField = document.getElementById('totalquantitygoodsbasketform');
    // Отключаем возможность редактирования поля
    // inputField.addEventListener('keydown', function(event) {
        // Предотвращаем действие по умолчанию (ввод символа)
//         event.preventDefault();
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const inputField = document.getElementById('totalsumgoodsbasketform');
//     inputField.addEventListener('keydown', function(event) {
//         event.preventDefault();
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const inputField = document.getElementById('ordernumberbasketform');
//     inputField.addEventListener('keydown', function(event) {
//         event.preventDefault();
//     });
// });




// /////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ********************

// let basketArryaServer;

// document.addEventListener('DOMContentLoaded', function() {
    // let keys = Object.keys(localStorage);
    // let allData = [];
    // keys.forEach(key => {
    //     let data = localStorage.getItem(key);
    //     try {
    //         let parsedData = JSON.parse(data);
    //         allData.push(parsedData);
    //     } catch (error) {
    //         console.log('Ошибка при парсинге JSON:', error);
    //     }
    // });
    
    // let resultArray = JSON.stringify(allData);
    // basketArryaServer = JSON.parse(resultArray);
    // console.log(basketArryaServer);
    // let jsonData = JSON.stringify(basketArryaServer);
    // let formData = new FormData();
    // formData.append('datalocalstogare', jsonData);
//     fetch('send_mail_basket.php', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to send data to server');
//         }
//         console.log('Data sent successfully');
//     })
//     .catch(error => {
//         console.error('Error sending data:', error);
//     });
    

// });
// ********************






