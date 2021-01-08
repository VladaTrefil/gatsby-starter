import { React, UI } from "../dependencies"

const ArticleCell = ({ name, rating, duration, photo, styles }) => {
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <UI.Image src={photo} width={420} height={260} alt="article" />
            </div>
            <div className={styles.infobar}>
                <div className={styles.tag}>
                    <UI.Tag>{rating}</UI.Tag>
                </div>
                <div className={styles.tag}>
                    <UI.Tag>{duration} min</UI.Tag>
                </div>
            </div>
            <UI.Title type={UI.TitleTypes.H4}>{name}</UI.Title>
        </div>
    )
}

export default ArticleCell
