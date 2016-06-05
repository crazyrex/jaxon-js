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
    jaxon.debug.text[100] = 'ALERTA: ';
    jaxon.debug.text[101] = 'ERROR: ';
    jaxon.debug.text[102] = 'MENSAJE DE DEPURACION XAJAX:\n';
    jaxon.debug.text[103] = '...\n[RESPUESTA LARGA]\n...';
    jaxon.debug.text[104] = 'ENVIANDO PETICION';
    jaxon.debug.text[105] = 'ENVIADO [';
    jaxon.debug.text[106] = ' bytes]';
    jaxon.debug.text[107] = 'LLAMADA: ';
    jaxon.debug.text[108] = 'URI: ';
    jaxon.debug.text[109] = 'INICIALIZANDO PETICION';
    jaxon.debug.text[110] = 'PROCESANDO PARAMETROS [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'NO HAY PARAMETROS QUE PROCESAR';
    jaxon.debug.text[113] = 'PREPARANDO PETICION';
    jaxon.debug.text[114] = 'INICIANDO LLAMADA XAJAX (En desuso: use jaxon.request)';
    jaxon.debug.text[115] = 'INICIANDO PETICION XAJAX';
    jaxon.debug.text[116] = 'Ningun procesador de respuesta esta disponible para tratar la respuesta del servidor.\n';
    jaxon.debug.text[117] = '.\nRevisa mensajes de error del servidor.';
    jaxon.debug.text[118] = 'RECIBIDO [status: ';
    jaxon.debug.text[119] = ', tamaño: ';
    jaxon.debug.text[120] = ' bytes, tiempo: ';
    jaxon.debug.text[121] = 'ms]:\n';
    jaxon.debug.text[122] = 'El servidor retorno el siguiente estado HTTP: ';
    jaxon.debug.text[123] = '\nRECIBIDO:\n';
    jaxon.debug.text[124] = 'El servidor retorno una redireccion a:<br />';
    jaxon.debug.text[125] = 'HECHO [';
    jaxon.debug.text[126] = 'ms]';
    jaxon.debug.text[127] = 'INICIALIZANDO PETICION DEL OBJETO';
     
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Respuesta XML invalida: La respuesta contiene una etiqueta desconocida: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest no disponible, jaxon esta deshabilitado.';
    jaxon.debug.exceptions[10003] = 'Queue overflow: No se puede colocar objeto en cola porque esta llena.';
    jaxon.debug.exceptions[10004] = 'Respuesta XML invalida: La respuesta contiene una etiqueta o texto inesperado: {data}.';
    jaxon.debug.exceptions[10005] = 'Solicitud URI invalida: URI invalida o perdida; autodeteccion fallida; por favor especifica una explicitamente.';
    jaxon.debug.exceptions[10006] = 'Comando de respuesta invalido: Orden de respuesta mal formado recibido.';
    jaxon.debug.exceptions[10007] = 'Comando de respuesta invalido: Comando [{data}] no es un comando conocido.';
    jaxon.debug.exceptions[10008] = 'Elemento con ID [{data}] no encontrado en el documento.';
    jaxon.debug.exceptions[10009] = 'Respuesta invalida: Nombre parametro de funcion perdido.';
    jaxon.debug.exceptions[10010] = 'Respuesta invalida: Objeto parametro de funcion perdido.';

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
                window.status = 'Enviando Peticion...';
            },
            onWaiting: function() {
                window.status = 'Esperando Respuesta...';
            },
            onProcessing: function() {
                window.status = 'Procesando...';
            },
            onComplete: function() {
                window.status = 'Hecho.';
            }
        }
    }
}
