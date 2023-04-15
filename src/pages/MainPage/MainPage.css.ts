import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const container = style({
  width: '100%',
  maxWidth: '896px',
  padding: '40px',
  margin: '0 auto',
  '@media': {
    [MediaQuery.MOBILE]: {
      padding: '40px 20px',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  '@media': {
    [MediaQuery.MOBILE]: {
      gap: '24px',
    },
  },
});

export const titleText = style({
  fontSize: '48px',
  lineHeight: '90%',
  fontWeight: 200,
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '36px',
    },
  },
});

export const caption = style({
  fontSize: '14px',
  lineHeight: '110%',
  color: 'var(--gray)',
  fontWeight: 200,
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '12px',
    },
  },
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginTop: '20px',
  '@media': {
    [MediaQuery.MOBILE]: {
      gap: '16px',
    },
  },
});

export const profilesContainer = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '20px',
  rowGap: '20px',
  flexWrap: 'wrap',
  '@media': {
    [MediaQuery.MOBILE]: {
      columnGap: '8px',
      rowGap: '12px',
    },
  },
});
