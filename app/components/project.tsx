import React from 'react'
import project from '../types/project'
import Save from '../icons/save'
import Undo from '../icons/undo'
import Redo from '../icons/redo'
import Account from '../icons/account'

const Project = ({name, saveIt}: project) => <div className='project'>
    <Save onClick={saveIt} />
    <Undo onClick={() => console.log('undo')} />
    <Redo onClick={() => console.log('redo')} />
    <p className='name'>{name}</p>
    <p className='account'>Login</p>
    <Account onClick={() => console.log('account')} />
</div>

export default Project