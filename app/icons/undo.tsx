import Svg from '../types/svg'

function Undo({ onClick }: Svg) {
    const viewBox = '0 -960 960 960'
    const path = 'M301-252v-28h292q62 0 105-43.5T741-429q0-62-43-105t-105-43H266l123 123-20 20-157-157 157-157 20 20-123 123h327q73 0 124.5 51.5T769-429q0 73-51.5 125T593-252H301Z'

    return <svg viewBox={viewBox} onClick={onClick}>
        <path d={path} />
    </svg>
}

export default Undo