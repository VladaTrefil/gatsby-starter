import { React, FormattedMessage } from "../dependencies"
import Menu from "../Menu"

const Navigation = ({ styles, children }) => {
    return (
        <nav className={styles.main}>
            <div className={styles.logo}>
                <FormattedMessage id="homepage.title" />
            </div>
            <Menu />
        </nav>
    )
}

export default Navigation
