import React from "react"
import { useTranslation } from "react-i18next"
import "./Nav.scss"
import { Link } from "react-router-dom"

const Nav = () => {
    const { t } = useTranslation()

    return (
        <div className="nav__container">
            <Link to="/characters">
                <h2>{t("personajes")}</h2>
            </Link>
            <Link to="/houses">
                <h2>{t("casas")}</h2>
            </Link>
            <Link to="/timeline">
                <h2>{t("cronologia")}</h2>
            </Link>
        </div>
    )
}

export default Nav
