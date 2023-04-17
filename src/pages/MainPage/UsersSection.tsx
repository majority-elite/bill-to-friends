import { pickedUsersStore, usersStore } from '../../stores/user';
import Box from '../../components/Box';
import { For } from 'solid-js';
import Profile from '../../components/Profile';
import * as styles from './UsersSection.css';
import UserSearch from '../../components/UserSearch/UserSearch';

const UsersSection = () => {
  const [pickedUsers, setPickedUsers] = pickedUsersStore;
  const [users] = usersStore;

  return (
    <div class={styles.container}>
      <Box title="누가 있었나요?">
        <UserSearch
          users={users}
          onUserClick={(clickedUser) => {
            setPickedUsers((prev) =>
              prev.map((v) => v.userId).includes(clickedUser.userId)
                ? prev
                : [...prev, clickedUser],
            );
          }}
        />
        <div class={styles.profilesContainer}>
          <For each={pickedUsers}>
            {(user) => (
              <Profile
                profileUrl={user.displayAvatarURL}
                nickname={user.displayName}
                onClick={() => {
                  setPickedUsers((prev) =>
                    prev.filter((prevUser) => prevUser.userId !== user.userId),
                  );
                }}
              />
            )}
          </For>
        </div>
      </Box>
    </div>
  );
};

export default UsersSection;
