/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: jeffrey <walkingsoul@gmail.com>
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
    jaxon.debug.text[100] = 'FOUTMELDING: ';
    jaxon.debug.text[101] = 'FOUT: ';
    jaxon.debug.text[102] = 'XAJAX FOUTMELDINGS BERICHT:\n';
    jaxon.debug.text[103] = '...\n[LANG ANTWOORD]\n...';
    jaxon.debug.text[104] = 'VERZENDING AANVRAAG';
    jaxon.debug.text[105] = 'VERZONDEN [';
    jaxon.debug.text[106] = ' bytes]';
    jaxon.debug.text[107] = 'AANROEPING: ';
    jaxon.debug.text[108] = 'URI: ';
    jaxon.debug.text[109] = 'INITIALISATIE AANVRAAG';
    jaxon.debug.text[110] = 'VERWERKING PARAMETERS [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'GEEN PARAMETERS OM TE VERWERKEN';
    jaxon.debug.text[113] = 'VOORBEREIDING AANVRAAG';
    jaxon.debug.text[114] = 'BEGIN XAJAX AANVRAAG (verouderd: gebruik jaxon.request)';
    jaxon.debug.text[115] = 'BEGIN XAJAX AANVRAAG';
    jaxon.debug.text[116] = 'Er is geen verwerkingsbestand gespecificeerd om de aanvraag te verwerken.\n';
    jaxon.debug.text[117] = '.\nBekijk foutmeldingen van de server.';
    jaxon.debug.text[118] = 'ONTVANGEN [status: ';
    jaxon.debug.text[119] = ', omvang: ';
    jaxon.debug.text[120] = ' bytes, Zeit: ';
    jaxon.debug.text[121] = 'ms]:\n';
    jaxon.debug.text[122] = 'De server retourneert de volgende HTTP-status: ';
    jaxon.debug.text[123] = '\nONTVANGEN:\n';
    jaxon.debug.text[124] = 'De server retourneert een doorverwijzing naar:<br />';
    jaxon.debug.text[125] = 'KLAAR [';
    jaxon.debug.text[126] = 'ms]';
    jaxon.debug.text[127] = 'INITIALISATIE OBJECT AANVRAAG';

    /*
        Array: exceptions
    */
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Ongeldig XML-antwoord: het antwoord bevat een onbekende tag: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest is niet beschikbaar, XajaX is uitgeschakeld.';
    jaxon.debug.exceptions[10003] = 'Wachtrij limiet overschreden: kan het object niet in de wachtrij plaatsen, omdat die vol is.';
    jaxon.debug.exceptions[10004] = 'Ongeldig XML-antwoord: het antwoord bevat een onverwachte tag of tekst: {data}.';
    jaxon.debug.exceptions[10005] = 'Ongeldige Request-URI: Ongeldige of ontbrekende URI; automatische detectie faalt; specificeer een URI expliciet.';
    jaxon.debug.exceptions[10006] = 'Ongeldig antwoord bevel: misvormd antwoord bevel ontvangen.';
    jaxon.debug.exceptions[10007] = 'Ongeldig antwoord bevel: Bevel [{data}] is niet bekend.';
    jaxon.debug.exceptions[10008] = 'Element met het ID [{data}] kon niet in het document worden gevonden.';
    jaxon.debug.exceptions[10009] = 'Ongeldige aanvraag: Missende functie parameter - naam.';
    jaxon.debug.exceptions[10010] = 'Ongeldige aanvraag: Missende functie parameter - object.';

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
                window.status = "Verzenden aanvraag...";
            },
            onWaiting: function() {
                window.status = "Wachten op antwoord...";
            },
            onProcessing: function() {
                window.status = "Verwerking...";
            },
            onComplete: function() {
                window.status = "Afgesloten.";
            }
        }
    }
}
