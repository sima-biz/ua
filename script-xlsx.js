// var xlsx = require("xlsx");   //code
// var wb = xlsx.readFile("1a.xlsx");  //code

// var ws = wb.Sheets["parts-list-1"];
//  var ws = wb.Sheets["loopers"];
// var ws = wb.Sheets["START-speciesCategoryGeneral"];  //code



// var data = xlsx.utils.sheet_to_json(ws);  //code

// 
// console.log("export const brandsPartsList =", data);
// console.log("export const categoryLoopers =", data);

// Файл START-speciesCategoryGeneral.xlsx в него подставляем строки не более 100 штук из файла speciesCategoryGeneral.xlsx  ////////////////
// Имя массива [ export const speciesCategoryGeneral = [{},{},{},.....] ]  ///////////
// console.log("результат =", data);  //code

// вставить в терминал и нажать enter ///  node script-xlsx.js > script-xlsx-result.js



// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// var xlsx = require("xlsx");
// var wb = xlsx.readFile("1a.xlsx");

// Получаем список имен листов в книге
// var sheetNames = wb.SheetNames;

// Проходим по каждому листу и выводим данные
// sheetNames.forEach(function(sheetName) {
//     var ws = wb.Sheets[sheetName];
//     var data = xlsx.utils.sheet_to_json(ws);

    // console.log("Результат для листа", sheetName, "=", data);
    // console.log(sheetName, "=", data);
// });




// var xlsx = require("xlsx");
// var wb = xlsx.readFile("1a.xlsx");

// var sheetNames = wb.SheetNames;

// var ress = [];

// sheetNames.forEach(function(sheetName) {
//     var ws = wb.Sheets[sheetName];
//     var data = xlsx.utils.sheet_to_json(ws);

//     ress = ress.concat(data);
// });

// console.log("результат =", ress); 

// //////////////////////////////////////////////////////////////////////////////////////////////  рабочий 4 старт


// var xlsx = require("xlsx");
// var fs = require("fs");

// var wb = xlsx.readFile("1a.xlsx");

// Получаем список имен листов в книге
// var sheetNames = wb.SheetNames;

// Массив для хранения всех данных
// var ress = [];

// Проходим по каждому листу и добавляем данные в массив ress
// sheetNames.forEach(function(sheetName) {
//     var ws = wb.Sheets[sheetName];
//     var data = xlsx.utils.sheet_to_json(ws);

    // Добавляем данные в массив ress
//     ress = ress.concat(data);
// });

// Преобразуем массив ress в строку JSON
// var jsonData = JSON.stringify(ress, null, 2);

// Записываем данные в файл result1.js
// fs.writeFileSync("script-xlsx-result.js", "export const speciesCategoryGeneral = " + jsonData + ";");

// console.log("Результат сохранен в файле script-xlsx-result.js");


// вставить в терминал и нажать enter ///  node script-xlsx.js

// //////////////////////////////////////////////////////////////////////////////////////////////// рабочий 4 конец

// const xlsx = require("xlsx");
// const fs = require("fs");

// const readWorkbook = async () => {
//     try {
//         const wb = await new Promise((resolve, reject) => {
//             xlsx.readFile("1a.xlsx", (err, workbook) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(workbook);
//                 }
//             });
//         });

//         const sheetNames = wb.SheetNames;
//         let ress = [];

//         for (const sheetName of sheetNames) {
//             const ws = wb.Sheets[sheetName];
//             const data = xlsx.utils.sheet_to_json(ws);
//             ress = ress.concat(data);
//         }

//         const jsonData = JSON.stringify(ress, null, 2);

//         await new Promise((resolve, reject) => {
//             fs.writeFile("script-xlsx-result.js", `export const speciesCategoryGeneral = ${jsonData};`, (err) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve();
//                 }
//             });
//         });

//         console.log("Результат сохранен в файле script-xlsx-result.js");
//     } catch (error) {
//         console.error("Ошибка:", error);
//     }
// };

// readWorkbook();

// вставить в терминал и нажать enter ///  node script-xlsx.js

// /////////////////////////////////////////////////////////////////////////////////// 

// /////////////////////////////////////////////////////////////////////////////// рарочий 5 старт 


// const xlsx = require("xlsx");
// const fs = require("fs").promises;

// const processWorkbook = async () => {
//     try {
//         const wb = xlsx.readFile("1a.xlsx");
//         const sheetNames = wb.SheetNames;
//         let ress = [];

//         for (const sheetName of sheetNames) {
//             const ws = wb.Sheets[sheetName];
//             const data = xlsx.utils.sheet_to_json(ws);
//             ress = ress.concat(data);
//         }

//         const jsonData = JSON.stringify(ress, null, 2);

//         await fs.writeFile("script-xlsx-result.js", `speciesCategoryGeneral = ${jsonData};`);

//         console.log("Результат сохранен в файле script-xlsx-result.js");
//     } catch (error) {
//         console.error("Ошибка:", error);
//     }
// };

// processWorkbook();


// вставить в терминал и нажать enter ///  node script-xlsx.js

// /////////////////////////////////////////////////////////////////////////////// рарочий 5 конец

// /////////////////////////////////////////////////////////////////////////////// рарочий 6 старт
// const xlsx = require("xlsx");
// const fs = require("fs").promises;

// const processWorkbook = async () => {
//     const filePath = "1a.xlsx";

//     try {
//         await fs.access(filePath);

//         const wb = xlsx.readFile(filePath);
//         const sheetNames = wb.SheetNames;
//         let ress = [];

//         for (const sheetName of sheetNames) {
//             const ws = wb.Sheets[sheetName];
//             const data = xlsx.utils.sheet_to_json(ws);
//             ress = ress.concat(data);
//         }

//         const jsonData = JSON.stringify(ress, null, 2);

//         if (!jsonData) {
//             console.error("Данные из файла Excel не найдены или не могут быть преобразованы.");
//             return;
//         }

//         await fs.writeFile("script-xlsx-result.js", `const resultData = ${jsonData};`);
//         console.log("Результат успешно сохранен в файле script-xlsx-result.js");
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.error(`Файл ${filePath} не найден.`);
//         } else {
//             console.error("Ошибка:", error);
//         }
//     }
// };

// processWorkbook();


// вставить в терминал и нажать enter ///  node script-xlsx.js

// /////////////////////////////////////////////////////////////////////////////// рарочий 6 конец


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////  САМЫЙ УДАЧНЫЙ КОД начало ///////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import xlsx from "xlsx";
import { promises as fs } from "fs";


// const xlsx = require("xlsx");
// const fs = require("fs").promises;

//  //////////////////////// проверка файла xlsx  старт /////////////////////////  //

const checkExcelFile = async () => {
    // 
    // const filePath = "1a.xlsx";

    // level2.xlsx 
    // level2.xlsx результат в файле script-xlsx-result.js для файла index-page-species-section-DATA.js 
    // const filePath = "level2.xlsx";

    // level3-level4.xlsx 
    // level3-level4.xlsx результат в файле script-xlsx-result.js для файла index-page-category-product-DATA.js
    const filePath = "level3-level4.xlsx";

    try {
        // Проверяем существование файла
        await fs.access(filePath);

        // Читаем файл Excel
        const wb = xlsx.readFile(filePath);
        const sheetNames = wb.SheetNames;

        if (sheetNames.length === 0) {
            console.error("Файл Excel не содержит листов с данными.");
            return;
        }

        // Проверяем, что хотя бы один лист содержит данные
        let hasData = false;
        for (const sheetName of sheetNames) {
            const ws = wb.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(ws, { header: 1 });
            if (data.length > 0) {
                hasData = true;
                break;
            }
        }

        if (!hasData) {
            console.error("Файл Excel не содержит данных в формате, который может быть успешно обработан библиотекой xlsx.");
        } else {
            console.log("Файл Excel существует и содержит данные в формате, который библиотека xlsx может успешно обработать.");
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Файл ${filePath} не найден.`);
        } else {
            console.error("Ошибка при обработке файла Excel:", error);
        }
    }
};

checkExcelFile();

//  //////////////////////// проверка файла xlsx  конец /////////////////////////  //

// const xlsx = require("xlsx");
// const fs = require("fs").promises;
const processWorkbook = async () => {
    // 
    // const filePath = "1a.xlsx";

    // level2.xlsx 
    // level2.xlsx результат в файле script-xlsx-result.js для файла index-page-species-section-DATA.js 
    // const filePath = "level2.xlsx";

    // level3-level4.xlsx 
    // level3-level4.xlsx результат в файле script-xlsx-result.js для файла index-page-category-product-DATA.js
    const filePath = "level3-level4.xlsx";

    try {
        await fs.access(filePath);

        const wb = xlsx.readFile(filePath);
        const sheetNames = wb.SheetNames;
        let ress = [];

        for (const sheetName of sheetNames) {
            const ws = wb.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(ws);
            ress = ress.concat(data);
        }

        const jsonData = JSON.stringify(ress, null, 2);

        if (!jsonData) {
            console.error("Данные из файла Excel не найдены или не могут быть преобразованы.");
            return;
        }

        // await fs.writeFile("script-xlsx-result.js", `const resultData = ${jsonData};`);
        // await fs.writeFile("script-xlsx-result.js", `export const speciesCategoryGeneral = ${jsonData};`);

        // level2.xlsx 
        // level2.xlsx результат в файле script-xlsx-result.js для файла index-page-species-section-DATA.js 
        // await fs.writeFile("script-xlsx-result.js", `export const speciesSectionData = ${jsonData};`);

        // level3-level4.xlsx 
        // level3-level4.xlsx результат в файле script-xlsx-result.js для файла index-page-category-product-DATA.js
        await fs.writeFile("script-xlsx-result.js", `export const categotyProductData = ${jsonData};`);

        
        console.log("Результат успешно сохранен в файле script-xlsx-result.js");
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`Файл ${filePath} не найден.`);
        } else {
            console.error("Ошибка при обработке файла Excel:", error);
        }
    }
};

processWorkbook();

// вставить в терминал и нажать ENTER //////////  node script-xlsx.js

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////  САМЫЙ УДАЧНЫЙ КОД конец ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const col1level3level4initalDATA = [

