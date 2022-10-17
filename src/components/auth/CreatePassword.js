import React from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import "./auth.scss";
import { HeadingText2, NormalText, SpanText } from '../ui-components/Text';
import { MainButton, SecondaryButton } from '../ui-components/Button';
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
import { emailRegex } from '../../utils/Constants';
const { Option } = Select;

const CreatePassword = () => {

    return (
        <>
            <section className='login'>
                <div className='login-form'>
                    <Form
                        name="normal_signup"
                        className=""
                        initialValues={{
                            remember: true,
                        }}
                    // onFinish={onFinish}
                    >
                        <HeadingText2 children="Create Password" className="mb-2 text-center" />
                        <NormalText children="Hey, Create your New Password" className="mb-4 text-center" />

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
                                placeholder="New Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
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
                                placeholder="Confirm Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item className='mt-4'>
                            <MainButton children="Submit" htmlType="submit" className="w-100" />
                            {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default CreatePassword