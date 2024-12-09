import { useState } from 'react'

import Close from '../icons/close'
import project from '../types/project'

import { event as onChange } from '../types/onChange'
import { event as onSubmit } from '../types/onSubmit'

function Save({ name, setName, saveIt }: project) {
    const [value, setValue] = useState(name)
    const [recent, setRecent] = useState(['/x', '/y'])
    const [location, setLocation] = useState('/root')
    const [alert, setAlert] = useState('')
    const [border, setBorder] = useState('none')
    const [form, setForm] = useState('white')
    const [submit, setSubmit] = useState('#4c516d')
    const [color, setColor] = useState('white')
    const [cursor, setCursor] = useState('focus')

    const style = { background: submit, color, cursor }
    const characters = value.split('')
    const unauthorized = `^[^~)('!*<>:;,?"*|/]+$`.split('')
    const error = 'Name contains unauthorized characters.'
    const saved = `'${value}' has been saved.`
    const delay = 1000 * 3

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

        setName('')
        setColor('black')
        setCursor('not-allowed')
    }

    function accept() {
        setAlert(saved)
        setForm('white')
        setName(value)
    }

    const match = (
        character: string,
        unauthorized: string
    ) => character == unauthorized && (
        reject(),
        setTimeout(forgiven, delay)
    )

    const filter = (character: string) =>
        unauthorized.map((unauthorized) =>
            match(character, unauthorized)
        )

    function onChange(event: onChange) {
        setValue(event.target.value)
    }

    function onSubmit(event: onSubmit) {
        event.preventDefault()
        accept()
        characters.map(filter)
    }

    const Title = () => <h2>Save this file</h2>
    const Alert = () => <p className='alert'>{alert}</p>
    const Submit = () => <input
        type='submit'
        value='Save'
        style={style}
    />

    const Recent = () => recent.map((folder) =>
        <option key={folder}>
            {folder}
        </option>
    )

    const Select = () => {
        const onChange = (event: onChange) =>
            setLocation(event.target.value)

        return <select className='save' onChange={onChange}>
            <Recent />
        </select>
    }

    return <form className='save' onSubmit={onSubmit} style={{ border, background: form }}>
        <Title />
        <Close onClick={saveIt} />
        <label>Name *</label>
        <input
            className='save'
            type='text'
            value={value}
            onChange={onChange}
        />
        <label>Recent location</label>
        <Select />
        <Alert />
        <Submit />
    </form>
}
export default Save