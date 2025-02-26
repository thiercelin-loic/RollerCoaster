import header from '../types/header'

export default function Form({
    alert, className,
    background, icons,
    labels, title,
    onClick, onSubmit
}: header) {
    return <form className={className} onSubmit={onSubmit}>
        <h2>{title}</h2>
        {icons && icons[0]}
        {labels?.map((label, index: number) =>
            <span key={index}>{label}</span>
        )}
        <p className='alert'>{alert}</p>
        <input
            type='button'
            value='Cancel'
            className='cancel'
            onClick={onClick}
        />
        <input type='submit' value='Confirm' style={{
            background,
            cursor: background == 'gray' ? 'none' : 'default'
        }}
        />
    </form>
}