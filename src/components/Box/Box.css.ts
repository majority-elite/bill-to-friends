import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const container = style({
  backgroundColor: 'var(--light-gray)',
  padding: '28px 36px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  '@media': {
    [MediaQuery.MOBILE]: {
      padding: '20px 20px',
      gap: '16px',
    },
  },
});

export const titleText = style({
  fontSize: '24px',
  lineHeight: '100%',
  letterSpacing: '-0.05em',
  fontWeight: 200,
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '18px',
    },
  },
});
