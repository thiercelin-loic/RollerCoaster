'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import close from './icons/close.json'
import redo from './icons/redo.json'
import save from './icons/save.json'
import undo from './icons/undo.json'

import Nav from './components/Nav'
import Form from './components/Form'

import './styles/Nav.css'
import './styles/Form.css'

function Home() {
    const [onSave, setSave] = useState(false)
    const [work, setWork] = useState('')

    const draws = [account, close, redo, save, undo]

    return <div>
        <header>
            <Nav
                value={work}
                draws={draws}
                setValue={setWork}
                onClick={() => setSave(true)}
            />
        </header>{
            onSave && <Form
                value={work}
                draws={draws}
                setValue={setWork}
                onClick={() => setSave(false)}
            />}
    </div>
}

export default Home