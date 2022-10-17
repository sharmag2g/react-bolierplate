
import React from 'react';
import { Button, Card, Form, Input, Layout } from 'antd';
import HeaderLayout from './Header';
import Sidebar from './Sidebar';
import { emailRegex } from '../../utils/Constants';
import { ModalComponent } from '../antd-component/AntdComponent';
const { Content } = Layout;

const AuthLayout = (props) => {
    return (
        <Layout>
            <Sidebar />
            <Layout className="site-layout">
                <HeaderLayout />
                <Content style={{ margin: ' 24px 24px' }}>
                    <Card >
                        <Form
                            name="basic"
                            scrollToFirstError
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    { required: true, message: 'Please input your username!' },
                                    // { type: 'email', message: 'Invalid email' },
                                    // { pattern: emailRegex, message: '' },
                                    { whitespace: true, message: 'Invalid' },
                                    { initialValues: '@', message: 'fiasd' },
                                    { len: 12, message: 'number should be exact number' }
                                ]}
                            >
                                <Input
                                    placeholder='' //placeholder text
                                    suffix="%" //icon or symbol at the end
                                    prefix="%%"//icon or symbol in start
                                    maxLength={44} //the number of letter someone can enter
                                    showCount // whether we want to show numbers at the end

                                />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>



                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AuthLayout;
