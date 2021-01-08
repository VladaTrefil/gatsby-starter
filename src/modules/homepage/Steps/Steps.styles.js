export const main = () => ({
    maxWidth: "1060px",
    margin: "0 auto 80px",
    textAlign: "center",
})

export const step = () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",

    ":not(:last-child)::after": {
        content: "''",
        display: "block",
        position: "absolute",
        top: "50%",
        right: "0",
        width: "0",
        height: "0",
        borderTop: "60px solid transparent",
        borderBottom: "60px solid transparent",
        borderLeft: "60px solid green",
    },
})

export const icon = () => ({
    width: "100px",
    marginBottom: "24px",
})
