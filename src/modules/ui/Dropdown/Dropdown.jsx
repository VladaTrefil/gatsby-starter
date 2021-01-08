import { React, useState } from "../dependencies"

const Dropdown = ({ defValue, categories, styles }) => {
    const [isSelected, setIsSelected] = useState(false)

    const onChange = event => {
        if (parseInt(event.target.value) !== 0) {
            setIsSelected(true)
        } else {
            setIsSelected(false)
        }
    }

    return (
        <select
            className={styles.select + (isSelected ? " is-selected" : "")}
            onChange={onChange}
        >
            <option key={0} value={0}>
                {defValue}
            </option>
            {categories.map((category, index) => (
                <option key={index + 1} value={index + 1}>
                    {category}
                </option>
            ))}
        </select>
    )
}

export default Dropdown
