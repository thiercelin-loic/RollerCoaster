import React from 'react'
import nav from '../types/nav'

export default function Nav({ alert, background, icons, value }: nav) {
    return <nav style={{background}}>
        {icons && icons.map((icon) => icon)}
        <p className='value'>{alert || value || 'Untilted'}</p>
    </nav>
}