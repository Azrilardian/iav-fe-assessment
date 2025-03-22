import { PaginationState, SortingState } from '@tanstack/react-table'

export const getFilterFromSearchParams = (
  searchParams: URLSearchParams
): Record<string, string> => {
  const filters = Object.create({})

  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith('filter')) {
      const newKey = key.replace('filter[', '').replace(']', '')
      filters[newKey] = value
    }

    if (key === 'search') {
      filters.search = value
    }
  }

  return filters
}

export const getSortFromSearchParams = (
  searchParams: URLSearchParams
): SortingState => {
  const sorts = []

  for (const [key, value] of searchParams.entries()) {
    if (key.startsWith('sort')) {
      const newKey = key.replace('sort[', '').replace(']', '')
      sorts.push({ id: newKey, desc: value === 'desc' })
    }
  }

  return sorts
}

export const getPaginationFromSearchParams = (
  searchParams: URLSearchParams
): PaginationState => {
  const page = Number(searchParams.get('page'))
  const perPage = Number(searchParams.get('perPage'))

  return {
    pageIndex: page ? page : 1,
    pageSize: [10, 20, 30, 40, 50].includes(perPage) ? perPage : 10
  }
}

export const getFilterParams = (
  searchParams: URLSearchParams
): Record<string, string> => {
  const filters = Object.create({})

  for (const [key, value] of searchParams.entries()) {
    if (!key.startsWith('filter') && key !== 'search') {
      filters[key] = value
    }
  }

  return filters
}

export const getSortParams = (
  searchParams: URLSearchParams
): Record<string, string> => {
  const sorts = Object.create({})

  for (const [key, value] of searchParams.entries()) {
    if (!key.startsWith('sort')) {
      sorts[key] = value
    }
  }

  return sorts
}
