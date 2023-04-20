import React, { useEffect, useState } from 'react'
import s from './Header.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { Search } from './Search'
import { HeaderCart } from '../../components/ShopingCart/HeaderCart/HeaderCart'
import { useSanityFetch } from '../../hooks/useSanityFetch'

const query = `*[_type == "category"]{
    "items":items[]->.name,
          category,
            "id": _id,
            "category_image": category_image.image.asset->.url
   }`

const navBar = [{ name: "iPhone", items: [] }, { name: "iPad", items: [] }, { name: "Mac", items: [] }, { name: "Apple Watch", items: [] }, { name: "AirPods", items: [] }, { name: "Accessories", items: [] }]

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const { data, loading, error } = useSanityFetch(query)
    const [menu, setMenu] = useState(navBar)

    useEffect(() => {
        const obj = navBar;
        obj.forEach((element, index) =>
            obj[index].items = data?.find(el => el.category === element.name)?.items
        )
        setMenu(obj)
    }, [data])
 
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
                    {
                        menu && menu.map((el, idx) =>
                            <div key={el.name} className={s.item} >
                                <NavLink to={`/${el.name}`}>
                                    {el.name}
                                </NavLink>
                                <ul className={s.dropdown}>
                                    {
                                        menu[idx]?.items && menu[idx]?.items.map(item =>
                                            <NavLink key={item} to={`/${el.name}/${item}`}>
                                                <li>{item}</li>
                                            </NavLink>
                                        )
                                    }

                                </ul>
                            </div>
                        )
                    }

                </nav>

                <NavLink className={s.logo} to='/'>
                    <img src='https://jabko.ua/image/catalog/123/logow.png' alt='Jabko Logo' />
                </NavLink>
                <HeaderCart />

            </div >
        </header >
    )
}
