import React from 'react';
import { Menu } from 'antd';
import './Header.css';
import PetsIcon from '@material-ui/icons/Pets';


function Header() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="header__center">
                    <div className="header_option">
                        <div class="center">
                            <h1><PetsIcon fontsize="Large" />
                                Pet Store</h1>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <Menu mode="horizontal">
                        <Menu.Item key="shop">Shop</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="FAQ">FAQ</Menu.Item>
                        <Menu.Item key="Contact">Contact</Menu.Item>

                    </Menu>

                </div>
            </div>
        </div >

    );
}
export default Header;
