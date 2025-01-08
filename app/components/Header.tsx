import React from 'react'
import header from '../types/header'

export default function Header({ alert, background, icons, value }: header) {
    return <header key={new Date().getTime()} style={{background}}>
        {icons && icons.map((icon: React.JSX.Element) => icon)}
        <p className='value'>{alert || value || 'Untilted'}</p>
    </header>
}