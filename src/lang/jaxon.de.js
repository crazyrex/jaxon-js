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
    jaxon.debug.text[100] = 'WARNUNG: ';
    jaxon.debug.text[101] = 'FEHLER: ';
    jaxon.debug.text[102] = 'XAJAX FEHLERSUCHE NACHRICHT:\n';
    jaxon.debug.text[103] = '...\n[UMGFANGREICHE ANTWORT]\n...';
    jaxon.debug.text[104] = 'SENDE ANFRAGE';
    jaxon.debug.text[105] = 'GESENDET [';
    jaxon.debug.text[106] = ' bytes]';
    jaxon.debug.text[107] = 'STARTE AUFRUF: ';
    jaxon.debug.text[108] = 'URI: ';
    jaxon.debug.text[109] = 'BEGINNE ANFRAGE';
    jaxon.debug.text[110] = 'PARAMETER IN BEARBEITUNG [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'KEINE PARAMETER ZU VERARBEITEN';
    jaxon.debug.text[113] = 'BEREITE REQUEST VOR';
    jaxon.debug.text[114] = 'BEGINNE XAJAX CALL (veraltet: verwendet stattdessen jaxon.request)';
    jaxon.debug.text[115] = 'BEGINNE XAJAX ANFRAGE';
    jaxon.debug.text[116] = 'Die vom Server erhaltenen Daten konnten nicht verarbeitet werden.\n';
    jaxon.debug.text[117] = '.\nPrüfe auf Fehlermeldungen des Servers.';
    jaxon.debug.text[118] = 'ERHALTEN [status: ';
    jaxon.debug.text[119] = ', Größe: ';
    jaxon.debug.text[120] = ' bytes, Zeit: ';
    jaxon.debug.text[121] = 'ms]:\n';
    jaxon.debug.text[122] = 'Der Server hat folgenden HTTP-Status zurück gesendet: ';
    jaxon.debug.text[123] = '\nERHALTEN:\n';
    jaxon.debug.text[124] = 'Der Server lieferte einen Redirect nach:<br />';
    jaxon.debug.text[125] = 'ABGESCHLOSSEN [';
    jaxon.debug.text[126] = 'ms]';
    jaxon.debug.text[127] = 'INITIALISIERE REQUEST OBJEKT';

    /*
        Array: exceptions
    */
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Ungültige XML-Antwort: die Antwort enthält ein ungültiges Tag: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest ist nicht verfügbar, XajaX ist nicht verfügbar.';
    jaxon.debug.exceptions[10003] = 'Warteschleife-Überlauf: kann Objekt nicht an Warteschleife übergeben da diese voll ist.';
    jaxon.debug.exceptions[10004] = 'Ungültige XML-Antwort: die Antwort enthält einen unerwarteten Tag oder Text: {data}.';
    jaxon.debug.exceptions[10005] = 'Ungültige Request-URI: Ungültige oder Fehlende URI; Autoerkennung fehlgeschlagen; bitte nur eine einzige URI angeben.';
    jaxon.debug.exceptions[10006] = 'Ungültiges Antwort-Befehl: Unvollständiges Objekt zurück erhalten.';
    jaxon.debug.exceptions[10007] = 'Ungültiges Antwort-Befehl: Befehl [{data}] ist nicht bekannt.';
    jaxon.debug.exceptions[10008] = 'Es konnte kein Element mit der ID [{data}] konnte im Dokument gefunden werden.';
    jaxon.debug.exceptions[10009] = 'Ungültige Anfrage: Fehlender Funktionsparameter - name.';
    jaxon.debug.exceptions[10010] = 'Ungültige Anfrage: Fehlender Funktionsparameter - object.';

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
                window.status = 'Sende Anfrage...';
            },
            onWaiting: function() {
                window.status = 'Warten auf Antwort...';
            },
            onProcessing: function() {
                window.status = 'Verarbeitung...';
            },
            onComplete: function() {
                window.status = 'Fertig.';
            }
        }
    }
}
