import Save from './icons/save'
import Undo from './icons/undo'
import Redo from './icons/redo'
import Account from './icons/account'

const Project = () => <div className='project'>
    <Save onClick={() => console.log('save')} />
    <Undo onClick={() => console.log('undo')} />
    <Redo onClick={() => console.log('redo')} />
    <p className='project'>Untilted</p>
    <p className='account'>Login</p>
    <Account onClick={() => console.log('account')} />
</div>

function Header() {
    return <header>
        <Project />
    </header>
}

export default Header