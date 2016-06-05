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
    jaxon.debug.text[100] = 'ATTENTION : ';
    jaxon.debug.text[101] = 'ERREUR : ';
    jaxon.debug.text[102] = 'MESSAGE DE DEBUG XAJAX :\n';
    jaxon.debug.text[103] = '...\n[R�PONSE LONGUE]\n...';
    jaxon.debug.text[104] = 'ENVOI DE LA REQU�TE';
    jaxon.debug.text[105] = 'ENVOY� [';
    jaxon.debug.text[106] = ' octets]';
    jaxon.debug.text[107] = 'APPEL : ';
    jaxon.debug.text[108] = 'URI : ';
    jaxon.debug.text[109] = 'INITIALISATION DE LA REQU�TE';
    jaxon.debug.text[110] = 'TRAITEMENT DES PARAM�TRES [';
    jaxon.debug.text[111] = ']';
    jaxon.debug.text[112] = 'AUCUN PARAM�TRE � TRAITER';
    jaxon.debug.text[113] = 'PR�PARATION DE LA REQU�TE';
    jaxon.debug.text[114] = 'D�BUT DE L\'APPEL XAJAX (d�pr�ci�: utilisez plut�t jaxon.request)';
    jaxon.debug.text[115] = 'D�BUT DE LA REQU�TE';
    jaxon.debug.text[116] = 'Aucun traitement disponible pour traiter la r�ponse du serveur.\n';
    jaxon.debug.text[117] = '.\nV�rifie s\'il existe des messages d\'erreur du serveur.';
    jaxon.debug.text[118] = 'RE�US [statut : ';
    jaxon.debug.text[119] = ', taille: ';
    jaxon.debug.text[120] = ' octets, temps: ';
    jaxon.debug.text[121] = 'ms] :\n';
    jaxon.debug.text[122] = 'Le serveur a retourn� la statut HTTP suivant : ';
    jaxon.debug.text[123] = '\nRE�US :\n';
    jaxon.debug.text[124] = 'Le serveur a indiqu� une redirection vers :<br />';
    jaxon.debug.text[125] = 'FAIT [';
    jaxon.debug.text[126] = 'ms]';
    jaxon.debug.text[127] = 'INITIALISATION DE L\'OBJET REQU�TE';

    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'R�ponse XML non valide : La r�ponse contient une balise inconnue : {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject : XMLHttpRequest n\'est pas disponible, jaxon est d�sactiv�.';
    jaxon.debug.exceptions[10003] = 'File pleine : Ne peut ajouter un objet � la file car elle est pleine.';
    jaxon.debug.exceptions[10004] = 'R�ponse XML non valide : La r�ponse contient une balise ou un texte inattendu : {data}.';
    jaxon.debug.exceptions[10005] = 'URI de la requ�te non valide : URI non valide ou manquante; auto-d�tection �chou�e; veuillez en sp�cifier une explicitement.';
    jaxon.debug.exceptions[10006] = 'R�ponse de commande invalide : Commande de r�ponse re�ue mal form�e.';
    jaxon.debug.exceptions[10007] = 'R�ponse de commande invalide : Commande [{data}] est inconnue.';
    jaxon.debug.exceptions[10008] = 'L\'�l�ment d\'ID [{data}] est introuvable dans le document.';
    jaxon.debug.exceptions[10009] = 'Requ�te invalide : Aucun nom de fonction indiqu� en param�tre.';
    jaxon.debug.exceptions[10010] = 'Requ�te invalide : Aucun objet indiqu� en param�tre pour la fonction.';
}

if (typeof jaxon.config != 'undefined' && typeof jaxon.config.status != 'undefined') {
    /*
        Object: mise � jour
    */
    jaxon.config.status.update = function() {
        return {
            onRequest: function() {
                window.status = 'Envoi de la requ�te...';
            },
            onWaiting: function() {
                window.status = 'Attente de la r�ponse...';
            },
            onProcessing: function() {
                window.status = 'En cours de traitement...';
            },
            onComplete: function() {
                window.status = 'Fait.';
            }
        }
    }
}
