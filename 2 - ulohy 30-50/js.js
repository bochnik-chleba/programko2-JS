/* ============================================
   🔵 ÚKOLY 31–40: Funkce, události a práce s DOM
   ============================================ */

/* 31) Po kliknutí na tlačítko zobraz alert „Ahoj světe!“.
      - Vytvoř funkci, která zobrazí alert.
      - Použij událost onclick nebo addEventListener.
*/

function alertHello()
{
      alert("Ahoj světe!");
}

/* 32) Po kliknutí na tlačítko změň text vybraného HTML elementu.
      - Napiš funkci, která změní .textContent nebo .innerText.
      - Vyzkoušej použití arrow funkce.
*/

function writeIntoMe()
{
      let text32=prompt("Ahoj, napis mi vzkaz :)");

      if(!text32)
      {
            document.getElementById("text32").innerText = "-- Nic jsi nenapsal :( --";
            return;
      }

      document.getElementById("text32").innerText = text32;
}

/* 33) Vypiš do <div> aktuální čas, který se bude každou sekundu aktualizovat.
      - Použij setInterval a vlastní funkci pro získání času.
      - Funkce by měla vracet formátovaný čas (HH:MM:SS).
*/
/*
let divControl33=document.getElementById("clock33");

function formatTime(x,y=2)
{
      while((y-x.length)>0)
      {
            x = "0" + x ;
      }

      return x;
}

setInterval(printTime,1)

function printTime()
{
      let cas33 = new Date();

      divControl33.innerText=formatTime(cas33.getDate().toString());
      divControl33.innerText+=". ";

      divControl33.innerText+=formatTime((cas33.getMonth()+1).toString());
      divControl33.innerText+=". ";

      divControl33.innerText+=cas33.getFullYear();
      divControl33.innerText+="\n";

      divControl33.innerText+=formatTime(cas33.getHours().toString());
      divControl33.innerText+=":";

      divControl33.innerText+=formatTime(cas33.getMinutes().toString());
      divControl33.innerText+=":";

      divControl33.innerText+=formatTime(cas33.getSeconds().toString());
      divControl33.innerText+=";";

      divControl33.innerText+=formatTime(cas33.getMilliseconds().toString(),3);
}

/* 34) Po kliknutí na tlačítko změň barvu pozadí celé stránky.
      - Vytvoř funkci s parametrem (barva).
      - Vyzkoušej nastavit hodnotu přes document.body.style.
*/

const bodyControl34=document.body;

const defaultBackground34=bodyControl34.style.backgroundColor;

let click34Count=0;

function changeBackground()
{
      switch(click34Count)
      {
            case 0:
                  bodyControl34.style.backgroundColor="black";
                  click34Count++;
                  break;
            case 1:
                  bodyControl34.style.backgroundColor="red";
                  click34Count++;
                  break;
            case 2:
                  bodyControl34.style.backgroundColor="aqua";
                  click34Count++;
                  break;
            case 3:
                  bodyControl34.style.backgroundColor="lime";
                  click34Count++;
                  break;
            case 4:
                  bodyControl34.style.backgroundColor="orange";
                  click34Count++;
                  break;
            default:
                  bodyControl34.style.backgroundColor=defaultBackground34; 
                  click34Count=0;
                  break;
      }
}
/* 35) Po najetí myší na obrázek ho zvětši.
      - Použij eventy mouseover a mouseout.
      - Změnu proveď pomocí třídy v CSS nebo style.width v JS.
*/

const img35 = document.getElementById("img35");

const img35DEFAULTWIDTH=img35.style.width;

img35.addEventListener("mouseover",(e)=>{
      e.target.style.width="20%";
})

img35.addEventListener("mouseout",(e)=>{
      e.target.style.width=img35DEFAULTWIDTH;
})

/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

const odeslat36 = document.getElementById("form36");

odeslat36.addEventListener("submit",(e)=>{

      e.preventDefault();

      const formJmeno36 = document.getElementById("name36").value;
      const formEmail36 = document.getElementById("email36").value;

      if(formJmeno36)
      {
            console.log("jmeno: ",formJmeno36);
      }

      if(formEmail36)
      {
            console.log("email: ",formEmail36);
      }

})

/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/

const btn37 = document.getElementById("btn37");

const counter37 = document.getElementById("counter37"),
      c37Style=window.getComputedStyle(counter37),
      c37defsize= parseFloat(c37Style.getPropertyValue("font-size"));

let count37 = 0;

btn37.addEventListener("click",(e)=>{

      counter37.innerText= ++count37;

      counter37.style.fontSize= (count37+c37defsize) + "px";
})

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/

const btn38 = document.getElementById("btn38");
const p38 = document.getElementById("text38"),
      p38Style = window.getComputedStyle(p38),
      p38DefVisi = p38Style.getPropertyValue("visibility");

let toggle38=true;

btn38.addEventListener("click",(e)=>{

      toggle38 = !toggle38;

      p38.style.visibility = toggle38 ? p38DefVisi : "hidden" ;

      e.target.innerText = toggle38 ? "Skryj" : "Zobraz" ;
})

/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

const submit39 = document.getElementById("form39");

submit39.addEventListener("submit",(e)=>{

      e.preventDefault();

      const jmeno39 = document.getElementById("name39").value;
      const email39 = document.getElementById("email39").value;

      if(!jmeno39 && !email39)
      {
            alert("chybějící údaje!");
            return;
      }

      const regEmail = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;

      if(!jmeno39 || !jmeno39.trim())
      {
            alert("invalidní jméno");
            return;
      }
      if(!regEmail.test(email39))
      {
            alert("invalidní emailová adresa");
            return;
      }

      alert("údaje jsou validní");
})

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/

const slider40 = document.getElementById("slider40");
const p40=document.getElementById("text40"),
      p40Style=window.getComputedStyle(p40),
      p40DefSize=parseFloat(p40Style.getPropertyValue("font-size"));

      //sync
      slider40.value=p40DefSize;

slider40.addEventListener("input",()=>{

      p40.style.fontSize=slider40.value+"px";
})

/* =====================================================
   Práce s formuláři a uživatelskými daty – obecné úkoly
   ===================================================== */

/* - Nauč se načíst hodnoty z inputů pomocí .value.
   - Vytvoř funkci, která validuje hodnoty podle podmínek.
   - Dynamicky aktualizuj HTML podle vstupních dat
     (např. okamžitý výpočet ceny, filtrování seznamu apod.).
*/


/* ================================================
   🟣 ÚKOLY 41–50: Pokročilejší logika a práce s daty
   ================================================ */

/* 41) Generuj náhodné heslo z písmen, číslic a symbolů.
      - Funkce přijme délku jako parametr.
      - Použij Math.random a vlastní pole znaků.
*/

const znaky = "#&@{}đĐ[]łŁ€%1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ§"
function generatePassword(len)
{
      let x="";

      for(let i=0;i<len;i++)
      {
            x+=znaky.charAt(Math.round(Math.random()*znaky.length));
      }

      return x;
}

/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/

function factorial(x)
{
      if(x==undefined||x==null){return "";}
      if(x<0){return "matika neumožňuje negativní factoriál";}
      if(x===0){return 1;}

      return x>1 ? x*factorial(x-1)
      :x;
}

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

function isPalindrome(x)
{
      if(x==undefined||x==null||!x)
      {
            return "Nic nebylo zadano..";
      }

      if(x.length<3)
      {
            return "U kratkych slov to ztraci smysl..";
      }

      const regMezery= /\s/;

      x=x.replace(regMezery, "");
      x=x.toLowerCase();

      let isIt=true;

      for(let i=0;i<(x.length)/2;i++)
      {
            if(x.charAt(i)!=x.charAt(x.length-1-i))
            {
                  isIt=false;
                  break;
            }
      }

      return isIt ? "Ano, je to palindrom." : "Ne, neni to palindrom.";
}

/* 44) Vytvoř jednoduché stopky – Start / Stop / Reset.
      - Použij setInterval a clearInterval.
      - Funkce musí správně pracovat s proměnnými ve scope.
*/

/* 45) Simuluj hod kostkou (1–6).
      - Funkce vrací náhodné číslo 1–6.
      - Výsledek vypiš do HTML.
*/

/* 46) Najdi nejčastější hodnotu v poli (moda).
      - Vytvoř funkci, která přijme pole jako parametr.
      - Použij objektový „počítací“ slovník (frequency map).
*/

/* 47) Vytvoř funkci, která formátuje datum do českého formátu
      (DD.MM.YYYY).
      - Funkce dostane objekt Date a vrací string.
*/

/* 48) Zjisti, kolik dní zbývá do konce roku.
      - Spočítej rozdíl mezi dnešním datem a 31.12.
      - Vrátí celé číslo (Math.floor).
*/

/* 49) Vytvoř jednoduchý to-do list:
      - Přidávání úkolů
      - Odstraňování úkolů
      - Každá operace musí být funkce.
*/

/* 50) Ulož a načti data z localStorage (např. skóre nebo jméno).
      - Použij localStorage.setItem a localStorage.getItem.
      - Zobraz načtená data v HTML.
*/