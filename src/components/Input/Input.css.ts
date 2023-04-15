import { style } from '@vanilla-extract/css';

export const input = style({
  height: '30px',
  fontSize: '14px',
  fontWeight: 200,
  lineHeight: '110%',
  backgroundColor: 'var(--white)',
  padding: '4px 10px',
  color: 'var(--black)',
  border: 0,
  ':focus': {
    outline: 'none',
  },
  '::placeholder': {
    color: '#9b9b9b',
  },
});
