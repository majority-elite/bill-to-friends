import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const purchasedContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const inputsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  columnGap: '20px',
  rowGap: '12px',
  '@media': {
    [MediaQuery.MOBILE]: {
      columnGap: '12px',
    },
  },
});

export const titleInput = style({
  flex: 1,
  minWidth: '200px',
});

export const priceInput = style({
  width: '80px',
});

export const userSearchWrap = style({
  position: 'relative',
  flex: 1,
  minWidth: '200px',
  display: 'flex',
  flexDirection: 'column',
});

export const searchInput = style({
  width: '100%',
});

export const popup = style({
  position: 'absolute',
  backgroundColor: 'var(--white)',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  padding: '8px 0',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  zIndex: 2,
  top: '30px',
  '@media': {
    [MediaQuery.MOBILE]: {
      padding: '4px 0',
      top: '26px',
    },
  },
});

export const miniProfileContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  opacity: 1,
  transition: 'opacity 0.5s',
  cursor: 'pointer',
  width: '100%',
  alignItems: 'center',
  backgroundColor: 'var(--white)',
  padding: '8px 12px',
  '@media': {
    [MediaQuery.MOBILE]: {
      gap: '4px',
      padding: '4px 8px',
    },
  },
  ':hover': {
    opacity: 0.5,
    transition: 'opacity 0.5s',
  },
});

export const miniProfileImage = style({
  width: '20px',
  height: '20px',
  borderRadius: '10px',
  '@media': {
    [MediaQuery.MOBILE]: {
      width: '16px',
      height: '16px',
      borderRadius: '8px',
    },
  },
});

export const miniProfileText = style({
  fontSize: '14px',
  fontWeight: 200,
  lineHeight: '110%',
  display: 'block',
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '12px',
    },
  },
});

export const button = style({
  width: '60px',
  height: '30px',
  '@media': {
    [MediaQuery.MOBILE]: {
      height: '26px',
    },
  },
});
