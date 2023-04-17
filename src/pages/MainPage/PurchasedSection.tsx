import {
  addPurchased,
  deletePurchased,
  purchasedListStore,
} from '../../stores/bill';
import Box from '../../components/Box';
import { type Component, For, Show } from 'solid-js';
import Input from '../../components/Input';
import * as styles from './PurchasedSection.css';
import { pickedUsersStore } from '../../stores/user';
import Button from '../../components/Button';
import UserSearch from '../../components/UserSearch/UserSearch';

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

const PurchasedSection = () => {
  const [pickedUsers] = pickedUsersStore;
  const [purchasedList, setPurchasedList] = purchasedListStore;

  return (
    <Box title="무엇을 결제했나요?">
      <div class={styles.purchasedContainer}>
        <For each={purchasedList}>
          {(purchased, index) => (
            <div class={styles.inputsContainer}>
              <Input
                value={purchased.name}
                placeholder="항목"
                onTextChange={(text) => {
                  setPurchasedList(index(), 'name', text);
                }}
                classes={[styles.titleInput]}
              />
              <Input
                value={
                  purchased.price !== undefined ? `${purchased.price}` : ''
                }
                placeholder="가격"
                type="number"
                onTextChange={(text) => {
                  setPurchasedList(index(), 'price', Number(text));
                }}
                classes={[styles.priceInput]}
              />
              <UserSearch
                users={pickedUsers.concat([
                  {
                    userId: 'all',
                    displayName: '공통',
                    displayAvatarURL: '',
                  },
                ])}
                onUserClick={(clickedUser) => {
                  if (
                    clickedUser.userId === 'all' ||
                    purchased.users[0]?.userId === 'all'
                  ) {
                    setPurchasedList(index(), 'users', [clickedUser]);
                    return;
                  }

                  if (
                    purchased.users
                      .map((v) => v.userId)
                      .includes(clickedUser.userId)
                  ) {
                    return;
                  }

                  if (purchased.users.length === pickedUsers.length - 1) {
                    setPurchasedList(index(), 'users', [
                      {
                        userId: 'all',
                        displayName: '공통',
                        displayAvatarURL: '',
                      },
                    ]);
                    return;
                  }

                  setPurchasedList(index(), 'users', (prev) => [
                    ...prev,
                    clickedUser,
                  ]);
                }}
              >
                <For each={purchased.users}>
                  {(item) => (
                    <MiniProfileItem
                      name={item.displayName}
                      profileUrl={item.displayAvatarURL}
                      onClick={() => {
                        setPurchasedList(index(), 'users', (prev) =>
                          prev.filter((v) => v.userId !== item.userId),
                        );
                      }}
                    />
                  )}
                </For>
              </UserSearch>
              <Button
                onClick={() => {
                  deletePurchased(index());
                }}
                classes={[styles.button]}
              >
                삭제
              </Button>
            </div>
          )}
        </For>
        <Button
          onClick={() => {
            addPurchased();
          }}
          classes={[styles.button]}
        >
          + 추가
        </Button>
      </div>
    </Box>
  );
};

export default PurchasedSection;
