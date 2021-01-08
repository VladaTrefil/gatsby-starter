export const main = () => ({
    display: "flex",
    alignItems: "center",
    maxWidth: "315px",
    flex: "1",
})

export const input = () => ({
    fontSize: "1.6rem",
    padding: "18px 25px 18px",
    width: "100%",

    "::placeholder": { color: "#cdcdcd" },
})

export const separator = () => ({
    width: "8px",
    height: "2px",
    background: "black",
    flexShrink: "0",
})
