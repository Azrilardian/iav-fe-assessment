export type Currency =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AUD'
  | 'JPY'
  | 'CHF'
  | 'CNY'

export const toCurrencyString = (
  value: number,
  currency: Currency = 'USD',
  locale: string = 'en-US'
) => {
  const price = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  })
    .format(value)
    .slice(0, -3)

  return price
}
