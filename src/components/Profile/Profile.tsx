import { Show, type Component } from 'solid-js';
import * as styles from './Profile.css';
import { getClassString } from '../../utils/style';

interface ProfileProps {
  nickname: string;
  profileUrl?: string;
  onClick?: () => void;
}

const Profile: Component<ProfileProps> = (props) => (
  <div class={styles.container} onClick={props.onClick}>
    <Show
      when={!!props.profileUrl}
      fallback={
        <div class={getClassString([styles.image, styles.blankImage])}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={styles.plusIcon}
          >
            <line y1="12.3571" x2="25" y2="12.3571" stroke="black" />
            <line
              x1="12.3571"
              y1="25"
              x2="12.3571"
              y2="1.56112e-08"
              stroke="black"
            />
          </svg>
        </div>
      }
    >
      <img
        class={styles.image}
        src={props.profileUrl}
        alt={`profile image of ${props.nickname}`}
      />
    </Show>
    <span class={styles.nameText}>{props.nickname}</span>
  </div>
);

export default Profile;
