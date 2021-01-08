import { React, UI } from "../dependencies"

const Steps = ({ styles }) => {
    return (
        <div className={styles.main}>
            <UI.Grid col={3} align="stretch">
                <div className={styles.step}>
                    <div className={styles.icon}>
                        <UI.Image
                            src="https://via.placeholder.com/100x100"
                            width={100}
                            height={100}
                            alt="ikona"
                        />
                    </div>
                    <UI.Title type={UI.TitleTypes.H4}>
                        Search our vast database of lessons
                    </UI.Title>
                </div>
                <div className={styles.step}>
                    <div className={styles.icon}>
                        <UI.Image
                            src="https://via.placeholder.com/100x100"
                            width={100}
                            height={100}
                            alt="ikona"
                        />
                    </div>
                    <UI.Title type={UI.TitleTypes.H4}>
                        Pick one you fell in love with
                    </UI.Title>
                </div>
                <div className={styles.step}>
                    <div className={styles.icon}>
                        <UI.Image
                            src="https://via.placeholder.com/100x100"
                            width={100}
                            height={100}
                            alt="ikona"
                        />
                    </div>
                    <UI.Title type={UI.TitleTypes.H4}>
                        Complete your booking at the official tutor’s page
                    </UI.Title>
                </div>
            </UI.Grid>
        </div>
    )
}

export default Steps
