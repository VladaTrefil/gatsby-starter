import { React } from "../dependencies"

const RangeInput = ({ styles }) => {
    return (
        <div className={styles.main}>
            <input
                type="number"
                placeholder="Price from"
                className={styles.input}
            />
            <span className={styles.separator}></span>
            <input
                type="number"
                placeholder="Price to"
                className={styles.input}
            />
        </div>
    )
}

export default RangeInput
