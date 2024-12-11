import React from 'react'
import Svg from './Svg'

import nav from '../types/nav'

const Nav = ({ value, draws, onClick }: nav) => <nav>
    <Svg className='save' draw={draws ? draws[3] : ''} onClick={onClick || console.log}/>
    <Svg className='undo' draw={draws ? draws[4] : ''} onClick={onClick || console.log}/>
    <Svg className='redo' draw={draws ? draws[2] : ''} onClick={onClick || console.log}/>
    <p className='name'>{value || 'Undefined'}</p>
    <p className='account'>Login</p>
    <Svg className='account' draw={draws ? draws[0] : ''} onClick={onClick || console.log}/>
</nav>

export default Nav