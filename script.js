// /////////////////////////////////////////////////////////////////////////////////////////////////////
// ////// START ////////////////// обновлять страницу при каждом переходе //////////////////////////////

// Если необходимо обновлять страницу при каждом переходе вперед или назад в истории браузера
//  без использования обработчика события popstate, то вам нужно использовать событие pageshow.
// pageshow срабатывает каждый раз, когда страница отображается для пользователя, включая случаи,
//  когда пользователь переходит вперед или назад в истории браузера.
// Вот пример, как вы можете использовать pageshow для обновления страницы 

// window.addEventListener('pageshow', function(event) {
    // Проверяем, является ли это событие переходом в истории браузера
    // if (event.persisted) {
        // Если да, обновляем страницу
//         location.reload();
//     }
// });

// Таким образом, этот код будет обновлять страницу при каждом переходе вперед или назад
//  в истории браузера, независимо от того, была ли страница закеширована или нет.

// ////// END //////////////////// обновлять страницу при каждом переходе //////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////






// const modalBtns = document.querySelectorAll('._modal-open');
// const modals = document.querySelectorAll('._modal');
// const body = document.body;


// function openModal(elem) {
//     elem.classList.add('_active');
//     body.classList.add('_locked')
// };


// function closeModal(e) {
//     if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close') || e.target.classList.contains('modal-bg')) {
//         e.target.closest('._modal').classList.remove('_active')
//         body.classList.remove('_locked')
//     }
// };

// modalBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         let data = e.target.dataset.modalOpen;
//         console.log(data)
//         modals.forEach(modal => {
//             if (modal.dataset.modal == data || modal.dataset.modal == e.target.closest('._modal-open').dataset.modalOpen) {
//                 openModal(modal)
//             }
//         });
//     });
// });

// modals.forEach(modal => {
//     modal.addEventListener('click', e => closeModal(e))
// });

// window.addEventListener('keydown', e => {
//     modals.forEach(modal => {
//         if (e.key === "Escape" && modal.classList.contains('_active')) {
//             modal.classList.remove('_active')
//             body.classList.remove('_locked')
//         }
//     });
// });


// /////////////////////////////////////////////////////////////////////////////////////////////


// listen(window.history.length);
// var oldLength = -1;

// function listen(currentLength) {
//     if (currentLength === !oldLength) {
//         document.location.reload();

//     }

//     oldLength = window.history.length;
//     setInterval(function() {
//         listen(window.history.length);
//     }, 1000);

// }





// window.onpopstate = function(event) {
//     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };




// window.addEventListener('locationchange', function() {
//     console.log('location changed!');
// });


// var code = '<title>oooooo</title>' +
//     '<meta name="description" content="tttttttt" />' +
//     '<meta name="keywords" content="dddddddddd" />';
// var temp = document.createElement('div');
// temp.innerHTML = code;
// var head = document.head;
// while (temp.firstChild) {
//     head.appendChild(temp.firstChild);
// }

// function updateURL() {
//     if (history.pushState) {
//         var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
//         var newUrl = baseUrl + '?lang=ru';
//         history.pushState(null, null, newUrl);
//     } else {
//         console.warn('History API не поддерживается');
//     }
// }
// updateURL()

// ================================================================================================

// let langRES;

// var elementLangEN = document.getElementById('lg-lgen');
// elementLangEN.onclick = q

// function q() {
//     langRES = "en"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }

// };



// var elementLangUA = document.getElementById('lg-lgua');
// elementLangUA.onclick = qq

// function qq() {
//     langRES = "ua"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
// };




// var elementLangRU = document.getElementById('lg-lgru');
// elementLangRU.onclick = qqq

// function qqq() {
//     langRES = "ru"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
// };




// =======================================================================================================




// START Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////
// let langRES;

// function q() {
//     langRES = "en"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }

// };

// function qq() {
//     langRES = "ua"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=ua'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ua'); } else { return }
// };

// function qqq() {
//     langRES = "ru"
//     if (document.location.search === "") { location.href = location.href + "?lang=" + langRES; }
//     if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
//     if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=ru'); }
//     if (document.location.search.includes("lang=en")) { location.href = location.href.replace(/lang=en/gi, 'lang=ru'); } else { return }
// };
// END Переключение языка на текущей странице //////////////////////////////////////////////////////////////////////////////////////////////////














// START переключение флагов по клику ///////////////////////////////////////////////////////
// if (document.location.search.includes("lang=ru")) {
//     var elementRU = document.getElementById("lg-lgru");
//     elementRU.className += " flag-active";
// };
// if (document.location.search.includes("lang=ua")) {
//     var elementUA = document.getElementById("lg-lgua");
//     elementUA.className += " flag-active";
// };
// if (document.location.search.includes("lang=en")) {
//     var elementEN = document.getElementById("lg-lgen");
//     elementEN.className += " flag-active";

// };
// END переключение флагов по клику ///////////////////////////////////////////////////////



// START передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////
// let langRESU = "";
// if (document.location.search.includes("lang=ua")) { langRESU = "lang=ua" };
// if (document.location.search.includes("lang=ru")) { langRESU = "lang=ru" };
// if (document.location.search.includes("lang=en")) { langRESU = "lang=en" };

// let langRESULT = langRESU;

//собираем все ссылки в массив
// var links = document.getElementsByTagName("a");
//для каждой ссылки делаем
// for (var i = 0; i < links.length; i++) {
//если в ссылке есть 'index'
// if (links[i].href.includes("index") && links[i].href.includes("?")) {
//дописываем в конец ссылки  
// links[i].href += "&" + langRESULT;
// }
// if (links[i].href.includes("index") && !links[i].href.includes("?")) {
//дописываем в конец ссылки 
//         links[i].href += "?" + langRESULT;
//     }
// };
// END передача выбранного языка по ссылке на следующюю страницу ///////////////////////////////////////////////////////

// const arr = [
//     { key: 'слово1', value: 'значение1', text: 'описание1', title: 'заголовок1' },
//     { key: 'слово2', value: 'значение2', text: 'описание2', title: 'заголовок2' },
//     { key: 'слово3', value: 'значение3', text: 'описание3', title: 'заголовок3' }
// ];

// import { arr } from './index-page-DATA.js';

// function getValue(array, value) {
//     var obj = array.filter(function(arr, i) {
//         return arr.key === value ? arr.value : '';
//     });
//     return obj;
// }
// let ee;
// let rr;
// let yy;

// function getValue(array, search) {
//     var i = array.length;
//     while (i--) {
//         if (array[i].key === search) {
//             ee = array[i].value;
//             rr = array[i].text;
//             yy = array[i].title;
//             return

//         }
//     }
// }

// let jjj = "слово2"

// getValue(arr, jjj)



// console.log(ee)
// console.log(rr)
// console.log(yy)

// var code = `<title>${ee}</title>` +
//     `<meta name="description" content="${rr}" />` +
//     `<meta name="keywords" content="${yy}" />`;

// var temp = document.createElement('div');
// temp.innerHTML = code;
// var head = document.head;
// while (temp.firstChild) {
//     head.appendChild(temp.firstChild);
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////











// function fff() {
//     if (document.location.search.includes("lang=")) {
//         var btnContainer = document.getElementById("myFLAG");
//         var btns = btnContainer.getElementsByClassName("flag");
//         for (var i = 0; i < btns.length; i++) {
//             btns[i].addEventListener("click", function() {
//                 var current = document.getElementsByClassName("flag-active");
//                 current[0].className = current[0].className.replace(" flag-active", "");
//                 this.className += " flag-active";
//             });
//         };
//     }
// }
// fff()

// //////////////////////////////////////////////////////////////////////////////////////////////////////////




// var paramsString = document.location.search
// console.log(paramsString)


// $(document).ready(function() {
//     $('.compose').click(function() {
//         $('.overlay').addClass('is-open');
//     })
//     $('.modal-close, .send').click(function() {
//         $('.overlay').removeClass('is-open');
//     })
// })






//////////////////////  функция смены языков и смены URL под каждый язык  ////////////start/////////////////////
// function qqqqq() {
//     var radios = document.getElementsByName("button");
//     console.log(radios)
//     var val = '';
//     var resLngEn = document.getElementsByClassName('lng-en');
//     var resLngUa = document.getElementsByClassName('lng-ua');
//     var resLngRu = document.getElementsByClassName('lng-ru');
//     console.log(resLngEn)
//     console.log(resLngUa)
//     console.log(resLngRu)

//     var radiosId = document.getElementsByName("pageIdLang");
//     console.log(radiosId)
//     var radiosHref = document.getElementsByName("pageHrefLang");
//     console.log(radiosHref)

//     /////////////////// переключение язык en span  по класу весь html  /////////////////////
//     if (radios[0].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "block";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "none";
//         }
//         val = radios[0].value;
//         console.log(val + ' флаг');

//         //////////  div id  смена URL en  //////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'en';
//         }
//         //////////  a href  смена URL en  //////////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'en';
//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }

//     /////////////////// переключение язык ua span  по класу весь html  /////////////////////
//     if (radios[1].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "block";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "none";
//         }
//         val = radios[1].value;
//         console.log(val + ' флаг');

//         /////////  div id  смена URL ua ////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'ua';
//         }
//         /////////  a href  смена URL ua ///////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'ua';
//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }

//     /////////////////// переключение язык ru span  по класу весь html  /////////////////////
//     if (radios[2].checked === true) {
//         for (var i = 0; i < resLngEn.length; i++) {
//             resLngEn[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngUa.length; i++) {
//             resLngUa[i].style.display = "none";
//         }
//         for (var i = 0; i < resLngRu.length; i++) {
//             resLngRu[i].style.display = "block";
//         }
//         val = radios[2].value;
//         console.log(val + ' флаг');


//         /////////  div id  смена URL ru ////////
//         for (var i = 0; i < radiosId.length; i++) {
//             radiosId[i].id = radiosId[i].id.slice(0, -2) + 'ru';
//         }
//         /////////  a href  смена URL ru ///////
//         for (var i = 0; i < radiosHref.length; i++) {
//             radiosHref[i].hash = radiosHref[i].hash.slice(0, -2) + 'ru';

//         }
//         ///////// обновляем страницу  //////////
//         document.getElementById("defaultOpen").click();
//         window.location.href = window.location.href;
//     }
// }
// qqqqq();
//////////////////////  функция смены языков и смены URL под каждый язык  ////////////end/////////////////////



//////////////////////// слайдер с перещетом  разрешения экрана /////////////start////////////
// const controls = document.querySelector(".controls");
// const container = document.querySelector(".thumbnail-container")
// const allBox = container.children;
// const containerWidth = container.offsetWidth;
// const margin = 30;
// var items = 0;
// var totalItems = 0;
// var jumpSlideWidth = 0;

// responsive = [
//     { breakPoint: { width: 0, item: 1 } },
//     { breakPoint: { width: 600, item: 2 } },
//     { breakPoint: { width: 900, item: 3 } },
//     { breakPoint: { width: 1200, item: 4 } },
//     { breakPoint: { width: 1500, item: 5 } },
//     { breakPoint: { width: 1800, item: 6 } },
//     { breakPoint: { width: 2100, item: 7 } }
// ]

// function load() {

//     for (let i = 0; i < responsive.length; i++) {
//         if (window.innerWidth > responsive[i].breakPoint.width) {
//             items = responsive[i].breakPoint.item
//         }
//     }
//     start();
// }

// function start() {
//     var totalItemsWidth = 0;
//     for (let i = 0; i < allBox.length; i++) {
//         allBox[i].style.width = (containerWidth / items) - margin + "px";
//         allBox[i].style.margin = (margin / 2) + "px";
//         totalItemsWidth += containerWidth / items;
//         totalItems++;
//     }
//     container.style.width = totalItemsWidth + "px";

//     const allSlides = Math.ceil(totalItems / items);
//     const ul = document.createElement("ul");
//     for (let i = 1; i <= allSlides; i++) {
//         const li = document.createElement("li");
//         li.id = i;
//         li.innerHTML = i;
//         li.setAttribute("onclick", "controlSlides(this)");

//         ul.appendChild(li);
//         if (i == 1) {
//             li.className = "active";
//         }
//     }
//     controls.appendChild(ul);
// }

// function controlSlides(ele) {
//     const ul = controls.children;
//     const li = ul[0].children;
//     var active;
//     for (let i = 0; i < li.length; i++) {
//         if (li[i].className == "active") {
//             active = i;
//             li[i].className = ""
//         }
//     }
//     ele.className = "active"
//     var numb = (ele.id - 1) - active;
//     jumpSlideWidth = jumpSlideWidth + (containerWidth * numb);
//     container.style.marginLeft = -jumpSlideWidth + "px"
// }

// window.onload = load();
//////////////////////// слайдер с перещетом  разрешения экрана /////////////end////////////




///////////////////////////скрываем блок при клике вне элемента с классом pop-up /////////start////////////
// const popup = document.querySelector('.pop-up');

// document.onclick = function(e){
//     if ( event.target.className != 'pop-up') {
//         popup.style.display = 'none';
//     };
// };
// document.onclick = function() {
//     document.getElementById('nav').style.display = 'none'
//   }
///////////////////////скрываем блок при клике вне элемента с классом pop-up /////////end////////////