import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const HeaderLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <div className='sidebar-menu'>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    className="justify-content-end"
                    items={
                        [
                            {
                                label: <Link to="">Item 1</Link>,
                                key: '1',
                                icon: <DesktopOutlined />
                            },
                            {
                                label: <Link to="">Item 2</Link>,
                                key: 'item-2',
                                icon: <FileOutlined />
                            },
                            {
                                label: 'item3',
                                key: 'item-3',
                                icon: <PieChartOutlined />,
                                children: [{
                                    label: <Link to="">Item 3</Link>,
                                    key: 'submenu-item-1',
                                    icon: <TeamOutlined />
                                }],
                            },
                        ]
                    } />

            </div>

        </>
    )
}

export default HeaderLayout