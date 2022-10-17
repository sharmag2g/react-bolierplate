import React from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./auth.scss";
import { HeadingText2, NormalText, SpanText } from '../ui-components/Text';
import { MainButton, SecondaryButton } from '../ui-components/Button';
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <section className='login'>
                <div className='login-form'>
                    <Form
                        name="normal_login"
                        className=""
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <HeadingText2 children="Sign In" className="mb-2 text-center" />
                        <NormalText children="Hey, Enter your details to get sign in to your account" className="mb-4 text-center" />
                        <Form.Item
                            name="username"
                            className='mb-2'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className='mb-2'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" noStyle className='mb-2'>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <MainButton children="Sign In" htmlType="submit" className="w-100" />
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                        </Form.Item>
                        <div className='social text-center'>
                            <SpanText className="sign_with">Or Sign In With</SpanText>
                            <div className='social-btn mt-3'>
                                <SecondaryButton children={<><RiGoogleFill className="me-1" />Google</>} style={{ padding: "4px 8px" }} />
                                <SecondaryButton children={<><RiFacebookFill className="me-1" />Facebook</>} style={{ padding: "4px 8px" }} />
                                <SecondaryButton children={<><RiAppleFill className="me-1" />Apple</>} style={{ padding: "4px 8px" }} />
                            </div>
                            <div className="mt-3">
                                <SpanText children={<>Don't have an account?<Link to="" className='ms-1 ' style={{ color: "cadetblue" }}>Register now</Link></>} />
                            </div>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Login