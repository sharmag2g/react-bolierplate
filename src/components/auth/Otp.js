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

const Otp = () => {

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
                        <HeadingText2 children="OTP" className="mb-2 text-center" />
                        <NormalText children="Hey, Enter your OTP, which is on your mail" className="mb-4 text-center" />

                        <Form.Item
                            name="Enter OTP"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter OTP',
                                },
                            ]}
                        >
                            <Input placeholder='Enter OTP' style={{ padding: "8px 11px" }} />
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

export default Otp