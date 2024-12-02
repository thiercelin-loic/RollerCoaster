'use client'

import React, { useState } from 'react'
import Project from './components/project'
import Save from './components/save'
import './styles/project.css'
import './styles/save.css'

function Home() {
    const [name, setName] = useState('')
    const [onSave, setSave] = useState(false)

    const saveIt = () => !onSave
        ? setSave(true)
        : setSave(false)

    return <div>
        <header>
            <Project
                name={name}
                setName={setName}
                saveIt={saveIt}
            />
        </header>{
            onSave && <Save
                name={name}
                setName={setName}
                saveIt={saveIt}
            />}
    </div>
}

export default Home