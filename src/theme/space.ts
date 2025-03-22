/**
 * NOTES:
 *
 * Spacing should consistent and whitespace thought of as a first class technique up
 * there with color and typefaces.
 *
 * Which type of scale you use is based on the design.
 *
 * If you've got simpler app, you may only need 6 items.  Or maybe you want a spacing scale
 * to be named:
 *
 * export const spacing = {
 *   tiny: 4,
 *   small: 8,
 *   medium: 12,
 *   large: 24,
 *   huge: 64
 * }
 *
 * Whatever you choose, try to stick with these, and not freestyle it everywhere.
 *
 * Size Reference:
 * --------------
 * xs     : 0.25rem  (4px) - Tiny text, footnotes
 * sm     : 0.5rem (8px) - Small text, captions
 * md     : 0.75rem (12px) - Default body text
 * mdAlt  : 0.875rem (14px) - Emphasized body text
 * rg     : 1rem  (16px) - Subheadings
 * rgAlt  : 1.5rem   (24px) - Small headings
 * lg     : 2rem  (32px) - Medium headings
 * lgAlt  : 2.25rem   (36px) - Small headings
 * xl     : 2.5rem     (40px) - Large headings
 * xlAlt  : 3rem   (48px) - Extra large headings
 * 2xl    : 3.375rem   (54px) - Extra large headings
 * 3xl    : 4rem     (64px) - Extra large headings
 * 4xl    : 4.375rem   (70px) - Extra large headings
 * 5xl    : 5.3125rem   (85px) - Extra large headings
 */

export const space = {
  xs: 0.25,
  sm: 0.5,
  md: 0.75,
  mdAlt: 0.875,
  rg: 1,
  rgAlt: 1.5,
  lg: 2,
  lgAlt: 2.25,
  xl: 2.5,
  xlAlt: 3,
  '2xl': 3.375,
  '3xl': 4,
  '4xl': 4.375,
  '5xl': 5.3125
}

export const spacing = Object.entries(space).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: `${value}rem`
  }),
  {}
)
