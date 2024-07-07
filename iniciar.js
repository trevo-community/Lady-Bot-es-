const { 'default': makeWASocket, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion, MessageRetryMap, extractGroupMetadata, generateWAMessageFromContent, proto, otherOpts, makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./push.js');

const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, rggold, anotar, getRandom, NodeCache } = require('./push.js');
const pino = require('pino')
var LINKS_T = require("./armor/links.json");
const trevoapi = JSON.parse(fs.readFileSync('./dono.json'))
const anikit = trevoapi.servidor
const key = trevoapi.chave_servidor
const username = trevoapi.nome_servidor
const servidor = anikit
let sessionStartTime;

const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Sesión de clausura: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Eliminando sesión cerrada antigua: SessionEntry {")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

var qrcode = "./WhatsApp-Conexao";
const readline = require("readline");

const usePairingCode = process.argv.includes("--use-pairing-code")

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
});

const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function INC() {

const { state, saveCreds } = await useMultiFileAuthState(qrcode);

const sock = makeWASocket({
    logger: pino({ level: 'silent' }),
    auth: state,
    msgRetryCounterCache,
    usePairingCode: true,
    defaultQueryTimeoutMs: undefined,
    patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(message.buttonsMessage || message.listMessage);
    if (requiresPatch) {
    message = {viewOnceMessage: {
    message: {messageContextInfo: {
    deviceListMetadataVersion: 2,
    deviceListMetadata: {},
    },...message }}}}
    return message;
    }});
    
          if (!sock.authState.creds.registered) {
             const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ("559885512460")\n/> `);
             const code = await sock.requestPairingCode(phoneNumber);
             console.log(`Seu código de conexão é: ${code}\n`);
             console.log(`Abra seu WhatsApp, vá em ("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")`)
          }
const conn = sock

conn.ev.process(
async(events) => {
  
if(events["group-participants.update"]){
try {
var ale2 = events["group-participants.update"];
if(!fs.existsSync(`./armor/grupos/${ale2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./armor/grupos/${ale2.id}.json`));

if(ale2.participants[0].startsWith(conn.user.id.split(':')[0])) return;

try {
var grpmdt = await conn.groupMetadata(ale2.id);
} catch (e) {
return;
}
const isGroup2 = grpmdt.id.endsWith('@g.us');
try {
var GroupMetadata_ = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';

const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(ale2.action == 'add'){
num = ale2.participants[0];
if(nescessario.listanegraG.includes(num)){
await conn.sendMessage(GroupMetadata_.id,{text: '*Mira quién apareció aquí, siente el poder de la prohibición.*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
return;
}}
if(ale2.action == 'remove'){
num = ale2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage));
}
}
if(ale2.action == 'add' && jsonGp[0].listanegra.includes(ale2.participants[0])){
await conn.sendMessage(GroupMetadata_.id,{text: '*Mira quién apareció aquí, siente el poder de la calabaza de prohibición.*'});
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && ale2.action === 'add' && !ale2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await conn.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
conn.groupParticipantsUpdate(GroupMetadata_.id, [ale2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await conn.groupMetadata(ale2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !ale2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await conn.profilePictureUrl(ale2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await conn.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(ale2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(ale2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
conn.sendMessage(mdata_2.id, {image: {url:servidor + `/welcome?nick=${ale2.participants[0].split('@')[0]}&background=${LINKS_T.fundo2}&guildName=${encodeURI(mdata_2.subject)}&guildIcon=${shortpc.data}&memberCount=233&avatar=${shortpc.data}&key=${username}&username=${key}`},
mentions: ale2.participants, caption: teks});
DLT_FL(ran);
} else if(ale2.action === 'remove') {
mem = ale2.participants[0];

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(ale2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
fs.writeFileSync(ran, buff);
conn.sendMessage(mdata_2.id, {image: {url:servidor + `/goodbye?nick=${ale2.participants[0].split('@')[0]}&background=${LINKS_T.fundo2}&guildName=${encodeURI(mdata_2.subject)}&guildIcon=${shortpc.data}&memberCount=233&avatar=${shortpc.data}&key=${username}&username=${key}`}, caption: teks, 
mentions: ale2.participants});
DLT_FL(ran)
}
}

if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(ale2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+ale2.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(ale2.participants[0].split('@')[0], mdata_2.subject)
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
} else if(ale2.action === 'remove') {
var mem = ale2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', mem.split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
conn.sendMessage(mdata_2.id, {text: teks, mentions: ale2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {
console.log(colors.green("NECESITARÁS UN SEGUNDO TELÉFONO CELULAR PARA TOMAR UNA FOTO DEL CÓDIGO QR, Y LUEGO ESCANEAR LA FOTO QUE TOMASTE"))
}

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//LMR
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("La conexión se ha caído, volveré a llamar, si continúa con este error, probablemente su Internet se esté cayendo constantemente."));
} else if(shouldReconnect == 401) {
console.log(colors.red("EL CÓDIGO QR DEL BOT SE HA DESCONECTADO, VUELVA A LEER EL CÓDIGO QR PARA CONECTARLO"))
exec(`rm -rf ${qrcode}`);
} else if(shouldReconnect == 515) {
console.log(colors.gray("Reinicio Necesario para estabilizar la conexión..."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Estás teniendo un pequeño conflicto, si esto aparece más de 4 veces, creo que hay otra sesión abierta, o el bot está conectado en otro lugar, de lo contrario ignóralo."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Error desconocido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("ESTAS QUERIENDO CAER, EL INTERNET ES LENTO..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("conexion debil..."))
} else {
console.log('conexion cerrada _- POR: ', lastDisconnect?.error);
}
INC()
}
break;

case 'connecting':
console.log(colors.green('iniciando...'))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(
`Lady Bot Online!!!`))
sessionStartTime = Math.floor(new Date().getTime() / 1000);
await conn.sendPresenceUpdate("available")
break;

default:
break;
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"];
const startAle = require('./index.js');
sessionStartTim = upsert.messages.some(i => i.messageTimestamp > sessionStartTime)
startAle(upsert, conn, qrcode, sessionStartTim).then(() => {}).catch((error) => {
console.log('Error en el Bot:', String(error));
});
}


if(events["creds.update"]) {
await saveCreds();
}

})
}
INC().catch(async(e) => {
console.log(colors.red("ERROR AL INICIAR.JS: "+e))
})