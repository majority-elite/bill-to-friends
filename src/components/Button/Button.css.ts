import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const container = style({
  padding: '0 10px',
  fontSize: '14px',
  fontWeight: 200,
  lineHeight: '110%',
  backgroundColor: 'var(--white)',
  borderColor: 'var(--black)',
  borderWidth: '1px',
  cursor: 'pointer',
  '@media': {
    [MediaQuery.MOBILE]: {
      fontSize: '12px',
    },
  },
});
