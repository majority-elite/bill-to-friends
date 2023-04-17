import { type Component } from 'solid-js';
import * as styles from './Input.css';
import { getClassString } from '../../utils/style';

interface InputProps {
  value?: string;
  placeholder?: string;
  classes?: string[];
  type?: string;
  onTextChange?: (text: string) => void;
  onFocusIn?: () => void;
  onFocusOut?: () => void;
}

const Input: Component<InputProps> = (props) => (
  <input
    class={getClassString([styles.input, ...(props.classes ?? [])])}
    value={props.value}
    placeholder={props.placeholder}
    type={props.type}
    onInput={(e) => {
      props.onTextChange?.(e.currentTarget.value);
    }}
    onFocusIn={props.onFocusIn}
    onFocusOut={props.onFocusOut}
  />
);

export default Input;
