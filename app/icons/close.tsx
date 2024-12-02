import Svg from '../types/svg'

function Close({ onClick }: Svg) {
    const className = 'close'
    const viewBox = '0 -960 960 960'
    const path = 'm256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z'

    return <svg className={className} viewBox={viewBox} onClick={onClick}>
        <path d={path} />
    </svg>
}

export default Close