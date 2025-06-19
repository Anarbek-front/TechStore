import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import { ReusableModal } from '../UI/modal/ReusableModal'
import { ReusableInput } from '../UI/input/ReusableInput'
import { ButtonReusable } from '../UI/button/ButtonReusable'
import './header.css'
import { mockDataBrands } from '../../mocks/brands'

const Header = () => {
    const sideBarRef = useRef(null)
    const isMobile = useMediaQuery('(max-width:800px)')
    const [openModal, setOpenModal] = useState(false)
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

    const close = () => {
        setOpenModal(false)
    }

    return (
        <header>
            <ReusableModal open={openModal} handleClose={close}>
                <div className="login_container">
                    <h2 className="login_form_title">Login</h2>
                    <ReusableInput label={'Email'} type={'email'} />
                    <ReusableInput label={'Password'} type={'password'} />
                    <ButtonReusable variant="success">Login</ButtonReusable>
                </div>
            </ReusableModal>
            <h2 className="logo">TechStore</h2>
            {isMobile && (
                <ul ref={sideBarRef} className="sidebar">
                    <ClearOutlinedIcon
                        onClick={closeSideBar}
                        cursor={'pointer'}
                        className="clear_outline_icon"
                    />
                    <li className="item_menu">Смартфоны</li>
                    <li className="item_menu">Ноутбуки</li>
                    <li className="item_menu">Аудио</li>
                    <li className="item_menu">Бренды</li>
                </ul>
            )}
            {!isMobile && (
                <ul>
                    <li className="item_menu">
                        Смартфоны
                        <ul className="dropdown">
                            <li>
                                <a href="#">Apple</a>
                            </li>
                            <li>
                                <a href="#">Samsung</a>
                            </li>
                            <li>
                                <a href="#">Google</a>
                            </li>
                            <li>
                                <a href="#">Huawei</a>
                            </li>
                            <li>
                                <a href="#">MI</a>
                            </li>
                        </ul>
                    </li>
                    <li className="item_menu">
                        Ноутбуки
                        <ul className="dropdown">
                            <li>
                                <a href="#">MacBook</a>
                            </li>
                            <li>
                                <a href="#">Samsung</a>
                            </li>
                            <li>
                                <a href="#">Acer</a>
                            </li>
                            <li>
                                <a href="#">Asus</a>
                            </li>
                            <li>
                                <a href="#">Microsoft</a>
                            </li>
                            <li>
                                <a href="#">HP</a>
                            </li>
                            <li>
                                <a href="#">MSI</a>
                            </li>
                        </ul>
                    </li>
                    <li className="item_menu">
                        Аудио
                        <ul className="dropdown">
                            <li>
                                <a href="#">JBL</a>
                            </li>
                            <li>
                                <a href="#">AKG</a>
                            </li>
                            <li>
                                <a href="#">Apple</a>
                            </li>
                            <li>
                                <a href="#">Beats</a>
                            </li>
                            <li>
                                <a href="#">Marshal</a>
                            </li>
                            <li>
                                <a href="#">Sony</a>
                            </li>
                        </ul>
                    </li>
                    <li className="item_menu">
                        Бренды
                        <ul className="dropdown brand_container">
                            {mockDataBrands.map(({ logo, id }) => (
                                <li key={id} className="brand_card">
                                    <a href="#">
                                        <img src={logo} alt="brand_logo" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            )}
            <div className="basket_and_login_container">
                <PersonOutlineOutlinedIcon
                    className="general_properties_icon"
                    cursor={'pointer'}
                    onClick={() => setOpenModal(true)}
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
