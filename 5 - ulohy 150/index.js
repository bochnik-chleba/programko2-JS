/* -----------------------------------------------------------
 * Úloha 150: Named export z modul_funkce.js
 * Do modul_funkce.js vytvoř funkci `greet(name)`,
 * která vrátí text "Ahoj, {name}!".
 * Importuj ji v script.js a vypiš do UI.
 *
 * Procvičuje: export/import funkcí
 * ----------------------------------------------------------- */

export function greetUser(targetEl, name) 
{
    // zde bude vaše řešení
}



/* -----------------------------------------------------------
 * Úloha 151: Více exportů z modul_funkce.js
 * Do modul_funkce.js přidej funkce:
 *   - add(a,b)
 *   - multiply(a,b)
 * Importuj v script.js a zobraz výsledky v UI.
 *
 * Procvičuje: více exportů, výpis výsledků
 * ----------------------------------------------------------- */

export function showMath(targetEl, a, b) 
{

}



/* -----------------------------------------------------------
 * Úloha 152: Default export z modul_data.js
 * Do modul_data.js přidej default export objektu uživatele
 * (např. { name: "Eva", age: 25 }).
 * Importuj v script.js a vypiš do UI.
 *
 * Procvičuje: default export, práce s objektem
 * ----------------------------------------------------------- */

export function showUserData(targetEl)
{
    // zde bude vaše řešení
}



/* -----------------------------------------------------------
 * Úloha 153: Kombinace default + named export
 * Do modul_data.js přidej funkci `getBirthYear(age)`,
 * která vrátí rok narození uživatele.
 * Importuj v script.js a vypiš do UI.
 *
 * Procvičuje: více typů exportů v jednom modulu
 * ----------------------------------------------------------- */

// zde bude vaše řešení


/* -----------------------------------------------------------
 * Úloha 154: Import všeho najednou
 * Importuj VŠECHNY exporty z modul_funkce.js pomocí:
 *   import * as f from "./modul_funkce.js"
 * Zavolej greet(), add(), multiply() a vypiš výsledky do UI.
 *
 * Procvičuje: namespace import
 * ----------------------------------------------------------- */

// zde bude vaše řešení



/* -----------------------------------------------------------
 * Úloha 155: Export třídy z modul_data.js
 * Do modul_data.js přidej třídu Car (brand, speed, metodu drive()).
 * Importuj v script.js, vytvoř instanci a vypiš její popis do UI.
 *
 * Procvičuje: export class, instance objektu
 * ----------------------------------------------------------- */

// zde bude vaše řešení



/* -----------------------------------------------------------
 * Úloha 156: Výpis pole dat
 * Do modul_data.js přidej pole:
 *   export const todos = ["Nakoupit", "Uklidit", "Cvičit"]
 * Importuj v script.js a vykresli seznam <ul>.
 *
 * Procvičuje: práce s poli, UI rendering
 * ----------------------------------------------------------- */

// zde bude vaše řešení



/* -----------------------------------------------------------
 * Úloha 157: Vytvoření UI komponenty v modulu
 * Do modul_funkce.js přidej funkci `createCard(title, text)`,
 * která vrátí HTML string <div class="...">...</div>.
 * Importuj v script.js a přidej kartu do UI.
 *
 * Procvičuje: generování UI komponent, Tailwind
 * ----------------------------------------------------------- */

// zde bude vaše řešení

export function renderCards(targetEl)
{

}

/* -----------------------------------------------------------
 * Úloha 158: Přesun render logiky do modulu
 * Do modul_funkce.js přidej funkci:
 *    renderTodos(todos, targetEl)
 * která vykreslí ul li z pole todos
 * Importuj v script.js a použij pomocí dosavadních dat.
 *
 * Procvičuje: dělení kódu, čistota hlavního souboru
 * ----------------------------------------------------------- */

// zde bude vaše řešení



/* -----------------------------------------------------------
 * Úloha 159: Dynamický import modulu_data.js
 * Vytvoř v HTML tlačítko "Načti data".
 * Po kliknutí proveď dynamický import:
 *    import("./modul_data.js").then(...)
 * A vypiš libovolná importovaná data do UI.
 *
 * Procvičuje: lazy loading, dynamické importy
 * ----------------------------------------------------------- */

// zde bude vaše řešení
export async function dynamicLoadData(targetEl) 
{

}


/* -----------------------------------------------------------
 * Úloha 160: Mini Todo App
 * Vytvoř jednoduchou mini app:
 * 1) Přidej do HTML input a tlačítko "Přidat"
 * 2) Do modul_data.js přidej objekt nebo pole todos (ve výchozím stavu prázdné)
 * 3) Do modul_funkce.js přidej funkce:
 *       - addTodo(list, text)
 *       - removeTodo(list, index)
 *       - renderTodos(list, targetEl)
 * 4) script.js bude obsluhovat UI a volat funkce z modulů
 * 5) Todo seznam vykreslit do UI přes renderTodos()
 *
 * Procvičuje: spolupráce dvou modulů, UI logika
 * ----------------------------------------------------------- */

export function addTodoItem(text, targetEl)  
{
    
}

export function removeTodoItem(index, targetEl) 
{
    
}

export function renderTodosList(targetEl) 
{

}



/* -----------------------------------------------------------
 * POZNÁMKY:
 * - Do HTML vlož: <script type="module" src="script.js"></script>
 * - Styluj UI pomocí Tailwind CSS (karty, listy, layout)
 * - Spouštěj projekt přes live server (ne file://)
 * ----------------------------------------------------------- */