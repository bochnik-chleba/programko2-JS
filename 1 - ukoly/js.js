/*****************************************************************/
// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.
 
// zde bude tvoje řešení
 
/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/*
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/
/*
let cislo;
cislo =prompt("zadejte prosim cele cislo:");
cislo=parseInt(cislo);
if(cislo==0)
{
    console.log("cislo", cislo, "je nula!");
}
else{
    if(cislo%2==0)
        {
            console.log("cislo", cislo, "je sude");
        }
        else{
            if(cislo%2==1)
            {
                console.log("cislo", cislo, "je liche");
            }
            else{
                console.log("Cislo neexistuje, zkuste znova prosim");
            }
        }
}
// zde bude tvoje řešení
 
 
/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/
/*
let celsius=0, fahrenheit=0;
const absolut=-273.15;
fahrenheit=parseFloat(fahrenheit);
while(true)
{
    celsius=prompt("Zadejte prosim teplotu ve stupnich celsia:");
    celsius=parseFloat(celsius);
    if(isNaN(celsius))
    {
        console.log("Spatne zadana hodnota, NELZE POCITAT, zkuste znova");
        celsius=0;
        continue;
    }
    if(celsius<absolut)
    {
        console.log("Nemuzeme jit pod absolutni nulu -273,15 stupnu.");
        continue;
    }
    fahrenheit=celsius*9/5+32;
    console.log("Vase teplota ",celsius," stupnu celsia je ",fahrenheit," stupnu fahrenheit.")
}
// zde bude tvoje řešení
 
 
/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/
/*
let cislo;
cislo =prompt("zadejte prosim cele cislo:");
cislo=parseInt(cislo);
if(cislo==0)
{
    console.log("cislo", cislo, "je nula!");
}
else{
    if(cislo>0)
        {
            console.log("cislo", cislo, "je kladne");
        }
        else{
            if(cislo<0)
            {
                console.log("cislo", cislo, "je zaporne");
            }
            else{
                console.log("Cislo neexistuje, zkuste znova prosim");
            }
        }
}
// zde bude tvoje řešení
 
 
/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/
 
let slovo = "Slovo";

while(true)
{
    slovo=prompt("Zadejte prosim slovo");
    slovo.toLowerCase()
    if(slovo.includes("a"))
    {
        console.log(slovo, "obsahuje pismeno 'a' !");
    }
    else
    {
        console.log(slovo, "NEobsahuje pismeno 'a' !");
    }
}

// zde bude tvoje řešení
 
 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/
 
// zde bude tvoje řešení
 
 
/*****************************************************************/
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/
 
// zde bude tvoje řešení
 
 
/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**
/*
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
/*****************************************************************/
// Příklad **redeclaration proměnné**
/*
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
/*****************************************************************/
// # 🔹 Rozdíl mezi `==` a `===`
/*
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ
*/