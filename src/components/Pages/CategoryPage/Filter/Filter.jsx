import React, { useRef, useState } from 'react'
import './Filter.scss'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Arrow } from '../../../../assets/Arrow'

export const Filter = ({ label, children, isOpen }) => {
    const [open, setOPen] = useState(false || isOpen);

    const toggle = () => {
        setOPen(!open)
    }
    const contentRef = useRef();

    return (
        <div className='filter'>

            <button onClick={toggle}>
                {label}
                <MdKeyboardArrowRight
                    style={open ? { transform: "rotate(-90deg)" }
                        : { transform: "rotate(90deg)" }}
                    size={20} />
            </button>

            <div ref={contentRef}
                className="content-parent"
                style={open
                    ? { height: contentRef.current.scrollHeight + "px" }
                    : { height: "0px" }}>
                <div className='content'> {children} </div>
            </div>
        </div>
    );
}


export const FilterItem = ({ filter, handleFilter, objKey }) => {
    return (
        <label className='item'>
            <input type="checkbox" onClick={() => handleFilter(objKey, filter)} />
            <div className='chbx-custom'>
                <Arrow />
            </div>
            <span>
                {filter}
            </span>
        </label>
    )
}
