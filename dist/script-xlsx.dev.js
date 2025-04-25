"use strict";

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
// //////////////////////////////////////////////////////////////////////////////////////////////////
var xlsx = require("xlsx");

var fs = require("fs").promises;

var processWorkbook = function processWorkbook() {
  var filePath, wb, sheetNames, ress, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, sheetName, ws, data, jsonData;

  return regeneratorRuntime.async(function processWorkbook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          filePath = "1a.xlsx";
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fs.access(filePath));

        case 4:
          wb = xlsx.readFile(filePath);
          sheetNames = wb.SheetNames;
          ress = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 10;

          for (_iterator = sheetNames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            sheetName = _step.value;
            ws = wb.Sheets[sheetName];
            data = xlsx.utils.sheet_to_json(ws);
            ress = ress.concat(data);
          }

          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](10);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
          jsonData = JSON.stringify(ress, null, 2);

          if (jsonData) {
            _context.next = 30;
            break;
          }

          console.error("Данные из файла Excel не найдены или не могут быть преобразованы.");
          return _context.abrupt("return");

        case 30:
          _context.next = 32;
          return regeneratorRuntime.awrap(fs.writeFile("script-xlsx-result.js", "const resultData = ".concat(jsonData, ";")));

        case 32:
          console.log("Результат успешно сохранен в файле script-xlsx-result.js");
          _context.next = 38;
          break;

        case 35:
          _context.prev = 35;
          _context.t1 = _context["catch"](1);

          if (_context.t1.code === 'ENOENT') {
            console.error("\u0424\u0430\u0439\u043B ".concat(filePath, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."));
          } else {
            console.error("Ошибка при обработке файла Excel:", _context.t1);
          }

        case 38:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 35], [10, 14, 18, 26], [19,, 21, 25]]);
};

processWorkbook();