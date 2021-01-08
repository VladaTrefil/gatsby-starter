import { React, UI } from "../dependencies"

const Search = ({ styles, rules }) => {
    return (
        <div className={styles.main}>
            <UI.Container>
                <UI.Title type={UI.TitleTypes.H3}>
                    What lessons are you looking for?
                </UI.Title>

                <UI.InlineForm>
                    <UI.TextInput
                        extend={rules.input}
                        placeholder="Tenis, Guitar, Spanish"
                    />
                    <UI.Dropdown
                        categories={[
                            "Category1",
                            "Category2",
                            "Category3",
                            "Category4",
                        ]}
                        defValue="All Categories"
                    />
                    <UI.RangeInput />
                    <UI.Button type="submit" />
                </UI.InlineForm>
            </UI.Container>
        </div>
    )
}

export default Search
