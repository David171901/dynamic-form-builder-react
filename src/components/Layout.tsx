import React from 'react'

interface ILayout {
    children: JSX.Element | JSX.Element[]
    title: string
    className?: string
}

export const Layout = ({ children, title, className }: ILayout) => {
    return (
        <div className={className}>
            <h2 className="text-2xl font-medium">{title}</h2>
            {children}
        </div>
    )
}