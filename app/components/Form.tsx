import nav from '../types/nav'

export default function Form({
    alert, background,
    border,
    icons, labels, title,
    onClick, onSubmit
}: nav) {
    return <form onSubmit={onSubmit} style={{ background, border }}>
        <h2>{title}</h2>
        {icons && icons[0]}
        {labels?.map((label) => label)}
        <p className='alert'>{alert}</p>
        <input
            type='button'
            value='Cancel'
            className='cancel'
            onClick={onClick}
        />
        <input
            type='submit'
            value='Confirm'
        />
    </form>
}