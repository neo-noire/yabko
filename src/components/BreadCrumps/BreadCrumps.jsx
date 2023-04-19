import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './BreadCrumps.module.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'


export const BreadCrumps = ({ data }) => {
    return (
        <div className={s.breadcrumps}>
            <NavLink to={'/'}>
                <AiOutlineHome />
            </NavLink>
            {
                data.map((el, idx) =>
                    <div key={el + idx}>
                        <MdKeyboardArrowRight />
                        <NavLink className={idx === data.length - 1 && s.active}>
                            {el}
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}
