
const anikey = "Lady-Bot"
const aninick = "SLady-Bot"

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat } = require('@whiskeysockets/baileys');

//_-_-_-__-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-__-_-_-_-_-\\

const { fs, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, response, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, rgp, rg_aluguel } = require('./push.js');

//-_-_-_-_-_--_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, anotacao, infosorteio, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infocontador, infoduelo, infobienvenida, idiomagtts, infolistanegra, infotransmitir, infopalavrao, infobancarac, infodono, gitdobot, configbot, cmd_termux, alteradores, tabela, conselhob, palabrasc, ban, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, patentes, antispam, rggold, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ } = require('./push.js');
const trevoapi = JSON.parse(fs.readFileSync('./dono.json'))
const anikit = trevoapi.servidor
const key = trevoapi.chave_servidor
const username = trevoapi.nome_servidor
const servidor = anikit
//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

var { antipv3, TOKEN_GPT,  isrecortarlink, cmdpremium, msgantipv2, vermensaje, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./dono/nescessario.json");

const Links_P = require("./armor/links.json");

var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeo, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau } = require("./armor/links.json");

var { NomeDoBot, NickDono, prefix } = require("./dono.json");

try {
var recolherLNK = JSON.parse(fs.readFileSync("./armor/funcoes/recolherLNK.json"));
} catch (e) {
fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify([]));
}

const ANT_FL = JSON.parse(fs.readFileSync("./armor/json/ANTI_SPAM.json"));

try {
var SIMI_OFC = JSON.parse(fs.readFileSync("./armor/json/simi.json"));
} catch (e){
fs.writeFileSync("./armor/json/simi.json", JSON.stringify([]));
}

//====================≠≠===============\\
 
var RND_TOKEN_GPT = TOKEN_GPT[Math.floor(Math.random() * TOKEN_GPT.length)];
 
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

const SNET = "@s.whatsapp.net";

function VR_EMJ_LMD(text) {
const regex =/[\u0300-\u036F\u0483-\u0489\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/g;
return regex.test(text);
}

process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});

// ABAIXO: INÍCIO DE CONEXÃO

async function ladyonline(upsert, conn, qrcode, sessionStartTim) {

if(sessionStartTim) {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"),
"") + SNET;

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

const VR_JSON_GLOBAL = fs.existsSync(`./armor/grupos/${from}.json`) ? true : false;

const JOGO_D_V = fs?.existsSync(`./armor/tictactoe/db/${from}.json`) ?
JSON?.parse(fs?.readFileSync(`./armor/tictactoe/db/${from}.json`)) : false

if(VR_JSON_GLOBAL) {
var jsonGp = JSON.parse(fs.readFileSync(`./armor/grupos/${from}.json`));
}

if(VR_JSON_GLOBAL && jsonGp[0]?.x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
conn.sendMessage(info.key.remoteJid, {text: `🥳Felicidades @${info.messageStubParameters[0].split("@")[0]} fuiste ascendido al papel de administrador . \nAccion realizada por: @${info.participant.split("@")[0]}`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
case 30:
await delay(1000);
conn.sendMessage(info.key.remoteJid, {
text: `😢 Se te quito la administracion @${info.messageStubParameters[0].split("@")[0]}.\n Acción realizada por : @${info.participant.split("@")[0]}`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(vermensaje) {
await conn.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

//==============(BODY)================\\

var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if (isGroup && VR_JSON_GLOBAL) {
if (jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos.find(p => String(body)?.trim()?.startsWith(p)) || jsonGp[0].prefixos[0];
} else {
var prefix = setting.prefix;
}
} else if (!isGroup || (isGroup && !VR_JSON_GLOBAL)) {
var prefix = setting.prefix;
}



var isCmd = body.trim().startsWith(prefix);

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = info?.message?.conversation || info?.message?.extendedTextMessage?.text || '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");

//======================================\\

try {var groupMetadata = isGroup ?  await conn.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +SNET: info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await conn.user.id.split(':')[0]+SNET;
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : '';

const groupMembers = isGroup ? groupMetadata.participants : '';

const isnit = nit.includes(sender);

const issupre = supre.includes(sender);

const ischyt = chyt.includes(sender);

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';

const somembros = isGroup ? getMembros(groupMembers) : '';

//=======================================\\
const client = conn
const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") +
SNET || isnit;

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`,
`${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`,
`${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`];

//===========(Res_espere)=============\\

const { Mensajes } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = Mensajes[Math.floor(Math.random() * Mensajes.length)];
//========================================\\

//================= Funções de Grupo 🥋 =============//

const dirGroup = `./armor/grupos/${from}.json`;

const nescj = "./dono/nescessario.json";

const data_IDGP = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false,
sistemGold: false, visuUnica: false, 
registrarFIGUS: false, soadm: false,
rg_aluguel: false,
listanegra: [], advertir: [], prefixos: ["!"],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagen: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}],
minerar_gold: [], ausentes: [], forca_inc: false, 
antipalabras: {
active: false,
palabras: []
},
limitec: {
active: false,
cantidad: null
},
wellcome: [{
bienvenida1: false,
legendabv: "Hola #numerodele#, Bienvenido(a)",
legendasaiu: 0
},
{
bienvenida2: false,
legendabv: "Hola #numerodele#,bienvenido(a)",
legendasaiu: 0
}],
simi1: false, simi2: false,
autosticker: false, autorespuesta: false,
jogos: false, level: false,
bangp: false, nsfw: false
}];

if(isGroup && !fs.existsSync(dirGroup)){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}

try {
var dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2))}

//=======(ADMS/DONO/ETC..CONST)========\\

const adivinha = info.key.id.length > 21 ? 'Android ツ' : info.key.id.substring(0, 2) == '3A' ? 'IPhone ｯ' : 'WhatsApp web シ';

const quoted = info.quoted ? info.quoted : info;

const isBot = info.key.fromMe ? true : false;

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre ||
ischyt;

dfndofc = setting.numerodono+SNET;

const DonoOficial = dfndofc.includes(sender) ;

const isPremium = premium.includes(sender) || SoDono;

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;

const isGroupAdmins = groupAdmins.includes(sender) || SoDono

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.vermensaje

const isVerificado = nescessario.verificado

const isAudioMenu = nescessario.menu_audio

const isAntiPv2 = nescessario.antipv2

const isAntiPv3 = nescessario.antipv3

const isConsole = nescessario.consoleoff

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAntiPv = nescessario.antipv

const isAnticall = nescessario.anticall

//============(FUNÇÕES)============\\


const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const IS_sistemGold = isGroup ? dataGp[0].sistemGold : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bienvenida1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bienvenida2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autorespuesta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalabras.active : undefined

const ispalabras = isGroup ? dataGp[0].antipalabras.palabras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.cantidad : undefined

//=======================================\\

var Res_espere = enviarmen

var Res_SoGrupo = "Este comando solo puede ser utilizado en grupos."

var Res_SoDono = "Este comando solo puede ser usado por mi creador."

var Res_SoAdm = "Solo los administradores del grupo pueden usar este comando."

var Res_BotADM = "El bot necesita ser administrador del grupo, para usar este comando"

var Res_SoModoBN = `Digite ${prefix}modobrincadeira 1 , para activar y ${prefix}modobrincadeira 0 para desactivar`

//==========(VERIFICADO)===============\\

if(isVerificado) {
var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`}}}
} else {
var selo = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + SNET

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
return linkfy.find(url)[0]?.isLink
}

if(!isCmd && info.key.fromMe) return

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
return reply("error..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Buenas Madrugadas'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Buenos Dias'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Buenas Tardes'
} if(time2 > "18:00:00"){
var tempo = 'Buenas Noches'
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: {url: fileName}}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: {url: ytb}}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+SNET)
}}
conn.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+SNET)
}}
conn.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
conn.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await conn.onWhatsApp(sla)
if(result == undefined) {
reply("El usuario mencionado no existe en el whatsapp")
} else {
reply(`-> ${sla} El número ingresado existe en WhatsApp.\n\ncon id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
conn.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
conn.sendMessage(from, {text: "Te eliminare por estar molestando y etiquetando a todos los del grupo . Si me equivoco contactate con algun administrador"})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
conn.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
conn.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack =`🐞 ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack =`🐞 ⇝ Grupo:\n${groupName}`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./armor/json/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./armor/json/afk-@${nmrdnofc1}.json`));  

txt = `- Hola, ${NickDono} Se encuentra ausente\n\n - Desde: ${tabelin.Ausente_Desde}\n\n- 😇 Mensaje de Ausencia : ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}
mention(`
╭─────────────
┊ Registro de ausencia.
┊ 
┊ ADM: @${blak.id.split("@")[0]}
┊   
╰────◉  ◊

↺➤ Mensaje : ${blak.msg}

 ─────────────`)
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-ale") || info.key.fromMe && budy.includes("reiniciar-ale")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./iniciar.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info}).catch(e => {
return reply("error..")
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("error.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////
if(isConsole) {
if(isGroup && info.message?.reactionMessage?.text) {
console.log(colors.brightGreen(`
 〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
 〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
 〔 ${isGroup ? colors.brightMagenta("GRUPO"): colors.brightMagenta("PRIVADO")} 〕${isGroup ? `〔 ${colors.cyan(groupName)} 〕`: ""}
 〔 REACCIÓN 〕: 〔 ${info.message.reactionMessage.text} 〕
`))  
} else if(isGroup && !isCmd) {
console.log(colors.brightGreen(`
〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
`))
} else if(isCmd && !isGroup) {
console.log(colors.brightGreen(`
〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
〔 ${colors.red("PRIVADO")} 〕 
〔 COMANDO 〕 :「 ${command} 」
`)) 
} else if(isCmd && isGroup) {
console.log(colors.brightGreen(`
〔 ${colors.brightYellow("USUARIO")} 〕: ${pushname}
〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
〔 ${colors.brightMagenta("GRUPO")} 〕:〔 ${colors.cyan(groupName)} 〕
〔 COMANDO 〕:「 ${command} 」
 `))
} else {
console.log(colors.brightGreen(`
〔 ${colors.brightYellow("USUARIO")} 〕 : ${pushname}
〔 NÚMERO 〕:〔 ${colors.brightMagenta(sender.split("@")[0])} 〕
〔 ${colors.red("PRIVADO")} 〕
`))  
}
}
numerodn = setting.numerodono
//======(JOGO-DA-VELHA)=======(Função)===\\

async function joguinhodavelha() {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(JOGO_D_V != false) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "S" ||
budy.toLowerCase() == "si" ||
budy.toLowerCase() == "aceptar" ||
budy.toLowerCase() == "Si" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace(SNET, "")) {
if(boardnow.status)
return reply(`El juego comenzo antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Su turno : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "N" ||
budy.toLowerCase() == "No" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace(SNET, "")) {
if(boardnow.status)
return reply(`El juego ya comenzo!`);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *Su oponente no quizo aceptar el desafio, lo siento mucho ❌😕_*`)
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Rayos !! Parece que su oponente no acepto el desafio.`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace(SNET, "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Él juego termina en enpate .😐
`;
reply(chatEqual);
DLT_FL(`./armor/tictactoe/db/${from}.json`);
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;

mention(chatWon)
setTimeout( () => {
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JUEGO REINICIADO ...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('El tiempo finalizo'));
}
}, 300000) //5 minutos
reply(`_*🥳Felicidades @${winnerJID} usted gano 20 Golds por haber ganado el juego 🎉...*_`)   
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 20
Goldrgs(rggold)
}}
DLT_FL(`./armor/tictactoe/db/${from}.json`);
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

su turno : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatMove);
}
} 
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 

let link_dgp;
try {
link_dgp = await conn?.groupInviteCode(from)
} catch {
link_dgp = "000000"
}
if(Procurar_String.match(link_dgp)) return reply('Enlace a nuestro grupo, no lo eliminaré..')  
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

//========(CONTADOR-DE-Mensajes)========\\ LMR
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./armor/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return conn.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return conn.sendMessage(from, {text: bang}, {quoted: info})
}

conn.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && !isGroupAdmins && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(dataGp[0].legenda_imagen != "0") {
conn.sendMessage(from, {text: dataGp[0].legenda_imagen}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
conn.sendMessage(from, {text: '*mensaje prohibido detectado, procedere a banearlo...*'}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(dataGp[0].legenda_documento != "0") {
conn.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok','facebook','instagram','twitter','ytmp3','ytmp4','play', 'play_audio', 'play_video', 'play').some(item => item === command)

if (isUrl(Procurar_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if (Procurar_String.includes("chat.whatsapp.com")) {
var link_dgp = await conn?.groupInviteCode(from);
if (!link_dgp || !Procurar_String.match(link_dgp)) {
conn.groupParticipantsUpdate(from, [sender], 'remove');
} else {
return reply('Enlace a nuestro grupo, no lo eliminaré..');
}
}

if (isCmd && isTrueFalse) return;

var OSINF_K = [];
await OSINF_K.push(info.key.id);
conn.groupSettingUpdate(from, 'announcement');
setTimeout(() => {
conn.groupSettingUpdate(from, 'not_announcement');
}, 1500);

setTimeout(async () => {
for (var i of OSINF_K) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: i, participant: sender } });
OSINF_K = [];
}
}, 500);

var groupMemberIds = new Set(groupMembers.map(i => i.id));
if (!groupMemberIds.has(sender)) return;
conn.groupParticipantsUpdate(from, [sender], 'remove');
}


// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && !isGroupAdmins && type == 'videoMessage') {
if(dataGp[0].legenda_video == "0") {
conn.sendMessage(from, {text: '*mensaje prohibido detectado, procedere a banearlo...*'}, {quoted: info})
} else {
conn.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && !isGroupAdmins && type == 'audioMessage') {
conn.sendMessage(from, {text: '*mensaje prohibido detectado, procedere a banearlo...*'}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\
var BLC_CL = []
if(isAntiPv && !BLC_CL.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
reply("_- PROGRAMACIÓN - _\n\n BLOQUEAR / USUARIOS PARA ENVIAR MENSAJES AL BOT\n\n_- REALIZANDO ACCIÓN_-")
setTimeout(async () => {
conn.updateBlockStatus(sender, 'block')
}, 2000)
return
}
BLC_CL.push(sender)
}
//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
conn.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTIPV-QUE-SÓ-FALA)==========\\
var MSG_ANTPV2 = []
if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt &&
!info.key.fromMe && isAntiPv2 && !MSG_ANTPV2.includes(sender)) {
reply(msgantipv2)
MSG_ANTPV2.push(sender)
}

//======================================\\

// ANTI PV QUE IGNORA
if(!isGroup && !isPremium && !SoDono && !info.key.fromMe && isAntiPv3) {
    return
    }
    const nomeBot = NomeDoBot
    // ANTI_LIGAR \\
    var BLC_ANTCL = []
    if(!isGroup && isAnticall && !BLC_ANTCL.includes(sender)) {
    conn.ws.on('CB:call', async (B) => {
    if(B.content[0].tag == 'offer') {
    conn.sendMessage(B.content[0].attrs['call-creator'], { text: "_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR EFETUAR LIGAÇÃO PARA O BOT\n\n_- REALIZANDO AÇÃO _-" }).then(() => { 
    conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
    })
    }
    })
    BLC_ANTCL.push(sender)
    }
//======================================\\ LMR

var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {

try {
var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
} catch {
var qnt_msg = 0  
}

var patente = "Aspirante"
 
var level_up = 0

if(qnt_msg >= 0 && qnt_msg < 20){var patente = "Aspirante"; var level_up = 0};if(qnt_msg >= 20 && qnt_msg < 50){var patente = "Recruta"; var level_up = 1}; if(qnt_msg >= 50 && qnt_msg < 100){var patente = "Soldado"; var level_up = 2}; if(qnt_msg >= 100 && qnt_msg < 200){var patente = "Cabo"; var level_up = 3}; if(qnt_msg >= 200 && qnt_msg < 300){var patente = "Sargento"; var level_up = 4}; if(qnt_msg >= 300 && qnt_msg < 400){var patente = "Sargento I"; var level_up = 5}; if(qnt_msg >= 400 && qnt_msg < 500){var patente = "Sargento II"; var level_up = 6}; if(qnt_msg >= 500 && qnt_msg < 600){var patente = "Sargento III"; var level_up = 7}; if(qnt_msg >= 600 && qnt_msg < 700){var patente = "Sargento IV"; var level_up = 8}; if(qnt_msg >= 700 && qnt_msg < 800){var patente = "Sargento V"; var level_up = 9}; if(qnt_msg >= 800 && qnt_msg < 900){var patente = "Sargento VI"; var level_up = 10}; if(qnt_msg >= 900 && qnt_msg < 1000){var patente = "Sargento VII"; var level_up = 11}; if(qnt_msg >= 1000 && qnt_msg < 1100){var patente = "Sargento VII"; var level_up = 12}; if(qnt_msg >= 1100 && qnt_msg < 1200){var patente = "Sargento VIII"; var level_up = 13}; if(qnt_msg >= 1200 && qnt_msg < 1500){var patente = "Sargento IX"; var level_up = 14}; if(qnt_msg >= 1500 && qnt_msg < 2000){var patente = "Sargento X"; var level_up = 15}; if(qnt_msg >= 2000 && qnt_msg < 2500){var patente = "Teniente I"; var level_up = 16}; if(qnt_msg >= 2500 && qnt_msg < 2600){var patente = "Teniente II"; var level_up = 17}; if(qnt_msg >= 2600 && qnt_msg < 2700){var patente = "Teniente III"; var level_up = 18}; if(qnt_msg >= 2700 && qnt_msg < 2800){var patente = "Teniente III"; var level_up = 19}; if(qnt_msg >= 2800 && qnt_msg < 2900){var patente = "Teniente IV"; var level_up = 20}; if(qnt_msg >= 2900 && qnt_msg < 3000){var patente = "Teniente V"; var level_up = 21}; if(qnt_msg >= 3000 && qnt_msg < 3200){var patente = "Capitan I"; var level_up = 22}; if(qnt_msg >= 3200 && qnt_msg < 3400){var patente = "Capitan II"; var level_up = 23}; if(qnt_msg >= 3400 && qnt_msg < 3800){var patente = "Capitan III"; var level_up = 24};if(qnt_msg >= 3800 && qnt_msg < 4000){var patente = "Capitan IV"; var level_up = 25}; if(qnt_msg >= 4000 && qnt_msg < 5000){var patente = "Capitan V"; var level_up = 26}; if(qnt_msg >= 5000 && qnt_msg < 5500){var patente = "Mayor I"; var level_up = 27}; if(qnt_msg >= 5500 && qnt_msg < 6000){var patente = "Mayor II"; var level_up = 28}; if(qnt_msg >= 6000 && qnt_msg < 6500){var patente = "Mayor III"; var level_up = 29}; if(qnt_msg >= 6500 && qnt_msg < 8000){var patente = "Mayor IV"; var level_up = 30}; if(qnt_msg >= 8000 && qnt_msg < 9000){var patente = "Mayor V"; var level_up = 31};if(qnt_msg >= 9000 && qnt_msg < 10000){var patente = "Teniente C I"; var level_up = 32};if(qnt_msg >= 10000 && qnt_msg < 11000){var patente = "Teniente C II"; var level_up = 33};if(qnt_msg >= 11000 && qnt_msg < 12000){var patente = "Teniente C II"; var level_up = 34};if(qnt_msg >= 12000 && qnt_msg < 13000){var patente = "Teniente C III"; var level_up = 35};if(qnt_msg >= 13000 && qnt_msg < 15000){var patente = "Teniente C IV"; var level_up = 36};if(qnt_msg >= 15000 && qnt_msg < 17000){var patente = "Teniente C V"; var level_up = 37};if(qnt_msg >= 17000 && qnt_msg < 20000){var patente = "Coronel I"; var level_up = 38}; if(qnt_msg >= 20000 && qnt_msg < 23000){var patente = "Coronel II"; var level_up = 39}; if(qnt_msg >= 25000 && qnt_msg < 28000){var patente = "Coronel III"; var level_up = 40}; if(qnt_msg >= 28000 && qnt_msg < 30000){var patente = "Coronel IV"; var level_up = 41}; if(qnt_msg >= 30000 && qnt_msg < 35000){var patente = "Coronel V"; var level_up = 42}

if(isLevelingOn && !type == "stickerMessage") {
switch(qnt_msg) {
case 20: case 50: case 100: case 200:case 300: case 400:
case 500: case 600: case 700: case 800: case 900: case 1000:
case 1100: case 1200: case 1500: case 2000: case 2500: case 2600:
case 2700: case 2800: case 2900: case 3000: case 3200: case 3400:
case 3600: case 3800: case 4000: case 5000: case 5500: case 6000:
case 6500: case 8000: case 9000: case 10000: case 11000: case 12000: 
case 13000: case 15000: case 17000: case 20000: case 23000: 
case 25000: case 28000: case 30000:
conn.sendMessage(from, {text: `
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
✥ Felicidades : @${sender.split("@")[0]}

Has aumentado tu nivel y también tu rango al completar ${qnt_msg} mensajes y recibió 25 de oro, consulte la información abajo\n
✧ Patente: ${patente}

✧ Level: ${level_up}

￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
, mentions: [sender]}) 
if(JSON.stringify(rggold).includes(from)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
if(JSON.stringify(rggold[i2].usus).includes(sender)) {
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += 25
Goldrgs(rggold)
}}
break
}
}
}

if(isGroup) {
if(!JSON.stringify(patentes).includes(from)) {
patentes.push({
grupoID: from, 
usus: [{
id: sender, 
level_usu: level_up,
patente_usu: patente}]})
fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
}
var i8 = patentes.map(i => i.grupoID).indexOf(from)
if(!JSON.stringify(patentes[i8].usus).includes(sender)) {
patentes[i8].usus.push({
id: sender, 
level_usu: level_up,
patente_usu: patente})
fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
}
var i9 = patentes[i8].usus.map(i => i.id).indexOf(sender)
if(patentes[i8]?.usus[i9]?.patente_usu != patente) {
patentes[i8].usus[i9].patente_usu = patente
fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
}
if(patentes[i8].usus[i9].level_usu != level_up) {
patentes[i8].usus[i9].level_usu = level_up
fs.writeFileSync("./armor/patentes.json", JSON.stringify(patentes))
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando video."
conn.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando Imagen"
conn.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
function Goldrgs(index){
fs.writeFileSync("./armor/funcoes/golds.json", JSON.stringify(index, null, 2) + '\n')
}

if(!JSON.stringify(rggold).includes(from)) {
rggold.push({grupo: from, usus: []})
Goldrgs(rggold)
}

if(isGroup && IS_sistemGold) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var blt = []; 
for (i of rggold[i2].usus){blt.push(i.id)}

if(blt.indexOf(sender) < 0) {
rggold[i2].usus.push({id: sender, Golds: 0, data: 0, desligar: false})
Goldrgs(rggold)
}; await sleep(100)

if(JSON.stringify(rggold).includes(from) && JSON.stringify(rggold[i2].usus).includes(sender)) {
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)

var AddGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds += qnt
Goldrgs(rggold)
conn.sendMessage(from, {text: `Felicidades: > @${usu.split("@")[0]} Usted gano ${qnt} de oro.. `, mentions: [usu]})
}

var ConsultarGold = async(usu) => {
conn.sendMessage(from, {text: `Hola @${usu.split("@")[0]} usted contiene ${rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds} de oro, pronto serás mucho más rico que Elon Musk, confía en mí..`, mentions: [usu]})
}

var TirarGold = async(qnt, usu) => {
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
conn.sendMessage(from, {text: `Que pena... @${usu.split("@")[0]} Usted perdio ${qnt} de oro.. `, mentions: [usu]})
}

var ConsumirGold = async(qnt, usu) => {
if(rggold[i2].usus[i3].Golds < qnt) return reply("Lo siento mucho pero no cuentas con el monto de oro suficiente")
rggold[i2].usus[rggold[i2].usus.map(i => i.id).indexOf(usu)].Golds -= qnt
Goldrgs(rggold)
mention(`${tempo} @${sender.split("@")[0]} después de usar el comando ${command} fueron gastados ${qnt} de oro > ${rggold[i2].usus[i3].Golds+qnt} Golds`)
}

var QNTD_GOLDS = rggold[i2].usus[i3].Golds

var dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(rggold[i2].usus[i3].desligar == false) {
async function PR_Gold() {
mention(`✫ Felicidades @${sender.split("@")[0]} - 
Recibiste 10 de oro por el primer mensaje del día y también 0/2 por la minería del área, usa el comando ${prefix}minerar_gold 2 vez, ${tempo} ✫`)
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = true
rggold[i2].usus[i3].Golds += 10
Goldrgs(rggold)
if(!JSON.stringify(dataGp[0].minerar_gold).includes(sender)) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: 0})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
dataGp[0].minerar_gold[i4].ChanceG = null
setGp(dataGp)
}
return PR_Gold() 
}
}

if(dattofc != rggold[i2].usus[i3].data) {
rggold[i2].usus[i3].data = dattofc
rggold[i2].usus[i3].desligar = false
Goldrgs(rggold)
}
  
}
/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isBanned) return BannedExpired(ban)

var palabrasfr = JSON.parse(fs.readFileSync("./datab/grupos/palabras_forca.json"))

var palabrasfrc = palabrasfr[Math.floor(Math.random() * palabrasfr.length)]

var ALT_FR = palabrasfrc?.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palabrasfrc.dica, tema: palabrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

if(isrecortarlink && budy.includes("https://chat.whatsapp.com")){
  
var L_WTS = "https://chat.whatsapp.com/"

for (var i = 1; i < body.split(L_WTS).length; i++) {
if(!recolherLNK.map(i => i?.Link).includes(L_WTS+body.split(L_WTS)[i].slice(0, 22))) recolherLNK.push({Link: L_WTS+body.split(L_WTS)[i].slice(0, 22)})
}

fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
if(isBotGroupAdmins && !isGroupAdmins) {
setTimeout(async function() {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1100);
}
}

if(!isPremium && nescessario.cmdpremium.includes(command)) return reply(`Este comando es sólo para usuario premium, si quieres comprar habla con mi dueño:
https://wa.me/${numerodono_ofc}`)


// PRA LIMPAR DO CONTADOR QUEM no ESTÁ en el grupo
async function LIMPARDOCNT_QUEMJASAIU() {
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage, null, 2))
}
RPT_M = []
if(!RPT_M.includes(from) && (nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && !SoDono && !rg_aluguel.some(i => i.id_gp == from)) {
RPT_M.push(from)
setTimeout(() => {
RPT_M.splice(RPT_M.indexOf(from), 1)
}, 30000)
return reply(`El alquiler de (Grupo/Usuario) no está registrado, hablar con el propietario para registrar el alquiler o renovar: https://wa.me/${numerodono_ofc}`)
}

if((nescessario?.rg_aluguelGB || isGroup && dataGp[0]?.rg_aluguel || false) && rg_aluguel.some((ab) => {
var tempo_A = Math.floor(Date.now() / 1000);
var VNCM = Math.floor(ab?.vencimento)
return tempo_A > VNCM
})) {

var RS_P = []

for (var abc of rg_aluguel) {
var tempo_A = Math.floor(Date.now() / 1000);
var VNCM = Math.floor(abc?.vencimento)
if(tempo_A > VNCM) {
console.log(colors.blue(`Grupo / Usuario: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpiro el alquiler.`));
RS_P.push(`Grupo: ${abc.nome_}\nID: ${abc.id_gp}\n\nExpiro el alquiler.`);
rg_aluguel.splice(rg_aluguel.findIndex(a => a.id_gp === abc.id_gp), 1);
}
}

conn.sendMessage(numerodono_ofc+"@s.whatsapp.net", {text: RS_P.join('\n')});
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
}

//INICIO DE COMANDO DE PREFIXO
switch(command){


case 'roll':
var [d1, d2] = q.toLowerCase().trim().split("d")
var [d3] = q.toLowerCase().trim().split("+") || 0
if(parseInt(d1) > 200) return reply("Cantidad de datos muy exagerada.")
if(!q.toLowerCase().includes("d")) return reply(`Ejemplo: ${prefix}roll 2d20`);
if(!Number(parseInt(d2))) return reply(`ejemplo: ${prefix}roll 2d20`);
RS_D = "Resultado de Dados:\n\n"
for ( i = 0; i < d1; i++) {
RS_D += `[ ${i +1} ] ${Math.floor(Math.random() * parseInt(d2)+parseInt(d3))}\n\n`
}
reply(RS_D)
break;

case 'infoanotacao':
conn.sendMessage(from, {text: anotacao(prefix)})
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = numerodono_ofc
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: infodono(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break;

case 'tabela':
conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break

case 'infobienvenida':
case 'infobv':  
conn.sendMessage(from, {text: infobienvenida(prefix)}, {quoted: selo})
break

case 'idiomas':
case 'idioma':
conn.sendMessage(from, {text: idiomagtts(prefix, NomeDoBot)}, {quoted: selo})
break

case 'infoforca':
reply(`cómo agregar palabras en el comando de forca
ejemplo: ${prefix}addpalabras_forca gato|Animal|el maúlla

Por ejemplo, para eliminar la palabra del comando forca, simplemente use:

${prefix}rmpalavra_forca gato

buena suerte
`)
break;

case 'infopremium':
reply(`.
Información sobre los comandos premium.

- Comando: ${prefix}cmdpremium 
Este comando mostrará qué comandos son premium.

- Comando: ${prefix}addcmdpremium
este comando lo usará para agregar un comando simple y pasarlo a comando premium, por ejemplo:
${prefix}addcmdpremium play_audio 

- Comando: ${prefix}tirarcmdpremium
este comando pasa el comando premiun a comando simple
ejemplo: ${prefix}tirarcmdpremium play_audio

Buena suerte.`)
break;

case 'infoduelo':
mention(infoduelo(prefix, numerodn, NomeDoBot, sender))
break

case 'infomultiprefixo': case 'infomultiprefix': 
mention(`${tempo} @${sender.split("@")[0]}, Te informaré cómo funciona la función de prefijo múltiple. Esta función es por grupo, se hace en uno, no se hará en todos. Primero, actívalo con

${prefix}multiprefixo Al usarlo la primera vez se activa, luego se desactiva... Y así sucesivamente... Contiene los siguientes comandos:

${prefix}add_prefixo\n\n${prefix}tirar_prefixo\n\n${prefix}prefixos

ejemplo del primer comando >

${prefix}add_prefixo &

el prefijo "&" que usé como ejemplo, se convertirá en un prefijo oficial para el grupo, por lo que si usas ${prefix} funcionará, podra agregar los que usted quiera.. 

Para eliminar esta funcion use lo siguiente\n${prefix}tirar_prefixo &

si en caso desea verificar sus prefijos , use el siguiente comando :

${prefix}prefixos

Buena suerte`)
break

case 'infosorteio':
case 'helpsorteio':  
conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'infocontador':
case 'infobanghost':  
conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'infolistanegra':
conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infotransmitir':
conn.sendMessage(from, {text: infotransmitir(prefix, pushname)}, {quoted: selo})
break

case 'infopalabras':
case 'infopalavrao':
conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git':
case 'git-bot':  
case 'gitdobot':
case 'gitbot':   
conn.sendMessage(from, {text: gitdobot(prefix)}, {quoted: selo})
break

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/
case "puxadas": {
reply(`
╭───「🔍 MENU DE CONSULTAS 🔍」
├➭ 🔍 ${prefix}nome
├➭ 🔍 ${prefix}nome2
├➭ 🔍 ${prefix}nome3
├➭ 🔍 ${prefix}nome4
├➭ 🔍 ${prefix}telefone
├➭ 🔍 ${prefix}telefone2
├➭ 🔍 ${prefix}telefonefixo
├➭ 🔍 ${prefix}cpf
├➭ 🔍 ${prefix}cpf2
├➭ 🔍 ${prefix}cpf3
├➭ 🔍 ${prefix}cpf5
├➭ 🔍 ${prefix}placa
├➭ 🔍 ${prefix}bin
├➭ 🔍 ${prefix}site
├➭ 🔍 ${prefix}cep
├➭ 🔍 ${prefix}vizinhos
├➭ 🔍 ${prefix}cnpj
├➭ 🔍 ${prefix}score
├➭ 🔍 ${prefix}titulo
├➭ 🔍 ${prefix}email
├➭ 🔍 ${prefix}vacina
├➭ 🔍 ${prefix}parentes
├➭ 🔍 ${prefix}rg
├➭ 🔍 ${prefix}rg2
├➭ 🔍 ${prefix}senha
├➭ 🔍 ${prefix}mae
├➭ 🔍 ${prefix}pai
├➭ 🔍 ${prefix}chasi
├➭ 🔍 ${prefix}motor
├➭ 🔍 ${prefix}beneficios
├➭ 🔍 ${prefix}impostos
├➭ 🔍 ${prefix}nascimento
├➭ 🔍 ${prefix}pix
├➭ 🔍 ${prefix}cns
├➭ 🔍 ${prefix}cns2
├➭ 🔍 ${prefix}correos
├➭ 🔍 ${prefix}radar
├➭ 🔍 ${prefix}dominio
├➭ 🔍 ${prefix}internet
├➭ 🔍 ${prefix}compras
├➭ 🔍 ${prefix}cnh
├➭ 🔍 ${prefix}funcionarios
╰───────────────────
`)
}break

 case 'metadinha':
            case 'metadinha2':
            case 'metadinha3':
               // if (!isGroup) return reply(respuesta.grupo)
                anuu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')

                random = anuu[Math.floor(Math.random() * anuu.length)]
                let buttonssMessssage = {
                    image: { url: random.male },
                    caption: `🥶MASCULINO🥶`,
                    footer: `${nomeBot}`,
                    headerType: 4
                }
                await client.sendMessage(from, buttonssMessssage, { quoted: info }).catch(err => {
                    return ('Error!')
                })
                let buttonssMesssage = {
                    image: { url: random.female },
                    caption: `🌸FEMININO🌸`,
                    footer: `${nomeBot}`,
                    headerType: 4
                }
                await client.sendMessage(from, buttonssMesssage, { quoted: info }).catch(err => {
                    return ('Error!')
                })
                break
                
case 'nome':
case 'nome2':
case 'nome3':
case 'nome4':
case 'telefone':
case 'telefone2':
case 'telefonefixo':
case 'cpf':
case 'cpf2':
case 'cpf3':
case 'cpf4':
case 'cpf5':
case 'placa':
case 'bin':
case 'site':
case 'cep':
case 'vizinhos':
case 'cnpj':
case 'score':
case 'titulo':
case 'email':
case 'vacina':
case 'parentes':
case 'rg':
case 'rg2':
case 'senha':
case 'mae':
case 'pai':
case 'chasi':
case 'motor':
case 'beneficios':
case 'impostos':
case 'nascimento':
case 'pix':
case 'cns':
case 'cns2':
case 'correos':
case 'radar':
case 'dominio':
case 'internet':
case 'compras':
case 'cnh':
case 'funcionarios':{
const kaic = conn
 // if (!isPremium) return reply('Acesso exclusivo para usuarios Vip!');
  if (!q) return reply('Ingrese los datos que desea consultar después del comando.');
  reply('Consultando...');
    const consulta = await fetchJson(`http://node-01.starhosting.com.br:22573/consultas/337cb5f378f86756960400803f6bfbfd/${command}/${q}`);
    if (consulta.file) {
      const resultado = Buffer.from(consulta.base64, 'base64'); 
      await kaic.sendMessage(from, { document: resultado, fileName: `${q}.txt`, mimetype: 'text/plain' }); // Replace 'text/plain' with the appropriate mimetype for the text file
    }
     else {
      if (consulta.resultado) {
        await kaic.sendMessage(from, { text: consulta.resultado });
      }
  }
  }break;
  
  
  
  
  
  
  
            // comandos que utilizam a Api \\
            //case 'play_video':
            case 'ytmp4':
                try {
                    if (!q) return reply(`˖⸙̭❛✰❤️Agregue un link de YouTube para que el bot lo descargue.`)
                    client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                    var url = q;
                    var anikit = await fetchJson(servidor + `/anikit/ytmp4?username=${username}&key=${key}&videoUrl=${url}`)
                    client.sendMessage(from,
                        {
                            video: { url: `${anikit.url}` },
                            mimetype: 'video/mp4'
                        })
                } catch (e) {
                    return reply("ERROR!!");
                    console.log(e)
                }
                break


            //case 'play_audio':
            case 'ytmp3':
                try {
                    if (!q) return reply(`˖⸙̭❛✰❤️Agregue un link de YouTube para que el bot lo descargue`)
                    client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                    var url = q;
                    var anikit = await fetchJson(servidor + `/anikit/ytmp3?username=${username}&key=${key}&videoUrl=${url}`)
                    client.sendMessage(from,
                        {
                            audio: { url: `${anikit.url}` },
                            mimetype: 'audio/mpeg'
                        })
                } catch (e) {
                    return reply("ERROR!!");
                    console.log(e)
                }
                break

            case "playvideo":
            case "playmp4":
            case 'playvd':
                if (!q) return reply('Coloque el nombre de la cancion porfavor')
                reply("「🍉」Enviando...")
                fetch(servidor + `/yt/playmp4?query=${q}&key=${key}&username=${username}`).then(response => response.json()).then(ytbr => {

                    client.sendMessage(from, { image: { url: servidor + `/music-card2?key=${key}&username=${username}&thumbnail=${ytbr.thumb}&backgroundcolor=070707&autor=${ytbr.channel}&nome=${ytbr.title}&starttime=0%3A02&endtime=2%3A56` }, caption: `「👤」Nombre  ҂ ${ytbr.title}\n「📺」Canal  ҂ ${ytbr.channel}\n「📈」Vistas  ҂ ${ytbr.views}` }, { quoted: info })


                    client.sendMessage(from, { video: { url: ytbr.url }, mimetype: 'video/mp4' }, { quoted: info })

                })

                break

            case "playaudio":
            case 'play':
                if (!q) return reply('Coloque el nombre de la cancion porfavor')
                reply("「🍉」𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...")
                fetch(servidor + `/yt/playmp4?query=${q}&key=${key}&username=${username}`).then(response => response.json()).then(ytbr => {

                    client.sendMessage(from, { image: { url: servidor + `/music-card2?key=${key}&username=${username}&thumbnail=${ytbr.thumb}&backgroundcolor=070707&autor=${ytbr.channel}&nome=${ytbr.title}&starttime=0%3A02&endtime=2%3A56` }, caption: `「👤」Nombre  ҂ ${ytbr.title}\n「📺」Canal  ҂ ${ytbr.channel}\n「📈」Vistas  ҂ ${ytbr.views}` }, { quoted: info })


                    client.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, { quoted: info })

                })

                break
            
            case "tiktok":
            case "tiktokvd": {
                if (q.length < 1) return reply("Por favor coloque un enlace de tiktok");
                const url = q;
                const apiUrl = servidor + `/download/tiktok?url=${url}&username=${username}&key=${key}`;
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.videoSemWt) {
                            client.sendMessage(from, {
                                video: { url: data.videoSemWt },
                                mimetype: 'video/mp4'
                            });
                        } else {
                            return reply("No se puede obtener el video. Comprueba el enlace y vuelve a intentarlo.");
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        return reply("Hubo un error al procesar la solicitud. Vuelve a intentarlo más tarde.");
                    });
            } break

            case "tiktokad": {
                if (q.length < 1) return reply("Por favor coloque un enlace de tiktok.");
                const url = q;
                const apiUrl = servidor + `/download/tiktok?url=${url}&username=${username}&key=${key}`;
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.videoSemWt) {
                            client.sendMessage(from, {
                                audio: { url: data.audio },
                                mimetype: 'audio/mpeg'
                            });
                        } else {
                            reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        return reply("Hubo un error al procesar la solicitud. Vuelve a intentarlo más tarde.");
                    });
            } break



            case "cosplay":
            case "waifu":
            case "waifu2":
            case "shota":
            case "loli":
            case "yotsuba":
            case "shinomiya":
            case "yumeko":
            case "tejina":
            case "chiho":
            case "shizuka":
            case "boruto":
            case "kagori":
            case "kaga":
            case "kotori":
            case "mikasa":
            case "akiyama":
            case "hinata":
            case "minato":
            case "naruto":
            case "nezuko":
            case "yuki":
            case "hestia":
            case "emilia":
            case "itachi":
            case "elaina":
            case "madara":
            case "sasuke":
            case "deidara":
            case "sakura":
            case "tsunade":
                //reply("off no momento")
                try {
                    client.sendMessage(from, { react: { text: '🕚', key: info.key } })
                    fetch(encodeURI(servidor + `/nime/${command}?username=${username}&key=${key}`))
                        .then(response => response.json())
                        .then(data => {
                            var resultado = data.url;

                            let buttonMessage4 = {
                                image: { url: `${resultado}` },
                                caption: `🏕 Hola ${pushname}, aqui está su imagen 🎲`,
                                footer: '',
                                //buttons: buttons,
                                headerType: 4
                            }
                            client.sendMessage(from, buttonMessage4, { quoted: info })
                        })
                } catch (e) {
                    console.log(e)
                    reply("No pude encontrar la foto, vuelve a intentarlo más tarde.")
                }

                break

            case 'ahegao':
            case 'ass':
            case 'bdsm':
            case 'blowjob':
            case 'cuckold':
            case 'cum':
            case 'ero':
            case 'kasedaiki':
            case 'femdom':
            case 'foot':
            case 'gangbang':
            case 'glasses':
            case 'jahy':
            case 'manga':
            case 'masturbation':
            case 'neko':
            case 'orgy':
            case 'panties':
            case 'pussy':
            case 'neko2':
            case "neko":
            case 'tentacles':
            case 'thighs':
            case 'yuri':
            case 'zettai':
                //reply("off no momento")

                try {
                    client.sendMessage(sender, { react: { text: '🕚', key: info.key } })
                    fetch(encodeURI(servidor + `/nsfw/${command}?username=${username}&key=${key}`))
                        .then(response => response.json())
                        .then(data => {
                            var resultado = data.url;

                            let buttonMessage4 = {
                                image: { url: `${resultado}` },
                                caption: `🏕 Hola ${pushname}, aqui está su imagen 🎲`,
                                footer: '',
                                //buttons: buttons,
                                headerType: 4
                            }
                            client.sendMessage(sender, buttonMessage4, { quoted: info })
                        })
                } catch (e) {
                    console.log(e)
                    reply("No pude encontrar la foto, vuelve a intentarlo más tarde.")
                }

                break

         case "x4":
            case "4x4": {
                fras = [
"¡Vamos con todo chicos!", "¡Muestra tu potencial ahora!", "¡Somos imparables!", "¡La victoria es nuestra, créeme!", "¡Acción rápida, victoria segura!", "¡No dejaremos a nadie atrás!", "¡Juntos somos invencibles!", "¡Concentración, determinación y coraje!", "¡Nada puede detenernos!", "¡Demostremos quién manda aquí!", "¡No olvides trabajar en equipo!", "¡La fortuna favorece a los atrevidos!", "¡Hagamos historia hoy!", "¡No podemos rendirnos, la lucha apenas comienza!", "¡Concentración total, muchachos!", "¡No tengas miedo, enfrenta el peligro de frente!", "¡La victoria está a un paso de nosotros, no daremos marcha atrás!", "¡Cree en ti mismo y gana!", "¡Juguemos con estrategia e inteligencia!", "¡Eres el mejor, demostrémoslo ahora!", "¡No permitas que nos subestimen, demuestra de lo que somos capaces!", "¡Manténganse alerta, el enemigo está cerca!", "La fuerza está en cada uno de nosotros, ¡usémosla!", "¡No dejes que el cansancio se interponga en tu camino, sigue adelante!", "¡No hay mejor equipo que el nuestro!"
                ]
                epa = fras[Math.floor(Math.random() * fras.length)]
                tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                kkk = tabi[Math.floor(Math.random() * tabi.length)]

                membros = (groupId, membros1) => {
                    array = []
                    for (let i = 0; i < membros1.length; i++) {
                        array.push(membros1[i].id)
                    }
                    return array
                }
                var yd = membros(from, groupMembers)

                client.sendMessage(from, {
                    text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}

${epa}`,
                    mentions: yd
                })

            } break

            case "x6":
            case "6x6": {

                fras = [
"¡Vamos con todo chicos!", "¡Muestra tu potencial ahora!", "¡Somos imparables!", "¡La victoria es nuestra, créeme!", "¡Acción rápida, victoria segura!", "¡No dejaremos a nadie atrás!", "¡Juntos somos invencibles!", "¡Concentración, determinación y coraje!", "¡Nada puede detenernos!", "¡Demostremos quién manda aquí!", "¡No olvides trabajar en equipo!", "¡La fortuna favorece a los atrevidos!", "Hagamos historia hoy!", "¡No podemos rendirnos, la lucha apenas comienza!", "¡Concentración total, muchachos!", "¡No tengas miedo, enfrenta el peligro de frente!", "¡La victoria está a un paso de nosotros, no daremos marcha atrás!", "¡Cree en ti mismo y gana!", "¡Juguemos con estrategia e inteligencia!", "¡Eres el mejor, demostrémoslo ahora!", "¡No permitas que nos subestimen, demuestra de lo que somos capaces!", "¡Manténganse alerta, el enemigo está cerca!", "La fuerza está en cada uno de nosotros, ¡usémosla!", "¡No dejes que el cansancio se interponga en tu camino, sigue adelante!", "¡No hay mejor equipo que el nuestro!"
                ]
                epa = fras[Math.floor(Math.random() * fras.length)]

                tabi = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🌶️", "🍆", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "🗡️", "⚔️", "💣", "⁉️", "✅", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
                kkk = tabi[Math.floor(Math.random() * tabi.length)]
                membros = (groupId, membros1) => {
                    array = []
                    for (let i = 0; i < membros1.length; i++) {
                        array.push(membros1[i].id)
                    }
                    return array
                }
                var yd = membros(from, groupMembers)

                client.sendMessage(from, {
                    text: `${groupName}

⚔️SLOT 1⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}

⚔️SLOT 2⚔️
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}
${kkk}


${epa}`,
                    mentions: yd
                })

            } break
            
            // Criadas por @clovermods 
            // Api https://clover-t-bot.onrender.com
            // Lembre-se de por sua key e username nos lugares corretos 

            case 'wallpaper1':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/satanic?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper2':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/cyberspace?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper3':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/gaming?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper4':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/wallpapertec?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper5':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/ppcouple?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper6':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/pubg?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            case 'wallpaper7':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/aesthetic?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break


            case 'wallpaper8':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/wallpaper/aesthetic?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            case 'wallpaper9':
                //if (!isPremium) return reply('[⚙️️]comando so pra usuarios vip')
                reply("「🐸 te lo envío a tu PV")
                google = await fetchJson(servidor + `/nime/anime?key=${key}&username=${username}`)
                client.sendMessage(sender, { image: { url: google.url } }, { quoted: info })
                break

            //===========================\\


case 'emoji2':
            case 'emoji-mix':
            case 'emojimix': {
                if (!q) return reply(`ejemplo : ${prefix + command} 😅+🤔`)
                reply('¿Y SI LO INTENTAS CON OTRO...?')
                let [emoji1, emoji2] = q.split`+`
                var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of em.results) {
                    templateMassage = {
                        image: {
                            url: `${res.url}`,
                            quoted: info
                        }
                    }
                    client.sendMessage(from, templateMassage, { quoted: live })
                }
            }
                break


case "playstore":{
const apiUrl = "gg"
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
  
  })
}break

case "gerarnick":
 case 'hacernick':
case 'crearnick':{
async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
if (!q) return reply("donde esta el texto?")
let anu = await styletext(q)
let teks = `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐍𝐈𝐂𝐊𝐒: ${q}\n\n`
for (let i of anu) {
teks += `➥ ${i.result}\n\n`
}
reply(teks)
}break
                
                
//_-2 ÁREA DE COMANDOS SÓ PRA ADMINISTRADORES

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply('Debe ser propietario o administrador')
if(!mrc_ou_numero) return reply("Marque el mensaje del usuario con el comando o use el comando con el número del usuario que desea agregar a la lista negra.")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Este número ya está incluido.*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número agregado a la lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!mrc_ou_numero) return reply("Marque el mensaje del usuario con el comando o use el comando con el número del usuario que desea eliminar de la lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Este número no está incluido.*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*El número ha sido eliminado de la lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(dataGp[0].listanegra.length < 1) return reply('*Ningún número no ha sido agregado*')
teks = '*Números que voy a moler si vuelvo😡:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*A estos, voy a bajar mi martillo de prohibición*'
reply(teks)
break

case 'band':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Etiqueta el mensaje del usuario o etiqueta a su @..., recuerda etiquetar solo a un usuario...")
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuario ya ha sido eliminado del grupo.")
if(botNumber.includes(menc_os2)) return reply('No soy yo quién para quitármelo, verdad 🙁, pero estoy decepcionado contigo')
if(numerodono.includes(menc_os2)) return reply('No puedo eliminar a mi dueño 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Fue [ELIMINADO EXITOSAMENTE] - (Por buenas razones.) -`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {
if(!menc_os2 || menc_jid2[1]) return reply("")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuario ya ha sido eliminado del grupo o se ha ido.")
if(botNumber.includes(menc_os2)) return reply('No soy yo quién para quitármelo, verdad 🙁, pero estoy decepcionado contigo')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('No puedo eliminar a mi dueño 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Fue [ELIMINADO EXITOSAMENTE] - (Por buenas razones).`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Etiqueta el mensaje del usuario o etiqueta a su @..., recuerda etiquetar solo a un usuario...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuario ha sido eliminado del grupo o se ha ido, no será posible promover.")
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Fue promovido(a) para administrador`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Etiqueta el mensaje del usuario o etiqueta a su @..., recuerda etiquetar solo a un usuario...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuario ha sido eliminado del grupo o se ha ido, no será posible rebaixar")
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Degradado exitosamente a [MIEMBRO COMÚN].`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Ponga algo, después del comando sorteionumero, por ejemplo,${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉 Felicitaciones al número de la suerte por ganar el sorteo.${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error, inténtalo de nuevo :/')
}
break

case 'sorteio':
if(!isGroupAdmins) return reply(Res_SoAdm)
try{
if(!isGroup) return reply(Res_SoGrupo)
if(!q) return reply(`Ponga algo, después del comando sorteo, por ejemplo,${prefix}sorteio de 100 R$`)
d = []
teks = `🎉Felicidades por ganar el sorteo ${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Hubo un error, inténtalo de nuevo :/')
}
break


case 'rankinactivo':
case 'rankinactivos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
await LIMPARDOCNT_QUEMJASAIU()
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = 'Ranking de la mayor cantidad de Fantasmas del Grupo:\n\n'
if(bule.length == 0)boardi += 'Sin fantasmas'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `${i + 1}º : @${bule[i].id.split('@')[0]}\nMensajes: ${bule[i].messages}\nComandos dados: ${bule[i].cmd_messages}\nAparelho: ${bule[i].aparelho}\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(menc_os2 == botNumber) return reply("No puedes advertir al bot.. ");
if(menc_os2 == nmrdn) return reply("No puedo advertir a mi creador");
if(groupAdmins.includes(menc_os2)) return reply("No puedo advertir a ADMS..");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("No hay forma de avisar a un usuario que ya no está en el grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = `Hola: @${menc_os2.split("@")[0]} usted fue advertirdo ${dfqn}/3, tenga cuidado, com 3 advertencias, usted será eliminado..`
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {conn.sendMessage(from, {text: `Adios @${menc_os2.split("@")[0]}, Completaste 3 advertencias 😪, habla con quien te baneó para tener una idea de lo que pasó.`, mentions: [menc_os2]})
await sleep(1500)
conn.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'grupo': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args[0] === 'a') {
reply(`*GRUPO ABIERTO EXITOSAMENTE*`)
conn.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`*GRUPO CERRADO EXITOSAMENTE*`)
conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins)return reply(Res_SoAdm)
try {
var ppUrl = await conn.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
conn.sendMessage(from, {image: {url: ppUrl}, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcado por Admin: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), ``)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcado por Admin: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), ``).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), ``).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcado por Admin: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), ``).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
conn.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
async function marcac() {
bla = []
blad = `\n𝑀𝐸𝑀𝐵𝑅𝑂𝑆 𝐶𝑂𝑀𝑈𝑀\n𝐵𝑂𝑇: ${NomeDoBot}\n\n-_- Grupo: ${groupName} -_-${!q ? "" : `\n\n~» Mensaje: ${q}`}\n\n`
for( let i of somembros ) {
blad += `✥➤ @${i.split("@")[0]}\n\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`Hola Adm. No hay miembros comunes en el grupo: ${groupName}, apenas - [ ADMINISTRADORES ]`)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("No puedes usar comandos en este comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
if(q.includes(`${prefix}`)) return reply("No puedes usar comandos en este comando.")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: 'Nombre del grupo modificado'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_SoAdm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Descripcion del grupo modificado'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque una foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
conn.updateProfilePicture(from, {url: medipp})
reply(`Foto del grupo modificada exitosamente`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isGroup) return reply(Res_SoGrupo)
if(!isBotGroupAdmins) return reply(Res_BotADM)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroupAdmins) return reply("Só ADM")
if(!isBotGroupAdmins) return reply(Res_BotADM)
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + SNET
linkgc = await conn.groupInviteCode(from)
conn.sendMessage(rcrt, {image:{url: logoslink.logo}, caption: "Haz clic en el símbolo encima de la imagen para unirte al grupo...", contextInfo: {
externalAdReply: {
title:"- Haga clic aquí para unirse al grupo",
body: "",
reviewType: "PHOTO", 
thumbnailUrl: logoslink.logo, 
sourceUrl: `https://chat.whatsapp.com/`+linkgc, 
mediaType: 2
}}})
reply("La invitación de reclutamiento de usuario fue enviada a su cuenta privada CON ÉXITO...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.trim().includes("|")) return reply(`Ingresa el título de la nota y el texto que deseas anotar..\nejemplo: ${prefix}anotar dog|Los perros son buenos para comer en Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta nota ya está incluida, use otro título. O puede eliminarla con\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply("ANOTACION REGISTRADA EXITOSAMENTE...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply("ANOTACION REGISTRADA EXITOSAMENTE...")  
}
} else {
if(!q) return reply("Ingrese qué anotación desea tomar por título.")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota no está incluida, por favor verifíquela cuidadosamente...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./armor/json/anotar.json", JSON.stringify(anotar))
reply(`ANOTACION ${q} ELIMINADA EXITOSAMENTE...`)
}
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(Res_SoGrupo)  
if(!isGroupAdmins) return reply(Res_SoAdm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(`No se registró ninguna advertencia en este grupo, use el comando ${prefix}rg_aviso`)
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("Los avisos relacionados con este grupo fueron eliminados de todos los tiempos registrados.")
break

case 'rg_aviso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(`ejemplo: ${prefix+command} 12:00|Buenas tardes a todos, presten atención a las reglas del grupo\n\nen este ejemplo.. Enviará el mensaje que registraron todos los días a las 12:00 de la tarde, ahora quieren para cambiar la hora... Simplemente rehaga el comando\nSi desea eliminar el aviso de grupo, simplemente coloque ${prefix}rg_aviso`)
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(`Se eliminó el registro anterior y se volvió a crear uno nuevo, si desea continuar\n - Recuerde que hay anuncios programados en otros horarios, si desea borrarlos todos escriba: ${prefix}rm_avisos`)
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("AVISO CREADO EXITOSAMENTE..")
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./datab/grupos/AVISOS.json", JSON.stringify(black_, null, 2))
reply("AVISO CREADO EXITOSAMENTE..")
}
break

case 'rv-forca':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].forca_inc == false) return reply(`El juego no ha comenzado.\nEscribe ${prefix}iniciar_forca`)
rv_forca()
reply("FORCA RESETEADA EXITOSAMENTE...")
break

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-/

case 'infoaluguel':
reply(`Comandos:

1: ${prefix}aluguel

2: ${prefix}aluguel_global

3: ${prefix}rg_aluguel

4: ${prefix}rm_aluguel

5: ${prefix}renovar_aluguel

6: ${prefix}listaaluguel

_1: El primer comando: (${prefix}aluguel) se usa para activar que ese grupo/usuario solo funcionará cuando se renueve el contrato de arrendamiento o cuando se determine el período de uso para ese grupo/usuario | Para desactivarlo, simplemente use el comando nuevamente. _2: El segundo comando: (${prefix}aluguel_global) se usa para activar que todo grupo/usuario solo funcionará cuando se renueve el contrato de arrendamiento o expire el tiempo que se determine el uso en ese grupo/usuario | Para desactivarlo, simplemente use el comando nuevamente. _3: El tercer comando: (${prefix}rg_aluguel) se usa para registrar cuándo vencerá el alquiler, por ejemplo: ${prefix}rg_aluguel /30d ${prefix}rg_aluguel /24h d son días y h son horas, puedes configurarlo durante el tiempo que desees. _4: El cuarto comando: (${prefix}rm_aluguel) se usa para eliminar el grupo de la lista de alquiler y ya no trabajaré en él. _5: El quinto comando: (${prefix}renovar_aluguel) es para que renueves el nuevo tiempo del grupo, para que el bot funcione al 100%. _6: El sexto comando: (${prefix}listaaluguel) se usa para ver todos los usuarios/grupos que vencen, etc. Buena suerte.`)
break;

case 'aluguel':
if(!SoDono) return reply(Res_SoDono);
if(!isGroup) return reply(Res_SoGrupo)
dataGp[0]['rg_aluguel'] = !dataGp[0]['rg_aluguel'];
setGp(dataGp)
reply(dataGp[0]['rg_aluguel'] ? `ACTIVADO EXITOSAMENTE, ahora use el comando: ${prefix}rg_aluguel\n o el comando ${prefix}infoaluguel para saber como usar el resto`: "DESACTIVADO EXITOSAMENTE.")
break;

case 'aluguel_global':
if(!SoDono) return reply(Res_SoDono);
nescessario.rg_aluguelGB = !nescessario.rg_aluguelGB
setNes(nescessario)
reply(nescessario?.rg_aluguelGB ? `ACTIVADO EXITOSAMENTE, ahora use el comando: ${prefix}rg_aluguel\n o el comando ${prefix}infoaluguel para saber como usar el resto`: "DESACTIVADO EXITOSAMENTE.")
break;

case 'renovar_aluguel':
if(!SoDono) return reply(Res_SoDono);
var ID_G = rg_aluguel.findIndex(i => i.id_gp == from)
if(rg_aluguel.some(i => i.id_gp != from)) return reply(`Este grupo no está en la lista de alquiler, utilice: ${prefix}listaaluguel para ver los grupos que están registrados.`)
if(q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
var TMP_A = Math.floor(Date.now() / 1000) 
var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
rg_aluguel[ID_G].vencimento = TMP_A+TEMPO
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
reply(`Este grupo ha sido renovado y vencerá en: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento - TMP_A))}, si desea eliminar este grupo de la lista de alquiler con anticipación, use: ${prefix}rm_aluguel ${from}`)
} else {
reply(`Ejemplo: ${prefix+command} /24h o ejemplo: ${prefix+command} /30d\n\nCon d son días y h son horas, así que buena suerte.`)
}
break;

case 'rg_aluguel':
case 'rgaluguel':
if (!SoDono) return reply(Res_SoDono);
if(!nescessario?.rg_aluguelGB && !dataGp[0]["rg_aluguel"]) return reply(`No has activado el sistema de alquiler para este grupo, ni a nivel global. Lee cómo usarlo en ${prefix}infoaluguel\n\nBuena suerte.`)
if (q.trim().length > 1 && (q.trim().includes("d") || q.trim().includes("h")) && q.trim().includes("/")) {
var TMP_A = Math.floor(Date.now() / 1000) 
var TEMPO = (q.trim().includes("h") ? Math.floor(q.trim().split("/")[1].split("h")[0]) * 60 * 60 : Math.floor(q.trim().split("/")[1].split("d")[0]) * 60 * 60 * 24);
var ID_G = rg_aluguel.findIndex(i => i.id_gp == from);
if (ID_G === -1) {
rg_aluguel.push({ id_gp: from, nome_: groupName || pushname, vencimento: TMP_A+TEMPO });
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo
ID_G = rg_aluguel.findIndex(i => i.id_gp == from); // Atualiza o valor de ID_G
reply(`Este grupo/usuario se registró exitosamente y vencerá en: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, si desea eliminar este grupo de la lista de alquiler con anticipación, use: ${ prefix}rm_aluguel ${from}\n\nSi desea ver la lista de Usuarios/Grupos, utilice: ${prefix}listaaluguel`);
} else {
reply(`Este grupo ya está registrado y vencerá en: ${kyun(Math.floor(rg_aluguel[ID_G].vencimento) - TMP_A)}, si desea eliminar este grupo de la lista de alquiler con anticipación, use: ${prefix}rm_aluguel ${from}`);
}
} else {
reply(`Ejemplo: ${prefix + command} /24h o ejemplo: ${prefix + command} /30d\n\nCon d son días y h son horas, así que buena suerte.`);
}
break;


case 'rm_aluguel': case 'rmaluguel':
if(!SoDono) return reply(Res_SoDono);
if(q.trim().length < 4) return reply(`Utilice el comando ${prefix+command}${from}\nEsto eliminará este grupo de la lista de alquiler`)
var ID_R = rg_aluguel.findIndex(i => i.id_gp == q.trim())
if(!rg_aluguel.map(i => i.id_gp).includes(q.trim())) return reply(`Este grupo no está en la lista de alquiler, utilice: ${prefix}listaaluguel para ver los grupos que están registrados.`)
rg_aluguel.splice(ID_R, 1)
fs.writeFileSync("./armor/json/rg_aluguel.json", JSON.stringify(rg_aluguel, null, 2));
reply(`Grupo/Usuario eliminado exitosamente de la lista de alquiler, ya no trabajaré aquí.`)
break;

case 'listaaluguel': case 'lista_aluguel':
if(!SoDono) return reply(Res_SoDono);
if(rg_aluguel?.length === 0) return reply("No contiene ningún usuario/grupo en la lista de alquiler...")
var TMP = Math.floor(Date.now() / 1000)
ABC = "Lista de Usuarios/Grupos:\n\n"
for (var i of rg_aluguel) {
ABC += `ID: ${i?.id_gp}\nNombre: ${i.nome_}\nVencimento: ${kyun(Math.floor(i.vencimento) - TMP)}\n-----------------------------------------\n`
}
reply(ABC)
break;

case 'listlinks': case 'links':
try {
if(!SoDono) return reply(Res_SoDono);
async function RM_L(A) {
var response = await axios.get(A);
const html = response.data;
if(html.includes("https://static.whatsapp.net/rsrc.php/v3/yB/r/_0dVljceIA5.png")) {
recolherLNK.splice(i, 1)
await fs.writeFileSync("./armor/funcoes/recolherLNK.json", JSON.stringify(recolherLNK, null, 2))
}
}
LNK = "_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n"
for ( i = 0; i < recolherLNK.length; i++) {
LNK += `Link - ${i +1} _- ${recolherLNK[i].Link}\n\n`
RM_L(recolherLNK[i]?.Link)
}
reply(LNK)
} catch (e) {
return reply("Error")
}
break;

case 'recortarlink':
if(!SoDono) return reply(Res_SoDono);
if(isrecortarlink) {
nescessario.isrecortarlink = false
isrecortarlink = nescessario.isrecortarlink
setNes(nescessario)
reply("Sistema desactivado.")
} else {
nescessario.isrecortarlink = true
isrecortarlink = nescessario.isrecortarlink
setNes(nescessario)
reply(`Se ha activado el sistema para recopilar enlaces y almacenarlos en ${prefix}listlinks.`)
}
break;

case 'iddogrupo': case 'idgrupo':
if(!SoDono) return reply(Res_SoDono)
reply(from)
break

case 'minerar_gold':
case 'minerar_golds':  
if(!isGroup) return reply(Res_SoGrupo)
if(!IS_sistemGold) return reply(`Este comando sólo se puede utilizar cuando el sistema ${prefix}sistemgold 1 está activado.`)
blit = [] 
for ( i of dataGp[0].minerar_gold){blit.push(i.id)}
if(blit.indexOf(sender) < 0) {
dataGp[0].minerar_gold.push({id: sender, ChanceG: null})
setGp(dataGp)}
await sleep(200)
var i4 = dataGp[0].minerar_gold.map(i => i.id).indexOf(sender)
if(dataGp[0].minerar_gold[i4].ChanceG == 2) return reply("No tienes más posibilidades de extraer oro, vuelve mañana...")
dataGp[0].minerar_gold[i4].ChanceG += 1
setGp(dataGp)
rnd = Math.floor(Math.random() * 2)
rndg = Math.floor(Math.random() * 15)
if(rnd == 0) {
mention(`Felicitaciones @${sender.split("@")[0]} recibiste ${rndg}Oros, solo puedes extraer 2 veces al día... ${dataGp[0].minerar_gold[i4].ChanceG == dos ? "Desafortunadamente no tienes más oportunidades de minar hoy, vuelve mañana..." : "Aún queda 1/2 para conseguir Golds, tu oportunidad es 0/2"}`)
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
rggold[i2].usus[i3].Golds += rndg
Goldrgs(rggold)
} else if(rnd != 0) {
reply(`Esta vez tuviste mala suerte, lo siento... ${dataGp[0].minerar_gold[i4].ChanceG == 2 ? "Desafortunadamente no tienes más oportunidades de minar hoy, vuelve mañana..." : "Aún queda 1/2 para conseguir Golds, tu oportunidad es 0/2"}`)
}
break
  
case 'addpalabras_forca':
case 'addpalabras_f':  
if(!SoDono) return reply(Res_SoDono)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(`Falta el primero |\nejemplo: ${prefix+command} título|tema|consejo`)
if(q.lastIndexOf("|") < 0) return reply(`Falta el segundo |\nejemplo: ${prefix+command} título|tema|consejo`)
kir = []
for (i of palabrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply("Este título ya ha sido agregado/existente...")
palabrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./datab/grupos/palabras_forca.json", JSON.stringify(palabrasfr, null, 2))
reply("Palabra agregada al juego forca exitosamente...")
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(Res_SoDono) 
var i5 = palabrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palabrasfr.splice(i5, 1)
fs.writeFileSync("./datab/grupos/palabras_forca.json", JSON.stringify(palabrasfr, null, 2))
reply("Palabra extraída del juego forca exitosamente...")
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
if(!isGroup) return reply(Res_SoGrupo)
try {
if(dataGp[0].forca_inc) return reply(`El juego ya está en progreso, si quieres reiniciar, habla con un administrador para ejecutar ${prefix}rv-forca, o intenta acceder al juego del ahorcado que debería estar justo arriba.`)
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
rsp_fr = `- Juego de forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
|________
       _¦_\n\n\n\n\n\n\n
${linha_fr}\n
_____________________
\n_- JUEGO INICIADO -_ \nUtilice la letra ${prefix}r-f que pueda existir en su observación.\n\nO ${prefix}r-f el nombre completo\n
_____________________
`
reply(rsp_fr) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(Res_SoGrupo)  
if(!dataGp[0].forca_inc) return reply(`El juego no ha comenzado.\nEscribe ${prefix}iniciar_forca`)
if(!q.toLowerCase().trim()) return reply("Escribe la letra que deseas responder.")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("No se pueden modificar letras, emojis ni números.")
if(q.trim().length == 2) return reply("Escribe letra por letra para intentar adivinar, o acertar la palabra completa, mucha suerte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra ya ha sido utilizada.")
var i2 = rggold.map(i => i.grupo).indexOf(from)
var i3 = rggold[i2].usus.map(i => i.id).indexOf(sender)
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
var RST_T = `- Juego de forca - ${DM_FR.palavra_ofc.length} Letras\n\nTema: ${DM_FR.tema}\n\nDica: ${DM_FR.dica}\n
__________-_
         _|_\n
        ${ERROS+ERRQ >= 1 ? "🤡":""}\n      ${ERROS+ERRQ >= 2 ? "👈":""} ${ERROS+ERRQ >= 3 ? "👉":""}  \n         ${ERROS+ERRQ >= 4 ? "👖":""}\n         ${ERROS+ERRQ >= 5 ? "👞":""} ${ERROS+ERRQ >= 6 ? "👞":""}
\n${linha_fr}\n
___-________-_____\n
Letras ya utilizadas: ${letra_ut}
___-________-_____
`
if(q.length > 2) {reply("Hmm, el tipo inteligente quiere entender bien la palabra.")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `¿Entendiste bien la palabra y ganaste${IS_sistemGold? " 10 Golds," :" "}buen chico, reiniciaré el juego...`: DM_FR.acertos == DM_FR.palavra_ofc.length ? `Felicitaciones, cada palabra fue completada: < ${DM_FR.palavra_ofc} >${IS_sistemGold ? ` recibiste 5 Oros, por ser el último...,` : " "}Resetearé el juego..`:`Acertaste una letra y ganaste${IS_sistemGold ?" 2 Oros ":" "}conservar arriba..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += q.length > 2 ? 10:DM_FR.acertos == DM_FR.palavra_ofc.length ? 5:2
Goldrgs(rggold)
}
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(RST_T)
} else {
reply(`${q2.length > 2 ? `Desafortunadamente perdiste${IS_sistemGold? " 3 Golds": ""}, me equivoqué en toda la palabra, debí intentar letra por letra, cierto, reiniciaré el juego..` :ERROS+ERRQ == 6 ? `Aa, ¿completaste 6 errores y perdiste ${IS_sistemGold? "Desafortunadamente, 2 oros":", "}Reiniciaré el juego..`:`¿Cometiste un error y perdiste ${IS_sistemGold? "2 Oros":""} 😥..`}`)
if(IS_sistemGold) {
rggold[i2].usus[i3].Golds += 2
Goldrgs(rggold)
}
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break
 
case 'stickers':
if (!q) return reply("Introduce el número de stickers que quieres que te envíe")
if (!Number(args[0]) || Number(q.trim()) > 5) return reply("Introduce el número de stickers que quieres que te envíe... no más de 5...")
async function figuss() {
var rnd = Math.floor(Math.random() * 8051)
conn.sendMessage(from, { sticker: { url: `https://raw.githubusercontent.com/badDevelopper/Testfigu/main/fig (${rnd}).webp` } })}
for (i = 0; i < q; i++) {
await sleep(680)
figuss()
}
break

case 'limpar_mortos-cnt':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoDono)
var RD_CNT = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
CNT1 = []; for ( i of groupMembers) {CNT1.push(i.id)} 
CNT = []; for ( i of RD_CNT) {
if(!CNT1.includes(i.id)) CNT.push(i)}
for ( i of CNT) {
RD_CNT.splice(RD_CNT.map(i => i.id).indexOf(i.id), 1)}
fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage, null, 2))
reply("Los usuarios que ya fueron eliminados o abandonaron el grupo, fueron eliminados del contador de mensajes..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(Res_SoDono)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+SNET)  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./armor/countmsg.json", JSON.stringify(countMessage))
reply("Usuario eliminado del contador de mensajes exitosamente...")
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(Res_SoGrupo)
if(command == "anotacao" || command == "nota") {
if(!q.trim()) return reply("Ingresa el título de la nota que deseas extraer.")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo no tiene anotaciones...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("No contiene ninguna anotación con este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q.trim())  
mention(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(i2 < 0) return reply("Este grupo no tiene anotaciones...")
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2]?.puxar 
txtin = "──────────────────\n\n"
for ( i = 0; i < antr?.length; i++) {
txtin += `↝ Anotación : ⟮ ${anotar[i2]?.puxar[i]?.nota} ⟯ - 〈 ${anotar[i2]?.puxar[i]?.anotacao} 〉\n\n`
}
txtin += "──────────────────\n\n"
mention(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
conn.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply("Error, mira si este enlace es válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
conn.sendMessage(from, {image: {url: q}}, {quoted: info}).catch(e => {
reply("Error, mira si este enlace es válido...")
})
}
break

case 'logos1':
if(!q) return reply(`ejemplo: ${prefix+command} boteco`);
var LOGOS = ['shadow','metalgold','cup','txtborboleta','cemiterio','efeitoneon','harryp','lobometal','neon2','madeira','lovemsg3','coffecup','coffecup2','florwooden','narutologo','fire','romantic','smoke','papel','lovemsg','lovemsg2','fiction','3dstone','areia','style','blood','pink','cattxt','neondevil','carbon','metalfire','thunder','vidro','jokerlogo','transformer','demonfire','jeans','metalblue','natal','ossos','asfalto','break','glitch2','colaq','neon3','nuvem','horror','matrix','berry','luxury','lava','thunderv2','neongreen','neve','neon','neon1','neon3d','gelo','neon3','3dgold','lapis','toxic','demongreen','rainbow','halloween','angelwing','hackneon','fpsmascote','equipemascote','txtquadrinhos','ffavatar','mascotegame','angelglx','gizquadro','wingeffect','blackpink','metalgold','girlmascote','logogame'];
var ENV = [];
for(var a = 0; a < LOGOS.length; a++) {
ENV.push({title: LOGOS[a], description: `Logo personalizado: ${a+1}`, rowId: prefix+LOGOS[a]+` ${q}`})}
LGS = "LOGOS DE 1 TEXTO:\n\n"
for ( i of ENV) {
LGS += `${i.description}\n\nLogo: ${i.title}\n\nejemplo: ${i.rowId}\n\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n`
}
reply(LGS)
break


case 'menu':
case 'helpp':
case 'menup':
case 'comandosp':
if(isAudioMenu) {
audiomenu = await fs.readFileSync("./datab/audios/menucmd.mp3")
conn.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
}
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: menu(prefix, NomeDoBot, sender), mentions: [sender]}, {quoted: info})
break 

case 'activarcmds':
case 'ativacoes':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
var statuszada =
`
Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'} 
Comando: ${prefix}antilink 1 / 0

Anti Notas: ${isAntiNotas ? '✓' : '✕'} 
Comando: ${prefix}antinotas 1 / 0

Limite Caracteres: ${isAntiFlood ? '✓' : '✕'} 
Comando: ${prefix}limitecaracteres 1 / 0

Anti Fake: ${isAntifake ? '✓' : '✕'} 
Comando: ${prefix}antifake 1 / 0

Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'} 
Comando: ${prefix}anticatalogo 1 / 0

Anti localizacion: ${Antiloc ? '✓' : '✕'} 
Comando: ${prefix}antiloc 1 / 0

X9 De Cargo de ADM: ${isx9 ? '✓' : '✕'}  
Comando: ${prefix}x9 1 / 0

Revelar visualizacion única: ${isX9VisuUnica ? '✓' : '✕'} 
Comando: ${prefix}x9visuunica 1 / 0

Modo Brincadeira: ${isModobn ? '✓' : '✕'} 
Comando: ${prefix}modobrincadeira 1 / 0

Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'} 
Comando: ${prefix}antilinkgp 1 / 0

bienvenida 1: ${isWelkom ? '✓' : '✕'} 
Comando: ${prefix}bienvenida 1 / 0

bienvenida 2: ${isWelkom2 ? '✓' : '✕'} 
Comando: ${prefix}bienvenida2 1 / 0

Level ${isLevelingOn ? '✓' : '✕'} 
Comando: ${prefix}leveling 1 / 0

Anti video: ${isAntiVid ? '✓' : '✕'} 
Comando: ${prefix}antivideo 1 / 0

Anti imagen: ${isAntiImg ? '✓' : '✕'} 
Comando: ${prefix}antiimg 1 / 0

Anti audio: ${isAntiAudio? '✓' : '✕'} 
Comando: ${prefix}antiaudio 1 / 0

Anti Documento: ${Antidoc ? '✓' : '✕'} 
Comando: ${prefix}antidoc 1 / 0

Anti contacto ${isAntiCtt ? '✓' : '✕'}
Comando: ${prefix}antictt 1 / 0

Anti Sticker: ${isAntiSticker ? '✓' : '✕'} 
Comando: ${prefix}antisticker 1 / 0

Auto Sticker: ${isAutofigu ? '✓' : '✕'} 
Comando: ${prefix}autofigu 1 / 0

Auto respuesta: ${isAutorepo ? '✓' : '✕'} 
Comando: ${prefix}autorepo 1 / 0

Anti palabras: ${isPalavrao ? '✓' : '✕'} 
Comando: ${prefix}antipalabras 1 / 0

Nsfw: ${isNsfw ? '✓' : '✕'} 
Comando: ${prefix}nsfw 1 / 0

Recolher Link: ${isrecortarlink ? '✓' : '✕'} 
Comando: ${prefix}recortarlink

`
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: statuszada}, {quoted: info})
break 

case 'activarfuncoesdono':
case 'ativacoes_dono':  
if(!SoDono) return reply(Res_SoDono)
reply(`
- Comando para activar/desactivar el bloqueador al llamar al bot, solo Escriba el comando encendido y nuevamente para apagar: ${prefijo}antillamada - Comando para habilitar o deshabilitar el visor de mensajes, ver mensaje de todo, simplemente escriba el comando para llamar y el comando nuevamente para apagar: ${prefix}vermensaje - Comando para deshabilitar que muestra los comandos dados en la consola, simplemente escriba el comando una vez para activarlo y escriba el comando nuevamente para desactivarlo: ${prefijo}console - Comando para activar el bloqueador cuando un usuario envía un mensaje bot privado, bloqueado, comando usado 1 vez, se activa, usado nuevamente se desactiva: ${prefijo}antipv - Di el comando que no puede enviar un mensaje privado, para cambiar el mensaje, solo usa el comando ${prefix}msgantipv e ingresa lo que quieras activar el comando es escribirlo una vez y escribirlo nuevamente para desactivarlo: ${prefijo}antipv2 - Comando para activar y desactivar el audio del menú: ${prefix}menú de audio - Comando para activar y desactivar el control de marcado: ${prefix}verificado-global - Comando para desactivar el bot por completo para que nadie pueda usarlo: ${prefijo}botoff - Comando para funcionar únicamente con comandos para administrador: ${prefix}So_Adm - Comando para recopilar enlaces de los grupos en los que se encuentra el bot: ${prefix}recortarlink

`)
break

case 'verificado-global': 
if(!SoDono) return reply(Res_SoDono)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply(`-Comprueba si se ha activado para todos los comandos que tienes, para eliminarlo nuevamente simplemente escribe nuevamente el comando.`)
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`- Verifique todos los menús/comandos, si están desactivados, para activarlo nuevamente simplemente escriba el comando nuevamente.`) 
}
break

case 'audio-menu': 
if(!SoDono) return reply(Res_SoDono)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`- Si activó el audio para el menú _- exitosamente - _\n\nSi desea desactivarlo - Simplemente ingrese el comando nuevamente`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`- El audio fue desactivado desde el menú _- exitosamente - _\n\nSi deseas activarlo simplemente ingresa el comando nuevamente`) 
}
break;

case 'console':   
if(!SoDono) return reply(Res_SoDono)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- El comando para eliminar la consola ha sido activado _- exitosamente - _ Ahora no verás los comandos ni mensajes dados en la consola, pero funcionará perfectamente, ¿vale?, es bueno para evitar baneos de spam en Heroku.\n \ nSi desea desactivar, simplemente ingrese el comando nuevamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- El comando para eliminar la consola fue deshabilitado _- exitosamente - _ Ahora verás los comandos y mensajes dados en la consola, pero si la estás usando en Heroku, te recomiendo activarla. Es bueno evitar las prohibiciones de spam en Heroku.\n\nSi desea activarlo, simplemente escriba el comando nuevamente.`) 
}
break;

case 'logos':
case 'menulogo':
case 'menulogos':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: menulogos(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: info})
break 

case 'menuadm':
case 'menuadms':
case 'adm':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: adms(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: info})
break;

case 'menudono':
case 'donomenu':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: menudono(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: info})
break;

case 'efectosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: efeitos(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: info})
break;

case 'alteradores':
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: alteradores(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break;

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(`Este tipo de comando solo se puede utilizar en modo activo, habla con un administrador o si estás solo, simplemente escribe ${prefix}modobrincadeira 1`) 
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: brincadeiras(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break;

case 'menupremium':
case 'menuprem':
conn.sendMessage(from, {text: menuprem(prefix, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: selo})
break;

case 'configurar-bot':
conn.sendMessage(from, {text: configbot(prefix)}, {quoted: selo})
break;

case 'comandos-termux':
conn.sendMessage(from, {text: cmd_termux(prefix)}, {quoted: selo})
break;

case 'perfil':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palabrasc[Math.floor(Math.random() * palabrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nombre* : *${pushname}*
🪀 *Numero* : @${sender.split("@")[0]}
🐂 *Nivel de ganado* : *${nivelgador}${nivelgado2r}%*
📱 *Su Celular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nivel de guapo* : *${gostosurar}${gostosurar2}%*
🍼 *Valor del programa* : *R$${programa}*

➻ *~_CONSEJO_~* :
${conselho}`
conn.sendMessage(from, {image: {url: ppimg}, caption: dptr, mentions: [sender]}, {quoted: selo})
} catch (e) {
console.log(e)
}
break

case 'consejobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Consejos Bíblicos para ti: 

- ${conselhosb} 

> Bot: ${NomeDoBot}
> Grupo: ${groupName}`
conn.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

//========(FUNÇÕES-PREMIUM-AQUI)=======\\


case 'ler': 
case 'ocr':   
case 'lerfoto':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(Res_espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
DLT_FL(media)
})
.catch(err => {
reply(err.message)
DLT_FL(media)
})
} else {
reply('Solamente fotos!')
}
break

case 'premiumlist':
tkks = '╭────*「 *PREMIUM USER👑* 」\n'
for (let V of premium) {
tkks += `│+  @${V.split('@')[0]}\n`
}
tkks += `│+ Total : ${premium.length}\n╰──────*「 *${NomeDoBot}* 」*────`
mention(tkks.trim())
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
conn.sendMessage(from, {text: `CPF generado exitosamente : ${cpf}`}, {quoted: info})
break



case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Ciudades de ${ddds.data.state} con este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(args.length < 1) return reply(`ejemplo:\n${prefix}encurtalink https://youtube.com/@clovermyt`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'listatm':
if(!SoDono) return reply(Res_SoDono)
if(rgp.length == 0) return reply(`No contiene ningún registro de transmisión, use ${prefix}rgtm en el grupo donde desea recibir las transmisiones del bot.`)
bl = "_-_-_-_-_-_-_-_-_-_-_-_-\n\n";
for ( i = 0; i < rgp.length; i++) {
bl += `${i+1} - ID: ${rgp[i].id}\n\n- NOMBRE DE USUARIO O GRUPO: ${rgp[i].infonome}\n\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(Res_SoDono)
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ya está registrado en la lista de transmisión.") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
reply("Registrado exitosamente, cuando se realicen transmisiones este grupo/usuario estará en la lista.")
break

case 'tirardatm':
if(!SoDono) return reply(Res_SoDono)
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo no está registrado para ser eliminado de la lista de transmisión.") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./armor/json/TMGP.json", JSON.stringify(rgp))
reply("Grupo/Usuario eliminado de la lista de difusión exitosamente")
break

case 'fazertm':
if(!SoDono) return reply(Res_SoDono)
if(rgp.lengh == 0) return reply("No contiene ningún grupo registrado para transmitir.") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmisión del propietario: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmisión del propietario: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmisión del propietario: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmisión del propietario: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmisión del propietario: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmisión del propietario: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmisión del propietario: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmisión del propietario: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmisión del propietario: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmisión del propietario: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
conn.sendMessage(rgp[i].id, DFC)}
break


case 'reviver':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply("Comando desactivado por el propietario...")
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque el mensaje de la persona!')
sleep(5000)
response2 = await conn.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario agregado nuevamente al grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Sólo el bot o el propietario pueden ejecutar este comando.")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("")
mentions(`@${sender.split("@")[0]} Pronto - Agora usted es um administrador..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Sólo mi creador puede ejecutar este comando.")
mentions(`@${sender.split("@")[0]} Listo: ahora eres miembro regular nuevamente..`, [sender], true)
conn.groupParticipantsUpdate(from, [sender], "demote")
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `bienvenida(a) al grupo : ${groupName}


👾 •𝑺𝑬 𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣MBRE
📌 •CIUD∆D
🗓️ •EDAD
⚠️ •LEA L∆S REGL∆S DEL GRUP𝜣

*DISFRUTA DEL GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(Res_SoAdm)
txtz = `【᯽𒋨📷:𝑆𝑒 𝑝𝑟𝑒𝑠𝑒𝑛𝑡a🌚»°】
𒋨·࣭࣪̇🔥NOMBRE:
𒋨·࣭࣪̇🔥EDAD:
𒋨·࣭࣪̇🔥RASA:

𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ INGRESÓ EL INTERACTUACIÓN EN GRUPO, NO NECESITAMOS DECORACIONES, LOS INACTIVOS SERÁN ELIMINADOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 USTED̂ 𝖯UE𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】negra👩🏾‍🦱 【✔】blanca👩🏼
    【✔】dylce🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】enamorada💌【✔】rosquete🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】kbro🦄
    【✔】ʟᴏʟɪ🍭    【✔】cachudo🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】Lesbiana✂️
    【✔】Perra💄  【✔】Travieso🍌
                【✔】ninguna📵
. ☪︎ • ☁︎. . •.
【 BIENVENIDA】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'salirdelgp':
if(!SoDono)return reply(Res_SoDono)  
if(!q) return reply(`Debes ver el comando ${prefix}listagp y mirar qué grupo quieres abandonar, ver su número, y simplemente escribir\nejemplo: ${prefix}salirdelgp 0\en este comando, el bot abandonará el grupo que deseas. .`)
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
conn.sendMessage(ingfoo[q].id, {text: "Saldré del grupo, por orden de mi dueño, adiós..."}) 
setTimeout(() => {
conn.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Listo mi dueño, dejó el grupo que querías, si tienes dudas usa el comando listagp para comprobar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOLO MI HERMOSO DUEÑO```')
var getGroups = await conn.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `*LISTA DE GRUPOS*\n*Total de Grupos* : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await conn.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await conn.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "No se puede extraer el enlace"
}
teks1 += `• *Grupo* : ${i}\n• *Nombre del Grupo* : ${ingfoo[i].subject}\n• *Id del Grupo* : ${ingfoo[i].id}\n• Link del grupo: https://chat.whatsapp.com/${linkdogp}\n• *Creador Oficial*: ${metadt.subjectOwner}\n• *Creado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Mienbros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'actividades':
case 'actividad':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(Res_SoAdm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*actividades de los miembros del grupo:*\n\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `*• Mienbro:* @${uscnt.id.split('@')[0]}\n*• Comandos:* ${uscnt.cmd_messages}*\n*• Mensajes:* ${uscnt.messages}*\n*• Dispositivo:* ${uscnt.aparelho}*\n\n----------------------------------\n\n`
}
mention(teks)
} else return reply('*No encontre nada*')
} catch (e){
console.log(e)
}
break

case 'inactivos':
case 'inactivo':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.match(/[a-z]/i) || !q) return reply(`ejemplo: ${prefix+command} 0\nEsto mostrará cuántas personas tienen 0 mensajes en el grupo y, si usa 5, mostrará cuántos usuarios tienen 5 mensajes o menos.`)
await LIMPARDOCNT_QUEMJASAIU()
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(a => a.id == i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`No hay personas con ${q}  mensajes..`)
bli = `Usuarios con ${q.trim()} mensajes para abajo..\n\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `${ac +1} - _ Usuario: @${blue[ac].split("@")[0]}\n\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(Res_SoGrupo)  
if(!SoDono) return reply(Res_SoDono)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Ingresa el monto del contador de mensajes).\nejemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(` No hay más personas con ${q.trim()} mensajes.`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
conn.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correo':
if(!q.trim().includes("/")) return reply(`ejemplo: ${prefix}correo 558198923680/Hola amor, sdds`)
var [ tx1, tx2 ] = q.trim().split("/")
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧correo anonimo. 
┞┧Msg: ${tx2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${tx1}@s.whatsapp.net`, {text: bla})
reply(`Mensaje enviado exitosamente al usuario: ${tx1}`)
break

case 'nombre-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
reply(` El nombre de su bot se ha cambiado exitosamente a: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
reply(`Nick Del creador ha sido configurado a:${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(Res_SoDono)  
if(q.match(/[a-z]/i)) return reply("Solo números")
reply(`El número de propietario se configuró exitosamente para: ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono[0] = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
setting.prefix = q
fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
reply(`El prefijo se cambió exitosamente a: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Remarque una imagen")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Tranquilo amigo, ya te estoy cambiando la foto del menú...`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image")
logoslink.logo.splice([])
fs.writeFileSync('./armor/logos.json', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./armor/logos.json', JSON.stringify(logoslink, null, 2))
reply(`La foto del menú ha sido cambiada exitosamente a: ${logoslink.logo}`)
}, 1200)
} else {
reply(`Envía una imagen con el comando ${prefix + command} para cambiar la foto de todos los menús.`)
}
break

case 'setprefixs':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./armor/settings.json', JSON.stringify(setting, null, 2))
reply(`El prefijo se cambió exitosamente a: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
conn.groupUpdateSubject(from, `${body.slice(9)}`)
conn.sendMessage(from, {text: 'Se cambió el nombre del grupo.'}, {quoted: info})
break

case 'fotobot':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply(`Sube fotos con títulos de ${prefix}fotobot o etiquetas de imagen que ya se hayan subido`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
conn.updateProfilePicture(botNumber, buff)
reply('Gracias por el nuevo perfil😗')
break

case 'clonar':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply('¿Eres tu el dueño?')
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('Etiqueta a la persona que quieres clonar\n\n*ejemplo:* clonar@')
if(!menc_jid2[0] || menc_jid2[1]) return reply("Etiqueta al @ del usuario para robar su foto de perfil para la del bot..")
let { jid, id, notify } = groupMembers.find(x => x.id === menc_jid2[0])
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto de perfil actualizada exitosamente usando foto de perfil de @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Joder, hubo un error, la persona no debe tener foto 😔')
}
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
conn.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!q) return reply('¿Dónde está el texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
conn.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISION 」*\n\nGrupo: ${groupName}\n Número: wa.me/${sender.split('@')[0]}\nMensaje : ${body.slice(6)}`})
}
reply('Transmision enviada')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISION 」*\n\nGrupo : ${groupName}\n Número : wa.me/${sender.split('@')[0]}\nMensaje : ${body.slice(6)}`)
}
reply('Grupo de transmisión exitoso')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono1 = q.trim().replaceAll("@", "")
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Ahora contiene un primer propietario cambiado exitosamente a: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono2 = q.trim().replaceAll("@", "")
dono2 = nescessario.dono2
setNes(nescessario)
reply(`Ahora contiene un segundo propietario cambiado exitosamente a: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono3 = q.trim().replaceAll("@", "")
dono3 = nescessario.dono3
setNes(nescessario)
reply(`Ahora contiene un tercer propietario cambiado exitosamente a: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono4 = q.trim().replaceAll("@", "")
dono4 = nescessario.dono4
setNes(nescessario)
reply(`Ahora contiene un cuarto propietario cambiado exitosamente a: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono5 = q.trim().replaceAll("@", "")
dono5 = nescessario.dono5
setNes(nescessario)
reply(`Ahora contiene un quinto propietario cambiado exitosamente a: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
nescessario.dono6 = q.trim().replaceAll("@", "")
dono6 = nescessario.dono6
setNes(nescessario)
reply(`Ahora contiene un sexto propietario cambiado exitosamente a: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `[ Lista de creadores del bot ${NomeDoBot} ] 

Creador oficial del bot: ${numerodono_ofc}

- [ 1 ] ${dono1}\n- [ 2 ] ${dono2}\n- [ 3 ] ${dono3}\n- [ 4 ] ${dono4}\n- [ 5 ] ${dono5}\n- [ 6 ] ${dono6}`
reply(p)
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(Res_SoGrupo)
ytb = `Lista de admins del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'creartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Sólo el administrador o el propietario pueden usar este comando.")
if(!q.trim()) return reply("Escribe lo que quieras poner en la tabla de grupo.")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./armor/json/TABELA/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`La Tablea de grupo se creó exitosamente..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./armor/json/TABELA/tabela-${from}.json`)) {
return reply(`¿Dónde está la tabla? Créala con el comando\nejemplo: ${prefix}creartabela hermosas integrantes del grupo :y etc..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./armor/json/TABELA/tabela-${from}.json`)); 
blity = `- ⏰ Hora de creación : ${tabelagpofc.Horario}\n\n- 🗓️ Dia de creacion : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`
mention(blity)
break

case 'activo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Comando solo para administradores o propietarios.")
if(DonoOficial) {
if(fs.existsSync("./armor/json/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./armor/json/afk-@" + numerodono_ofc + ".json");
reply("bienvenido de nuevo, ahora estás en línea 🙂")
} else {
reply("No has registrado ningún mensaje fuera de su ausencia..")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("No hay constancia de su ausencia.")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausencia tomado exitosamente...")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Comando solo para administradores o propietarios.")  
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./armor/json/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensaje de ausencia creado exitosamente`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite de esta manera: ${prefix+command} estoy desayunando`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensaje de ausencia creado exitosamente\n\nSi desea desactivar digite el comando activo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensaje de ausencia creado exitosamente\n\nSi desea desactivar digite el comando activo")
}
} else {
return reply("Comando solo para administradores y el bot..")
}
break

case 'serpremium':
case 'serprem':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
premium.push(nmrdn)
fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
mention(`Felicidades @${numerodono_ofc} Fuiste agregado a la lista premiun.`)
break

case 'reagir':
const reactionMessage = {
react: {
text: "💖",
key: info.key
}
}
sendMsg = conn.sendMessage(from, reactionMessage)
break

case 'iniciar_o_jogo':
if(jogo_iniciado) return reply("El juego ya fue iniciado espere que termine porfavor")
mentions(`- ${tempo} el usuario @${sender.split("@")[0]} inicio el juego `, sender)
break

case 'addcmdpremium':
if(!SoDono) return reply(Res_SoDono);
if(nescessario.cmdpremium.includes(q.replace(prefix,
"").trim())) return reply("Este comando ya se encuentra en los comandos premiuns")
nescessario.cmdpremium.push(q.replace(prefix, "").trim())
cmdpremium = nescessario.cmdpremium
setNes(nescessario)
reply(`el Comando ${q.trim()} fue agregado a los comandos premiuns`);
break;

case 'tirarcmdpremium':
if(!SoDono) return reply(Res_SoDono);
if(!nescessario.cmdpremium.includes(q.replace(prefix,
"").trim())) return reply("Este comando no es premiun.")
nescessario.cmdpremium.splice(nescessario.cmdpremium.indexOf(q.replace(prefix,
"").trim()), 1)
cmdpremium = nescessario.cmdpremium
setNes(nescessario)
reply(`El comando ${q.trim()} fue eliminado de la lista premiuns`);
break;

case 'cmdpremium':
if(nescessario.cmdpremium.length == 0) return reply("No hay comandos ")
ABC = "Comandos Premiuns:\n\n"
for ( i of nescessario.cmdpremium) {
ABC += `_- ${i}\n\n`
}
reply(ABC)
break;

case 'addpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Menciona con @ a la persona o remarca su mensaje")
bla = premium.includes(marc_tds)
if(bla) return reply("*Este numero ya esta incluido..*")  
premium.push(marc_tds)
fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `👑@${marc_tds.split("@")[0]} Fue agregado a la lista de usuarios premiuns👑`, mentions: [marc_tds]}, {quoted: info})  
break 

case 'delpremium':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!marc_tds) return reply("Menciona con @ a la persona o remarca su mensaje")
if(!premium.includes(marc_tds)) return reply("*Este número no está incluido en la lista de usuarios premiun..*")  
pesquisar = marc_tds
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./armor/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: ` @${marc_tds.split("@")[0]} fue eliminado de los usuarios Premiuns..`, mentions: [marc_tds]}, {quoted: info})
break

case 'limpar':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *LɪᴍᴘIᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
if(!isPremium) return reply("solo para usuarios premiuns..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!menc_prt) return reply("Marca el mensaje del usuario que deseas eliminar, del bot o de alguien..")
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fondobienvenida':
case 'fondobv':  
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Remarque una imagen Porfavor")
reply('Usted debe remarcar una foto, si en caso falla y no se agrega vuelva a intentarlo')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image")
fundo1 = res
Links_P.fundo1 = res
fs.writeFileSync("./armor/links.json", JSON.stringify(Links_P, null, 2));
reply(`La imagen de bienvenida fue cambiada exitosamente a: ${fundo1}`)
}
break

case 'fondosalir':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(Res_SoDono)
if(!isQuotedImage) return reply("Remarque una imagen Porfavor")
reply('Usted debe remarcar una foto, si en caso falla y no se agrega vuelva a intentarlo')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image")
fundo2 = res
Links_P.fundo2 = res
fs.writeFileSync("./armor/links.json", JSON.stringify(Links_P, null, 2));
reply(`La imagen de salida fue cambiada exitosamente a: ${fundo2}`)
}
break

case 'antillamada':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(Res_SoDono)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`Activando antillamadas`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('Desactivando antillamadas')
}
break

case 'antipv':  
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`Activando antipv, cada vez que me hablen seran bloqueados automaticamente`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('Desactivando antipv')
}
break

case 'antipv2':
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("*Antipv fake , solo hablare y no bloqueare.")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply("*Sucessel modo  antipv desligado, pv liberado.")
}
break

case 'antipv3':
if(!SoDono) return reply(Res_SoDono)
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("*Antipv activado, toda persona que me hable sera bloqueada , execto mi creador y premiuns")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply("*Antipv desactivado")
}
break

case 'msgantipv':
if(!SoDono) return reply(Res_SoDono);
if(!q.trim()) return reply("cual el mensaje que quieres que ponga en antipv2")
msgantipv2 = q.trim()
nescessario.msgantipv2 = q.trim()
setNes(nescessario)
reply("Mensaje de antipv2 cambiada exitosamente");
break;

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Menciona con @ a la persona o remarca su mensaje")
var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+SNET || menc_prt
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Ese numero no esta incluido*')
ban.push(blcp)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `🚫@${blcp.split('@')[0]} fue bloqueado🚫`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q.length > 6) return reply("Menciona con @ a la persona o remarca su mensaje")
var blcp = menc_jid2 || q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+SNET || menc_prt
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Ese número no esta incluido*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${blcp.split('@')[0]} fue desbloqueado❎`
conn.sendMessage(from, {text: susp, mentions: [blcp]})
break

case 'blocklist':
jrc = 'ESTA ES LA LISTA DE NÚMEROS BLOQUEADOS :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
conn.sendMessage(from, {text: jrc.trim(), mentions: ban})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(Res_SoDono)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return conn.sendMessage(from, {text: `root@ladybot:~ ${err}`}, {quoted: info})
if(stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
conn.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'dados':
case 'ping':
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
bla = `
━━━━┉┉┉┅┅┅┅┉┉┉━━━━

 ू ፝͜❥ ${tempo} @${sender.split("@")[0]} 

 El Bot se encuentra online por:
 
  ͢   ${kyun(uptime)}

  ͢   Velocidad de respuesta: ${String(r.toFixed(3))}

━━━━┉┉┉┅┅┅┅┉┉┉━━━━`
conn.sendMessage(from, {text: bla, mentions: [sender]}, {quoted: selo})
break

case 'gtts':
try {
if (args.length < 1) return conn.sendMessage(from,{text: `y el texto?`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar el código del idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('máximo de letras permitidas son 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
conn.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
return reply("error..")
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply("Error..")
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.trim().toLowerCase().includes("blockcmd blockcmd") || (q.trim().toLowerCase().includes("blockcmd  blockcmd"))) return reply(`¿Estás loco? ¿Quieres bloquear el comando de bloqueo?`)
if(getComandoBlock(from).includes(q.trim().toLowerCase()))return reply('Ese comando esta bloqueado')
addComandos(from, q.trim().toLowerCase())
reply(`El comando ${args[0]} Fue blockeado`)
break

case 'unblockcmd':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(q.trim().toLowerCase().includes("blockcmd unblockcmd") || (q.trim().toLowerCase().includes("blockcmd  unblockcmd"))) return reply(`¿Estás loco? ¿Quieres desbloquear el comando de bloqueo?`)  
if(!getComandoBlock(from).includes(q.trim().toLowerCase()))return reply('Este comando ya está  desbloqueado')
deleteComandos(from, q.trim().toLowerCase())
reply(`El comando ${args[0]} Fue desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
conn.sendMessage(from, {text: tkks.trim()}, {quoted: info})
break

case 'evaluacion':
const evaluacion = body.slice(8)
if(args.length <= 1) return reply(`ejemplo: ${prefix}evaluacion "Que hermoso bot"`)
if(args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ evaluacion ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${evaluacion}`
conn.sendMessage(nmrdn, {text: tdptls}, {quoted: info})
reply("Gracias por enviar la evaluacion a mi creador")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`ejemplo: ${prefix}bug "ocurrio un error en el comando stickers"`)
if(args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split(SNET)[0]}\nError o bug: ${bug}`
conn.sendMessage(nmrdn, {text: teks1}, {quoted: info})
reply("Gracias por enviar el problema a solucionar a mi creador")
break

case 'sugestão':
case 'sugerencia':
const sugerencia = body.slice(10)
if(args.length <= 1) return reply(`ejemplo: ${prefix}sugerencia "Cree un comando de welcome sin imagen."`)
if(args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugerencia ]\nDe: wa.me/${sender.split(SNET)[0]}\n: ${sugerencia}`
conn.sendMessage(nmrdn, {text: sug}, {quoted: info})
reply("Gracias por enviar la sugerencia a mi creador.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'gerarlink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(Res_espere)
let boij;
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi, "image")
reply(res)
} else {
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi, "video")
reply(res)
}
} catch (e){
return reply("Lo siento ocurrio un error")
}
break


case 'votar_duelo': case 'votar_combate':
if(isGroup) return reply(`Solo se puede usar en grupos..`)  
var [nmr_v, id_g] = q.trim().split("/")
if(!id_g) return msg.reply(`ejemplo: ${prefix}votar en el grupo que empezó a votar para ver cómo votar en el formato correcto.`)
if(!fs.existsSync(`./armor/json/DUELO/duelo_${id_g}.json`)) return reply(`no hay ningun duelo abierto`)
var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${id_g}.json`))
if(dl_JsOn.voto_usu1.includes(sender)) return reply("Ya votaste por alguien, por lo que no puedes volver a votar.")
if(dl_JsOn.voto_usu2.includes(sender)) return reply("Ya votaste por alguien, por lo que no puedes volver a votar.")
if(dl_JsOn.usu1 == nmr_v+"@s.whatsapp.net") {
dl_JsOn.voto_usu1.push(sender)
} else {
dl_JsOn.voto_usu2.push(sender)
}
fs.writeFileSync(`./armor/json/DUELO/duelo_${id_g}.json`, JSON.stringify(dl_JsOn, null, 2))
reply(" Votaste exitosamente, ahora solo espera a terminar para ver los resultados.🙂.")
break;

case 'votar': case 'como_votar':
if(!isGroup) return reply(Res_SoGrupo)  
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`No hay ningun duelo aun`)
reply("Cómo votar, la explicación de los 2.")
var dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
conn.sendMessage(sender, {text: `Para votar por el primer usuario:
Use o comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu1}/${from} 

Para votar por el segundo usuario: Utilice el comando: ${setting.prefix}votar_duelo ${dl_JsOn.usu2}/${from} 
`})
break;

case 'cerrar_duelo': case 'cerrar_combate':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("solo administradores pueden usar este comando..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`no hay dueleos aun`)
DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
reply("Duelo reseteado / cancelado..")
break

case 'terminar_votacion':
try {
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Este comando puede ser usado solo por administradores..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`no hay duelos aun`)
dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
if(dl_JsOn.voto_usu1.length == dl_JsOn.voto_usu2.length) return reply(`[NOTA] - LOS 2 USUARIOS TERMINARON UNA VOTACION, CON LA MISMA PUNTUACIÓN:

1: ${dl_JsOn.voto_usu1.length} Votos

2: ${dl_JsOn.voto_usu2.length} Votos

Entonces la decisión está en manos de los administradores, si rehacer el duelo, o decidir el ganador de alguna manera...`)
var blak = `[ Ganador: @${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]} ]\n\nusuario _- 1 - @${dl_JsOn.usu1.split("@")[0]}\n\ncantidad de votos: ${dl_JsOn.voto_usu1.length}\n_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\nusuario _- 2 - @${dl_JsOn.usu2.split("@")[0]}\n\ncantidad de votos: ${dl_JsOn.voto_usu2.length}\n`
try {pfimg = await conn.profilePictureUrl(`${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}@c.us`, 'image')} catch {pfimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'};
bl1 = await getBuffer(pfimg); bl_up = await upload(bl1, "image")
blar = await getBuffer(`https://eruakorl.sirv.com/josival-aleatory/ganhador.jpg?text.0.text=${dl_JsOn.voto_usu1.length > dl_JsOn.voto_usu2.length ? dl_JsOn.usu1.split("@")[0] : dl_JsOn.usu2.split("@")[0]}&text.0.position.gravity=center&text.0.position.y=22%25&text.0.size=62&text.0.color=000000&text.0.font.family=Source%20Serif%20Pro&text.0.font.weight=700&text.0.font.style=italic`)
bli = await upload(blar, "image")
conn.sendMessage(from, {image: {url: `https://telegra.ph/file/63b348d0102cd6aff8b3a.jpg`}, caption: blak, mentions: [dl_JsOn.usu1, dl_JsOn.usu2]})
} catch {
reply("error")
}
U_S_US = `Usuarios que votaron por: ${dl_JsOn.usu1.split("@")[0]}\n\n`
for (var i of dl_JsOn.voto_usu1) {
U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n\n`  
}

U_S_US += `Usuarios que votaron por: ${dl_JsOn.usu2.split("@")[0]}\n\n`
for (var i of dl_JsOn.voto_usu2) {
U_S_US += `- ( https://wa.me/${i.split("@")[0]} )\n`  
}
conn.sendMessage(sender, {text: U_S_US})
await setTimeout(() => {
DLT_FL(`./armor/json/DUELO/duelo_${from}.json`)
}, 30000)
break

case 'iniciar_votacion':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply("Este comando puede ser usado solo por administradores..")
if(!fs.existsSync(`./armor/json/DUELO/duelo_${from}.json`)) return reply(`no hay duelos aun..`)
dl_JsOn = JSON.parse(fs.readFileSync(`./armor/json/DUELO/duelo_${from}.json`))
mention(`[ ATENCIÓN ] - La votación ha comenzado, presta atención.

@${dl_JsOn.usu1.split("@")[0]}
Para votar por el primer usuario en el duelo:
https://wa.me/${botNumber.split("@")[0]}?text=${setting.prefix}votar_duelo%20${dl_JsOn.usu1.split("@")[0]}/${from}

@${dl_JsOn.usu2.split("@")[0]}
Para votar por el segundo usuario del duelo:
https://wa.me/${botNumber.split("@")[0]}?text=${prefix}votar_duelo%20${dl_JsOn.usu2.split("@")[0]}/${from}`)
break;



case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!q) return reply( `y el texto?\n\nejemplo : ${prefix + command} HOLA PERRAS`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISION DEL BOT 」\n\n ${q}`
conn.sendMessage(anu[i], {text: txt})
}
reply(`Enviado exitosamente `)
}
break


case 'join': case 'entrar':
if(!SoDono) return reply(Res_SoDono)
string = args.join(' ')
if(!string) return reply('falta el link a lado del comando.')
if(string.includes('chat.whatsapp.com/') || reply('verifique el link si funciona.') ) {
link = string.split('app.com/')[1]
try {
conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('el grupo esta lleno.')
}
if(String(erro).includes('not-authorized') ) {
reply('no puedo entrar al grupo, porque alguien me elimino.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('Ya se encuentra activo')
dataGp[0].antiimg = true
setGp(dataGp)
reply('comando anti imagen activado✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('ya se encuentra desactivado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('comando anti imagen activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antivideo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('ya se encuentra activo')
dataGp[0].antivideo = true
setGp(dataGp)
reply('comando anti video activado✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('ya se encuentra desactivado')
dataGp[0].antivideo = false
setGp(dataGp)
reply('comando anti video activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antiaudio':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('ya se encuentra activo')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('comando anti audio activado✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('ya se encuentra desactivado')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('comando anti audio activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antisticker':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('Ya se encuentra activo')
dataGp[0].antisticker = true
setGp(dataGp)
reply('comando anti sticker activado✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('ya se encuentra desactivado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('comando anti sticker activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('ya se encuentra activo')
dataGp[0].antidoc = true
setGp(dataGp)
reply('comando anti documento activado✔️')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('ya se encuentra desactivado')
dataGp[0].antidoc = false
setGp(dataGp)
reply('‼️ comando anti documento activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antictt':
case 'anticontacto':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('ya se encuentra activo')
dataGp[0].antictt = true
setGp(dataGp)
reply('🌀 comando anticontacto activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('ya se encuentra desactivado')
dataGp[0].antictt = false
setGp(dataGp)
reply('‼️ comando anticontacto activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antiloc':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
try {														 
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('ya se encuentra activo.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('comando anti loc activado✔️')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('ya está Desactivado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('comando anti loc activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
} catch {
reply('error')
}
break

case 'antilinkgp':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('ya se encuentra activo')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('🌀 comando antilinkgp 📝')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('ya se encuentra desactivado')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('‼️ comando antilink de grupo ✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('ya se encuentra activo')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('🌀 comando antilink hardcore activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('ya se encuentra desactivado')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('‼️ comando antilink harcore activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'x9':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isx9) return reply('ya se encuentra activo')
dataGp[0].x9 = true
setGp(dataGp)
reply('🌀 comando x9 activado,  Te notificaré cuando alguien sea degradado o ascendido a administrador.😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('ya se encuentra desactivado')
dataGp[0].x9 = false
setGp(dataGp)
reply('‼️ comando x9 activado, Ya no notificaré ascensos o descensos de categoría de administrador..✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'vermensaje':
if(!SoDono) return reply(Res_SoDono)
if(!isVisualizar) {
nescessario.vermensaje = true
setNes(nescessario)
reply('🌀comando ver todos los mensajes enviados en grupos y privados 📝')
} else if(isVisualizar) {
nescessario.vermensaje = false
setNes(nescessario)
reply('‼️ comando ver todos los mensajes enviados en grupos y privados✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'gold': case 'golds': case 'consultargold':
if(!IS_sistemGold) return reply(`Sólo es posible utilizar este comando activando el sistema Golds\nejemplo: ${prefix}sistemgold 1`)
if(!isGroup) return reply(Res_SoGrupo)
if(command == "consultargold") {
ConsultarGold(menc_os2)
} else {
ConsultarGold(sender)
}
break

case 'rankgold':
if(!isGroup) return reply(Res_SoGrupo)
galo = rggold[rggold.map(i => i.grupo).indexOf(from)].usus.map(i => i)
rank = galo.sort((a, b) => (a.Golds < b.Golds) ? 0 : -1)
ment = []

ble = `💰 *Rank de Golds* 💰\n`

for ( i = 0; i < 5; i++) {
  if(i != null) {
ble += `
┌───────────────
│ ${i + 1}º : @${rank[i].id.split('@')[0]}
│
│  Saldo: ${rank[i].Golds}
└────────────\n`
ment.push(rank[i].id)
}
}
mentions(ble, ment, true)

break

case 'addgold': case 'tirargold':
if(!SoDono) return reply(Res_SoDono)
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_os2 && !Number(q) || menc_jid2[1]) return reply(`Marca el mensaje o @ del usuario que quiere agregar Golds O quitar..\n\nejemplo: Si es solo tomar o agregar marcando el mensaje\nUse: ${prefix}addgold 5\n\nSi es Eliminar o agregar usando @\nUse: ${prefix}addgold @marque 5`) 
var qp = q.replace(menc_jid2, "")
if(command == "addgold") {
AddGold(Number(qp), menc_os2)
} else if(command == "tirargold") {
TirarGold(Number(qp), menc_os2)
}
break

case 'sistemgold':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
hora130 = moment.tz('America/Sao_Paulo').format('HH:mm');
if(Number(args[0]) === 1) {
if(IS_sistemGold) return reply('ya se encuentra activo')
dataGp[0].sistemGold = true
setGp(dataGp)
reply(`Sistema de Golds fue activado exitosamente en este grupo: ${hora130}`)
} else if(Number(args[0]) === 0) {
if(!IS_sistemGold) return reply('ya se encuentra desactivado')
dataGp[0].sistemGold = false
setGp(dataGp)
reply(`Desafortunadamente para los usuarios, el sistema Golds fue desactivado en este grupo: ${hora130}`)
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('ya se encuentra activo')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('🌀 comando revelar visualizacion única activado 📝')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('ya se encuentra desactivado')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('‼️ comando revelar visualizacion única activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'so_adm':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('ya se encuentra activo')
dataGp[0].soadm = true
setGp(dataGp)
reply(' -  comando solo administrador usa comandos activados📝')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('ya se encuentra desactivado')
dataGp[0].soadm = false
setGp(dataGp)
reply('‼️ Se deshabilitó la función Solo ADM usa comandos habilitados ✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'odelete':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('ya se encuentra activo')
nescessario.Odelete = true
setNes(nescessario)
reply('🌀  eliminar comando en grupos📝')
} else if(Number(args[0]) === 0) {
if(!IS_DELETE) return reply('ya se encuentra desactivado')
nescessario.Odelete = false
setNes(nescessario)
reply('‼️ eliminar comando en grupos ✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antifake':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('ya se encuentra activo')
dataGp[0].antifake = true
setGp(dataGp)
reply('🌀 comando antifake activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAntifake) return reply('ya se encuentra desactivado')
dataGp[0].antifake = false
setGp(dataGp)
reply('‼️ comando antifake activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'prefixos':
if(!isGroup) return reply(Res_SoGrupo)
if(dataGp[0].prefixos.length < 1) return reply("no tiene ningun prefijo.")
bla = `Lista de prefijos para uso del bot, en Grupos: ${groupName}\n\n`
for ( i of dataGp[0].prefixos) {
bla += `Prefijo: ${i}\n\n`
}
reply(bla)
break

case 'add_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`debe activar primero, multiprefix\nejemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("nose aceptan letras raras ni emojis..")
if(!q.trim()) return reply("Sin espacios...")
if(q.trim() > 1) return reply(`ejemplo: ${prefix}add_prefixo !`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Ya existe este prefijo`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefijo ${q.trim()} Adicionado exitosamente...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isMultiP) return reply(`debe activar primero, multiprefix\nejemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("nose aceptan letras raras ni emojis..")
if(!q.trim()) return reply("no dejes espacios")
if(q.trim() > 1) return reply(`ejemplo ${prefix}tirar_prefixo !`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`ese prefijo no existe`)
if(dataGp[0].prefixos.length == 1) return reply("adicione un prefijo para poder eliminarlo.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefijo ${q.trim()} eliminado exitosamente ..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono) return reply(Res_SoAdm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('🌀 comando multi prefixos activado 📝')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('‼️ comando multi prefixos activado✔️')
}
break

case 'antinotas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Ya se encuentra activo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('comando anti notas activado✔️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('ya se encuentra desactivado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('comando anti notas activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('ya se encuentra activo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('🌀 comando anticatalogo activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('ya se encuentra desactivado')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('‼️ comando anticatalogo activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'bienvenida':
case 'welcome':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
//if(!SoDono) return reply(Res_SoDono)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('ya se encuentra activo')
dataGp[0].wellcome[0].bienvenida1 = true
setGp(dataGp)
reply('🌀 comando bienvenida activado 📝')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('ya se encuentra desactivado')
dataGp[0].wellcome[0].bienvenida1 = false
setGp(dataGp)
reply('‼️ comando bienvenida activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'bienvenida2':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
//if(!SoDono) return reply(Res_SoDono)
if(args.length < 1) return reply(`ejemplo:\n${prefix + command} 1 para activar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('❎ya esta activado❎')
dataGp[0].wellcome[1].bienvenida2 = true
setGp(dataGp)
reply('✅activado✅')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('❎ya esta desactivado❎')
dataGp[0].wellcome[1].bienvenida2 = false
setGp(dataGp)
reply('❌desactivado❌')
} else {
reply(`ejemplo: ${prefix + command} 1, para activar y 0 para desactivar`)
}
break

case 'legendabv':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*mensaje definido!*')
} else {
reply(`ejemplo : ${prefix}bienvenida 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*mensaje definido!*')
} else {
reply(`ejemplo : ${prefix}bienvenida 1`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*mensaje definido!*')
} else {
reply(`ejemplo : ${prefix}bienvenida2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*mensaje definido!*')
} else {
reply(`ejemplo : ${prefix}bienvenida2 1`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*mensaje definido!*')
} else {
reply(`ejemplo : ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*mensaje definido!*')
break

case 'legenda_imagen': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
dataGp[0].legenda_imagen = q
setGp(dataGp)
reply('*mensaje definido!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('*falta el mensaje*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*mensaje definido!*')
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(Res_SoDono)
if(!mrc_ou_numero) return reply("Remarque el mensaje de la persona..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*el mumero ya esta en la lista ban*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(Res_SoDono)
if(!mrc_ou_numero) return reply("Remarque el mensaje de la persona...")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*el mumero no esta en la lista*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*el mumero fue eliminado de la lista negra*`)
break

case 'simi':
if(!isGroup) return reply(Res_SoGrupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("respuesta no encontrada..")
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('ya se encuentra activo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('🌀 comando auto stickers activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('ya se encuentra desactivado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('‼️ comando auto stickers activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'autorepo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('ya se encuentra activo')
dataGp[0].autorespuesta = true
setGp(dataGp)
reply('🌀 comando auto respuesta activado 📝')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('ya se encuentra desactivado')
dataGp[0].autorespuesta = false
setGp(dataGp)
reply('‼️ comando auto respuesta activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply('1 para activar / 0 para desactivar')
if(Number(args[0]) === 1) {
if(isModobn) return reply('el modobrincadeira ya se encuentra activo')
dataGp[0].jogos = true
setGp(dataGp)
reply('🎯 comandel modo  brincadeira activado 🪀')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('el modobrincadeira ya está Desactivado')
dataGp[0].jogos = false
setGp(dataGp)
reply('🎯 comandel modo  brincadeira activado 🪀')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(Res_SoGrupo)
resul = `     
Olá usuario -> @${sender.split("@")[0]}\n\n★彡[ ${tempo} ]彡★ Aqui está su informacion: 

- Patente : ${patente} 

- Level* : ${level_up}

- Grupo: ${groupName}`
conn.sendMessage(from, {text: resul, mentions: [sender]}, {quoted: info})
break

case 'leveling':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*ya esta activado*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`Ya esta desactivado.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('「* Adicione el parametro 1 o 0 ')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(Res_SoGrupo)
if(!SoDono) return reply(Res_SoDono)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo ya está baneado`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo baneado exitosamente`)
} else {
if(!isBanchat) return reply(`No esta baneado el grupo`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbaneado...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(Res_SoDono)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Deshabilitar funciones y detener la ejecución exitosa de comandos por parte de los miembros...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Activando todas las funciones del bot nuevamente...`)
}
break
// aqui oficial
case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('el modo nsfw ya se encuentra activo')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`\`\`\`✓activado exitosamente el modo  nsfw +18 en el grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('el modo nsfw ya está Desactivado')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`\`\`\`✓El modo Nsfw +18 desactivado exitosamente en el grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'antipalabras':
case 'antipalabras':  
case 'antipalavra':    
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply(`[❗] 1 / 0, ejemplo ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('ya se encuentra activo.')
dataGp[0].antipalabras.active = true
setGp(dataGp)
reply('🌀 comando Anti palabras hardcore activado 📝')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('ya se encuentra desactivado')
dataGp[0].antipalabras.active = false
setGp(dataGp)
reply('‼️ comando Anti Palavra harcore activado✔️')
} else {
reply('1 para activar, 0 para desactivar')
}
break

case 'addpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palabras desactivado!')
if(args.length < 1) return reply( `Use asi : ${prefix + command} [palabras]. ejemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(ispalabras.includes(texto)) return reply('ya fue adicionada')
dataGp[0].antipalabras.palabras.push(texto)
setGp(dataGp)
reply('palabra adicionada exitosamente!')
break

case 'delpalavra':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(Res_SoDono)
if(!isPalavrao) return reply('Anti palabras desactivado!')
if(args.length < 1) return reply( `Use asi : ${prefix + command} [palabras]. ejemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!ispalabras.includes(texto)) return reply('ya fue eliminada')
var i = dataGp[0].antipalabras.palabras.indexOf(texto)
dataGp[0].antipalabras.palabras.splice(i, 1)
setGp(dataGp)
reply('palabras eliminada de la lista exitosamente!')
break

case 'listapalabras': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palabras desactivado!')
let lbw = `Esta es la lista de palabras\nTotal : ${ispalabras.length}\n`
for (let i of ispalabras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para activar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`🌀 el recurso limite de caracteres ya se encuentra activo en el grupo 🌀`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`✔️ el recurso limite de caracteres fue activado en el grupo📝`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('✔️ el recurso limite de caracteres no está activado en el grupo 📝')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('el recurso limite de caracteres fue desactivado en el grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para activar, 0 para desactivar el recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(Res_SoDono)
if(!isAntiFlood) return reply(`active este recurso primero ${prefix}limiteflood 1`)
if(!q) return reply(`cual es la cantidad? Ejemplo: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Solo números')
if(command == 'limitec'){
dataGp[0].limitec.cantidad = q
setGp(dataGp)
reply(`la cantidad de limite es : ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`limite global: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt &&
!info.key.fromMe) return reply(Res_SoAdm);
statuszada =
`
Anti Link Hard: ${isAntiLinkHard ? '✓' : '✕'} 
Comando: ${prefix}antilink 1 / 0

Anti Notas: ${isAntiNotas ? '✓' : '✕'} 
Comando: ${prefix}antinotas 1 / 0

Limite Caracteres: ${isAntiFlood ? '✓' : '✕'} 
Comando: ${prefix}limitecaracteres 1 / 0

Anti Fake: ${isAntifake ? '✓' : '✕'} 
Comando: ${prefix}antifake 1 / 0

Anti Catalogo: ${isAnticatalogo ? '✓' : '✕'} 
Comando: ${prefix}anticatalogo 1 / 0

Anti localizacion: ${Antiloc ? '✓' : '✕'} 
Comando: ${prefix}antiloc 1 / 0

X9 De Cargo de ADM: ${isx9 ? '✓' : '✕'}  
Comando: ${prefix}x9 1 / 0

Revelar visualizacion única: ${isX9VisuUnica ? '✓' : '✕'} 
Comando: ${prefix}x9visuunica 1 / 0

Modo Brincadeira: ${isModobn ? '✓' : '✕'} 
Comando: ${prefix}modobrincadeira 1 / 0

Anti Link Grupo: ${isAntilinkgp ? '✓' : '✕'} 
Comando: ${prefix}antilinkgp 1 / 0

bienvenida 1: ${isWelkom ? '✓' : '✕'} 
Comando: ${prefix}bienvenida 1 / 0

bienvenida 2: ${isWelkom2 ? '✓' : '✕'} 
Comando: ${prefix}bienvenida2 1 / 0

Level ${isLevelingOn ? '✓' : '✕'} 
Comando: ${prefix}leveling 1 / 0

Anti video: ${isAntiVid ? '✓' : '✕'} 
Comando: ${prefix}antivideo 1 / 0

Anti imagen: ${isAntiImg ? '✓' : '✕'} 
Comando: ${prefix}antiimg 1 / 0

Anti audio: ${isAntiAudio? '✓' : '✕'} 
Comando: ${prefix}antiaudio 1 / 0

Anti Documento: ${Antidoc ? '✓' : '✕'} 
Comando: ${prefix}antidoc 1 / 0

Anti contacto ${isAntiCtt ? '✓' : '✕'}
Comando: ${prefix}antictt 1 / 0

Anti Sticker: ${isAntiSticker ? '✓' : '✕'} 
Comando: ${prefix}antisticker 1 / 0

Auto Sticker: ${isAutofigu ? '✓' : '✕'} 
Comando: ${prefix}autofigu 1 / 0

Auto respuesta: ${isAutorepo ? '✓' : '✕'} 
Comando: ${prefix}autorepo 1 / 0

Anti palabras: ${isPalavrao ? '✓' : '✕'} 
Comando: ${prefix}antipalabras 1 / 0

Nsfw: ${isNsfw ? '✓' : '✕'} 
Comando: ${prefix}nsfw 1 / 0

`
conn.sendMessage(from, {image: {url: logoslink.logo}, caption: statuszada}, {quoted: info})
break
//
case 'reiniciar':
if(!SoDono) return
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

//==========(Sticker-Stickers)===========\\

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(Res_espere)
if(IS_sistemGold) {
setTimeout(async() => {
await ConsumirGold(2, sender)
}, 1000)
}
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `📍Creado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`Su imagen mano -_-`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('remarque un sticker...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(Res_espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `bot`, `lady`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `Lady Bot`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ error`); 
})
break

case 'rename':
case 'robar':  
if(!isQuotedSticker) return reply('remarque un sticker...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*y el nombrr del paquete?*')
if(!pack) return reply(`*ejemplo: ${prefix + command} sad/bla*`)
if(!author2) return reply(`*ejemplo: ${prefix + command} sad/dms*`)
reply(Res_espere)
if(IS_sistemGold) {
setTimeout(async() => {
await ConsumirGold(3, sender)
}, 1000)
}
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ error`); 
})
break

case 'fstiker':
case 'fsticker':
case 'f':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
 var pack = `🐞 usuario >:\n🐞  Bot >:\n🐞 creador(a):`
 var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(Res_espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
 var pack = `🐞 usuario >:\n🐞 Bot >:\n🐞 creador(a):`
 var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(Res_espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Envie imagen / video / gif con leyenda \n${prefix}sticker (duracion de video de 1 a 10 segundos)`)
}
break

case 'figu':
if(fs.existsSync(DF_TJ)) return reply("espere...")
var DF_TJ = "./datab/data/CVF.json"
fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ?  info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
var DFN = PUXJ[0]
DFN.sticker = {url: DFN.url}
await delay(1200)
DLT_FL(DF_TJ)
conn.sendMessage(from, DFN)
break

case 'st':
case 'stk':
case 'sticker':
case 's':
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = `🐞 usuario >:\n🐞 bot >:\n🐞 creador:`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`
reply(Res_espere)
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `🐞 usuario >:\n🐞 bot >:\n🐞 creador:`
var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`
reply(Res_espere)
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(conn, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`el video debe ser menor a 10 segundos`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('❌ remarca sticker ❌')
try {
reply(Res_espere)
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR')
})
} catch {
reply("Error..")
}
break

//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\

case 'placaloli':
if(!q) return reply(enviar.wrongFormat)
reply('espere..')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
break 

//=======================================\\

case 'substituir':
if(!SoDono && !isnit) return reply("solo mi creador lo puede usar..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
conn.sendMessage(from, {text:'Substituido exitosamente..'},{quoted: info})
} else {
reply('marque el archivo o documento..')
}
break

case 'index-bot':
if(!SoDono)return reply(Res_SoDono)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
conn.sendMessage(from, {text:'genial..'},{quoted: info})
} else {
reply('marque el documento que desea sustituir.')
}
break

case 'bann':
if(!SoDono) return reply("este comando puede ser usada solo por usuarios premiuns..") 
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(!menc_os2 || menc_jid2[1]) return reply("Etiqueta el mensaje del usuario o etiqueta a su @..., recuerda etiquetar solo a un usuario...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuario ya fue eliminado del grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} el usuario @${sender.split("@")[0]} desea eliminarte 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} el usuario @${sender.split("@")[0]} desea eliminarte 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('No soy yo quién para quitármelo, verdad 🙁, pero estoy decepcionado contigo')
if(numerodono.includes(menc_os2)) return reply('No puedo eliminar a mi dueño 🤧')
conn.sendMessage(from, {text: `@${menc_os2.split("@")[0]} fue [ ELIMINADO(A) EXITOSAMENTE ] - (Por motivos aun no esclarecidos) -`, mentions: [menc_os2]})
conn.groupParticipantsUpdate(from, [menc_os2], "remove")  
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("solo mi creador lo puede usar ..")
if(!isBotGroupAdmins) return reply(Res_BotADM)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
conn.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isGroupAdmins) return reply(Res_SoAdm)
if(args.length < 1) return reply('digita 1 para activar y 0 para desactivar')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('el modo nsfw ya se encuentra activo')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓activado exitosamente el modo  nsfw +18 en el grupo\`\`\` *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('el modo  nsfw ya está Desactivado')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`✓Modo Nsfw +18 desactivado exitosamente en el grupo\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 para activar, 0 para desligar')
}
break 


case 'chance':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)  
var avb = body.slice(7)
if(args.length < 1) return conn.sendMessage(from, {text: `ejemplo: ${prefix}chance Luuck es gay`}, {quoted: info})
random = `${Math.floor(Math.random() * 100)}`
hasil = `La chance ${body.slice(8)}\n\nes de... ${random}%`
mention(hasil)
break

case 'nazista':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo.`)
conn.sendMessage(from, {text: `❰ calculando su nivel de nazista : @${sender_ou_n.split("@")[0]} espere... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgnazista}, caption: `nivel de  nazista? \n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱  nazista 卐`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text: `❰ calculando su nivel de gay : @${sender_ou_n.split("@")[0]} espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feo = random
hetero = random
if(hetero < 20 ) {var bo = 'hmm... usted es hetero😔'} else if(hetero == 21 ) {var bo = '+/- hetero'} else if(hetero == 23 ) {var bo = '+/- hetero'} else if(hetero == 24 ) {var bo = '+/- hetero'} else if(hetero == 25 ) {var bo = '+/- hetero'} else if(hetero == 26 ) {var bo = '+/- hetero'} else if(hetero == 27 ) {var bo = '+/- hetero'} else if(hetero == 2 ) {var bo = '+/- hetero'} else if(hetero == 29 ) {var bo = '+/- hetero'} else if(hetero == 30 ) {var bo = '+/- hetero'} else if(hetero == 31 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 32 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 33 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 34 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 35 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 36 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 37 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 3 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 39 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 40 ) {var bo = 'tengo mis dudas aun...😑'} else if(hetero == 41 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 42 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 43 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 44 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 45 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 46 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 47 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 4 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 49 ) {var bo = 'usted tiene razon?😏'} else if(hetero == 50 ) {var bo = 'usted es o no?🧐'} else if(hetero > 51) {var bo = 'usted es gay🙈'
}
conn.sendMessage(from, {image: {url: imggay}, caption: `  usted es gay? \n\n 「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: info})
}, 7000)
break

case 'feo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text: `❰ calculando su nivel de feo : @${sender_ou_n.split("@")[0]} espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feo = random
if(feo < 20 ) {var bo = 'no es feo'} else if(feo == 21 ) {var bo = '+/- feo'} else if(feo == 23 ) {var bo = '+/- feo'} else if(feo == 24 ) {var bo = '+/- feo'} else if(feo == 25 ) {var bo = '+/- feo'} else if(feo == 26 ) {var bo = '+/- feo'} else if(feo == 27 ) {var bo = '+/- feo'} else if(feo == 2 ) {var bo = '+/- feo'} else if(feo == 29 ) {var bo = '+/- feo'} else if(feo == 30 ) {var bo = '+/- feo'} else if(feo == 31 ) {var bo = 'sigue siendo normal'} else if(feo == 32 ) {var bo = 'Todavía puedes conseguir algunas novias'} else if(feo == 33 ) {var bo = 'Todavía puedes conseguir algunas novias'} else if(feo == 34 ) {var bo = 'Es feo, pero tiene un gran corazón.'} else if(feo == 35 ) {var bo = 'Es normal, pero sigue siendo feo.'} else if(feo == 36 ) {var bo = 'Lindo pero feo con orgullo'} else if(feo == 37 ) {var bo = 'feo y vago, ve a arreglarte la cara'} else if(feo == 3 ) {var bo = 'das asco '} else if(feo == 39 ) {var bo = 'feo, Pero pero  con ducharse y arreglarse debería bastar'} else if(feo == 40 ) {var bo = 'FeiN, pero no hay gente fea, hay gente que no conoce los productos jequity'} else if(feo == 41 ) {var bo = 'usted es feo, pero está bien, sigue así'} else if(feo == 42 ) {var bo = 'Nada que el maquillaje y el arreglo no puedan resolver '} else if(feo == 43 ) {var bo = 'feo que duele ver, cómprate una mascarilla que mejore'} else if(feo == 44 ) {var bo = 'feo pero nada que una bolsa en la cabeza no pueda solucionar, verdad !?'} else if (feo == 45 ) {var bo = 'usted es feo, pero tiene buen gusto'} else if(feo == 46 ) {var bo = 'feo pero tiene muchos amigos'} else if( feo == 47 ) { var bo = 'feo pero tiene la inteligencia para ligar con varias chicas nuevas'} else if(feo == 4 ) {var bo = 'feo y todavía no sabe vestirse, carajo'} else if(feo == 49 ) {var bo = 'feooo'} else if(feo == 50 ) {var bo = 'usted es feo, pero no llena 🧐'} else if(feo > 51) {var bo = 'usted es demasiado feo 🙈'}

conn.sendMessage(from, {image: {url: imgfeo}, caption: `es feo? \n\n 「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱ feo 🙉\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: info})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:` ❰ nivel de corno : @${sender_ou_n.split("@")[0]}, espere... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgcorno}, caption: ` nivel de  corno? \n\n 「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱  corno 🐃`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:`❰ nivel de vesgo : @${sender_ou_n.split("@")[0]}, espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgvesgo}, caption: `nivel de  vesgo? \n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:`❰ nivel de bebado : @${sender_ou_n.split("@")[0]} , espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imgbebado}, caption:`nivel de  bebado? \n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:`❰ nivel de gado : @${sender_ou_n.split("@")[0]}, espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggado}, caption: `nivel de  gado? \n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱  gado 🐂`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:` ❰ calculando su nivel de gostoso : @${sender_ou_n.split("@")[0]} espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggostoso}, caption: `nivel de  gostoso? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
conn.sendMessage(from, {text:`❰ calculando su nivel de gostosa : @${sender_ou_n.split("@")[0]} espere... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
conn.sendMessage(from, {image: {url: imggostosa}, caption: `nivel de  gostosa? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」usted es: ❰ ${random}% ❱ gostosa 😳`, mentions: [sender_ou_n]}, {quoted: info})
}, 7000)
break

case 'matar':
case 'mata':  
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
if(!menc_os2 || menc_jid2[1]) return reply('remarque a la persona o mencionela con @')
conn.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `usted acaba de matar a @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: info})
break 


case 'beijo':
case "besar":
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
if(!menc_os2 || menc_jid2[1]) return reply('remarque a la persona o mencionela con @')
conn.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Le diste un lindo beso @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: info})
break

case 'biografia':
try {
var status = await conn.fetchStatus(marc_tds)  
} catch {
var status = "Privado o inexistente. "
}
reply(status)
break

case 'tapa':
case "nalgear":
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
if(!menc_os2 || menc_jid2[1]) return reply('remarque a la persona o mencionela con @')
conn.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Acabas de darle una palmada en el trasero😏 a @${menc_os2.split('@')[0]} 🔥`, mentions: [menc_os2]}, {quoted: info})
break

case 'chute':
case 'chutar':  
case "patear":
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
if(!menc_os2 || menc_jid2[1]) return reply('remarque a la persona o mencionela con @')
conn.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Acabas de patear a @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2]}, {quoted: info})
break 

case 'dogolpe':
case "golpear":
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
if(!menc_os2 || menc_jid2[1]) return reply('remarque a la persona o mencionela con @')
random = `${Math.floor(Math.random() * 100)}`
conn.sendMessage(from, {text:`*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${menc_os2.split("@")[0]}*\n*PORCENTAJE DE GOLPE* : ${random}%😂\n\nesa persona no tiene sentimientos,no es humano 😢`, mentions: [menc_os2]})
break

case 'shipo':
if(!menc_jid2) return reply('Etiqueta a alguien del grupo para encontrar a su pareja.')
mention(`*Hmmm.... les envío 2💘💘*\n\n1 = @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n && 2 = ${menc_jid2.split("@")[0]} con un porcentaje de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'casal':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(`Este tipo de comando solo puede ser utilizado com el modo brincadeira activo`)
mention(`*Hmmm.... les envío 2💘💘*\n\n1= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\nes ese\n2= @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\ncon un porcentaje de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'ranklevel':
case 'rankpatente':
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages + a.figus) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages + b.figus)) ? 0 : -1)
menc = [] 
blad = `
┌───────────────┐
│  RANK DE LEVEL & PATENTES\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Level: ${patentes[i5].usus[i6].level_usu}\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}\n   ༶ Conectado en: ${blue[i].aparelho}\n└────────────\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankactivos': 
case 'rankactivo':   
if(!isGroup) return reply(Res_SoGrupo)
await LIMPARDOCNT_QUEMJASAIU()
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `
┌────────────────┐
│ RANK DE LOS MAS ACTIVOS DEL GRUPO\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
┌───────────────
│ ${i + 1}º : @${blue[i].id.split('@')[0]}
└─────
   ༶ Mensajes: ${blue[i].messages}\n   ༶ Comandos dados: ${blue[i].cmd_messages}${i6 < 0 ? "" :`\n   ༶ Patente: ${patentes[i5].usus[i6].patente_usu}`}\n   ༶ Conectado en: ${blue[i].aparelho}\n   ༶ stickers: ${blue[i].figus}\n└────────────\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'checkactivo':
if(!isGroup) return reply(Res_SoGrupo)
await LIMPARDOCNT_QUEMJASAIU()
if(groupIdscount.indexOf(from) < 0) return reply('El bot no tiene datos sobre el grupo.')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Etiqueta al @ de los que quieren iniciar actividades/solo pueden hacer una a la vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`𖣘⃟ᗒ Consulta de actividades de\n𖣘⃟ᗒ @${menc_os2.split('@')[0]} en el grupo: ${groupName}\n𖣘⃟ᗒ Mensajes: ${RSM_CN.messages}\n𖣘⃟ᗒ Comandos dados: ${RSM_CN.cmd_messages}\n𖣘⃟ᗒ conectado en: ${RSM_CN.aparelho}\n𖣘⃟   stickers: ${RSM_CN.figus}`, [menc_os2], true)
} else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta de actividades de ⋆⃟ۣۜ᭪➣ @${menc_os2.split('@')[0]} en el grupo\n⋆⃟ۣۜ᭪➣ Mensajes: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*🤖RANK DE LOS 5 MAS GAYS DEL GRUPO [ ${groupName} ]🏳‍🌈*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DE LOS 5 MAS GADO DEL GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DE LOS 5 MAS CORNO DEL GRUPO 🐂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DE LOS 5 MAS GOSTOSOS DEL GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `RANK DE LOS 5 MAS GOSTOSAS DEL GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostosa);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*💂‍♂RANK DE LOS 5 MAS NAZISTAS DEL GRUPO 卐🤡*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*㊙ RANK DE LOS 5 MAS OTAKU DEL GRUPO ( ˶•̀ _•́ ˶)*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(Res_SoGrupo)
if(!isModobn) return reply(Res_SoModoBN)
ABC = `*RANK DE LOS 5 PAU MAYOR DEL GRUPO 📏*\n\n`
TMPAU = ["Pequeño para un cactus, te mata loco ", `Lo pequeño es realmente lindo `, `Más pequeño que mi dedo meñique demasiado pequeño 😑`, `Puedes sentirlo, es promedio 😌`, `Grande ` , `Grande incluso`, `Gigante como mi brazo 😖`, `Enorme, casi llega al útero 🤧`, `Demasiado grande adentro, y guau 🤯`, `Palo para recoger mango, demasiado grande, ¿cómo se sale en el calle así??`]
for (var i = 0; i < 5; i++) {
ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkpau);
break;

case '3rayas':
if(!isGroup) return reply(Res_SoGrupo)
if(!menc_jid2) return reply("Marca junto con el comando la @ del usuario que deseas desafiar.")
if(JOGO_D_V != false) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguien está jugando en este momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 su turno : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

Si quieres restablecer el juego envía un administrador o los jugadores que están jugando usan el comando
${prefix}rv
`;
mention(chatMove);
return;
}
if(q.length === 1) return reply(`*⟅❗⟆ Juege con Alguien!!!!*
*para iniciar la partida : ${prefix + command} @mienbro del grupo*`);
const boardnow = setGame(`${from}`);
console.log(`Comience en tres en raya ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace(SNET, "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace(SNET,
"")} _te está retando a un juego de tres en raya..._ _[ ${argss[1]} ] Usa *『Y』* para aceptar o *『N』* para no aceptar..._\n\nEn caso de problemas, pide a un administrador que reinicie el juego con el comando $ {prefijo}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!sender.includes(JOGO_D_V?.X) && !sender.includes(JOGO_D_V?.O) && !isGroupAdmins) return reply(`capaz con cualquiera de los jugadores que jugaron o esperar a que terminen para Mientras juegas, si no tienes ninguno de los dos en línea, pídele a un administrador que escriba ${prefix}rv para restablecer el juego.`)
if(fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./armor/tictactoe/db/" + from + ".json");
reply(`Juego de la velha reseteado exitosamente en el grupo!`);
} else {
reply(`Ninguna sesion abierta...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Usted debe digitar ${prefix}ppt piedra, ${prefix}ppt papel o ${prefix}ppt tijera`)
ppt = ["piedra", "papel", "tijera"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "piedra" && args == "papel") ||
(pptb == "papel" && args == "tijera") ||
(pptb == "tijera" && args == "piedra")) {
var vit = "victoria"
} else if((pptb == "piedra" && args == "tijera") ||
(pptb == "papel" && args == "piedra") ||
(pptb == "tijera" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "piedra" && args == "piedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tijera" && args == "tijera")) {
var vit = "enpate"
} else if(vit = "undefined") {
return reply(`debe digitar ${prefix}ppt piedra, ${prefix}ppt papel o ${prefix}ppt tijera`)
}
if(vit == "victoria") {
var tes = "Vitoria del jugador"
}
if(vit == "derrota") {
var tes = "La vitória fue del BOT"
}
if(vit == "enpate") {
var tes = "El juego termino en enpate"
}
reply(`${NomeDoBot} jugo: ${pptb}\nEl jugador jugo: ${args}\n\n${tes}`)
break

case 'casino':
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Ganaste!!!"
} else {
var Vitória = "Perdiste"
}

const casino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💰❫━━━━

*${Vitória}*`
conn.sendMessage(from, {text: casino}, {quoted: info})
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('datab/audios/qviado.mp3')
conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
break

case 'infobot':
const cmdoo = fs.readFileSync('datab/audios/infobot.mp3')
conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
break 

//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(Res_espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un video")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(Res_espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})
} else {
reply("Remarque un video")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(Res_espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
DLT_FL(ran)
})	
} else {
reply("Remarque un video..")
}
break

case 'audiocontrario':
case 'audioreverse':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
encmedia = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'audio')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer453, mimetype: 'audio/mpeg'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break 

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(Res_espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('❌ error ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un video para transformar en audio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(Res_espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: info})
DLT_FL(ran)
})
} else {
reply("Remarque un audio..")
}
break

//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('*[ ❗ ] Remarque un stickers animado!*')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('*「 ❗ 」 espere, convirtiendo el stickers a gif...*')
if(IS_sistemGold) {
setTimeout(async() => {
ConsumirGold(1, sender)
}, 1000)
}
a = await webp_mp4(buff)
conn.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: info}).catch(e => {
reply("error..")
})
DLT_FL(buff)
}
} catch {
reply("error..")
}
break


case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("y el link?")  
cnvt = args.join(" ")
reply(`La invitación para que el bot se una a tu grupo ha sido enviada, espera a que el propietario acepte..`)
await sleep(1000)
reply(`ingrese cnvt o ${prefix}recusar ${sender}, alguien envió una invitación para unirse a su grupo.`)
break

case 'recusar':
if(!SoDono) return reply(Res_SoDono)
conn.sendMessage(q, {text: `Hola amigo, lamento decírtelo, pero tu invitación fue rechazada`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(Res_SoDono)
string = args.join(' ')
if(!string) return reply('falta el link a lado del comando.')
if(string.includes('chat.whatsapp.com/') || reply('verifique el link si funciona.') ) {
link = string.split('app.com/')[1]
try {
conn.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('el grupo esta lleno.')
}
if(String(erro).includes('not-authorized') ) {
reply('no puedo entrar al grupo, porque alguien me elimino.')
}
}
}
break
//=======(FIM-EFEITOS-MARCAR)=========\\

default:

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: `Una de estas opciones está activada, pero por ser ADM no será eliminado _(ANTI contacto - ANTI CATALOG - ANTI ubicación)`}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
conn.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
conn.sendMessage(from, {text: 'informar lo sucedido al administrador', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return conn.sendMessage(from, {text: 'Se enviaron muchos caracteres, esto va en contra de las normas del grupo, como precaución, los eliminaré.'})
console.log(colors.red('Dieron spam de caracteres'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
conn.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${hora_sla} da ${tempo.split(" ")[1]}`, "Qué hora es?")

EnvTXT_SMP(prefix, "prefixo")

if(isAutorepo) {

if(budy2 === "bot") {
blars =["hola deliciosa", "hola amor de mi vida", "hola princesa de mi corazón"]
blarnd = blars[Math.floor(Math.random() * blars.length)]
reply(blarnd)  
}
 
if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("eres tu, tu animal")
}

if(budy2.includes("adivina mi celular") || budy2.includes("bot cual es mi celular")){
conn.sendMessage(from, {text: adivinha}, {quoted: info})
}

EnvAudio2_SMP("./datab/audios/corno.mp3", "corno")

}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//==============(ANTILINK)===============\\

switch(ants){
} 

//=========[--ANTI palabras --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
 if(dataGp[0].antipalabras.palabras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
conn.groupParticipantsUpdate(from, [sender], 'remove')
setTimeout(() => {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}, 2000)
conn.sendMessage(from, {text: `*「 - ELIMINADO POR UTILIZAR UNA PALABRA PROHIBIDA - 」*\nSe le prohibirá acceder a gp. A continuación, consulte las reglas al escribir cualquier palabra..!!`})
}
}

 //===============(SIMIH-1)===============\\

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
uptime = process.uptime() 
client.sendMessage(from, { react: { text: `❌️`, key: info.key } })
}
//========================================\\
}
}
}

}

module.exports = ladyonline;