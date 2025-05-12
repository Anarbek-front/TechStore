import { useEffect, useRef } from 'react'
import { useMediaQuery } from '@mui/material'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import './header.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

const Header = () => {
    const sideBarRef = useRef(null)
    const isMobile = useMediaQuery('(max-width:800px)')
    const showSideBar = () => {
        if (sideBarRef.current) sideBarRef.current.style.display = 'flex'
    }

    const closeSideBar = () => {
        if (sideBarRef.current) sideBarRef.current.style.display = 'none'
    }

    const clickOutside = (event) => {
        if (sideBarRef.current && !sideBarRef.current.contains(event.target))
            closeSideBar()
    }

    useEffect(() => {
        clickOutside()
        document.addEventListener('mousedown', clickOutside)
        return () => document.removeEventListener('mousedown', clickOutside)
    }, [])

    return (
        <header>
            <h2 className="logo">TechStore</h2>
            {isMobile && (
                <ul ref={sideBarRef} className="sidebar">
                    <ClearOutlinedIcon
                        onClick={closeSideBar}
                        cursor={'pointer'}
                        className="clear_outline_icon"
                    />
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            )}
            {!isMobile && (
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            )}
            <div className="basket_and_login_container">
                <PersonOutlineOutlinedIcon
                    className="general_properties_icon"
                    cursor={'pointer'}
                />
                {!isMobile ? (
                    <LocalGroceryStoreOutlinedIcon
                        cursor={'pointer'}
                        className="general_properties_icon"
                    />
                ) : (
                    <ReorderOutlinedIcon
                        onClick={showSideBar}
                        cursor={'pointer'}
                        className="reorder_outline"
                    />
                )}
            </div>
        </header>
    )
}

export default Header
