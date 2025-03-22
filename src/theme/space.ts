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
 * Why EM?
 * --------
 * We use EM units instead of pixels because:
 * - Scales with user's browser font settings (accessibility)
 * - Easier responsive design implementation
 * - Consistent scaling across the application
 *
 * Size Reference:
 * --------------
 * xs     : 0.25em  (4px) - Tiny text, footnotes
 * sm     : 0.5em (8px) - Small text, captions
 * md     : 0.75em (12px) - Default body text
 * mdAlt  : 0.875em (14px) - Emphasized body text
 * rg     : 1em  (16px) - Subheadings
 * rgAlt  : 1.5em   (24px) - Small headings
 * lg     : 2em  (32px) - Medium headings
 * lgAlt  : 2.25em   (36px) - Small headings
 * xl     : 2.5em     (40px) - Large headings
 * xlAlt  : 3em   (48px) - Extra large headings
 * 2xl    : 3.375em   (54px) - Extra large headings
 * 3xl    : 4em     (64px) - Extra large headings
 * 4xl    : 4.375em   (70px) - Extra large headings
 * 5xl    : 5.3125em   (85px) - Extra large headings
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
    [key]: `${value}em`
  }),
  {}
)
