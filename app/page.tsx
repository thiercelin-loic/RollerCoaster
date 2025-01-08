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

import init from './libraries/init'
import download from './libraries/download'
import save from './libraries/save'
import relaunch from './libraries/relaunch'
import accept from './libraries/accept'
import reject from './libraries/reject'
import write from './libraries/write'
import filter from './libraries/filter'
import login from './libraries/login'

import './styles/Form.css'
import './styles/Header.css'

export default function Home() {
    const [alert, setAlert] = useState('')
    const [background, setBackground] = useState('linear-gradient(#fff, #d3d3d3)')
    const [border, setBorder] = useState('none')
    const [index, setIndex] = useState(0)
    const [local, setLocal] = useState(false)
    const [location, setLocation] = useState('/')
    const [password, setPassword] = useState('')
    const [tasks, setTasks] = useState([''])
    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [works, setWorks] = useState([''])

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
        )} />,
        <Svg draw={next} onClick={() => setIndex(index - 1)} />,
        <Svg draw={back} onClick={() => setIndex(index + 1)} />,
    ]

    const close = [<Svg
        className='close'
        draw={cross}
        onClick={() => init(
            [...tasks],
            setTasks,
            setIndex
        )} />]

    const labels = [<span><label>{
        tasks[index] == 'login' ? 'Username' : 'Name'
    }</label><input
            value={tasks[index] == 'login' ? user : name}
            type='text'
            onChange={(event) => event.target.value
                ? filter(event.target.value) ? write(
                    event.target.value,
                    tasks[index] == 'login' ? setUser : setName,
                    setBorder,
                    setBackground,
                    setAlert
                ) : reject(
                    setAlert,
                    setBorder,
                    setBackground,
                    tasks[index] == 'login' ? setUser : setName,
                ) : relaunch(
                    setAlert,
                    setBorder,
                    setBackground
                )}
        /></span>, <span><label>{
            tasks[index] == 'login' ? 'Password' : 'Location'
        }</label>
        <input
            value={tasks[index] == 'login' ? password : location}
            type={tasks[index] == 'login' ? 'password' : 'text'}
            onChange={(event) => event.target.value
                ? filter(event.target.value) ? write(
                    event.target.value,
                    tasks[index] == 'login' ? setPassword : setLocation,
                    setBorder,
                    setBackground,
                    setAlert
                ) : reject(
                    setAlert,
                    setBorder,
                    setBackground,
                    tasks[index] == 'login' ? setPassword : setLocation,
                ) : relaunch(
                    setAlert,
                    setBorder,
                    setBackground
                )}
        /></span>]

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
                title={tasks[index] == 'login'
                    ? 'Login'
                    : 'Save this file'
                }
                onClick={() => init(
                    [...tasks],
                    setTasks,
                    setIndex
                )}
                onSubmit={(event: any) => {
                    event.preventDefault()
                    tasks[index] == 'save' ? name ? (accept(
                        name,
                        [...works],
                        setWorks,
                        setAlert,
                        setIndex,
                        setBackground,
                        setBorder
                    ), local && download(name), init(
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
                }}
            />
        }
    </div>
}