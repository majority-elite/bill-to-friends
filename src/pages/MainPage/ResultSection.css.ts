import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const priceItemsRow = style({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '40px',
  rowGap: '24px',
  flexWrap: 'wrap',
  '@media': {
    [MediaQuery.MOBILE]: {
      columnGap: '24px',
      rowGap: '16px',
    },
  },
});

export const priceItemContainer = style({
  width: '160px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '@media': {
    [MediaQuery.MOBILE]: {
      width: '100px',
    },
  },
});

export const priceItemProfileWrap = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
});

export const priceItemProfileImage = style({
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

export const priceItemProfileText = style({
  fontSize: '18px',
  fontWeight: 200,
  lineHeight: '110%',
  display: 'block',
  whiteSpace: 'nowrap',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '14px',
    },
  },
});

export const priceItemPriceText = style({
  fontSize: '36px',
  lineHeight: '100%',
  letterSpacing: '-5%',
  fontWeight: 200,
  display: 'block',
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '28px',
    },
  },
});
