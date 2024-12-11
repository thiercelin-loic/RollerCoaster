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
    const [index, setIndex] = useState(0)
    const [work, setWork] = useState([''])
    const [onSave, setSave] = useState(false)

    const draws = [account, close, redo, save, undo]

    return <div>
        <header>
            <Nav
                value={work}
                draws={draws}
                index={index}
                onClick={() => setSave(true)}
                undo={() => index > 0 && setIndex(index - 1)}
                redo={() => setIndex(index + 1)}
            />
        </header>{
            onSave && <Form
                value={work}
                draws={draws}
                setValue={setWork}
                onClick={() => setSave(false)}
                setIndex={setIndex}
                redo={() => setIndex(index + 1)}
            />}
    </div>
}

export default Home