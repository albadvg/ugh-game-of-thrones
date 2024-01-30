import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            titulo: "GAME OF THRONES",
            personajes: "CHARACTERS",
            casas: "HOUSES",
            cronologia: "TIMELINE",
            buscar: "Search...",
            lema: "MOTTO",
            sede: "SEAT",
            region: "REGION",
            alianzas: "ALLEGIANCES",
            religion: "RELIGION",
            fundacion: "FUNDATION",
            casa: "HOUSE",
            apariciones: "APPEARANCES",
            padre: "FATHER",
            descendientes: "SIBLINGS",
            titulos: "TITLES",
            volver: "RETURN",
        },
    },
    es: {
        translation: {
            titulo: "JUEGO DE TRONOS",
            personajes: "PERSONAJES",
            casas: "CASAS",
            cronologia: "CRONOLOGIA",
            buscar: "Buscar",
            lema: "LEMA",
            sede: "SEDE",
            region: "REGION",
            alianzas: "ALIANZAS",
            religion: "RELIGIONES",
            fundacion: "FUNDACION",
            casa: "CASA",
            apariciones: "APARICIONES",
            padre: "PADRE",
            descendientes: "DESCENDIENTES",
            titulos: "TITULOS",
            volver: "VOLVER",
        },
    },
}

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
