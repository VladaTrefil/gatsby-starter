import { React, UI } from "../dependencies"
import Navigation from "../Navigation"

const Header = ({ styles }) => {
    return (
        <header className={styles.outer}>
            <UI.Container>
                <UI.Grid col={2}>
                    <div className={styles.content}>
                        <div className={styles.navigation}>
                            <Navigation />
                        </div>
                        <UI.Title type={UI.TitleTypes.H1}>
                            High quality{" "}
                            <span className={styles.highlight}>
                                1 on 1 online lectures
                            </span>{" "}
                            for anyone eager to learn, get better or push
                            harder.
                        </UI.Title>
                    </div>
                    <div>
                        <div className={styles.images}>
                            <UI.Image
                                src="https://via.placeholder.com/720x380"
                                width={720}
                                height={380}
                                alt="úvodní fotka"
                            />
                        </div>
                    </div>
                </UI.Grid>
            </UI.Container>
        </header>
    )
}

export default Header
