import { Component, For, Show } from 'solid-js';
import Box from '../../components/Box';
import * as styles from './ResultSection.css';
import { pickedUsersStore } from '../../stores/user';
import { purchasedListStore } from '../../stores/bill';

interface PriceItemProps {
  profileImageUrl?: string;
  userName: string;
  price: number;
}

const PriceItem: Component<PriceItemProps> = (props) => (
  <div class={styles.priceItemContainer}>
    <div class={styles.priceItemProfileWrap}>
      <Show when={props.profileImageUrl}>
        <img src={props.profileImageUrl} class={styles.priceItemProfileImage} />
      </Show>
      <span class={styles.priceItemProfileText}>{props.userName}</span>
    </div>
    <span class={styles.priceItemPriceText}>
      {props.price.toLocaleString()}
    </span>
  </div>
);

const ResultSection = () => {
  const [pickedUsers] = pickedUsersStore;
  const [purchasedList] = purchasedListStore;

  const infoByUser = () =>
    pickedUsers.map((user) => ({
      userName: user.displayName,
      profileImageUrl: user.displayAvatarURL,
      price: purchasedList.reduce(
        (prev, cur) =>
          cur.users.map((v) => v.userId).includes(user.userId) ||
          cur.users[0]?.userId === 'all'
            ? prev +
              (cur.users[0]?.userId === 'all'
                ? Math.ceil(cur.price / pickedUsers.length)
                : cur.price)
            : prev,
        0,
      ),
    }));

  return (
    <Box title="이렇게 정산해요.">
      <div class={styles.priceItemsRow}>
        <PriceItem
          userName="총 금액"
          price={purchasedList.reduce((prev, cur) => prev + cur.price, 0)}
        />
        <PriceItem
          userName="공통 항목 총 금액"
          price={purchasedList.reduce(
            (prev, cur) =>
              cur.users[0]?.userId === 'all' ? prev + cur.price : prev,
            0,
          )}
        />
      </div>
      <div class={styles.priceItemsRow}>
        <For each={infoByUser()}>
          {(user) => (
            <PriceItem
              userName={user.userName}
              profileImageUrl={user.profileImageUrl}
              price={user.price}
            />
          )}
        </For>
      </div>
    </Box>
  );
};

export default ResultSection;
