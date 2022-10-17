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

const ForgetPassword = () => {
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };
    const prefixSelector = (

        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
                defaultValue="86"

            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
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
                        <HeadingText2 children="Forget Password" className="mb-2 text-center" />
                        <NormalText children="Hey, Enter your Registered email,to get OTP" className="mb-4 text-center" />

                        <Form.Item
                            name="email"
                            className="mb-2"
                            rules={[
                                {
                                    type: "email",
                                    message: 'This is not valid Email',
                                },
                                {
                                    required: true,
                                    // message: 'Please input your lastname!',

                                },
                                // {
                                //     pattern: emailRegex,
                                //     message: "this is not valid email"
                                // }
                            ]}
                        >
                            <Input className="custom-input " prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Registered Email" />
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

export default ForgetPassword