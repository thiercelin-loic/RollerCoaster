'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import back from './icons/back.json'
import cross from './icons/cross.json'
import disk from './icons/disk.json'
import next from './icons/next.json'

import Form from './components/Form'
import Nav from './components/Nav'
import Svg from './components/Svg'

import download from './libraries/download'
import save from './libraries/save'
import select from './libraries/select'
import relaunch from './libraries/relaunch'
import accept from './libraries/accept'
import reject from './libraries/reject'
import write from './libraries/write'
import filter from './libraries/filter'

import './styles/Form.css'
import './styles/Nav.css'

export default function Home() {
    const [alert, setAlert] = useState('')
    const [background, setBackground] = useState('linear-gradient(#fff, #d3d3d3)')
    const [border, setBorder] = useState('none')
    const [index, setIndex] = useState(0)
    const [local, setLocal] = useState(false)
    const [saves, setSaves] = useState([false])
    const [value, setValue] = useState('')
    const [works, setWorks] = useState([''])

    return <div><header><Nav
        alert={alert}
        icons={[
            <Svg draw={account} />,
            <Svg draw={disk} onClick={() => save(
                true,
                [...saves],
                setSaves,
                setLocal,
                setIndex
            )} />,
            <Svg draw={next} onClick={() => setIndex(index - 1)} />,
            <Svg draw={back} onClick={() => setIndex(index + 1)} />,
        ]}
        value={works[index]}
    /></header>{
            saves[index] && <Form
                alert={alert}
                background={background}
                border={border}
                icons={[<Svg
                    className='close'
                    draw={cross}
                    onClick={() => save(
                        false,
                        [...saves],
                        setSaves,
                        setLocal,
                        setIndex
                    )}
                />]}
                labels={[<span><label>Name</label><input
                    value={value}
                    type='text'
                    onChange={(event) => event.target.value
                        ? filter(event.target.value) ? write(
                            event.target.value,
                            setValue,
                            setBorder,
                            setBackground,
                            setAlert
                        ) : reject(
                            setAlert,
                            setBorder,
                            setBackground,
                            setValue
                        ) : relaunch(
                            setAlert,
                            setBorder,
                            setBackground
                        )}
                /></span>, <span><label>Location</label>
                    <select onChange={(event) => select(event, setLocal)}>{
                        ['Local', 'Cloud'].map((option) =>
                            <option>{option}</option>
                        )}</select>
                </span>]}
                title='Save this file'
                onClick={() => save(
                    false,
                    [...saves],
                    setSaves,
                    setLocal,
                    setIndex
                )}
                onSubmit={(event) => {
                    event.preventDefault()
                    value ? (accept(
                        value,
                        [...works],
                        [...saves],
                        setWorks,
                        setAlert,
                        setIndex,
                        setBackground,
                        setBorder
                    ), local && download(value)
                    ) : relaunch(
                        setAlert,
                        setBorder,
                        setBackground
                    )
                }}
            />}
    </div>
}