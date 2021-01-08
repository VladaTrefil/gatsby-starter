import { React } from "../dependencies"

const Grid = ({ children, styles }) => {
    return (
        <div className={styles.main}>
            {children.map((child, index) => (
                <div className={styles.col} key={index}>
                    {child}
                </div>
            ))}
        </div>
    )
}

export default Grid
