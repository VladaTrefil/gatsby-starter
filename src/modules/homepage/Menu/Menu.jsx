import { React } from "../dependencies"

const Menu = ({ styles }) => {
    return (
        <div className={styles.main}>
            <div className={styles.link}>Home</div>
            <div className={styles.link}>Browser</div>
        </div>
    )
}

export default Menu
