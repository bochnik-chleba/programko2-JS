/* -----------------------------------------------------------
 * Úloha 100: Základní třída Budova
 * Vytvoř třídu `Budova`, která reprezentuje budovu.
 * Constructor bude přijímat `nazev` a `pocetPater`.
 * Uložte hodnoty do parametrů stejného názvu, jako parametry konstruktoru
 * Vytvoř metodu `popis()`, která vrátí textový popis budovy.
 *
 * Procvičuje: class, constructor, this, metody
 * ----------------------------------------------------------- */


/* -----------------------------------------------------------
 * Úloha 100 – instance (pro HTML tlačítko)
 * Vytvoř instanci třídy `Budova` a vypiš objekt jako JSON.
 * Pro výpis použijte JSON.stringify
 *
 * Procvičuje: instance, JSON výpis
 * ----------------------------------------------------------- */
function u100() 
{
    // TODO instance
    show("out100", /* TODO výpis */);
}

/* -----------------------------------------------------------
* Úloha 101: Vytvoření instance + metoda
 * Vytvoř instanci třídy `Budova` a zavolej metodu `popis()`.
 * Výsledek vypiš na obrazovku.
 *
 * Procvičuje: instance, volání metody
 * ----------------------------------------------------------- */
function u101() 
{
    // TODO: instance
    show("out101", /* TODO výpis */);
}


/* -----------------------------------------------------------
 * Úloha 102: Interaktivní vytvoření budovy
 * Pomocí formuláře získej `nazev` a `pocetPater`.
 * Vytvoř instanci třídy `Budova` a zavolej metodu `popis()`.
 *
 * Procvičuje: instance, this, DOM, formuláře
 * ----------------------------------------------------------- */
function u102() 
{
  const nazev = none; // TODO
  const pater = none; // TODO

  // TODO ošetření hodnot

  const b = none; // TODO instance
  show("out102", /* TODO volání */);
}

/* -----------------------------------------------------------
 * Úloha 103: Strict mode
 * Přidej na začátek skriptu `"use strict";`
 * Stručně vysvětli, jaký vliv má strict mode na práci s třídami,
 * např. zákaz používání nedefinovaných proměnných.
 *
 * Procvičuje: strict mode, bezpečnost kódu
 * ----------------------------------------------------------- */

// Řešení (komentář):
// 




/* -----------------------------------------------------------
 * Úloha 104: Dědění tříd
 * Vytvoř třídu `PodnikatelskaBudova`, která dědí z `Budova`.
 * Přidej vlastnost `pocetKancelari` a metodu `infoKancelare()`.
 * Vytvoř instanci a vypiš popis budovy a počet kanceláří.
 *
 * Procvičuje: class, extends, super, metody
 * ----------------------------------------------------------- */




/* -----------------------------------------------------------
 * Úloha 105 – interaktivní formulář
 * Vytvoř instanci `PodnikatelskaBudova` podle vstupů formuláře.
 * Zavolej metodu `popis()`, `infoKancelare()` a getter `kapacita`.
 *
 * Procvičuje: extends, super, get, instance, DOM
 * ----------------------------------------------------------- */
function u104() 
{
  const nazev = document.getElementById("u104name").value;
  const pater = Number(document.getElementById("u104floors").value);
  const kancelare = Number(document.getElementById("u104offices").value);

  // TODO: ošetření vstupů

  const o = none; // TODO: místo none vytvořte instanci

  const out = [
    o.popis(),
    o.infoKancelare(),
    o.kapacita
  ].join("\n");

  show("out104", out);
}

/* -----------------------------------------------------------
 * Úloha 106: Setter – kontrola kanceláří
 * Do třídy `PodnikatelskaBudova` přidej setter pro `pocetKancelari`,
 * který nepovolí nastavit záporné číslo. V případě chyby vypiš varování.
 *
 * Procvičuje: set, validace dat
 * ----------------------------------------------------------- */

class PodnikatelskaBudova3 extends Budova 
{
    constructor(nazev, pocetPater, pocetKancelari) 
    {
        super(nazev, pocetPater);
        this._pocetKancelari = pocetKancelari;
    }

    get pocetKancelari() {return this._pocetKancelari;}

    set pocetKancelari(value) 
    {
        // TODO implementace
    }
}

/* -----------------------------------------------------------
 * Úloha 107: Hoisting
 * Pokus se vytvořit instanci `Budova` ještě před tím,
 * než je třída definována. Sleduj, co se stane a proč.
 *
 * Procvičuje: hoisting, chování class
 * ----------------------------------------------------------- */

// TODO: po vyzkoušení vše z této úlohy zakomentujte 

// Důvod: 



/* -----------------------------------------------------------
 * Úloha 108: Statická metoda
 * Zavolej statickou metodu třídy `Budova` a vypiš výsledek.
 *
 * Procvičuje: static
 * ----------------------------------------------------------- */
function u108() 
{
    const info = none; // TODO
    show("out108", info);
}


/* -----------------------------------------------------------
 * Úloha 109: Finální kombinace
 * Pomocí formuláře vytvoř instanci `PodnikatelskaBudova`.
 * Zavolej metodu `popis()`, `infoKancelare()`, getter `kapacita`,
 * a statickou metodu `info()`.
 * Použij setter pro změnu počtu kanceláří (+2).
 *
 * Procvičuje: class, constructor, extends, get/set, static, DOM
 * ----------------------------------------------------------- */
function u109() 
{
  const nazev = document.getElementById("u109name").value;
  const pater = Number(document.getElementById("u109floors").value);
  const kancelare = Number(document.getElementById("u109offices").value);

  // TODO: ošetření vstupů

  const o = none;// TODO: instance třídy;

  // TODO: změna hodnoty přes setter

  const out = [
    o.popis(),
    o.infoKancelare(),
    o.kapacita,
    Budova.info()
  ].join("\n");

  show("out109", out);
}


/* -----------------------------------------------------------
 * Pomocná funkce pro výpis do DOM
 * ----------------------------------------------------------- */
function show(id, text) {
  document.getElementById(id).innerText = text;
}