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
// node sitemap-generate-level2.js


import { row2level2initalDATA } from "./js/arrays-data/row2-level2-inital-DATA.js"; // Импорт данных
import fs from "fs"; // Импорт модуля fs для работы с файловой системой

// Константы, которые используются для генерации карты сайта
const BASE_URL = "https://sima-biz.github.io/ua"; // Базовый URL сайта
const LANGUAGES = ["ru", "en", "ua"]; // Список доступных языков
const DATE = "2025-01-07"; // Фиксированная дата для метки <lastmod>

// Функция для экранирования символа "&" в URL
function escapeAmpersand(url) {
    return url.replace(/&/g, "&amp;");
}

// Функция для генерации карты сайта
function generateSitemap(data) {
    // Заголовок карты сайта
    const urlsetHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Завершающий тег карты сайта
    const urlsetFooter = `</urlset>`;

    // Генерация URL-ов для карты сайта
    const urls = data.map((item) => {
        return LANGUAGES.map((lang) => {
            // Формируем URL для текущего языка
            const loc = escapeAmpersand(`${BASE_URL}/${item.hrefspeciessection}?a=${item.a}&b=${item.b || ""}&c=${item.c || ""}&d=${item.d || ""}&e=${item.e || ""}&f=${item.f || ""}&lang=${lang}`);

            // Генерация ссылок для всех альтернативных языков
            const alternateLinks = LANGUAGES.map((alternateLang) => {
                const alternateHref = escapeAmpersand(`${BASE_URL}/${item.hrefspeciessection}?a=${item.a}&b=${item.b || ""}&c=${item.c || ""}&d=${item.d || ""}&e=${item.e || ""}&f=${item.f || ""}&lang=${alternateLang}`);
                return `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${alternateHref}" />`;
            }).join("\n");

            // Формирование блока <url> с основным URL и альтернативными ссылками
            return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${DATE}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
${alternateLinks}
  </url>`;
        }).join("\n");
    }).join("\n");

    // Формируем полный XML, включая заголовок, все URL и завершающий тег
    return `${urlsetHeader}\n${urls}\n${urlsetFooter}`;
}

// Генерация карты сайта
const sitemapContent = generateSitemap(row2level2initalDATA);

// Запись карты сайта в файл
fs.writeFile("sitemap-level2.xml", sitemapContent, "utf8", (err) => {
    if (err) {
        console.error("Ошибка при записи файла:", err);
    } else {
        console.log("Карта сайта успешно создана в файле sitemap-level2.xml");
    }
});