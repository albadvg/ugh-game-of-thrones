import React from "react"
import { useTranslation } from "react-i18next"
import "./Nav.scss"
import { NavLink } from "react-router-dom"

const Nav = () => {
    const { t } = useTranslation()

    return (
        <div className="nav__container">
            <NavLink to="/characters" className={({ isActive }) => isActive && "navActive"}>
                <h2>{t("characters")}</h2>
            </NavLink>
            <NavLink to="/houses" className={({ isActive }) => isActive && "navActive"}>
                <h2>{t("houses")}</h2>
            </NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive && "navActive"}>
                <h2>{t("timeline")}</h2>
            </NavLink>
        </div>
    )
}

export default Nav
