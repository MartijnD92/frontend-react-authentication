Voor de mensen die al willen beginnen met context:

Maak een context
Maak een Provider component en wrap dit om App.js
Denk alvast na over een stukje state voor de data over de gebruiker
Maak alvast wat lege functies voor inlog en uitlog
Geef de state en lege functies mee aan het provider component


// CONTEXT
// 1. AuthContext maken met createContext
// 2. AuthContextProvider functie component bouwen met daarin:
//    * Het echte AuthContext.Provider component
//    * Geef een data object mee via de value={} property in de .Provider
//    * Stukje state etc.
// 3. Wikkelen we de Provider om <App> heen in index.js


// AUTHENTICATIE
// 1. Bedenk welke data je in de context beschikbaar moet stellen en maak daar een raamwerkje voor (login, loguit, state)
// 2. Maak de state aan en de lege functies
// 3. Plaats de state en functies in een data object en geef die mee via de value={} prop
// 4. Test de context door een component aan te melden op de context met alles = useContext(AuthContext)
// 5. Inlogfunctie: geef de JWT token door aan de inlogfunctie en zet 'm vanuit de provider in localStorage
// 6. Redirect ook vanuit daar door naar de profielpagina

SignIn.js
// -----
// 9. Importeeer useContext en AuthContext
// 10. Destructure daar de login functie uit// 11. Roep 'm aan en geef de JWT token mee