import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import "./Nav.scss"
import { NavLink } from "react-router-dom"
import { Context } from "../../context/context"

const Nav = () => {
    const { t } = useTranslation()

    const {setSearch} = useContext(Context)

    const resetSearch = () => {
        setSearch('')
    }

    return (
        <div className="nav__container">
            <NavLink to="/characters" className={({ isActive }) => isActive ? "navActive" : undefined} onClick={resetSearch}>
                <h2>{t("characters")}</h2>
            </NavLink>
            <NavLink to="/houses" className={({ isActive }) => isActive ? "navActive" : undefined} onClick={resetSearch}>
                <h2>{t("houses")}</h2>
            </NavLink>
            <NavLink to="/timeline" className={({ isActive }) => isActive ? "navActive" : undefined} >
                <h2>{t("timeline")}</h2>
            </NavLink>
        </div>
    )
}

export default Nav
