import React from 'react'
import header from '../types/header'

export default function Header({ alert, className, icons, value }: header) {
    return <header className={className}>{
        icons && icons.map((icon: React.JSX.Element) => icon)
    }<p id='value'>{
        className
            ? '' : alert
            || value
            || 'Untilted'
    }</p>
    </header>
}