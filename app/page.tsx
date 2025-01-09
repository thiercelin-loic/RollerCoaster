'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import back from './icons/back.json'
import cross from './icons/cross.json'
import disk from './icons/disk.json'
import next from './icons/next.json'

import Form from './components/Form'
import Header from './components/Header'
import Svg from './components/Svg'

import accept from './libraries/accept'
import appoint from './libraries/appoint'
import decorate from './libraries/decorate'
import download from './libraries/download'
import filter from './libraries/filter'
import init from './libraries/init'
import label from './libraries/label'
import login from './libraries/login'
import marker from './libraries/marker'
import reader from './libraries/reader'
import reject from './libraries/reject'
import relaunch from './libraries/relaunch'
import save from './libraries/save'
import write from './libraries/write'

import type { position, value } from './types/onChange'

import './styles/Form.css'
import './styles/Header.css'

export default function Home() {
    const [alert, setAlert] = useState('')
    const [background, setBackground] = useState('linear-gradient(#fff, #d3d3d3)')
    const [border, setBorder] = useState('none')
    const [index, setIndex] = useState(0)
    const [local, setLocal] = useState(false)
    const [location, setLocation] = useState('/')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [tasks, setTasks] = useState([''])
    const [user, setUser] = useState('')
    const [works, setWorks] = useState([''])

    const inputs = [setLocation, setName, setPassword, setUser]
    const outputs = [location, name, password, user]

    const states = JSON.stringify({
        alert, background,
        border, index,
        local, location,
        name, password,
        tasks, user, works
    })

    const onChange = (value: value, position: position) => value
        ? filter(value) ? write(
            value,
            marker(position, tasks[index], inputs),
            setBorder,
            setBackground,
            setAlert
        ) : reject(
            setAlert,
            setBorder,
            setBackground,
            tasks[index] == 'login'
                ? setPassword
                : setLocation,
        ) : relaunch(
            setAlert,
            setBorder,
            setBackground
        )

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        tasks[index] == 'save' ? name ? (accept(
            name,
            [...works],
            setAlert,
            setBackground,
            setBorder,
            setIndex,
            setWorks
        ), local && download(name, states), init(
            [...tasks],
            setTasks,
            setIndex
        )) : relaunch(
            setAlert,
            setBorder,
            setBackground
        ) : user && password && init(
            tasks,
            setTasks,
            setIndex
        )
    }

    const icons = [
        <Svg draw={account} onClick={() => login(
            tasks,
            setTasks,
            setIndex
        )} />, <Svg draw={disk} onClick={() => save(
            [...tasks],
            setTasks,
            setLocal,
            setIndex
        )} />, <Svg
            draw={next}
            onClick={() => setIndex(index - 1)}
        />, <Svg
            draw={back}
            onClick={() => setIndex(index + 1)}
        />,
    ]

    const close = [<Svg
        className='close'
        draw={cross}
        onClick={() => init(
            [...tasks],
            setTasks,
            setIndex
        )} />]

    const labels = [<span>
        <label>{label(tasks[index], 0)}</label>
        <input
            value={reader(0, tasks[index], outputs)}
            type='text'
            onChange={(event) => onChange(event.target.value, 0)}
        /></span>, <span>
        <label>{label(tasks[index], 1)}</label>
        <input
            value={reader(1, tasks[index], outputs)}
            type={decorate(tasks[index])}
            onChange={(event) => onChange(event.target.value, 1)}
        />
    </span>]

    return <div>
        <Header
            alert={alert}
            icons={icons}
            value={works[index]}
        />{
            tasks[index] && <Form
                alert={alert}
                background={background}
                border={border}
                icons={close}
                labels={labels}
                title={() => appoint(tasks[index])}
                onClick={() => init([...tasks], setTasks, setIndex)}
                onSubmit={onSubmit}
            />
        }
    </div>
}