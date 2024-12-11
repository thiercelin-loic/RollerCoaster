import { useState } from 'react'

import Svg from './Svg'
import nav from '../types/nav'
import { event as onChange } from '../types/onChange'
import { event as onSubmit } from '../types/onSubmit'

function Form({ value, draws, setValue, onClick }: nav) {
    const [name, setName] = useState(value || 'Untitled')
    const [tag, setTag] = useState('')
    const [alert, setAlert] = useState('')
    const [border, setBorder] = useState('none')
    const [form, setForm] = useState('white')
    const [submit, setSubmit] = useState('#4c516d')
    const [color, setColor] = useState('white')
    const [cursor, setCursor] = useState('focus')

    const style = { background: submit, color, cursor }
    const characters = [name.split(''), tag.split('')]
    const unauthorized = `^[^~)('!*<>:;,?"*|/]+$ `.split('')
    const error = 'Fields contains unauthorized characters.'
    const saved = `${`${tag}${tag && '.'}${name}`} has been saved successfully.`
    const delay = 1000 * 5

    function forgiven() {
        setSubmit('#4c516d')
        setAlert('')

        setBorder('none')
        setForm('white')

        setColor('white')
        setCursor('focus')
    }

    function reject() {
        setSubmit('gray')
        setAlert(error)

        setBorder('red solid 1px')
        setForm('#ecd7d7')

        setValue && setValue('')
        setColor('black')
        setCursor('not-allowed')

        setTimeout(forgiven, delay)
    }

    function accept() {
        setAlert(saved)
        setForm('white')
        setValue && setValue(`${tag}${tag && '.'}${name}`)

        setTag(tag)
        setBorder('none')
    }

    const match = (character: string, unauthorized: string) =>
        character == unauthorized
        && reject()

    const filter = (character: string) => unauthorized
        .map((unauthorized) => match(
            character,
            unauthorized
        ))

    const rename = (event: onChange) =>
        setName(event.target.value)

    const retag = (event: onChange) =>
        setTag(event.target.value)

    function onSubmit(event: onSubmit) {
        event.preventDefault()
        accept()
        characters[0].map(filter)
        characters[1].map(filter)
    }

    const Title = () => <h2>Save this file</h2>
    const Alert = () => <p className='alert'>{alert}</p>

    const Submit = () => <input
        type='submit'
        value='Save'
        style={style}
    />

    return <form className='save' onSubmit={onSubmit} style={{ border, background: form }}>
        <Title />
        <Svg
            className='close'
            draw={draws ? draws[1] : ''}
            onClick={onClick || console.log}
        />
        <label>Name :</label>
        <input
            className='save'
            type='text'
            value={name}
            onChange={rename}
        />
        <label>Tag :</label>
        <input
            className='save'
            type="text"
            value={tag}
            onChange={retag}
        />
        <Alert />
        <Submit />
    </form>
}

export default Form