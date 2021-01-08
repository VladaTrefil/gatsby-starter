import { connect as connectFela } from "react-fela";
import ArticleCell from "./ArticleCell";
import * as styles from "./ArticleCell.styles";

export default connectFela(styles)(ArticleCell);
