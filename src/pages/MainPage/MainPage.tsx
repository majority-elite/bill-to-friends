import { For, Show, createSignal } from 'solid-js';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Profile from '../../components/Profile';
import UsersSection from './UsersSection';
import * as styles from './MainPage.css';
import { usersStore, pickedUsersStore } from '../../stores/user';
import { purchasedListStore } from '../../stores/bill';
import Button from '../../components/Button';
import PurchasedSection from './PurchasedSection';
import ResultSection from './ResultSection';
import { postBill } from '../../api/bill';

const MainPage = () => {
  const [pickedUsers, setPickedUsers] = pickedUsersStore;
  const [users] = usersStore;
  const [purchasedList, setPurchasedList] = purchasedListStore;

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <h1 class={styles.titleText}>
          BILL
          <br />
          TO
          <br />
          FRIENDS.
        </h1>
        <p class={styles.caption}>
          친구들과 놀다 보면 편의상 한 사람이 결제하고 나중에 나누어 내고는
          합니다. 하지만 낸 사람이 잊어버리고, 나중 가면 얼마를 받아야 하는지
          기억조차 나지 않는 경우가 많았죠. 그 불편함을 도비에몽이 해결해
          드립니다.
        </p>
      </header>
      <main class={styles.sectionContainer}>
        <UsersSection />
        <PurchasedSection />
        <ResultSection />
        <p class={styles.caption}>
          이제 함께 한 사람들에게 정산 정보를 알려주세요. 이 정보를 Discord 서버
          ‘다수정예’의 #영수증 채널에 공유할까요?
        </p>
        <Button
          classes={[styles.button]}
          onClick={async () => {
            if (purchasedList.length === 0 || pickedUsers.length === 0) {
              alert('정보를 입력하고 다시 시도해 주세요.');
              return;
            }

            const infoByUser = pickedUsers.map((user) => ({
              id: user.userId,
              amount: Math.ceil(
                purchasedList.reduce(
                  (prev, cur) =>
                    cur.users.map((v) => v.userId).includes(user.userId) ||
                    cur.users[0]?.userId === 'all'
                      ? prev +
                        (cur.users[0]?.userId === 'all'
                          ? cur.price / pickedUsers.length
                          : cur.price / cur.users.length)
                      : prev,
                  0,
                ),
              ),
            }));

            try {
              await postBill({
                participants: pickedUsers.map((v) => v.userId),
                items: purchasedList.map((v) => ({
                  name: v.name,
                  price: v.price,
                  payers: v.users.map((u) => u.userId),
                })),
                payments: infoByUser,
              });
              alert('#영수증 채널에 공유했습니다.');
            } catch (error) {
              alert('문제가 발생했습니다.');
              console.error(error);
            }
          }}
        >
          공유하기
        </Button>
      </main>
    </div>
  );
};

export default MainPage;
