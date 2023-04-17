import { style } from '@vanilla-extract/css';
import { MediaQuery } from '../../constants/style';

export const container = style({
  position: 'relative',
  width: '100%',
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
