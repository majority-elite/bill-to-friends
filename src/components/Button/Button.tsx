import { type ParentComponent } from 'solid-js';
import * as styles from './Button.css';
import { getClassString } from '../../utils/style';

interface ButtonProps {
  classes?: string[];
  onClick?: () => void;
}

const Button: ParentComponent<ButtonProps> = (props) => (
  <button
    class={getClassString([styles.container, ...(props.classes ?? [])])}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
