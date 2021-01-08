import { connect as connectFela } from "react-fela";
import Articles from "./Articles";
import * as styles from "./Articles.styles";

export default connectFela(styles)(Articles);
