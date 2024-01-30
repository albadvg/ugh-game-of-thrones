import React from "react"
import { useTranslation } from "react-i18next"
import './Home.scss';
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const Home = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = () => {
        i18n.changeLanguage("en")
    }

    const changeLanguageTo = () => {
        i18n.changeLanguage("es")
    }

    return (
        <>
            <SimpleBar style={{ maxHeight: 300 }}>
                <h1>{t("titulo")}</h1>
                <button onClick={changeLanguage}>cambiar</button>
                <button onClick={changeLanguageTo}>cambiar</button>

            </SimpleBar>
        </>
    )
}

export default Home
