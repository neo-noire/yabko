import React from 'react'
import { Outlet } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'

export const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
