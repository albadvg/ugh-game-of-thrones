import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            title: "GAME OF THRONES",
            characters: "CHARACTERS",
            houses: "HOUSES",
            timeline: "TIMELINE",
            search: "Search...",
            motto: "MOTTO",
            headquarters: "HEADQUARTERS",
            region: "REGION",
            alliances: "ALLIANCES",
            religion: "RELIGION",
            fundation: "FUNDATION",
            house: "HOUSE",
            appearances: "APPEARANCES",
            father: "FATHER",
            siblings: "SIBLINGS",
            titles: "TITLES",
            return: "RETURN",
        },
    },
    es: {
        translation: {
            title: "JUEGO DE TRONOS",
            characters: "PERSONAJES",
            houses: "CASAS",
            timeline: "CRONOLOGIA",
            search: "Buscar",
            motto: "LEMA",
            headquarters: "SEDE",
            region: "REGION",
            alliances: "ALIANZAS",
            religion: "RELIGIONES",
            fundation: "FUNDACION",
            house: "CASA",
            appearances: "APARICIONES",
            fahter: "PADRE",
            siblings: "DESCENDIENTES",
            titles: "TITULOS",
            return: "VOLVER",
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
