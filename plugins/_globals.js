import cheerio from 'cheerio'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
let handler = m => m
handler.all = async function (m) {
	
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
    let emot = {
      level: 'ð§¬ Nivel',
      limit: 'ð Diamante',
      exp: 'â¡ Experiencia',
      bank: 'ð¦ Banco',
      diamond: 'ð Diamante',
      health: 'â¤ï¸ Salud',
      kyubi: 'ð Magia',
      joincount: 'ðª Token',
      emerald: 'ð Esmeralda',
      stamina: 'â¨ EnergÃ­a',
      role: 'ðª Rango',
      premium: 'ðï¸ Premium',
      pointxp: 'ð§ Puntos Exp',
      gold: 'ð Oro',
      trash: 'ð Basura',
      crystal: 'ð® Cristal',
      intelligence: 'ð§  Inteligencia',
      string: 'ð¸ï¸ Cuerda',
      keygold: 'ð Llave de Oro',
      keyiron: 'ðï¸ Llave de Hierro',
      emas: 'ðª PiÃ±ata',
      fishingrod: 'ð£ CaÃ±a de Pescar',
      gems: 'ð Gemas',
      magicwand: 'âï¸ Varita MÃ¡gica',
      mana: 'ðª Hechizo',
      agility: 'ð¤¸ââï¸ Agilidad',
      darkcrystal: 'â ï¸ Cristal Oscuro',
      iron: 'âï¸ Hierro',
      rock: 'ðª¨ Roca',
      potion: 'ð¥¤ PociÃ³n',
      superior: 'ð¼ Superior',
      robo: 'ð Robo',
      upgrader: 'ð§° Aumentar Mejora',
      wood: 'ðªµ Madera',
      strength: 'ð¦¹â âï¸ Fuerza',
      arc: 'ð¹ Arco',
      armor: 'ð¥¼ Armadura',
      bow: 'ð¹ Super Arco',
      pickaxe: 'âï¸ Pico',
      sword: 'âï¸ Espada',
      common: 'ð¦ Caja ComÃºn',
      uncoommon: 'ð¥¡ Caja Poco ComÃºn',
      mythic: 'ð³ï¸ Caja MÃ­tico',
      legendary: 'ð Caja Legendaria',
      petFood: 'ð Alimento para Mascota',
      pet: 'ð± Caja para Mascota',
      bibitanggur: 'ð Semilla de Uva',
      bibitapel: 'ð Semilla de Manzana',
      bibitjeruk: 'ð Semillas de naranja',
      bibitmangga: 'ð¥­ Semilla de Mango',
      bibitpisang: 'ð Semillas de PlÃ¡tano',
      ayam: 'ð Pollo',
      babi: 'ð Puerco',
      Jabali: 'ð Jabali',
      bull: 'ð Toro',    
      buaya: 'ð Cocodrilo',    
      cat: 'ð Gato',      
      centaur: 'ð Centauro',
      chicken: 'ð Pollo',
      cow: 'ð Vaca', 
      dog: 'ð Perro',
      dragon: 'ð DragÃ³n',
      elephant: 'ð Elefante',
      fox: 'ð¦ Zorro',
      giraffe: 'ð¦ Jirafa',
      griffin: 'ð¦ Ave',
      horse: 'ð Caballo',
      kambing: 'ð Cabra',
      kerbau: 'ð BÃºfalo',
      lion: 'ð¦ LeÃ³n',
      money: 'ð¾ MysticCoins',
      monyet: 'ð Mono',
      panda: 'ð¼ Panda',
      snake: 'ð Serpiente',
      phonix: 'ðï¸ FÃ©nix',
      rhinoceros: 'ð¦ Rinoceronte',
      wolf: 'ðº Lobo',
      tiger: 'ð Tigre',
      cumi: 'ð¦ Calamar',
      udang: 'ð¦ CamarÃ³n',
      ikan: 'ð Pez',
      fideos: 'ð Fideos',
      ramuan: 'ð§ª Ingrediente NOVA',
      knife: 'ðª Cuchillo'
    }
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}
global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase()
    let emott = {
      level: 'ð§¬',
      limit: 'ð',
      exp: 'â¡',
      bank: 'ð¦',
      diamond: 'ð+',
      health: 'â¤ï¸',
      kyubi: 'ð',
      joincount: 'ðª',
      emerald: 'ð',
      stamina: 'â¨',
      role: 'ðª',
      premium: 'ðï¸',
      pointxp: 'ð§',
      gold: 'ð',
      trash: 'ð',
      crystal: 'ð®',
      intelligence: 'ð§ ',
      string: 'ð¸ï¸',
      keygold: 'ð',
      keyiron: 'ðï¸',
      emas: 'ðª',
      fishingrod: 'ð£',
      gems: 'ð',
      magicwand: 'âï¸',
      mana: 'ðª',
      agility: 'ð¤¸ââï¸',
      darkcrystal: 'â ï¸',
      iron: 'âï¸',
      rock: 'ðª¨',
      potion: 'ð¥¤',
      superior: 'ð¼',
      robo: 'ð',
      upgrader: 'ð§°',
      wood: 'ðªµ',
      strength: 'ð¦¹â âï¸',
      arc: 'ð¹',
      armor: 'ð¥¼',
      bow: 'ð¹',
      pickaxe: 'âï¸',
      sword: 'âï¸',
      common: 'ð¦',
      uncoommon: 'ð¥¡',
      mythic: 'ð³ï¸',
      legendary: 'ð',
      petFood: 'ð',
      pet: 'ð±',
      bibitanggur: 'ð',
      bibitapel: 'ð',
      bibitjeruk: 'ð',
      bibitmangga: 'ð¥­',
      bibitpisang: 'ð',
      ayam: 'ð',
      babi: 'ð',
      Jabali: 'ð',
      bull: 'ð',    
      buaya: 'ð',    
      cat: 'ð',      
      centaur: 'ð',
      chicken: 'ð',
      cow: 'ð', 
      dog: 'ð',
      dragon: 'ð',
      elephant: 'ð',
      fox: 'ð¦',
      giraffe: 'ð¦',
      griffin: 'ð¦', 
      horse: 'ð',
      kambing: 'ð',
      kerbau: 'ð',
      lion: 'ð¦',
      money: 'ð¾',
      monyet: 'ð',
      panda: 'ð¼',
      snake: 'ð',
      phonix: 'ðï¸',
      rhinoceros: 'ð¦',
      wolf: 'ðº',
      tiger: 'ð',
      cumi: 'ð¦',
      udang: 'ð¦',
      ikan: 'ð',
      fideos: 'ð',
      ramuan: 'ð§ª',
      knife: 'ðª'
    }
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}}
global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase()
    let emottt = {
      exp: 'â¡ Experiencia : Exp',
      limit: 'ð Diamante : Diamond',
      diamond: 'ð Diamante : Diamond+',
      joincount: 'ðª Token',
      emerald: 'ð Esmeralda : Emerald',
      berlian: 'â¦ï¸ Joya : Ruby',
      kyubi: 'ð Magia : Magic',
      gold: 'ð Oro : Gold',
      money: 'ð¾ MysticCoins : MysticoCoins',
      tiketcoin: 'ð« mystic Tickers',
      stamina: 'â¨ EnergÃ­a : Energy',
      potion: 'ð¥¤ PociÃ³n : Potion',
      aqua: 'ð§ Agua : Water',
      trash: 'ð Basura : Trash',
      wood: 'ðªµ Madera : Wood',
      rock: 'ðª¨ Roca : Rock',
      batu: 'ð¥ Piedra : Stone',
      string: 'ð¸ï¸ Cuerda : Cuerda',
      iron: 'âï¸ Hierro : Iron',
      coal: 'â±ï¸ CarbÃ³n : Coal',
      botol: 'ð¶ Botella : Bottle',
      kaleng: 'ð¥« Lata : Can',
      kardus: 'ðª§ CartÃ³n : Paperboard',
      eleksirb: 'ð¡ Electricidad : Electricity',
      emasbatang: 'ã½ï¸ Barra de Oro : Gold bar',
      emasbiasa: 'ð§­ Oro ComÃºn : Common Gold',
      rubah: 'ð¦ð«ï¸ Zorro Grande : Big Fox',
      sampah: 'ðð«ï¸ Super Basura : Big Trash',
      serigala: 'ðºð«ï¸ Super Lobo : Big Wolf',
      kayu: 'ð· Super Madera : Super Wood',
      sword: 'âï¸ Espada : Sword',
      umpan: 'ðª± Carnada : Bait', 
      healtmonster: 'ðµ Billetes : Fare',
      emas: 'ðª PiÃ±ata : Doll',
      pancingan: 'ðª Gancho : Hook',
      pancing: 'ð£ CaÃ±a de Pescar : Fishing Rod',
      common: 'ð¦ Caja ComÃºn : Common Box',
      uncoommon: 'ð¥¡ Caja Poco ComÃºn : Uncommon',
      mythic: 'ð³ï¸ Caja MÃ­tica : Mythic Box',
      pet: 'ð« Caja de Mascotas : Pet Box',//?
      gardenboxs: 'ð Caja de JardinerÃ­a : Garden boxs',//?
      legendary: 'ð Caja Legendaria : Legendary Box',
      anggur: 'ð Uva : Grape',
      apel: 'ð Manzana : Apple',
      jeruk: 'ð Naranja : Orange',
      mangga: 'ð¥­ Mango',
      pisang: 'ð Platano : Banana',
      bibitanggur: 'ð¾ð Semillas de uva : Grape Seeds',
      bibitapel: 'ð¾ð Semillas de manzana : Apple seeds',
      bibitjeruk: 'ð¾ð Semillas de naranja : Orange Seeds',
      bibitmangga: 'ð¾ð¥­ Semillas de Mango : Mango Seeds',
      bibitpisang: 'ð¾ð Semillas de plÃ¡tano : Banana Seeds',
      centaur: 'ð Centauro : Centaur',
      griffin: 'ð¦ Ave : Griffin',
      kucing: 'ð Gato : Cat',
      naga: 'ð DragÃ³n : Dragon',
      fox: 'ð¦ Zorro : Fox',
      kuda: 'ð Caballo : Horse',
      phonix: 'ðï¸ FÃ©nix : Phoenix',
      wolf: 'ðº Lobo : Wolf',
      anjing: 'ð¶ Perro : Dog',
      petFood: 'ð Alimento para Mascota : Pet Food', //?
      makanancentaur: 'ðð¥© Comida de Centauro : Centauro Food',
      makanangriffin: 'ð¦ð¥© Comida de Ave : Griffin Food',
      makanankyubi: 'ðð¥© Comida MÃ¡gica : Magic Food',
      makanannaga: 'ðð¥© Comida de DragÃ³n : Dragon Food',
      makananpet: 'ð±ð¥© Alimentos de mascotas: Pet Food',
      makananphonix: 'ðï¸ð¥© Comida de FÃ©nix : Phoenix Food'  
    }
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}}
global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: 'â¡',
      limit: 'ð',
      diamond: 'ð+',
      joincount: 'ðª',
      emerald: 'ð',
      berlian: 'â¦ï¸',
      kyubi: 'ð',
      gold: 'ð',
      money: 'ð¾',
      tiketcoin: 'ð«',
      stamina: 'â¨',
      potion: 'ð¥¤',
      aqua: 'ð§',
      trash: 'ð',
      wood: 'ðªµ',
      rock: 'ðª¨',
      batu: 'ð¥',
      string: 'ð¸ï¸',
      iron: 'âï¸',
      coal: 'â±ï¸',
      botol: 'ð¶',
      kaleng: 'ð¥«',
      kardus: 'ðª§',
      eleksirb: 'ð¡',
      emasbatang: 'ã½ï¸',
      emasbiasa: 'ð§­',
      rubah: 'ð¦ð«ï¸',
      sampah: 'ðð«ï¸',
      serigala: 'ðºð«ï¸',
      kayu: 'ð·',
      sword: 'âï¸',
      umpan: 'ðª±', 
      healtmonster: 'ðµ',
      emas: 'ðª',
      pancingan: 'ðª',
      pancing: 'ð£',
      common: 'ð¦',
      uncoommon: 'ð¥¡',
      mythic: 'ð³ï¸',
      pet: 'ð«',//?
      gardenboxs: 'ð',//?
      legendary: 'ð',
      anggur: 'ð',
      apel: 'ð',
      jeruk: 'ð',
      mangga: 'ð¥­',
      pisang: 'ð',
      bibitanggur: 'ð¾ð',
      bibitapel: 'ð¾ð',
      bibitjeruk: 'ð¾ð',
      bibitmangga: 'ð¾ð¥­',
      bibitpisang: 'ð¾ð',
      centaur: 'ð',
      griffin: 'ð¦',
      kucing: 'ð',
      naga: 'ð',
      fox: 'ð¦',
      kuda: 'ð',
      phonix: 'ðï¸',
      wolf: 'ðº',
      anjing: 'ð¶',
      petFood: 'ð', //?
      makanancentaur: 'ðð¥©',
      makanangriffin: 'ð¦ð¥©',
      makanankyubi: 'ðð¥©',
      makanannaga: 'ðð¥©',
      makananpet: 'ð±ð¥©',
      makananphonix: 'ðï¸ð¥©'  
    }
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}}	
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.gt = 'ðð®ð¨ð©ðð-ð½ð¤ð©'
global.mysticbot = gt


global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD'
global.mysticbot = md


	
global.waitt = '*â _Cargando | Charging..._ â¬â¬â­â­â­*'
global.waittt = '*â _Cargando | Charging..._ â¬â¬â¬â¬â­â­*'
global.waitttt = '*â _Cargando | Charging..._ â¬â¬â¬â¬â¬â¬â­*'
global.nomorown = '593993684821'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

	
global.cmenut = 'âââââââã'
global.cmenub = 'ââ¦ '
global.cmenuf = 'â°âââââââââââà¹\n'
global.cmenua = '\nâ ââââââââââââââââââââââââââââââââ â\n     '
 
global.dmenut = '*âââââââ©*'
global.dmenub = '*âÂ»*'
global.dmenub2 = '*â*'
global.dmenuf = '*â°âââââââââââ¦*'
global.htjava = 'â«¹â«º'

global.htki = '*â­â¢Ì©Ì©Íâ±â¢â¢â¢â¢ âª*'
global.htka = '*âª â¢â¢â¢â¢Ì©Ì©Íâ°â¢â­*'

global.comienzo = 'â¢ â¢ ââââââ'
global.fin = 'ââââââ â¢ â¢'

global.botdate = `â«¹â«º Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `ð§ ð ð  ð : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./Menu.png')
                               }
                              }
                             }
	
	
} 
export default handler
