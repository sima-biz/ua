const idcrumbs = '#crumbs';
const idspecies = '#species';
const iddiscription = '#discription'




// import { brandsPartsList } from "./index-page-species-section-DATA.js"
// import { categoryLoopers } from "./index-page-species-section-DATA.js"

// import { speciesSectionData} from "./index-page-species-section-DATA.js"
import { row2level2initalDATA } from "./../arrays-data/row2-level2-inital-DATA.js"

//////////////////////////////

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
console.log(paramsUrl[0].aimC)




/////////////////////////////////////////////////////////

//  Создаём массив speciesCategory по параметру "c" для рэндэра страницы

let speciesCategory = [];
console.log(params.get("c"))
for(const user of row2level2initalDATA) {
    // if (typeof user.e !== "number") {
    //     user.e = ""; 
    // } else {
    //     user.e = user.e; 
    // }
    if(String(user.c) == String(params.get("c"))) speciesCategory.push(user)
    
};
console.log(speciesCategory)

//////////////////////////////////////////////////////////
// switch (params.get("c")) {
//     case 'parts-list-pdf':
//         speciesCategory = brandsPartsList;
//         break;
//     case 'loopers':
//         speciesCategory = categoryLoopers;
//         break;

// };

//////////////////////////////////////////////


const toHTMLcrumbs = fruitchapter =>
    `<ul class="crumbs-text">
            <li class="lev-${fruitchapter.aimA}"><a class="lng-lev-${fruitchapter.aimA}" href="index.html?a=${fruitchapter.aimA}&b=&c=hooks&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimB}"><a class="lng-lev-${fruitchapter.aimB}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimC}"><a class="lng-lev-${fruitchapter.aimC}" href="index-page-species-section.html?a=${fruitchapter.aimA}&b=${fruitchapter.aimB}&c=${fruitchapter.aimC}&d=&e=&f="></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimD}"><a class="lng-lev-${fruitchapter.aimD}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimE}"><a class="lng-lev-${fruitchapter.aimE}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
            <li class="lev-${fruitchapter.aimF}"><a class="lng-lev-${fruitchapter.aimF}" href="#"></a><img class="fas" src="images/icons/arrow-30-256.png" alt=""></li>
        </ul>`;

function renderCrumbs() {
    const htmlcrumbs = paramsUrl.map(toHTMLcrumbs).join('')
    document.querySelector(idcrumbs).innerHTML = htmlcrumbs
};
renderCrumbs()

// ////////////////////////////////////////////////
// ////////////////////////////////////////////////


const toHTMLdiscription = fruitchapter =>
    `<div class="dsn">
        <h1 class="key-text-h1 title-shadow-one lng-lev-${fruitchapter.aimC}"></h1>
        <h2 class="key-text-h2 title-shadow-two"></h2>
        <p class="key-text-p1 text-line lng-lev-species-section-key-p1"></p>
        <p class="key-text-p2 text-line lng-lev-species-section-key-p2">Adler, Alfa, Altin, American, Baby Lock, Babylock, Bernette, Bernina, Bonis, Borkert, Bonfit, Brother, Bullmer, Colli, Columbia, Consew, Danda, Dressmaker, Durkopp Adler, Eastman, Elna, Euro-Pro, Feiyue, Excluding, Fischbein, Gerber Technology, Gribetz,  Golden Wheel, Grace, Happi, Handi Quilter, Highlead, Husqvarna Viking, Investronica, Jaguar, Janome, Jiasew, Jiannlian, Juki, Kansai, KM, Kenmore, Kingtex, Kuris, Lectra, Lewis, Maqi, Mauser, Maimin, Meca, Merrow, Mitsubishi, Morgan, Morse, Nakajima, Necchi, Nelco, Newlong, New Home, Pathfinder, Pegasus, Pfaff, Phoenix, Porter, Reece, Renown, Rimoldi, Reliable, Riccar, Ricoma, Rimoldi, Royal, Seiko, Shingling, Shingray, Silver Star, Singer, Siruba, Strobel, Taurus, Taiko, Tacsew, Titan, Toyota, Truasuer, Tukatech, Typical, Union Special, Viking, Wolf, W&G, Yamato, Zoje, Zünd.</p>
    </div>`;
        // <p class="text-line lng-text-${fruitchapter.aimC}"></p>

function renderDiscription() {
    const htmlDiscription = paramsUrl.map(toHTMLdiscription).join('')
    document.querySelector(iddiscription).innerHTML = htmlDiscription
};
renderDiscription()

////////////////////////////////////////////

// let xx = speciesCategory[0]["c"]
// console.log("//speciesCategory c:", xx)

const toHTMLspeciesSection = fruitbasic =>
    `<a href="${fruitbasic.hrefspeciessection}?a=${fruitbasic.a}&b=${fruitbasic.b}&c=${fruitbasic.c}&d=${fruitbasic.d}&e=${fruitbasic.e || ""}&f=${fruitbasic.f || ""}">
            <section class="species">
                <div class="block-fon">
                    <img class="img-fon" src="${fruitbasic.imgfon}" alt="">
                </div>
                <div class="container">
                    <div class="species-img">
                        <img src="${fruitbasic.imgone}" alt="">
                    </div>
                    <div class="species-name">
                        <p class="lng-lev-${fruitbasic.c} species-text"></p>
                        <p class="lng-lev-${fruitbasic.d} species-text">${fruitbasic.d.split('-').join(' ')}</p>
                    </div>
                </div>
            </section>
        </a>`;



function renderSpeciesSection() {
    const htmlSpeciesSection = speciesCategory.map(toHTMLspeciesSection).join('')
    document.querySelector(idspecies).innerHTML = htmlSpeciesSection
};
renderSpeciesSection()

///////////////////////////////////////////