import select from "../types/select"

export default function Select({ category, options, onChange }: select) {
    return <select onChange={onChange}>
        <option>--Select your {category}--</option>
        {options.map((option) => <option>{option}</option>)}
    </select>
}