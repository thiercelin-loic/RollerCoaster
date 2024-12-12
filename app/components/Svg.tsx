import svg from '../types/svg';

function Svg({ className, draw, onClick }: svg) {
    const viewBox = '0 -960 960 960'

    return <svg
        className={className}
        viewBox={viewBox}
        onClick={onClick}
    >
        <path d={draw} />
    </svg>
}

export default Svg