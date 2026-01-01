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

      console.log("time updated!");

      divControl33.innerText=formatTime(cas33.getDate().toString());
      divControl33.innerText+=". ";

      divControl33.innerText+=formatTime((cas33.getMonth()+1).toString());
      divControl33.innerText+=".\n";

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

let bodyControl34=document.body;

let click34Count=0;

let defaultBackground34=bodyControl34.style.backgroundColor;

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

/* 36) Po odeslání formuláře vypiš hodnoty inputů do konzole.
      - Zakázat přirozené odeslání formuláře pomocí event.preventDefault().
      - Použij funkci, která načte hodnoty inputů.
*/

/* 37) Vytvoř jednoduché „počítadlo kliknutí“.
      - Po každém kliknutí zvýší číslo o 1 a zobraz ho v HTML.
      - Proměnná se musí nacházet ve správném scope.
*/

/* 38) Po kliknutí na tlačítko skryj nebo zobraz text.
      - Můžeš použít classList.toggle().
      - Zvaž použití anonymní nebo arrow funkce.
*/

/* 39) Validuj formulář – zkontroluj, jestli je vyplněné jméno a e-mail.
      - Pokud není validní, zobraz chybovou hlášku.
      - Použij jednoduchou podmínku a funkci validateForm().
*/

/* 40) Pomocí slideru (input type="range") měň velikost písma textu.
      - Po změně hodnoty aktualizuj style.fontSize.
      - Hodnota ze slideru bude vstupním parametrem funkce.
*/


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

/* 42) Spočítej faktoriál zadaného čísla.
      - Vytvoř klasickou funkci nebo arrow funkci.
      - Vyzkoušej rekurzi nebo cyklus.
*/

/* 43) Zjisti, zda je text palindrom („kajak“, „oko“).
      - Vytvoř funkci, která vrací true/false.
      - Odstraň mezery a porovnej text pozpátku.
*/

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