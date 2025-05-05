export const isFutureDate = (value: string) => {
  // The function itself doesn't need to change
  if (!value || !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) {
    return true // Let the regex handle format errors first
  }
  const [month, yearSuffix] = value.split('/')
  const year = 2000 + parseInt(yearSuffix, 10)
  const monthNum = parseInt(month, 10)

  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth() + 1 // Date months are 0-indexed

  if (year < currentYear) {
    return false
  }

  if (year === currentYear && monthNum < currentMonth) {
    return false
  }

  return true
}
