// The World Translator
// Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
function translator(lang) {
  if (lang === "en") {
    console.log("Hello");
  } else if (lang === "fr") {
    console.log("Bonjour");
  } else if (lang === "ms") {
    console.log("Hai");
  } else {
    console.log("Perhaps your language is not available at a moment");
  }
}
translator("en");
