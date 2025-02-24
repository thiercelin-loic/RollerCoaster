'use client'

import React, { useState } from 'react'

import account from './icons/account.json'
import back from './icons/back.json'
import bug from './icons/bug.json'
import exports from './icons/export.json'
import fx from './icons/fx.json'
import copy from './icons/copy.json'
import chart from './icons/chart.json'
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

import Chart from './components/Chart'
import Form from './components/Form'
import Header from './components/Header'
import Select from './components/Select'
import Svg from './components/Svg'

import x from './constants/x.json'
import charts from './constants/charts.json'
import functions from './constants/functions.json'
import scripts from './constants/scripts.json'
import styles from './constants/styles.json'

import accept from './handlers/accept'
import download from './handlers/download'
import init from './handlers/init'
import reject from './handlers/reject'
import relaunch from './handlers/relaunch'
import write from './handlers/write'

import appoint from './utilities/appoint'
import decorate from './utilities/decorate'
import filter from './utilities/filter'
import label from './utilities/label'
import marker from './utilities/marker'
import reader from './utilities/reader'
import transition from './utilities/transition'

import type { position, value } from './types/onChange'

import './styles/Chart.css'
import './styles/Form.css'
import './styles/Header.css'

export default function Home() {
    const [alert, setAlert] = useState('')
    const [border, setBorder] = useState('none')
    const [hidden, setHidden] = useState('hidden')
    const [index, setIndex] = useState(0)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [tasks, setTasks] = useState([''])
    const [user, setUser] = useState('')
    const [works, setWorks] = useState([''])

    const inputs = [setHidden, setName, setPassword, setUser]
    const outputs = [hidden, name, password, user]

    const states = JSON.stringify({
        alert, border,
        index, name,
        password, tasks,
        user, works
    })

    const onChange = (value: value, position: position) => value
        ? filter(value) ? write(
            value,
            setAlert,
            setBorder,
            marker(inputs, position, tasks[index]),
        ) : reject(setAlert, setBorder, setPassword)
        : relaunch(setAlert, setBorder,)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        tasks[index] == 'save' ? name ? (accept(
            name,
            [...works],
            setAlert,
            setBorder,
            setIndex,
            setWorks
        ), download(name, states), init(
            [...tasks],
            setIndex,
            setTasks
        )) : relaunch(
            setAlert,
            setBorder
        ) : user && password && init(
            [...tasks],
            setIndex,
            setTasks
        )
    }

    const surface = [
        <Svg draw={account} onClick={() => transition(
            'login',
            [...tasks],
            setIndex,
            setTasks
        )} />, <Svg draw={disk} onClick={() => transition(
            'save',
            [...tasks],
            setIndex,
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
        </span>, <span onClick={() => transition(
            'data', [...tasks], setIndex, setTasks
        )}>
            <small>data</small>
            <Svg className='tools' draw={database} />
        </span>, <span onClick={() => transition(
            'function', [...tasks], setIndex, setTasks
        )}>
            <small>functions</small>
            <Svg className='tools' draw={fx} />
        </span>, <span onClick={() => transition(
            'script', [...tasks], setIndex, setTasks
        )}>
            <small>scripts</small>
            <Svg className='tools' draw={terminal} />
        </span>,
        <span onClick={() => transition(
            'chart', [...tasks], setIndex, setTasks
        )}>
            <small>charts</small>
            <Svg className='tools' draw={chart} />
        </span>,
        <span onClick={() => transition(
            'style', [...tasks], setIndex, setTasks
        )}>
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
        {
            tasks[index] == 'chart'
            && <Select category={tasks[index]} options={charts} />
        }{
            tasks[index] == 'chart'
            && <div className='preview'><Chart x={x} /></div>
        }{
            tasks[index] == 'function'
            && <Select category={tasks[index]} options={functions} />
        }{
            tasks[index] == 'script'
            && <Select category={'language'} options={scripts} />
        }{
            tasks[index] == 'style'
            && <Select category={tasks[index]} options={styles} />
        }<label>{
            decorate(0, tasks[index])
            !== 'hidden'
            && label(0, tasks[index])
        }</label><input
            className={tasks[index]}
            type={decorate(0, tasks[index])}
            value={
                decorate(0, tasks[index])
                    === 'file'
                    ? undefined
                    : reader(outputs, 0, tasks[index])
            } onChange={(event) => onChange(
                event.target.value,
                0
            )}
        />
    </span>, <span>
        <label>{
            decorate(1, tasks[index])
            !== 'hidden'
            && label(1, tasks[index])
        }</label>
        <input className={tasks[index]}
            type={decorate(1, tasks[index])} value={
                decorate(1, tasks[index])
                    === 'file'
                    ? undefined
                    : reader(outputs, 1, tasks[index])
            } onChange={(event) =>
                onChange(event.target.value, 1)
            } />
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
                border={border}
                className={tasks[index]}
                icons={close}
                labels={labels}
                title={appoint(tasks[index])}
                onClick={() => init([...tasks], setIndex, setTasks)}
                onSubmit={onSubmit}
            />
        }
    </div>
}