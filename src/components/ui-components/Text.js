import React from 'react'

export const HeadingText1 = (props) => {
    const { className, children } = props;
    return (
        <h1 className={` heading_text_1 ${className}`}>{children}</h1>
    )
}
export const HeadingText2 = (props) => {
    const { className, children } = props;
    return (
        <h2 className={` heading_text_2 ${className}`}>{children}</h2>
    )
}
export const NormalText = (props) => {
    const { className, children } = props;
    return (
        <p className={`normal_text ${className}`}>{children}</p>
    )
}
export const SmallText = (props) => {
    const { className, children } = props;
    return (
        <div className={`small_text ${className}`}>{children}</div>
    )
}

export const SpanText = (props) => {
    const { className, children } = props;
    return (
        <span className={`span_text ${className}`}>{children}</span>
    )
}
