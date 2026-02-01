/* -----------------------------------------------------------
 * Úloha 70: Validace e-mailu
 * Napiš regulární výraz pro validaci e-mailové adresy.
 * Implementuj funkci validateEmail(email), která vrátí true/false
 * podle toho, zda je e-mail validní.
 *
 * Procvičuje: základní regex, escapování teček, testování pomocí test()
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input70 = document.getElementById("Input70");
const btn70 = document.getElementById("run70");
btn70.addEventListener("click",()=>{

    if(!input70.value){return;}

    const regEmail70 = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

    if(!regEmail70.test(input70.value))
    {
        alert("emailová adresa není správně napsaná!");
        return;
    }

    alert("email úspěšně ověřen!");
})

/* -----------------------------------------------------------
 * Úloha 71: Hledání čísel v textu
 * Vytvoř regulární výraz, který najde všechna čísla v textu.
 * Implementuj funkci findNumbers(text), která vrátí pole čísel.
 *
 * Procvičuje: kvantifikátory +, globální modifikátor g, match()
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input71 = document.getElementById("Input71");
const out71 = document.getElementById("Output71");
const run71 = document.getElementById("run71");
run71.addEventListener("click",()=>{

    if(!input71.value){return;}

    const regCisla71 = /(\-)?([0-9])+/g;

    out71.textContent="";

    out71.textContent=input71.value.match(regCisla71);

    if(!out71.textContent)
    {
        out71.textContent="Zadna cisla text neobshuje!";
        return;
    }
})

/* -----------------------------------------------------------
 * Úloha 72: Formátování data
 * Napiš regex, který zachytí datum ve formátu DD.MM.YYYY a převede
 * ho pomocí replace() na formát YYYY-MM-DD.
 *
 * Procvičuje: skupiny (), backreference $1-$3, replace()
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input72 = document.getElementById("Input72");
const out72 = document.getElementById("Output72");
const run72 =document.getElementById("run72");
run72.addEventListener("click",()=>{

    if(!input72.value) {return;}

    const regDate72 = /^(\d{1,2})([\s\.\-\/]+)(\d{1,2})([\s\.\-\/]+)(\d{4})$/;

    if(!regDate72.test(input72.value))
    {
        out72.textContent="Datum neexistuje";
        return;
    }

    out72.textContent=input72.value.replace(regDate72,"$5 - $3 - $1");
})

/* -----------------------------------------------------------
 * Úloha 73: Validace hesla
 * Napiš regex, který ověří, že heslo obsahuje:
 * - min. 8 znaků
 * - velké písmeno
 * - malé písmeno
 * - číslici
 * - speciální znak
 *
 * Procvičuje: lookaheads, kombinace skupin, komplexní validace
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input73 = document.getElementById("Input73");
const out73 = document.getElementById("Output73");
const run73 = document.getElementById("run73");
run73.addEventListener("click",()=>{

    if(!input73.value) {return;}

    const regHeslo73 = /(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/;

    if(!regHeslo73.test(input73.value))
    {
        out73.textContent="Heslo neni dostačně silné - nesplňuje minimální požadavky!";
        return;
    }

    out73.textContent="Heslo ověřeno!";
})


/* -----------------------------------------------------------
 * Úloha 74: Extrakce HTML tagů
 * Pomocí regexu vyber všechny HTML tagy včetně jejich obsahu.
 * Implementuj funkci extractTags(html), která vrátí pole tagů.
 *
 * Procvičuje: nežravé kvantifikátory *?, globální match
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input74 = document.getElementById("Input74");
const out74 = document.getElementById("Output74");
const run74 = document.getElementById("run74");
run74.addEventListener("click",()=>{

    if(!input74.value){return;}

    const regTag74 = /<([a-zA-Z][\w:-]*)\b[^>]*>[\s\S]*?<\/\1>|<([a-zA-Z][\w:-]*)\b[^>]*>/g;

    out74.textContent = input74.value.match(regTag74) ?? "Žádné tagy text neobsahuje";
})

/* -----------------------------------------------------------
 * Úloha 75: Čištění textu
 * Vytvoř dva regexy:
 * 1. pro nahrazení vícenásobných mezer jednou
 * 2. pro odstranění speciálních znaků
 *
 * Implementuj funkci cleanText(text).
 *
 * Procvičuje: skupiny znaků [], řetězení replace()
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input75 = document.getElementById("Input75");
const out75 = document.getElementById("Output75");
const run75 = document.getElementById("run75");
run75.addEventListener("click",()=>{

    if(!input75.value){return;}

    const regMezery75 = /[\s]{2,}/g;
    const regSpec75 = /[^\p{L}0-9\s]+/gu;

    let x75 = input75.value.replace(regMezery75, " ");

    out75.textContent=x75.replace(regSpec75, "");
})

/* -----------------------------------------------------------
 * Úloha 76: Parsování CSV
 * Pomocí regexu rozparsuj CSV s hodnotami v uvozovkách.
 * Cílem je vrátit strukturovaná data.
 *
 * Procvičuje: matchování textu s ohledem na uvozovky, skupiny (), g
 * ----------------------------------------------------------- */

// zde bude vaše řešení

//parsing csv pomoci regexu by byl pain nad miru, co snesu :(

/*
const input76 = document.getElementById("Input76");
const out76 = document.getElementById("Output76");
const run76 = document.getElementById("run76");
run76.addEventListener("click",()=>{

    if(!input76.value){return;}

    const regCSV76 = / /g;
})


/* -----------------------------------------------------------
 * Úloha 77: Validace kreditní karty
 * Napiš regex pro validaci čísel kreditních karet (Visa, MasterCard).
 * Ignoruj mezery ve vstupu.
 *
 * Procvičuje: alternativy, různé délky, escapování mezer
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input77 = document.getElementById("Input77");
const out77 = document.getElementById("Output77");
const run77 = document.getElementById("run77");
run77.addEventListener("click",()=>{

    if(!input77.value){return;}

    const regKredit77 = /^\d{16}$/;
    const regMez77 = /\s/g;

    out77.textContent= regKredit77.test(input77.value.replace(regMez77,"")) ?
        "Cislo karty je validni!"
        : "Cislo karty neni validni!!";
})

/* -----------------------------------------------------------
 * Úloha 78: Minifikace CSS
 * Implementuj funkci minifyCSS(css), která:
 * 1. odstraní CSS komentáře
 * 2. odstraní zbytečné mezery
 *
 * Procvičuje: použití regexu pro odstranění bloků, whitespace cleanup
 * ----------------------------------------------------------- */

// zde bude vaše řešení

const input78 = document.getElementById("Input78");
const out78 = document.getElementById("Output78");
const run78 = document.getElementById("run78");
run78.addEventListener("click",()=>{

    if(!input78.value){return;}

    const regCleanCSS78 = /([\s]{2,})|(\/\*(.|\s)*\*\/)+/g;

    out78.textContent=input78.value.replace(regCleanCSS78," ");
})

/* -----------------------------------------------------------
 * Úloha 79: Analyzátor logů
 * Pomocí regexu extrahuj logy ve formátu:
 * [TIMESTAMP] LEVEL: MESSAGE
 *
 * Cílem je získat timestamp, úroveň a zprávu.
 *
 * Procvičuje: skupiny (), kapturní skupiny, match()
 * ----------------------------------------------------------- */

// zde bude vaše řešení


/* -----------------------------------------------------------
 * Úloha 80: Jednoduchý template engine
 * Napiš regex, který najde {{promenne}} a nahradí je hodnotami
 * z objektu data.
 *
 * Procvičuje: zachytávací skupiny, callback v replace()
 * ----------------------------------------------------------- */

// zde bude vaše řešení


/* -----------------------------------------------------------
 * Úloha 81: Validace českého telefonního čísla
 * Podporované formáty:
 * - +420 123 456 789
 * - 123 456 789
 * - 604123456
 *
 * Procvičuje: nepovinný prefix, alternativy, čištění whitespace
 * ----------------------------------------------------------- */

// zde bude vaše řešení


/* -----------------------------------------------------------
 * Úloha 82: Rozdělení camelCase na slova
 * Napiš regex, který rozdělí camelCase text na slova.
 * Např. "camelCaseText" → "camel Case Text"
 *
 * Procvičuje: lookahead/lookbehind nebo skupiny, replace()
 * ----------------------------------------------------------- */


// zde bude vaše řešení