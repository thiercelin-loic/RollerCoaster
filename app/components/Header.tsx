import React from 'react'
import header from '../types/header'

export default function Header({ alert, background, icons, value }: header) {
    return <header style={{ background }}>
        {icons && icons.map((icon: React.JSX.Element, index: number) =>
            <span key={index}>{icon}</span>
        )}
        <p className='value'>{alert || value || 'Untilted'}</p>
    </header>
}