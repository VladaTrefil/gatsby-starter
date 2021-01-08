export const main = ({ width, height }) => ({
    width: "100%",
    position: "relative",
    maxWidth: width + "px",
    overflow: "hidden",

    ":before": {
        content: "''",
        display: "block",
        width: "100%",
        paddingBottom: (height / width) * 100 + "%",
    },
})

export const image = () => ({
    width: "100%",
    top: "0",
    left: "0",
    position: "absolute",
})
