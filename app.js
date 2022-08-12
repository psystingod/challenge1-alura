const decrypted = ['a', 'e', 'i', 'o', 'u'];
const encrypted = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function encryptMessage() {
    let message = document.querySelector("#text").value;
    let encryptedMessage = encrypt(message);
    document.querySelector("#heading").innerText = "Tu mensaje ha sido codificado";
    document.querySelector("#message").innerText = encryptedMessage;
}

function decryptMessage() {
    let message = document.querySelector("#text").value;
    let decryptedMessage = decrypt(message);
    document.querySelector("#heading").innerText = "Tu mensaje ha sido decodificado";
    document.querySelector("#message").innerText = decryptedMessage;
}

function encrypt(input) {
    let splitted = input.toLowerCase().split("");
    let encryptedText = "";
    let consonant = false;

    for (let i = 0; i < splitted.length; i++) {
        for (let j = 0; j < decrypted.length; j++) {
            if (splitted[i] === decrypted[j]) {
                encryptedText += encrypted[j];
                consonant = false;
                break;

            } else
                consonant = true;
        }

        if (consonant)
            encryptedText += splitted[i];
    }

    return encryptedText;
}

function decrypt(input) {
    let splitted = input.toLowerCase();
    let decryptedText = "";

    let subs = /ai/g;
    var decoded1 = splitted.replace(subs, decrypted[0]);
    subs = /enter/g;
    var decoded2 = decoded1.replace(subs, decrypted[1]);
    subs = /imes/g;
    var decoded3 = decoded2.replace(subs, decrypted[2]);
    subs = /ober/g;
    var decoded4 = decoded3.replace(subs, decrypted[3]);
    subs = /ufat/g;
    decryptedText = decoded4.replace(subs, decrypted[4]);

    return decryptedText;
}

let originalMessage = document.querySelector("#message").innerText;
let originalHeading = document.querySelector("#heading").innerText;

function changeMessage() {
    document.querySelector("#message").innerText = "";
    document.querySelector("#heading").innerText = "";
    let rawText = document.querySelector("#text").value;
    let message = document.querySelector("#message").innerText;
    message += rawText;

    document.querySelector("#message").innerText = message;
    document.querySelector("#heading").innerText = "Tu mensaje está listo para encriptar/desencriptar";

    if (document.querySelector("#message").innerText === "") {
        document.querySelector("#message").innerText = originalMessage;
        document.querySelector("#heading").innerText = originalHeading;
    }
}

document.querySelector("#encriptar").onclick = encryptMessage;
document.querySelector("#desencriptar").onclick = decryptMessage;
document.querySelector("#text").onkeyup = changeMessage;