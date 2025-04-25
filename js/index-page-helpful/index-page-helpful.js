const idcrumbs = '#crumbs'
const iddiscription = '#discription'


//////////////////////////////



let params = (new URL(document.location)).searchParams;
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];
// const paramsss = [{ item: params.get("item").split('-').join(' '), brand: params.get("brand").split('-').join(' ') }, ];

const paramsUrl = [{

    aimA: params.get("a"),
    aimB: params.get("b"),
    aimC: params.get("c"),
    aimD: params.get("d"),
    aimE: params.get("e"),
    aimF: params.get("f"),
    aimLang: params.get("lang"),
}];



//////////////////////////////

// `<ul class="crumbs-text">
//         <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}"></a><i class="fas fa-angle-right"></i></li>
//         <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><i class="fas fa-angle-right"></i></li>
//         <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="#"></a><i class="fas fa-angle-right"></i></li>
//         <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><i class="fas fa-angle-right"></i></li>
//         <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><i class="fas fa-angle-right"></i></li>
//         <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><i class="fas fa-angle-right"></i></li>
//     </ul>`;

const toHTMLcrumbs = fruitchapter =>


    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"><div class="lng-lev-page divcrumbspage"></div>${fruitchapter.aimE}</a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;
        

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()


//////////////////////////////////////////////

// //////////////////////////////////////////////

// const toHTMLdiscription = fruitchapter =>
//     `<div class="dsn">
//             <h1 class="title-shadow-one lng-lev-${fruitchapter.aimC}">Выбор швейной машины для дома</h1>
//             <p class="text-line lng-text-${fruitchapter.aimC}">Как выбрать швейную машинку для дома? Сколько статей в интернете написано с советами о том, как правильно выбрать швейную машину.Но прочитав их, все равно, вопрос: «Какая же швейная машина лучше?» остается открытым. Проблема в том, что дать
//             однозначный совет невозможно. Машинки все хорошие по-своему. И, кроме того, очень сложно объяснять технические особенности швейной машины, используя термины типа дифференциал, цепной стежок и т.п.</p>
//         </div>`;

// function renderDiscription() {
//     const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
//     document.querySelector(iddiscription).innerHTML = htmlDiscription
// };
// renderDiscription()

////////////////////////////////////////////