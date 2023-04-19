import React, { useEffect, useState } from 'react'
import s from './Header.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Search } from './Search'
import { HeaderCart } from '../../components/ShopingCart/HeaderCart/HeaderCart'


export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <header>
            <div className={s.container}>

                {/* Mobile Menu */}
                <div onClick={() => setOpenMenu(false)} className={openMenu ? `${s.menuContainer} ${s.openContainer}` : `${s.menuContainer}  ${s.closedContainer}`}>
                    <div onClick={(e) => e.stopPropagation()} className={openMenu ? `${s.mobileMenu} ${s.openMobile}` : s.mobileMenu}>
                        <div className={s.header}>
                            <NavLink className={s.logo} to='/'>
                                <img src='https://jabko.ua/image/catalog/123/logow.png' alt='Jabko Logo' />
                            </NavLink>

                            <AiOutlineClose size={24} onClick={() => setOpenMenu(false)} className={s.close} />
                        </div>

                        <ul className={s.mobileMenuList}>
                            <NavLink to={'/iPhone'} onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/iphone.png' /> iPhone</li>
                            </NavLink>
                            <NavLink to={'/iPad'} onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/ipad.png' /> iPad</li>
                            </NavLink>
                            <NavLink to={'/Mac'} onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/mac.png' /> Mac</li>
                            </NavLink>
                            <NavLink to='/AirPods' onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/airpods.svg' /> AirPods</li>
                            </NavLink>

                            <NavLink to={'/Apple Watch'} onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/apple-watch.png' /> Apple Watch</li>
                            </NavLink>
                            <NavLink to='/Accessories' onClick={() => setOpenMenu(false)}>
                                <li><img width={23} height={23} src='https://jabko.ua/image/white/catalog/iconburger/power-adapter.png' /> Accessories</li>
                            </NavLink>
                        </ul>

                        <div className={s.footer}>
                            <a href='tel: 0 800 5555 6666'>
                                <BsTelephone size={20} />
                                <div>
                                    0 800 5555 6666
                                    <span>
                                        (from 08:00 till 18:00)
                                    </span>
                                </div>
                            </a>
                            <a href='mailto: mail@gmail.com'>
                                <AiOutlineMail size={20} />
                                Mail us
                            </a>
                        </div>
                    </div>
                </div>

                {/* Desctop Menu */}
                <div className={s.right}>
                    <div className={s.burgerMenu} onClick={() => setOpenMenu(true)}>
                        <RxHamburgerMenu size={20} />
                    </div>
                    <Search />
                </div>

                <nav>
                    <div className={s.item} >
                        <NavLink to={'/iPhone'}>
                            iPhone
                        </NavLink>
                        <ul className={s.dropdown}>
                            <NavLink to={'/iPhone/iPhone 13 pro Max'}>
                                <li>iPhone 13 pro Max</li>
                            </NavLink>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/iPad'}>
                            iPad
                        </NavLink>
                        <ul className={s.dropdown}>
                            <li>Item item</li>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/Mac'}>
                            Mac
                        </NavLink>
                        <ul className={s.dropdown}>
                            <li>Item item</li>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/Apple Watch'}>
                            Apple Watch
                        </NavLink>
                        <ul className={s.dropdown}>
                            <li>Item item</li>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/AirPods'}>
                            AirPods
                        </NavLink>
                        <ul className={s.dropdown}>
                            <li>Item item</li>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                    <div className={s.item}>
                        <NavLink to={'/Accessories'}>
                            Accessories
                        </NavLink>
                        <ul className={s.dropdown}>
                            <li>Item item</li>
                            <li>Item item</li>
                            <li>Item item</li>
                        </ul>
                    </div>
                </nav>

                <NavLink className={s.logo} to='/'>
                    <img src='https://jabko.ua/image/catalog/123/logow.png' alt='Jabko Logo' />
                </NavLink>
                <HeaderCart />

            </div >
        </header >
    )
}
