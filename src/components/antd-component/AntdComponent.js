import React, { Children, useState } from 'react'
import { Form, Input, Modal } from 'antd'
import { emailRegex } from '../../utils/Constants';

export const InputComponent = () => {
    return (
        <div>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                        { type: 'email', message: 'Invalid' },
                        { pattern: emailRegex, message: '' },
                        { required: true, message: '' },
                    ]}>
                <Input
                    placeholder='' //placeholder text
                    suffix="%" //icon or symbol at the end
                    prefix="%%"//icon or symbol in start
                    maxLength={20} //the number of letter someone can enter
                    showCount // whether we want to show numbers at the end

                />
            </Form.Item>
            <Form.Item
                // name={fieldName}
                // label={labelName}
                rules={
                    [
                        { pattern: emailRegex, message: '' },
                        { required: true, message: '' },
                    ]}>
                <Input
                    placeholder=''
                    suffix="%"
                    prefix="%%"
                    maxLength={20}
                    showCount
                />
            </Form.Item>
        </div>
    )
}
export const ModalComponent = (props) => {
    const [modalOpen, modalClose] = useState()
    const openModal = () => { modalClose(true); }
    const closeModal = () => { modalClose(false) }
    const { className, children } = props;

    return (
        <Modal
            title={false}
            open={modalOpen}
            onCancel={closeModal}
            footer={false}
            className={`${className} class`}
            {...props}
        >
            {children}
        </Modal>
    )
}
export const SelectComponent = () => {
    return (
        <div>AntdComponent</div>
    )
}
