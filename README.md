# tmdbw-frontend

Írj egy tisztán front-end (react/angular/vue) JavaScript alkalmazást, amely filmek keresését segíti!

## Követelmények:

- Tagolt, olvasható, tiszta kód (nem 1 fájl), 
- a generált HTML kód strukturált, nem inline CSS
- Angol nyelv (UI és kód egyaránt)
- Külső library-ket használhatsz (angular, react, ramda, moment, jquery, apollo, stb),
  - de konkrétan a TMDBW-s és Wikipedia-s kéréseket és azok feldolgozását elrejtő library-ket nem
- A design másodlagos, csak minimális legyen (elrendezés, margók, címek kiemelése, stb)

## Működés:

A UI-on legyen egy 

1. filmcím keresőmező, 
2. enterre/gombnyomásra a TMDBW-ről egy kéréssel letölti a keresési találatokat (TMDB: The Movie Database Wrapper - https://tmdb.sandbox.zoosh.ie/dev
3. A találatokat és néhány adatukat (név, kategória, pontszám) listában megjeleníti, 
4. címek kattinthatóak
5. Egy címre kattintva az app megpróbálja megtalálni a kapcsolódó angol wikipedia oldalt (REST kéréssel),
   1. majd egy detail panelen megjeleníteni annak összefoglalóját (pl. első bekezdés), az IMDB-s és wikipedia-s új ablakban nyíló kattintható linkkel együtt 
6. Bónusz: 
   1. Kétállapotú kereső; a film két linkje mellett egy “kapcsolódó” gomb: ennek hatására a filmlista átvált keresési találatokból a kiválasztott filmhez kapcsolódó filmek (related) listájára

## Szintek:

1. Működő webapp
2. Spinner, miközben adatokat tölt be a TMDBW-ből vagy a wikipédiából
3. Kapcslódó filmek keresése
4. Bónusz #1: Material-UI-os library használata, Material-UI-os kinézet
5. Bónusz #2: tesztek


Ez egy kicsit nagyobb falat is lehet, Rád bízzuk, hogy meddig szeretnél eljutni, és hogy a bónusz feladatokkal is foglalkozol-e. Nyilván egy junior kevesebbet, egy senior többet tud megoldani egységnyi idő alatt, de ami minket a leginkább érdekel, hogy ez idő alatt milyen maga a kód, ami születik.

