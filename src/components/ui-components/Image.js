import React from "react";
import { Image } from "antd";
import PropTypes from 'prop-types';

export const Img = (props) => {
    const { alt, className, children } = props
    return (<>
        <Image {...props} preview={false} src={children} className={`w-100 ${className}`} alt={alt} />
    </>)
}
Img.propType = {
    children: PropTypes.string,
    className: PropTypes.string
}