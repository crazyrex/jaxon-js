/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: mic <info@joomx.com>
 * @copyright jaxon project
 * @license GNU/GPL
 * @package jaxon x.x.x
 * @since v.x.x.x
 * save as UTF-8
 */

if ('undefined' != typeof jaxon.debug) {
    /*
        Array: text
    */
    jaxon.debug.text = [];
    jaxon.debug.text[100] = 'ПРЕДУПРЕЖДЕНИЕ: ';
    jaxon.debug.text[101] = 'ГРЕШКА: ';
    jaxon.debug.text[102] = 'XAJAX ДЕБЪГ СЪОБЩЕНИЕ:\n';
    jaxon.debug.text[103] = '...\n[ДЪЛЪГ ОТГОВОР]\n...';
    jaxon.debug.text[104] = 'ИЗПРАЩАНЕ НА ЗАЯВКИ';
    jaxon.debug.text[105] = 'ИЗПРАТЕНИ [';
    jaxon.debug.text[106] = ' байта]';
    jaxon.debug.text[107] = 'ИЗВИКВАНЕ: ';
    jaxon.debug.text[108] = 'Адрес: ';
    jaxon.debug.text[109] = 'ИНИЦИАЛИЗИРАНЕ НА ЗАЯВКАТА';
    jaxon.debug.text[110] = 'ОБРАБОТВАНЕ НА ПАРАМЕТРИТЕ [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'НЯМА ПАРАМЕТРИ ЗА ОБРАБОТВАНЕ';
    jaxon.debug.text[113] = 'ПОДГОТВЯВАНЕ НА ЗАЯВКАТА';
    jaxon.debug.text[114] = 'СТАРТИРАНЕ НА XAJAX ПОВИКВАНЕТО (остаряло: вместо това използвай jaxon.request)';
    jaxon.debug.text[115] = 'СТАРТИРАНЕ НА XAJAX ЗАЯВКАТА';
    jaxon.debug.text[116] = 'Няма регистрирани функции, които да обработят заявката ви на сървъра!\n';
    jaxon.debug.text[117] = '.\nПровери за съобщения за грешки на сървъра.';
    jaxon.debug.text[118] = 'ПОЛУЧЕНИ [статус: ';
    jaxon.debug.text[119] = ', размер: ';
    jaxon.debug.text[120] = ' байта, време: ';
    jaxon.debug.text[121] = 'мсек]:\n';
    jaxon.debug.text[122] = 'Сървъра върна следния HTTP статус: ';
    jaxon.debug.text[123] = '\nПОЛУЧЕНИ:\n';
    jaxon.debug.text[124] = 'Сървъра върна пренасочване към:<br />';
    jaxon.debug.text[125] = 'ГОТОВО [';
    jaxon.debug.text[126] = 'мсек]';
    jaxon.debug.text[127] = 'ИНИЦИАЛИЗИРАНЕ НА ОБЕКТА НА ЗАЯВКАТА';
     
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Невалиден XML отговор: Отговора съдържа непознат таг: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: Няма XMLHttpRequest, jaxon е изключен.';
    jaxon.debug.exceptions[10003] = 'Препълване на опашката: Обекта не може да бъде сложен на опашката, защото тя е пълна.';
    jaxon.debug.exceptions[10004] = 'Невалиден XML отговор: Отговора съдържа неочакван таг или текст: {data}.';
    jaxon.debug.exceptions[10005] = 'Невалиден адрес: Невалиден или липсващ адрес; автоматичното откриване неуспешнп; please specify a one explicitly.';
    jaxon.debug.exceptions[10006] = 'Невалидна команда в отговора: Получена беше невалидна команда като отговор.';
    jaxon.debug.exceptions[10007] = 'Невалидна команда в отговора: Командата [{data}] е непозната.';
    jaxon.debug.exceptions[10008] = 'Елемент с ID [{data}] не беше намерен в документа.';
    jaxon.debug.exceptions[10009] = 'Невалидна заявка: Параметъра с името на функцията липсва.';
    jaxon.debug.exceptions[10010] = 'Невалидна заявка: Липсва обекта на функцията.';

    jaxon.debug.lang = {};
    jaxon.debug.lang.isLoaded = true;
}
             
if (typeof jaxon.config != 'undefined' && typeof jaxon.config.status != 'undefined') {
    /*
        Object: update
    */
    jaxon.config.status.update = function() {
        return {
            onRequest: function() {
                window.status = 'Изпращане на заявка...';
            },
            onWaiting: function() {
                window.status = 'Изчакване на отговор...';
            },
            onProcessing: function() {
                window.status = 'Изпълнение...';
            },
            onComplete: function() {
                window.status = 'Готово.';
            }
        }
    }
}