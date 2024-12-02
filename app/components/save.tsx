import { useState } from 'react'

import Close from '../icons/close'
import project from '../types/project'

import { event as onChange } from '../types/onChange'
import { event as onSubmit } from '../types/onSubmit'

function Save({ name, setName, saveIt }: project) {
    const [value, setValue] = useState(name)
    const [location, setLocation] = useState('/')
    const [alert, setAlert] = useState('')

    const folders = ['/', '//']
    const background = !value ? 'gray' : ''
    const color = !value ? 'black' : ''
    const cursor = !value ? 'not-allowed' : ''
    const style = { background, color, cursor }
    const missing = 'Name of project missing, please retry it.'

    const onChange = (event: onChange) =>
        setValue(event.target.value)

    const onSubmit = (event: onSubmit) => {
        event.preventDefault()

        !value ? setAlert(missing) : (
            setName(value),
            setAlert(''),
            console.log({ value, location })
        )
    }

    const Title = () => <h2>Save this file</h2>
    const Alert = () => <p className='alert'>{alert}</p>
    const Submit = () => <input
        type='submit'
        value='Save'
        style={style}
    />

    const Cancel = () =>
        <button className='cancel' onClick={saveIt}>
            Cancel
        </button>

    const Folders = () => folders.map((folder) =>
        <option key={folder}>
            {folder}
        </option>
    )

    const Select = () => {
        const onChange = (event: onChange) =>
            setLocation(event.target.value)

        return <select className='save' onChange={onChange}>
            <Folders />
        </select>
    }

    return <form className='save' onSubmit={onSubmit}>
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
        <div className='buttons'>
            <Submit />
            <Cancel />
        </div>
    </form>
}
export default Save