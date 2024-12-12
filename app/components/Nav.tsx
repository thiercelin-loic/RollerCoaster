import React from 'react'

import nav from '../types/nav'

const Nav = ({ value, icons }: nav) => <nav>
    {icons && icons.map((icon) => icon)}
    <p className='value'>{value ? value : 'Untitled'}</p>
</nav>

export default Nav