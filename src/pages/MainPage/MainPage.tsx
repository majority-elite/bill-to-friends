import Box from '../../components/Box';
import Input from '../../components/Input';
import Profile from '../../components/Profile';
import * as styles from './MainPage.css';

const MainPage = () => (
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
      <Box title="누가 있었나요?">
        <div class={styles.profilesContainer}>
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile
            profileUrl="https://avatars.githubusercontent.com/u/28603140?v=4"
            nickname="Fling/RFLN"
          />
          <Profile profileUrl="" nickname="" />
        </div>
      </Box>
      <Box title="무엇을 결제했나요?">
        <Input value="" placeholder="test" />
      </Box>
      <Box title="이렇게 정산해요." />
      <p class={styles.caption}>
        이제 함께 한 사람들에게 정산 정보를 알려주세요. 이 정보를 Discord 서버
        ‘다수정예’의 #영수증 채널에 공유할까요?
      </p>
    </main>
  </div>
);

export default MainPage;
