'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import back from './icons/back.json'
import close from './icons/close.json'
import disk from './icons/disk.json'
import next from './icons/next.json'

import Form from './components/Form'
import Nav from './components/Nav'
import Svg from './components/Svg'

import './styles/Form.css'
import './styles/Nav.css'

function Home() {
    const [index, setIndex] = useState(0)
    const [saves, setSaves] = useState([false])
    const [works, setWorks] = useState([''])

    const _saves = [...saves]

    const icons = [
        <Svg draw={account} onClick={() => console.log('account')} />,
        <Svg draw={disk} onClick={() => save(true)} />,
        <Svg draw={next} onClick={() => setIndex(index + 1)} />,
        <Svg draw={back} onClick={() => setIndex(index - 1)} />,
    ]

    function save(value: boolean) {
        _saves.push(value)
        setSaves(_saves)
        setIndex(saves.length)
    }

    const undo = () => index > 0 && setIndex(index - 1)
    const redo = () => setIndex(index + 1)

    return <div>
        <header>
            <Nav
                value={works[index]}
                icons={icons}
                onClick={() => save(true)}
                undo={undo}
                redo={redo}
            />
        </header>{
            saves[index] && <Form
                value={works[index]}
                icons={[<Svg
                    className='close'
                    draw={close}
                    onClick={() => save(false)}
                />]}
                setValue={setWorks}
                onClick={() => save(false)}
                setIndex={setIndex}
                redo={redo}
            />}
    </div>
}

export default Home