import React, { useState } from 'react'
import { Image, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='sidebar-menu'>
            <Sider
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                collapsible={true}>
                <Image src='https://atp.vn/wp-content/uploads/2022/03/thumb-logo-la-gi.jpg' />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
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
            </Sider>
        </div>
    )
}

export default Sidebar