import { React } from "../dependencies"

const TextInput = ({ styles, placeholder }) => {
    return (
        <div className={styles.main}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    )
}

export default TextInput
