import { useState } from 'react'
import Svg from './Svg'
import nav from '../types/nav'
import { event as onChange } from '../types/onChange'
import { event as onSubmit } from '../types/onSubmit'

const unauthorized = `^[^~)('!*<>:;,?'*|/]+$ `.split('')
const error = 'Fields contains unauthorized characters.'
const delay = 1000 * 5

function Form({ value, icons, setValue, setIndex, onClick }: nav) {
    const [name, setName] = useState(value ? value : 'Untitled')
    const [tag, setTag] = useState('')
    const [alert, setAlert] = useState('')
    const [border, setBorder] = useState('none')
    const [form, setForm] = useState('white')
    const [submit, setSubmit] = useState('#4c516d')
    const [color, setColor] = useState('white')
    const [cursor, setCursor] = useState('focus')

    const _value = value ? [...value] : ['']
    const style = { background: submit, color, cursor }
    const characters = [name.split(''), tag.split('')]
    const project = `${`${tag}${tag && '.'}${name}`}`
    const saved = `${project} has been saved successfully.`

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

        setColor('black')
        setCursor('not-allowed')

        setTimeout(forgiven, delay)
    }

    function accept() {
        _value.push(project)

        setForm('white')
        setAlert(saved)

        setBorder('none')
        setTag(tag)

        setValue && setValue(_value)
        value && setIndex && setIndex(value.length)
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

    return <form onSubmit={onSubmit} style={{ border, background: form }}>
        <Title />
        {icons && icons[0]}
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
            type='text'
            value={tag}
            onChange={retag}
        />
        <Alert />
        <Submit />
    </form>
}

export default Form