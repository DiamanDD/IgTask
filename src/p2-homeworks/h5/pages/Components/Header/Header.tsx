import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Header.module.css"

function Header() {
    return (
        <>
        <div  className={style.buttonmenu}>menu
            <div className={style.menu}>

                <NavLink to={"/pre-junior"} className={style.prejun}>Preunior</NavLink>
                <NavLink to={"/junior"} className={style.jun}>Junior</NavLink>
                <NavLink to={"/"} className={style.junplus}>Junior+</NavLink>


            </div>
        </div>

        </>
    )
}

export default Header
