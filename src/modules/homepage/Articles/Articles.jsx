import { React, UI } from "../dependencies"
import ArticleCell from "../ArticleCell"

const Articles = ({ styles, articles = [] }) => {
    return (
        <div className={styles.main}>
            <UI.Container>
                <UI.Title type={UI.TitleTypes.H3}>Trending lessons</UI.Title>
                <UI.Grid col={3} gutter={45} align="stretch">
                    {articles.map(({ id, name, rating, duration, photo }) => (
                        <ArticleCell
                            key={id}
                            name={name}
                            rating={rating}
                            duration={duration}
                            photo={photo}
                        />
                    ))}
                </UI.Grid>
            </UI.Container>
        </div>
    )
}

export default Articles
