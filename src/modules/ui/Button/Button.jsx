import { React } from "../dependencies"

const Button = ({ type, styles }) => {
    return (
        <button type={type} className={styles.main}>
            Submit
        </button>
    )
}

export default Button
