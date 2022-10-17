import { Button } from 'antd';
import React from 'react';
import PropTypes from "prop-types";
import './element.scss'


export const MainButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`main-btn mt-0 ${className}`} >{children}</Button>
        </>
    )
};
MainButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
// secondary button
export const SecondaryButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} className={`secondary-button ${className}`} >{children}</Button>
        </>
    )
};
SecondaryButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}

export const LinkButton = (props) => {
    const { children, className } = props;
    return (
        <>
            <Button {...props} type="link" className={`px-0 link-btn ${className}`} >{children}</Button>
        </>
    )
};
LinkButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    onclick: PropTypes.func
}

