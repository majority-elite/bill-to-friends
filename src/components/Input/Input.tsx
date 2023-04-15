import { type Component } from 'solid-js';
import * as styles from './Input.css';
import { getClassString } from '../../utils/style';

interface InputProps {
  value?: string;
  placeholder?: string;
  classes?: string[];
  onTextChange?: (text: string) => void;
}

const Input: Component<InputProps> = (props) => (
  <input
    class={getClassString([styles.input, ...(props.classes ?? [])])}
    value={props.value}
    placeholder={props.placeholder}
    onInput={(e) => {
      if (e.isComposing) return;
      props.onTextChange?.(e.currentTarget.value);
    }}
  />
);

export default Input;
