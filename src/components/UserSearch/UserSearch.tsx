import {
  type Component,
  type ParentComponent,
  For,
  createSignal,
  Show,
} from 'solid-js';
import { type UserProfile } from '../../constants/user';
import * as styles from './UserSearch.css';
import Input from '../Input';

interface MiniProfileItemProps {
  name: string;
  profileUrl: string;
  onClick?: () => void;
}

const MiniProfileItem: Component<MiniProfileItemProps> = (props) => (
  <div class={styles.miniProfileContainer} onClick={props.onClick}>
    <Show when={props.profileUrl.length > 0}>
      <img class={styles.miniProfileImage} src={props.profileUrl} />
    </Show>
    <span class={styles.miniProfileText}>{props.name}</span>
  </div>
);

interface UserSearchProps {
  users: UserProfile[];
  onUserClick?: (user: UserProfile) => void;
}

const UserSearch: ParentComponent<UserSearchProps> = (props) => {
  const [searchText, setSearchText] = createSignal('');
  const [focused, setFocused] = createSignal(false);
  const [mouseEntered, setMouseEntered] = createSignal(false);

  return (
    <div class={styles.userSearchWrap}>
      <Input
        value={searchText()}
        placeholder="유저 이름을 검색하세요"
        onTextChange={(text) => {
          setSearchText(text);
        }}
        onFocusIn={() => {
          setFocused(true);
        }}
        onFocusOut={() => {
          setFocused(false);
        }}
        classes={[styles.searchInput]}
      />
      {props.children}
      <Show when={focused() || mouseEntered()}>
        <div
          class={styles.popup}
          onMouseEnter={() => {
            setMouseEntered(true);
          }}
          onMouseLeave={() => {
            setMouseEntered(false);
          }}
        >
          <For
            each={props.users.filter((pickedUser) =>
              pickedUser.displayName
                .toLowerCase()
                .includes(searchText().toLowerCase()),
            )}
          >
            {(item) => (
              <MiniProfileItem
                name={item.displayName}
                profileUrl={item.displayAvatarURL}
                onClick={() => {
                  props.onUserClick?.(item);
                }}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default UserSearch;
