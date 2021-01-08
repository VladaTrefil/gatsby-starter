import { React, UI } from "../dependencies"
import Steps from "../Steps"

const Banner = ({ styles }) => {
    return (
        <div className={styles.main}>
            <UI.Container>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        <UI.Title type={UI.TitleTypes.H2}>
                            Want to learn Italian, bake a Philly cheescake or
                            get that 6-pack you’ve been dreaming about?
                        </UI.Title>
                    </div>
                    <Steps />
                </div>
            </UI.Container>
        </div>
    )
}

export default Banner
