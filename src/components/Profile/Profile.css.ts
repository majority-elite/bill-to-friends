import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const container = style({
  width: '60px',
  height: '84px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  opacity: 1,
  transition: 'opacity 0.5s',
  position: 'relative',
  ':hover': {
    opacity: 0.5,
    transition: 'opacity 0.5s',
  },
  '@media': {
    [MediaQuery.MOBILE]: {
      width: '40px',
      height: '56px',
    },
  },
});

export const image = style({
  width: '60px',
  height: '60px',
  borderRadius: '30px',
  '@media': {
    [MediaQuery.MOBILE]: {
      width: '40px',
      height: '40px',
      borderRadius: '20px',
    },
  },
});

export const blankImage = style({
  backgroundColor: 'var(--white)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const plusIcon = style({
  width: '24px',
  height: '24px',
  '@media': {
    [MediaQuery.MOBILE]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const nameText = style({
  fontSize: '12px',
  lineHeight: '110%',
  fontWeight: 200,
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  textAlign: 'center',
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '10px',
    },
  },
});
