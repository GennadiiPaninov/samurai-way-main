import React, {FC, useState} from "react";
import style from './NavBar.module.css';

export type PropsType = {
    isActive: boolean
    btnMenuActive: () => void
}

const NavBar: FC<PropsType> = (props) => {


    return (
        <div className={props.isActive ? style.menu : style.menuActive}>
            <a href="#" className={style.menuBtn} onClick={() => {
                props.btnMenuActive()
            }
            }></a>
            <nav className={style.menuList}>
                <a href="#">Profile</a>
                <a href="#"> Messages</a>
                <a href="#">News</a>
                <a href="#">Music</a>
            </nav>
        </div>
    )
}


export default NavBar