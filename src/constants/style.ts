export const Breakpoint = {
  MOBILE_MAX: 512,
} as const;

export const MediaQuery = {
  MOBILE: `(max-width: ${Breakpoint.MOBILE_MAX}px)`,
  PC: `(min-width: ${Breakpoint.MOBILE_MAX + 1}px)`,
} as const;
