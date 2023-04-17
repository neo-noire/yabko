import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import s from './Header.module.scss'
import m from './Search.module.scss'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'


export const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [results, setResults] = useState([])

    const openSearch = (e) => {
        e.stopPropagation()
        setSearchOpen(true)
    }
    const closeSearch = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setSearchOpen(false)
        setSearchInput('')
    }

    const handleInput = (e) => {
        setSearchInput(e.target.value)
    }
    const debounce = useDebounce(searchInput, 1000)
    const { data, loading, error } = useSanityFetch(`*[_type == "product" && name match "${debounce}*"]
    {  _id,
        name,
      "image": image[0].image.asset->.url,
      "category": category[0]->.category}`)

    useEffect(() => {
        setResults([])
        if (searchInput.length >= 2) {
            setResults(data)
        } else {
            setResults([])
        }
    }, [searchInput, data])

    return (
        <div onClick={closeSearch} className={searchOpen ? s.moduleSearch : ''}>
            <div className={s.searchContainer} >
                <label className={s.search} onClick={openSearch}>
                    <BsSearch size={20} className={s.icon} />
                    <input value={searchInput} type='text' placeholder='Search...' onChange={handleInput} />
                    {
                        searchOpen &&
                        <AiOutlineClose onClick={closeSearch} size={20} className={s.close} />
                    }
                </label>
                <div className={m.search}>
                    {
                        loading
                            ? <div>Loading...</div>
                            : results && results.map(el =>
                                <NavLink to={`/${el.category}/${el.name}`} key={el._id} className={m.result_item}>
                                    <div className={m.image}>
                                        <img src={el.image} alt={el.name} />
                                    </div>
                                    <span >
                                        {el.name}
                                    </span>
                                </NavLink>)
                    }
                </div>
            </div>
        </div>
    )
}
