import { useState } from 'react'
import Svg from './Svg'
import nav from '../types/nav'
import { event as onChange } from '../types/onChange'
import { event as onSubmit } from '../types/onSubmit'

function Form({ value, draws, index, setValue, setIndex, onClick }: nav) {
    const initial = value && index
        ? value[index] : 'Untitled'

    const [name, setName] = useState(initial)
    const [tag, setTag] = useState('')
    const [alert, setAlert] = useState('')
    const [border, setBorder] = useState('none')
    const [form, setForm] = useState('white')
    const [submit, setSubmit] = useState('#4c516d')
    const [color, setColor] = useState('white')
    const [cursor, setCursor] = useState('focus')

    const update = value ? [...value] : ['']
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

        setColor('black')
        setCursor('not-allowed')

        setTimeout(forgiven, delay)
    }

    function accept() {
        update.push(`${tag}${tag && '.'}${name}`)

        setForm('white')
        setAlert(saved)

        setBorder('none')
        setTag(tag)

        setValue && setValue(update)
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