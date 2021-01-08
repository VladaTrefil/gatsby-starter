export const main = ({ align = "center", gutter = 0 }) => ({
    display: "flex",
    alignItems: align,
    margin: `0 -${gutter}px`,
})

export const col = ({ col, gutter = 0 }) => ({
    width: 100 / col + "%",
    margin: `0 ${gutter}px`,
})
