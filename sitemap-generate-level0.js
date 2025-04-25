// Убедитесь, что в вашем файле package.json указано "type": "module":
// Для использования import в Node.js проекте убедитесь, что в файле package.json 
// установлен тип модуля "module", чтобы Node.js знал, что вы используете синтаксис ES-модулей:
// {
//     "type": "module",  //установлено в файле package.json "type": "module", спациально для исполнительного файла SITEMAP-GENERATE-LEVEL.JS
//     "name": "ss15082020",
//     "version": "1.0.0",
//     "description": "",
//     "main": "script-xlsx.js",
//     "dependencies": {
//       "xlsx": "^0.18.5"
//     },
//     "devDependencies": {},
//     "scripts": {
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "repository": {
//       "type": "git",
//       "url": "git+https://github.com/sewing-parts/ss15082020.git"
//     },
//     "author": "",
//     "license": "ISC",
//     "bugs": {
//       "url": "https://github.com/sewing-parts/ss15082020/issues"
//     },
//     "homepage": "https://github.com/sewing-parts/ss15082020#readme"
//   }


// Выполните команду в терминале:
// node sitemap-generate-level0.js








////////////////////////////////////////////////////////////

import { row0level0initalDATA } from "./js/arrays-data/row0-level0-inital-DATA.js";

 // Подключаем модуль для работы с файловой системой
//  const fs = require('fs'); 

import fs from 'fs';  // Импорт модуля fs для работы с файловой системой

// Данные: здесь указаны параметры, которые будут использоваться для генерации карты сайта
// const row0level0initalDATA = [
//     {
//         "route": "row0",  
//         "level": "level0",  
//         "menuiddwsMenuUl": "dwsMenuUl",  
//         "level0hrefabc": "menuHeaderLevel0", 
//         "hreflevel0a": "index.html",  
//         "a": "home",  
//     }
// ];

// Константы, которые используются для генерации URL
const BASE_URL = "https://sima-biz.rf.gd";  // Базовый URL сайта
const LANGUAGES = ["ru", "en", "ua"];  // Список доступных языков
const DATE = "2025-01-07";  // Фиксированная дата для метки <lastmod>

// Функция для экранирования символа "&" в URL, заменяет его на &amp;
function escapeAmpersand(url) {
    return url.replace(/&/g, "&amp;");
}

// Функция генерации карты сайта
function generateSitemap(data) {
    // Измененный заголовок XML с xmlns, xsi и schemaLocation
    const urlsetHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
    
    // Завершающий тег для карты сайта
    const urlsetFooter = `</urlset>`;

    // Генерация URL-ов для карты сайта
    let urls = data.map((item) => {
        // Для каждого языка генерируется отдельный URL
        return LANGUAGES.map((lang) => {
            // Формируем основной URL с экранированием символа "&"
            const loc = escapeAmpersand(`${BASE_URL}/${item.hreflevel0a}?a=${item.a}&b=&c=&d=&e=&f=&lang=${lang}`);
            
            // Генерация ссылок для альтернативных языков
            const alternateLinks = LANGUAGES.map((alternateLang) => {
                // Формируем URL для каждого альтернативного языка с экранированием символа "&"
                const href = escapeAmpersand(`${BASE_URL}/${item.hreflevel0a}?a=${item.a}&b=&c=&d=&e=&f=&lang=${alternateLang}`);
                return `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${href}"/>`;
            }).join("\n");  // Соединяем все альтернативные ссылки в одну строку

            // Формируем блок для одного URL с основным и альтернативными языками
            return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${DATE}</lastmod>  <!-- Дата последнего изменения страницы -->
    <changefreq>daily</changefreq>  <!-- Частота обновления страницы -->
    <priority>1.0</priority>  <!-- Приоритет страницы для поисковых систем -->
${alternateLinks}  <!-- Вставляем альтернативные ссылки для разных языков -->
  </url>`;
        }).join("\n");  // Собираем все URL для всех языков в один блок
    }).join("\n");  // Собираем все URL для всех данных в один блок

    // Формируем полный XML, соединяя заголовок, список URL и завершающий тег
    return `${urlsetHeader}\n${urls}\n${urlsetFooter}`;
}

// Генерация карты сайта с использованием данных из row0level0initalDATA
const sitemapContent = generateSitemap(row0level0initalDATA);

// Запись сгенерированного содержимого в файл sitemap-level0.xml
fs.writeFile('sitemap-level0.xml', sitemapContent, 'utf8', (err) => {
    if (err) {
        // Если произошла ошибка при записи файла, выводим её в консоль
        console.error("Ошибка при записи файла:", err);
    } else {
        // Если файл был успешно записан, выводим сообщение об успехе
        console.log("Карта сайта успешно создана в файле sitemap-level0.xml");
    }
});