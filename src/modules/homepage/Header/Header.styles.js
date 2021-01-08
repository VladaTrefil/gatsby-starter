export const outer = () => ({
    padding: "60px 0",
    borderBottom: "1px solid #d8d8d8",
})

export const content = () => ({
    paddingRight: "160px",
})

export const highlight = ({ theme }) => ({
    color: theme.colors.cyan,
})

export const navigation = ({ theme }) => ({
    marginBottom: "80px",
})

export const images = ({ theme }) => ({
    borderRadius: theme.radius.big,
    overflow: "hidden",
})
