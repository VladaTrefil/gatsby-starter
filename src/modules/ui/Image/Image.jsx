import { React } from "../dependencies"

const Image = ({ styles, src, alt }) => {
    return (
        <div className={styles.main}>
            <img className={styles.image} src={src} alt={alt} />
        </div>
    )
}

export default Image
