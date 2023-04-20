import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Filter } from '../../components/Pages/CategoryPage/Filter/Filter';


export const Footer = () => {
    const mobile = useMediaQuery('(max-width:650px)');

    return (
        <footer className='footer'>

            {
                mobile
                    ? <Filter label='Categories'>
                        <li>
                            <NavLink to='/iPhone'>
                                iPhone
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/iPad'>
                                iPad
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Apple Watch'>
                                Apple Watch
                            </NavLink>
                        </li>
                    </Filter>

                    : <ul className='products'>
                        <h4> Categories</h4>
                        <li>
                            <NavLink to='/iPhone'>
                                iPhone
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/iPad'>
                                iPad
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Apple Watch'>
                                Apple Watch
                            </NavLink>
                        </li>

                    </ul>
            }
            {
                mobile
                    ?
                    <Filter label='Products'>
                        <li>
                            <NavLink to='/iPad'>
                                iPad
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Apple Watch'>
                                Apple Watch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/iPhone'>
                                iPhone
                            </NavLink>
                        </li>
                    </Filter>
                    : <ul className="info">
                        <h4> Products</h4>
                        <li>
                            <NavLink to='/iPad'>
                                iPad
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Apple Watch'>
                                Apple Watch
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/iPhone'>
                                iPhone
                            </NavLink>
                        </li>

                    </ul>
            }

            {
                mobile
                    ? <Filter label='For contacts and questions'>
                        <li>
                            <a href='mailto:info@jabko.ua'>
                                info@jabko.ua
                            </a>
                        </li>
                        <li>
                            <a href='tel:0 800 30 777 5'>
                                0 800 30 777 5
                            </a>
                            (з 9:00 до 22:00)
                        </li>
                    </Filter>
                    : <ul className="contact">
                        <h4> For contacts and questions</h4>
                        <li>
                            <a href='mailto:info@jabko.ua'>
                                info@jabko.ua
                            </a>
                        </li>
                        <li>
                            <a href='tel:0 800 30 777 5'>
                                0 800 30 777 5
                            </a>
                            (з 9:00 до 22:00)
                        </li>

                    </ul>
            }

        </footer>
    )
}
