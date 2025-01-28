'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import back from './icons/back.json'
import bug from './icons/bug.json'
import exports from './icons/export.json'
import functions from './icons/function.json'
import copy from './icons/copy.json'
import chart from './icons/chart'
import cross from './icons/cross.json'
import cut from './icons/cut.json'
import database from './icons/database.json'
import disk from './icons/disk.json'
import learn from './icons/learn.json'
import next from './icons/next.json'
import paint from './icons/paint.json'
import past from './icons/past.json'
import publish from './icons/publish.json'
import terminal from './icons/terminal.json'

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
    const [hidden, setHidden] = useState('hidden')
    const [index, setIndex] = useState(0)
    const [local, setLocal] = useState(false)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [tasks, setTasks] = useState([''])
    const [user, setUser] = useState('')
    const [works, setWorks] = useState([''])

    const inputs = [setHidden, setName, setPassword, setUser]
    const outputs = [hidden, name, password, user]

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
            setAlert,
            setBackground,
            setBorder,
            marker(inputs, position, tasks[index]),
        ) : reject(
            setAlert,
            setBackground,
            setBorder,
            setPassword
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
            setIndex,
            setTasks
        )) : relaunch(
            setAlert,
            setBackground,
            setBorder
        ) : user && password && init(
            [...tasks],
            setIndex,
            setTasks
        )
    }

    const surface = [
        <Svg draw={account} onClick={() => login(
            [...tasks],
            setIndex,
            setTasks
        )} />, <Svg draw={disk} onClick={() => save(
            [...tasks],
            setIndex,
            setLocal,
            setTasks
        )} />, <Svg
            draw={next}
            onClick={() => setIndex(index - 1)}
        />, <Svg
            draw={back}
            onClick={() => setIndex(index + 1)}
        />
    ]

    const tools = [
        <span>
            <small>past</small>
            <Svg className='tools' draw={past} />
        </span>, <span>
            <small>cut</small>
            <Svg className='tools' draw={cut} />
        </span>, <span>
            <small>copy</small>
            <Svg className='tools' draw={copy} />
        </span>, <span>
            <small>data</small>
            <Svg className='tools' draw={database} />
        </span>,
        <span>
            <small>functions</small>
            <Svg className='tools' draw={functions} />
        </span>,
        <span>
            <small>scripts</small>
            <Svg className='tools' draw={terminal} />
        </span>,
        <span>
            <small>charts</small>
            <Svg className='tools' draw={chart} />
        </span>,
        <span>
            <small>styles</small>
            <Svg className='tools' draw={paint} />
        </span>,
        <span>
            <small>export</small>
            <Svg className='tools' draw={exports} />
        </span>,
        <span>
            <small>publish</small>
            <Svg className='tools' draw={publish} />
        </span>,
        <span>
            <small>learn</small>
            <Svg className='tools' draw={learn} />
        </span>,

        <span>
            <small>report</small>
            <Svg className='tools' draw={bug} />
        </span>
    ]

    const close = [<Svg
        className='close'
        draw={cross}
        onClick={() => init(
            [...tasks],
            setIndex,
            setTasks
        )} />]

    const labels = [<span>
        <label>{label(0, tasks[index])}</label>
        <input
            value={reader(outputs, 0, tasks[index])}
            type='text'
            onChange={(event) => onChange(event.target.value, 0)}
        /></span>, <span>
        <label>{
            decorate(tasks[index]) != 'hidden'
            && label(1, tasks[index])
        }</label>
        <input
            value={reader(outputs, 1, tasks[index])}
            type={decorate(tasks[index])}
            onChange={(event) => onChange(event.target.value, 1)}
        />
    </span>]

    return <div>
        <Header
            alert={alert}
            icons={surface}
            value={works[index]}
        /><Header
            className='tools'
            icons={tools}
        />{
            tasks[index] && <Form
                alert={alert}
                background={background}
                border={border}
                icons={close}
                labels={labels}
                title={appoint(tasks[index])}
                onClick={() => init([...tasks], setIndex, setTasks)}
                onSubmit={onSubmit}
            />
        }
    </div>
}