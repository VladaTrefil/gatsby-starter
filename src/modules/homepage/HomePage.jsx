import { React } from "./dependencies"
import Header from "./Header"
import Search from "./Search"
import Articles from "./Articles"
import Banner from "./Banner"

const articles = [
    {
        id: 0,
        name: "Cooking pasta with Luigi",
        rating: "4.8",
        duration: 90,
        photo: "https://via.placeholder.com/420x260",
    },
    {
        id: 1,
        name:
            "Very good cooking lessons from real Italian for anyone interested into cooking",
        rating: "4.8",
        duration: 90,
        photo: "https://via.placeholder.com/420x260",
    },
    {
        id: 2,
        name: "The best tennis lessons",
        rating: "4.8",
        duration: 90,
        photo: "https://via.placeholder.com/420x260",
    },
]

const HomePage = () => {
    return (
        <>
            <Header />
            <Search />
            <Articles articles={articles} />
            <Banner />
        </>
    )
}

export default HomePage
