import React from "react"
import { useTranslation } from "react-i18next"

const Home = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = () => {
        i18n.changeLanguage("en")
    }

    const changeLanguageTo = () => {
        i18n.changeLanguage("es")
    }

    return (
        <div>
            <h1>{t("titulo")}</h1>
            <button onClick={changeLanguage}>cambiar</button>
            <button onClick={changeLanguageTo}>cambiar</button>
        </div>
    )
}

export default Home
