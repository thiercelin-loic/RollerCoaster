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

import alerts from './constants/alerts.json'
import borders from './constants/borders.json'
import colors from './constants/colors.json'
import format from './constants/format.json'

import './styles/Form.css'
import './styles/Nav.css'

export default function Home() {
    const [alert, setAlert] = useState('')
    const [background, setBackground] = useState(colors[2])
    const [border, setBorder] = useState(borders[0])
    const [index, setIndex] = useState(0)
    const [local, setLocal] = useState(false)
    const [saves, setSaves] = useState([true])
    const [value, setValue] = useState('')
    const [works, setWorks] = useState([''])

    const blob = new Blob()
    const link = document.createElement('a')
    const _saves = [...saves]
    const _works = [...works]

    function download() {
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', `${value}.${format}`)
        link.click()
        document.body.appendChild(link)
    }

    function save(value: boolean) {
        _saves.push(value)
        setSaves(_saves)
        setLocal(true)
        setIndex(saves.length)
    }

    function select(event: any) {
        event.target.value == 'local'
            ? setLocal(true)
            : setLocal(false)
    }

    function relaunch() {
        setAlert(alerts[0])
        setBorder(borders[1])
        setBackground(colors[0])
    }

    function accept() {
        _works.push(value)
        _saves.push(false)

        setWorks(_works)
        setAlert(`${value + alerts[2]}`)
        setIndex(works.length + 1)
        setBackground(colors[2])
        setBorder(borders[0])

        local && download()
    }

    function reject() {
        setAlert(alerts[1])
        setBorder(borders[1])
        setBackground(colors[0])
        setValue('')
    }

    function write(value: string) {
        setValue(value)
        setBorder(borders[0])
        setBackground(colors[2])
        setAlert('')
    }

    function filter(value: string) {
        return value.match(/[a-zA-Z]+/g)
    }

    function appoint(event: { target: { value: string } }) {
        event.target.value ? filter(event.target.value)
            ? write(event.target.value)
            : reject()
            : relaunch()
    }

    function onSubmit(event: { preventDefault: () => void }) {
        event.preventDefault()
        value ? accept() : relaunch()
    }

    const icons = [
        <Svg draw={account} />,
        <Svg draw={disk} onClick={() => save(true)} />,
        <Svg draw={next} onClick={() => setIndex(index - 1)} />,
        <Svg draw={back} onClick={() => setIndex(index + 1)} />,
    ]

    const close = [<Svg
        className='close'
        draw={cross}
        onClick={() => save(false)}
    />]

    const labels = [
        <span><label>Name</label><input
            value={value}
            type='text'
            onChange={appoint}
        /></span>,
        <span><label>Location</label>
            <select onChange={select}>
                <option value='local'>Local</option>
                <option value='cloud'>Cloud</option>
            </select>
        </span>,
    ]

    return <div>
        <header><Nav
            alert={alert}
            icons={icons}
            value={works[index]}
        /></header>{
            saves[index] && <Form
                alert={alert}
                background={background}
                border={border}
                icons={close}
                labels={labels}
                title={'Save this file'}
                onClick={() => save(false)}
                onSubmit={onSubmit}
            />
        }
    </div>
}