import { type ParentComponent } from 'solid-js';
import { getClassString } from '../../utils/style';
import * as styles from './Box.css';

interface BoxProps {
  title: string;
  classes?: string[];
}

const Box: ParentComponent<BoxProps> = (props) => (
  <section class={getClassString([styles.container, ...(props.classes ?? [])])}>
    <h2 class={styles.titleText}>{props.title}</h2>
    {props.children}
  </section>
);

export default Box;
