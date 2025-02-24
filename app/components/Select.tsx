import select from "../types/select"

export default function Select({category, options}: select) {
    return <select>
        <option>--Select your {category}--</option>
        {options.map((option) => <option>{option}</option>)}
    </select>
}