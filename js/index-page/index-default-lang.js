// ПРОВЕРКА ПАРАМЕТРОВ В URL ГЛАВНОЙ СТРАНИЦЫ  "index.html"  САЙТА И УДАЛЕНИЯ ПРОИЗВОЛЬНЫХ ПАРАМЕТРОВ В URL


// Чтобы избежать ошибок, связанных с попытками использования document.location.search до его инициализации, можно обернуть весь код в самовызывающуюся функцию. Это гарантирует, что код выполнится сразу после его определения.
// Самовызывающуюся функция

// (function() {

    // Функция проверки наличия всех обязательных параметров в строке запроса URL главной страницы "index.html" сайта 
    function checkSearchParams() {
        // Получаем все параметры из текущей строки запроса URL
        var params = new URLSearchParams(document.location.search);
        // Массив обязательных параметров
        var requiredParams = ['a', 'b', 'c', 'd', 'e', 'f', 'lang'];
        // Массив отсутствующих параметров
        var missingParams = [];

        // Проверяем каждый обязательный параметр
        for (var i = 0; i < requiredParams.length; i++) {
            var param = requiredParams[i];
            // Если параметр отсутствует в строке запроса, добавляем его в массив отсутствующих параметров
            if (!params.has(param)) {
                missingParams.push(param);
            }
        }

        // Если есть отсутствующие параметры
        if (missingParams.length > 0) {
            // Вызываем функцию для обновления URL с обязательными параметрами
            updateUrlWithParams();
            // Возвращаем false, так как не все обязательные параметры присутствуют
            return false;
        } else {
            // Если все обязательные параметры присутствуют, возвращаем true
            return true;
        }
    }

    // Функция для обновления URL с обязательными параметрами
    function updateUrlWithParams() {
        // Создаем новый URL с текущим URL
        let newUrl = new URL(window.location.href);
        // Заменяем путь на "index.html"
        newUrl.pathname = 'index.html';
        
        // Добавляем или обновляем параметры в URL
        newUrl.searchParams.set('a', 'home');
        newUrl.searchParams.set('b', '');
        newUrl.searchParams.set('c', '');
        newUrl.searchParams.set('d', '');
        newUrl.searchParams.set('e', '');
        newUrl.searchParams.set('f', '');
        newUrl.searchParams.set('lang', 'ru');

        // Обновляем URL в истории браузера без перезагрузки страницы
        window.history.replaceState({}, document.title, newUrl.toString());

        // Вызов функции для очистки URL параметров
        cleanUrlParams();
    }

    // Функция для удаления всех параметров, кроме 'a', 'b', 'c', 'd', 'e', 'f', 'lang'
    function cleanUrlParams() {
        // Создаем объект URL с текущим URL
        let currentUrl = new URL(window.location.href);
        
        // Массив разрешенных параметров
        const allowedParams = ['a', 'b', 'c', 'd', 'e', 'f', 'lang'];
        
        // Получаем все параметры из текущей строки запроса URL
        let params = new URLSearchParams(currentUrl.search);
        
        // Удаляем параметры, которые не входят в список разрешенных
        for (let param of params.keys()) {
            if (!allowedParams.includes(param)) {
                params.delete(param);
            }
        }
        
        // Обновляем строку запроса URL
        currentUrl.search = params.toString();
        
        // Обновляем URL в истории браузера без перезагрузки страницы
        window.history.replaceState({}, document.title, currentUrl.toString());
    }

    // Пример использования функции
    if (checkSearchParams()) {
        console.log("Строка запроса содержит все обязательные параметры");
        cleanUrlParams(); // Чистим URL параметры если все обязательные параметры присутствуют
    } else {
        console.log("Строка запроса исправлена и теперь содержит все обязательные параметры");
    }

// })();

