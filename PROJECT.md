# Quiz applikáció leírása
## Az alábbi leírás összefoglalja a project követelményeit.

## Felhasznált technológiák
* Angular5
* HTML
* CSS (Bootstrap)
* NodeJS
* MongoDB

## Program szöveges leírása
> Egy Quiz applikáció, amelyben a felhasználók kérdéssorokra adhatnak 
válaszokat. Az alkalmazás rendelkezik egy admin nézettel is, ahol a 
quiz-eket és a kérdéseket lehet kezelni. Az admin felület bejelentkezés 
után érthető el.

## A program részei
1. Front felület: quiz választása egy listából, quiz kitöltése.
2. Admin felület: quiz -ek és kérdések kezelése, kérdések quiz -hez 
rendelése, statisztika a kitöltésekről.

## Fejlesztés lépései
1. Front felület.
2. Backend (NodeJS és MondoDB, Mongoose alapon működő CRUD-API).
3. Admin felület.

### Angular technológiák
* Template
* Module
* Directive
* Data-Binding
* Observable
* HttpClient
* FormBuilder, FormsModule
* Pipe
* Service

## Feladat: 2018-01-26
1. A főoldalról egy quiz -re kattintva navigáljon a quiz részletes adatainak oldalára, az id alapján (/quiz/:id).
2. Quiz részletes oldalon a quiz adatainak megjelenítése (/quiz/:id).
3. Quiz részletes oldalon a quiz -hez tartozó kérdések megjelenítése.

## Feladat: 2018-01-29
1. A kérdések megjelenítése a Quiz szerkesztő nézetében.
2. A megjelenített kérdések hozzáadása vagy eltávolítása.
3. Új komponens: question, az egyes kérdések szerkesztése, új kérdés 
hozzáadása. Megvalósítás: reaktív form.
4. Új komponens: answer, az egyes válaszok szerkesztése, új válasz 
hozzáadása. Megvalósítás: dynamic form.
