// import { categotyProductData } from './index-page-category-product-DATA.js';

// import { categotyProductDataInital } from "./level3-level4-initial-DATA.js";
import { col1level3level4initalDATA } from "./col1-level3-level4-initial-DATA.js";
import { col2level3level4initalDATA } from "./col2-level3-level4-initial-DATA.js";
import { col3level3level4initalDATA } from "./col3-level3-level4-initial-DATA.js";

import { col4level3level4initalDATA } from "./col4-level3-level4-initial-DATA.js";
import { col5level3level4initalDATA } from "./col5-level3-level4-initial-DATA.js";

export const CURRENCYnameUANorRUBorUSD = " грн.";

// let REScategotyProductDataInital = [];
// let exchangeRates = 38.45
// for (let i = 0; i < categotyProductDataInital.length; i++) {
//     let item = {...categotyProductDataInital[i]};
//   item.price = (parseFloat(item.price) * exchangeRates).toFixed(2) + CURRENCYnameUANorRUBorUSD;
//   REScategotyProductDataInital.push(item);
// }

// export const categotyProductData = REScategotyProductDataInital;


const REScol1level3level4initalDATA  = [];
let exchangeRates = 38.45 // Курс валюты ///
for (let i = 0; i < col1level3level4initalDATA.length; i++) {
    let item = {...col1level3level4initalDATA[i]}; // Создаем копию объекта, чтобы избежать изменения исходного
  item.price = (parseFloat(item.price) * exchangeRates).toFixed(2) + CURRENCYnameUANorRUBorUSD; // Умножаем "price" на Курс валюты и округляем до 2 знаков после запятой и +" грн."
  REScol1level3level4initalDATA .push(item);
};

export const col1level3level4Data = REScol1level3level4initalDATA;

export const col2level3level4Data = col2level3level4initalDATA;
export const col3level3level4Data = col3level3level4initalDATA;
export const col4level3level4Data = col4level3level4initalDATA;
export const col5level3level4Data = col5level3level4initalDATA;



// ///////////////////////////////////////////////////////////////


