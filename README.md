# React 90: Conditional useEffect

🎯 **Cilj:** Naučiti se kontrolirati, kdaj se useEffect sproži, uporabiti dependencies, pogojne efekte in shranjevanje v localStorage.

## Opis
- Dva state-a: `count` in `user`.
- useEffect se sproži samo, ko se spremeni `count` ali `user`.
- Pogojni efekt: če je count 0, se efekt ne izvede.
- Shranjevanje count-a v localStorage.

## Kako uporabljati
1. Povečaj count s klikom na gumb.
2. Resetiraj count na 0.
3. Spreminjaj user v input polju.
4. Odpri konzolo, da vidiš, kdaj se useEffect sproži.

   https://codesandbox.io/p/sandbox/yqvws6?file=%2Fsrc%2FApp.js
